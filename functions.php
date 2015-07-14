<?php

//added from treehouse lesson
function wpkb_theme_styles() {

	wp_enqueue_style( 'normalize_css', get_template_directory_uri() . '/css/normalize.css' );
	wp_enqueue_style( 'font_css' , 'http://fonts.googleapis.com/css?family=Oswald|Open+Sans+Condensed:300'
 );
	wp_enqueue_style( 'style_css', get_template_directory_uri() . '/style.css' );

}
add_action( 'wp_enqueue_scripts', 'wpkb_theme_styles' );


//makes it so svg's can be used
add_filter('upload_mimes', 'custom_upload_mimes');

function custom_upload_mimes ( $existing_mimes=array() ) {

	// add the file extension to the array

	$existing_mimes['svg'] = 'mime/type';

        // call the modified list of extensions

	return $existing_mimes;

}



function wpkb_theme_js() {

	wp_enqueue_script( 'main_js', get_template_directory_uri() . '/js/slide-menu.js', array('jquery', 'foundation_js'), '', true );		

}
add_action( 'wp_enqueue_scripts', 'wpkb_theme_js' );

?>
