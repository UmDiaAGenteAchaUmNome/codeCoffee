
(function ($) {

    "use string";

    /***----------- Preloader ------------***/

    var browserWindow = $(window);

    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    /***----------- Back Top ------------***/

    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    /***------------- Header Start ---------------***/

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });

    /***------------- Page Scrolling -----------***/

    $.scrollIt({
        topOffset: -50
    });

    /***------------ Navbar Collapse -----------***/

    $(".nav-link").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });

    /***------------- Home Slider ---------------***/

    $('.home-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true
    });

    /***------------- Products Slider ---------------***/

    $('#products-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    /***------------- Testimonial Slider ---------------***/

    $('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});

})(jQuery);