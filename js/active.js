(function ($) {
	"use strict";
	
	/*--------------------------------------
		mixitup Active
	
	var mixer = mixitup('.portfolio-item',{
		animation:{
			effectsOut:'fade translateX(-100%)',
		}
	});
	
	----------------------------------------*/



		$('.tosir').magnificPopup({type:'iframe',
	 



		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
					  '<div class="mfp-close"></div>'+
					  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					'</div>',
		  
			patterns: {
			  youtube: {
				index: 'youtube.com/', 
		  
				src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
			  },
			  vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			  },
			  gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			  }
		  
		  
			},
		  
			srcAction: 'iframe_src', 
		  }
		}










	  });












	$(document).ready(function() {
		$('.view').magnificPopup({type:'image'});
	  });


	
	
	  $('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
		
		}
	});
	
















	$('.view').magnificPopup({
 
		type: 'image',
		gallery : {
			enabled : true
		}
	   
	
	  });
	

	})(jQuery);	
	
	
	
	