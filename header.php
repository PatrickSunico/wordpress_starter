<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package media_camp
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'mediacamp' ); ?></a>

	  <nav class="flex-nav">
    <div class="container">
      <span class="logo-placeholder">
        <a href="#" class="logo-brand">
          <img src="images/media-camp-logo.png" alt="">
          Media Camp
        </a>
      </span>
      <div class="toggleNav">
        ☰
      </div>
      <ul class="ul-container">
        <li><a href="/wordpress" class="nav-link">Home</a></li>
        <li><a href="#" class="nav-link">Blog</a></li>
        <li><a href="#" class="nav-link">Resources</a></li>
        <li><a href="#" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </nav>

	<div id="jumbotron-wrapper">
		<div class="container">
			<div class="heading-section">
				<h1 class="jumbotron-title">Welcome to Media Camp</h1>
			</div>
		</div>
	</div>

