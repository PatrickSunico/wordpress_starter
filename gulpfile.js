//Packages
// ======================================================
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    scss = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    imagemin = require('gulp-imagemin'),
    fontmin = require('gulp-fontmin'),
    // use this only if you need to convert templates into html
    php2html = require('gulp-php2html'),
    php = require('gulp-connect-php');

var reload = browserSync.reload;

//Build In
var rawPaths = {
    scss: './scss/**/*.scss',
    // includes: './build/includes/**/*.php',
    index: './build/*.php',
    php: './**/*.php',
    images: './images/*.{svg,png,jpeg,jpg,gif}',
    js: './js/*.js',
    vendor: './build/vendor/js/**/*.js'
};

// Build Out 
var buildOut = {
    cssOut: './',
    js: './js/',
    compressed_images_build: './images/',
    fonts: './fonts/'
};

var gulp_options = {
    browsers: [
        'last 2 versions',
        '> 5%',
        'Firefox ESR',
        'safari 5',
        'ie 8',
        'ie 9',
        'opera 12.1',
        'ios 6',
        'android 4'
    ],

    image_min: {
        'interlaced': true,
        'progressive': true,
        'optimizationLevel': 5,
        'svgoPlugins': [{ removeViewBox: true }]
    }
};

// Browser-sync config
gulp.task('php', function() {
    php.server({
        base: 'build',
        port: 3000,
        keepalive: true
    });
});
gulp.task('browser-sync', ['php'], function() {
    browserSync({
        proxy: 'http://localhost/wordpress/',
        // port: 8080,
        open: true,
        notify: true
    });
});

// SCSS
gulp.task('scss', function() {
    return gulp.src(rawPaths.scss)
        .pipe(scss({ outputStyle: 'expanded' }).on('error', scss.logError))
        .pipe(rename('style.css'))
        .pipe(autoprefixer(gulp_options.browsers))
        .pipe(gulp.dest(buildOut.cssOut));
});

// Uglify JS
gulp.task('uglify', function() {
    return gulp.src(rawPaths.js)
        // .pipe(uglify())
        // .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest(buildOut.js));

});

// Imagemin 
gulp.task('imagemin', function() {
    return gulp.src(rawPaths.images)
        .pipe(imagemin(gulp_options.image_min))
        .pipe(gulp.dest(buildOut.compressed_images_build)); //build
});

gulp.task('watch', function() {
    gulp.watch(rawPaths.php).on('change', browserSync.reload);
    gulp.watch(rawPaths.includes).on('change', browserSync.reload);
    gulp.watch(rawPaths.scss, ['scss']).on('change', browserSync.reload);
    gulp.watch(rawPaths.js).on('change', browserSync.reload);
    gulp.watch(rawPaths.index).on('change', browserSync.reload);
});

// Build System
gulp.task('compile', ['scss', 'uglify', 'imagemin']);
gulp.task('default', ['browser-sync', 'compile', 'watch']);