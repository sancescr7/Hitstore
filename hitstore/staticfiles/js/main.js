(function ($) {
 "use strict";
 
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	 
/*----------------------------
 wow js active
------------------------------ */
	new WOW().init();
/*----------------------------
 owl active
------------------------------ */  
    $(".features-curosel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 4,
        dots:false,
        nav:true,
        margin: 30,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
    $(".features").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 3,
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $(".Latest_Post").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 3,
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
/*----------------------------
owl active index-3  start
------------------------------ */  
    $(".futurum").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 1,
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 1
            }
        }
    });
    $(".item_all_another").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 3,   
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,4],
        itemsMobile : [767,2]
    });
    /*----------------------------
owl active index-3 start
------------------------------ */ 
    $(".item_all").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 6,   
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            992: {
                items: 6
            }
        }
    });
/*----------------------------
owl active shop-details  start
------------------------------ */  
    $(".more-views").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 3,
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsMobile : [767,1]
    });
    $(".content_all").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 1,
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsMobile : [767,1]
    });
    $(".UpSell").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 5,
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
   $(".what-client-say").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 1,
        dots:true,
        margin: 30,
        nav:false,
        navText:false,
        animateOut:'fade',
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsMobile : [767,1]
    });
/*----------------------------
owl active shop-details  start
------------------------------ */  
    $(".more-views").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 3,
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsMobile : [767,1]
    });
    $(".content_all").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 1,
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsMobile : [767,1]
    });
    $(".UpSell").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 5,
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsMobile : [767,1]
    });
   $(".what-client-say").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 1,
        dots:true,
        margin: 30,
        nav:false,
        navText:false,
        animateOut:'fade',
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsMobile : [767,1]
    });
/*----------------------------
blog-slider active
------------------------------ */ 
    $(".b-slide-all").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        items : 1,
        dots:false,
        margin: 30,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsMobile : [767,1]
    });
/*----------------------------
 price-slider active
------------------------------ */  
    $( "#slider-range" ).slider({
        range: true,
        min: 80,
        max: 730,
        values: [ 88, 721 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val(  $( "#slider-range" ).slider( "values", 0 ) +
    " - " + $( "#slider-range" ).slider( "values", 1 ) );    
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
/*--------------------------
 scrollUp
---------------------------- */	
    $(window).on('scroll',function () {
        if($(window).scrollTop()>200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $("#toTop").on('click', function() {
        $("html,body").animate({
            scrollTop:0
        }, 500)
    });
    /*category left menu*/
    $('.category-heading').on('click', function(){
        $('.category-menu-list').slideToggle(300);
    });
    /*category accordion*/
    $('.rx-parent').on('click', function(){
        $('.rx-child').slideToggle();
        $(this).toggleClass('rx-change');
    });
/*---------------------
Image Zoom
--------------------- */
	$('.simpleLens-big-image').simpleLens({
		loading_image: 'demo/images/loading.gif'
	});
    
})(jQuery); 