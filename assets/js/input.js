require("../less/main.less");
require("../js/plugins.js");

// Main
(function($) {

	$(document).on( 'cycle-initialized', function(e, opts) {
	    var key = 'cycle-look-ahead';
	    opts.container.on( 'cycle-before', function( e, opts, outgoing, incoming, fwd ) {
	        var index = fwd ? (opts.nextSlide + 1) : (opts.nextSlide - 1),
	            slide = $( opts.slides[ index ] ),
	            images;

	        if ( slide.length && ! slide.data( key ) ) {
	            slide.data( key, true );
	            images = slide.is( 'div[data-style]' ) ? slide : slide.find( 'div[data-style]' );
	            images.each(function() {
	                var img = $(this);
	                img.attr( 'style', img.attr('data-style') );
	                img.removeAttr( 'data-style' );
	            });
	        }
	    });
	});

	var scrollit = function(){
		$(document).on('click', '.navigation_wrapper a, .navigation_projects', function(event){
    		// event.preventDefault();
   			$('html, body').animate({
        		scrollTop: $( $.attr(this, 'href') ).offset().top
    		}, 500);
		});
	}

	var fixnav = function(){
     		// console.log($(window).scrollTop());
     		var height = $(window).height() - $('.navigation_wrapper').outerHeight();
     		var scrollTop     = $(window).scrollTop();
        	var elementOffset = $('.navigation_wrapper').offset();
        	var distance      = (elementOffset - scrollTop);

    		if (scrollTop >= height) {
      			$('.navigation_wrapper').addClass('fixed');
   			 }
    		else if (scrollTop <= height) {
      			$('.navigation_wrapper').removeClass('fixed');
    		}
	}

		//Slideshow
	var slideit = function(){
		$(document).on('click', ".zoomable", function(event) {
			if ($(window).width() > 768) {
				var i = $(".zoomable").index(this);
				console.log(i);
				$(".project_overlay_wrapper").addClass('active').addClass('ontop');
				$(".project_overlay_wrapper").addClass('ontop');
				$(".overlay_slide").cycle({
					fx: 'carousel',
					carouselVisible: 1,
					carouselFluid: true,
					slides:"> div",
					timeout: 0,
					speed: 250,
					swipe: true,
					allowWrap: false,
					startingSlide: i,
					prev: ".project_overlay_left",
					next: ".project_overlay_right",
					caption: '#caption',
	    			captionTemplate: '{{slideNum}}/{{slideCount}}',
				});
				var first = $(".cycle-slide").first().children().first(); //Find first slide
	                first.attr( 'style', first.attr('data-style') ); //Load background image
	                first.removeAttr( 'data-style' ); //Clean up code
				var active = $(".cycle-slide-active").children().first(); //Find active slide
	                active.attr( 'style', active.attr('data-style') ); //Load background image
	                active.removeAttr( 'data-style' ); //Clean up code
	            var next = $(".cycle-slide-active").next().children().first(); //Find next slide
	                next.attr( 'style', next.attr('data-style') ); //Load background image
	                next.removeAttr( 'data-style' ); //Clean up code
	            var nextnext = $(".cycle-slide-active").next().next().children().first(); //Find next slide
	                nextnext.attr( 'style', nextnext.attr('data-style') ); //Load background image
	                nextnext.removeAttr( 'data-style' ); //Clean up code
	            var prev = $(".cycle-slide-active").prev().children().first(); //Find prev slide
	                prev.attr( 'style', prev.attr('data-style') ); //Load background image
	                prev.removeAttr( 'data-style' ); //Clean up code
	            var prevprev = $(".cycle-slide-active").prev().prev().children().first(); //Find prev slide
	                prevprev.attr( 'style', prevprev.attr('data-style') ); //Load background image
	                prevprev.removeAttr( 'data-style' ); //Clean up code
        	};
		});

		$(document).on('click', '.project_overlay_close', function(event) {
			$(".project_overlay_wrapper").removeClass('active');
			setTimeout(function() { 
				$('.project_overlay_wrapper').removeClass('ontop'); 
				$('.overlay_slide').cycle('destroy');
			}, 250);
		});
	};
	
	//document ready
	$(document).ready(function(){
		scrollit();
		fixnav();
		slideit();
		//on scroll
		$(window).on('scroll', function() {
			fixnav();
		});
			//keypresses
		$(document.documentElement).keyup(function (event) {
	        if (event.keyCode == 37) {
	            $('.overlay_slide').cycle('prev');
	            console.log("left");
	        } else if (event.keyCode == 39) {
	            $('.overlay_slide').cycle('next');
	            console.log("right");
	    	} else if (event.keyCode == 27) {
	    		$(".project_overlay_wrapper").removeClass('active');
			setTimeout(function() { 
				$('.project_overlay_wrapper').removeClass('ontop'); 
				$('.overlay_slide').cycle('destroy');
			}, 250);
	    	}
		});

		var lastScroll = 0;
		var scrollhide = function(){ 
			if ($(window).width() < 768) {
				$(window).scroll(function(){
					var scroll = $(window).scrollTop();
				    	if ((scroll > lastScroll) && (scroll > 10)) {
				    		if (!$(".hideaway").hasClass("opacityzero")) {
				        		$(".hideaway").addClass("opacityzero");
				        	}
				    	} else if (scroll < lastScroll) {
				        	if ($(".hideaway").hasClass("opacityzero")) {
				        		$(".hideaway").removeClass("opacityzero");
				        	}
				    	}
				    	lastScroll = scroll;
				});
			};
		};
		setTimeout(function() { scrollhide(); }, 200);
	});

})(jQuery);
