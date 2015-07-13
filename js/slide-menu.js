
$(document).ready(function(){
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });
});

$(document).ready(function () {
    $('.slideout-menu-toggle').click(function(){
    	event.preventDefault();
    	// create menu variables
    	var slideoutMenu = $('.slideout-menu');
    	var slideoutMenuWidth = $('.slideout-menu').width();
    	// toggle open class
    	// slideoutMenu.toggleClass("open");
    
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	left: "0px"
	    	});	
    	} else {
	    	slideoutMenu.animate({
		    	left: -slideoutMenuWidth
	    	}, 250);
    });
});




// var slideoutMenuItem = $('.slideout-menu-item');
<!DOCTYPE html>
<html>
   <head>

      <title>jQuery.mmenu playground</title>
      <meta charset="utf-8" />
      <link type="text/css" href="layout.css" rel="stylesheet" />

      <!-- Include jQuery.mmenu .css files -->
      <link type="text/css" href="path/to/css/jquery.mmenu.all.css" rel="stylesheet" />

      <!-- Include jQuery and the jQuery.mmenu .js files -->
      <script type="text/javascript" src="path/to/js/jquery.min.js"></script>
      <script type="text/javascript" src="path/to/js/jquery.mmenu.min.all.js"></script>

      <!-- Fire the plugin onDocumentReady -->
      <script type="text/javascript">
         jQuery(document).ready(function( $ ) {
            $("#menu").mmenu({
               "extensions": [
                  "border-none",
                  "effect-slide-menu",
                  "effect-slide-panels-0",
                  "pageshadow",
                  "theme-white"
               ],
               "navbars": [
                  {
                     "position": "bottom",
                     "content": [
                        "<a class='fa fa-envelope' href='#/'></a>",
                        "<a class='fa fa-twitter' href='#/'></a>",
                        "<a class='fa fa-facebook' href='#/'></a>"
                     ]
                  }
               ]
            });
         });
      </script>

   </head>
   <body>

      <!-- The page -->
      <div class="page">
         <div class="header">
            <a href="#menu"></a>
            Demo
         </div>
         <div class="content">
            <p><strong>This is a demo.</strong><br />
               Click the menu icon to open the menu.</p>
         </div>
      </div>

      <!-- The menu -->
      <nav id="menu">
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a>
               <ul>
                  <li><a href="/about/history">History</a></li>
                  <li><a href="/about/team">The team</a></li>
                  <li><a href="/about/address">Our address</a></li>
               </ul>
            </li>
            <li><a href="/contact">Contact</a></li>
         </ul>
      </nav>

   </body>
</html>