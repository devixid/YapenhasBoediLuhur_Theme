<?php

if ( ! function_exists( 'yapenhasboediluhur_theme_support' ) ) :
	function yapenhasboediluhur_theme_support()  {

		// Adding support for core block visual styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		$editorStyle = get_template_directory_uri() . '/dist/styles/root.css';

		add_editor_style( $editorStyle );
	}
	add_action( 'after_setup_theme', 'yapenhasboediluhur_theme_support' );
endif;

/**
 * Enqueue scripts and styles.
 */
if (!function_exists('yapenhasboediluhur_theme_scripts')):
	function yapenhasboediluhur_theme_scripts() {
		// Enqueue theme stylesheet.
		wp_enqueue_style( 'yapenhasboediluhur-theme-style', get_template_directory_uri() . '/dist/styles/root.css', array(), wp_get_theme()->get( 'Version' ) );
	
		// Enqueue theme scripts.
		wp_enqueue_script( 'yapenhasboediluhur-theme-script', get_template_directory_uri() . '/dist/js/main.js', array(), wp_get_theme()->get( 'Version' ), true );
	}
	add_action( 'enqueue_block_assets', 'yapenhasboediluhur_theme_scripts' );
endif;


/**
 * Wordpress Head
 */
if (!function_exists('yapenhasboediluhur_head')):
	function yapenhasboediluhur_head() {
		?>
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
			<link rel="shortcut icon" href="https://assets.yapenhasboediluhur.sch.id/img/logo.png" />
			 <!--[if IE]>
    	<link href="https://assets.yapenhasboediluhur.sch.id/img/logo.png" rel="shortcut icon" />
    	<![endif]-->
		<?php
	}
	add_action( 'wp_head', 'yapenhasboediluhur_head' );
endif;


