require("../less/main.less");

(function($) {

	var scrollit = function(){
		$(document).on('click', '.navigation_wrapper a', function(event){
    		event.preventDefault();

   			$('html, body').animate({
        		scrollTop: $( $.attr(this, 'href') ).offset().top
    		}, 500);
		});
	}

	var fixnav = function(){
     		console.log($(window).scrollTop());
     		var height = $(window).height() - $('.navigation_wrapper').outerHeight();
     		var scrollTop     = $(window).scrollTop();
        	var elementOffset = $('.navigation_wrapper').offset().top;
        	var distance      = (elementOffset - scrollTop);

     		console.log($('.navigation_wrapper').height());
    		if (scrollTop >= height) {
      			$('.navigation_wrapper').addClass('fixed');
   			 }
    		else if (scrollTop <= height) {
      			$('.navigation_wrapper').removeClass('fixed');
    		}
	}

	//document ready
	$(document).ready(function(){
		scrollit();
		fixnav();
	});



	//on load
	$(window).load(function(){
		
	});


	//on load
	$(window).scroll(function(){
		fixnav();
	});

	//keypresses
	$(document).keydown(function(e) {
	    switch(e.which) {
	        case 37: // left
	        break;

	        case 38: // up
	        case 33: // page up
	        break;

	        case 39: // right
	        break;

	        case 40: // down
	        case 34: // page down
	        break;

	        case 36: // home
	        break;

	        case 35: // end
			break;

	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});

})(jQuery);
