(function ($) {
    "use strict";

/*--
    Menu Sticky
-----------------------------------*/
var windows = $(window);
var sticky = $('.header-sticky');

windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('is-sticky');
    }else{
        sticky.addClass('is-sticky');
    }
});

/*--
    Mobile Menu
------------------------*/
var menuNav = $('nav.main-navigation');
windows.onScroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByTagName("nav")[0].style = '<span class="menu-bar"></span>';
    console.log('top')
  } else {
    console.log('scroll');
  }
}
/*--
   Sidebar Search Active
-----------------------------*/
function sidebarSearch() {
    var searchTrigger = $('.trigger-search'),
        endTriggersearch = $('button.search-close'),
        container = $('.main-search-active');

    searchTrigger.on('click', function() {
        container.addClass('inside');
    });

    endTriggersearch.on('click', function() {
        container.removeClass('inside');
    });

};
sidebarSearch();

/*--
    Hero Slider
--------------------------------------------*/
var heroSlider = $('.hero-slider');
heroSlider.slick({
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"> <i class="icon-arrow-left"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-right"></i></button>',
    responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false,
          }
        }
    ]
});

/*--
	Product Slider
-----------------------------------*/
$('.product-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow:false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
    
 
/*--
    Instagram Slider
--------------------------------------------*/
    
var instagramSlider = $('.instagram-slider');
instagramSlider.slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow:false,
    nextArrow: false,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
});
/*-- 
    Testimonial Slider 
-----------------------------*/
var testimonialSlider = $('.testimonial-slider');
testimonialSlider.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScoll: 1,
});
    


/*-- 
    Brand Slider 
------------------------------------*/
var ourBrandActive = $('.our-brand-active');
ourBrandActive.slick({
    arrows: false,
    autoplay: false,
    dots: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScoll: 2,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 2,
          }
        }
    ]
});
    

/*-- Counter value --*/
$(document).ready(function(){
  $('.counter-value').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 3500,
          easing: 'swing',
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
  });
});
/*-- Brand Slider --*/
var blogSlider = $('.blog-image-slider');
blogSlider.slick({
    arrows: true,
    autoplay: false,
    dots: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScoll: 1,
    prevArrow: '<button type="button" class="slick-prev"> <i class="icon-arrow-left"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-right"></i></button>',
});
    
/*--
    vertical-product-active
--------------------------------------*/
$('.vartical-product-active').slick({
    slidesToShow: 4,
    autoplay: false,
    vertical:true,
    verticalSwiping:true,
    slidesToScroll: 1,
    prevArrow:'<i class="icon-arrow-top arrow-prv"></i>',
    nextArrow:'<i class="icon-arrow-bottom arrow-next"></i>',
    button:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
          slidesToShow: 4,
          }
        },
        { breakpoint: 991,
          settings: {
            slidesToShow: 3,
            vertical:false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            vertical:false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            vertical:false,
          }
        }
    ]
     
});	     
$('.vartical-product-active a').on('click', function () {
    $('.vartical-product-active a').removeClass('active');
});
    
/*--
    vertical-product-active
--------------------------------------*/
$('.horizantal-product-active').slick({
    slidesToShow: 4,
    autoplay: false,
    vertical:false,
    verticalSwiping:true,
    slidesToScroll: 1,
    prevArrow:'<i class="icon-arrow-top arrow-prv"></i>',
    nextArrow:'<i class="icon-arrow-bottom arrow-next"></i>',
    button:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
          slidesToShow: 4,
          }
        },
        { breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
          }
        }
    ]
     
});	     
$('.horizantal-product-active a').on('click', function () {
    $('.horizantal-product-active a').removeClass('active');
});
    
    
/*----------
    price-slider active
-------------------------------*/  
$( "#price-slider" ).slider({
   range: true,
   min: 0,
   max: 120,
   values: [ 20, 115 ],
   slide: function( event, ui ) {
        $( "#min-price" ).val('$' + ui.values[ 0 ] );
        $( "#max-price" ).val('$' + ui.values[ 1 ] );
     }
  });
  $( "#min-price" ).val('$' + $( "#price-slider" ).slider( "values", 0 ));   
  $( "#max-price" ).val('$' + $( "#price-slider" ).slider( "values", 1 )); 
    
    
    
 /*--
    Magnific Popup
------------------------*/
$('.img-poppu').magnificPopup({
    type: 'image',
    gallery:{
        enabled:true
    }
});
    
/*--
    showlogin toggle function
--------------------------*/
$( '#showlogin' ).on('click', function() {
    $('#checkout-login' ).slideToggle(500);
}); 
    
/*--
    showcoupon toggle function
--------------------------*/
$( '#showcoupon' ).on('click', function() {
    $('#checkout-coupon' ).slideToggle(500);
});
    
/*--
    Checkout 
--------------------------*/
$("#chekout-box").on("change",function(){
    $(".account-create").slideToggle("100");
});
    
/*-- 
    Checkout 
---------------------------*/
$("#chekout-box-2").on("change",function(){
    $(".ship-box-info").slideToggle("100");
});    
/* ---
   payment-accordion
* --------------------------------*/ 
	$(".payment-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }		
	}); 
/*--
    Accordion
-------------------------*/
$(".faequently-accordion").collapse({
    accordion:true,
  open: function() {
    this.slideDown(300);
  },
  close: function() {
    this.slideUp(300);
  }		
});	 
   
  /*------------- preloader js --------------*/
function loader() {
  $(window).on('load', function () {
    $('#ctn-preloader').addClass('loaded');
    $("#loading").fadeOut(500);
    // Una vez haya terminado el preloader aparezca el scroll

    if ($('#ctn-preloader').hasClass('loaded')) {
      // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
      $('#preloader').delay(900).queue(function () {
        $(this).remove();
      });
    }
  });
}
loader();
/*------------- newsletter-popup-area js --------------*/
$("#close-newsletter-popup").on("click", function(){
  $("#newsletter-popup-area").addClass("d-none");
});


/*--
    ScrollUp Active
-----------------------------------*/
$.scrollUp({
    scrollText: '<i class="ion-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});   
    
})(jQuery);	



















