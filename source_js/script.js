// Write any custom javascript functions here
$(document).ready(function(){
  $('.carousel').slick({
  	//autoplay: true,
  	//dots:true,
  	slidesToShow: 3,
  	arrows: true,
  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (event) {
	    event.preventDefault();
	    var $divposition = $(this.hash);
	    console.log($divposition);
	    var $newpos = $divposition.offset().top;
	    $('body').stop().animate({'scrollTop': $newpos}, 2000, function () {
	        divposition = window.location.hash ;
	    });
	});
});

$(document).ready(function(){
	//var nonOffset = $("nav").offset().top;
	//$(window).scroll(function() {
		// body...
//	$('button').click(function() {
		//jQuery('div').fadeOut('slow');

	$(window).scroll(function(){
		var pos = $(window).scrollTop();
	//	console.log(pos);
	});
});

$(document).ready(function(){
	console.log($(window).width());
	if($(window).width()>1024){
		$(window).scroll(function(){
			var pos = $(window).scrollTop();
		    console.log(pos);
			if(pos >=0 && pos <= 20){
				$('ul').css("padding","10px");
				$('.a').css("font-family","Times");
				$('.b').css("font-family","Times");
				$('.c').css("font-family","Times");
				$('.d').css("font-family","Times");
				$('.e').css("font-family","Times");
			}
			else if(pos >=21 && pos<=100){
				$('ul').css("padding","0px");
				$('.a').css("font-family","Times");
				$('.b').css("font-family","Times");
				$('.c').css("font-family","Times");
				$('.d').css("font-family","Times");
				$('.e').css("font-family","Times");
			}
			else{
				if(pos >=100 && pos <= 961){
					
					$('.a').css("font-family","Cursive");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Times");
				}
				else if(pos >=961 && pos <= 1662){
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Cursive");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Times");

				}
				else if(pos >=1662 && pos <= 2310){
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Cursive");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Times");
				}
				else if(pos >=2310 && pos <= 2909){ 
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Cursive");
					$('.e').css("font-family","Times");
				}
				else{
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Cursive");
				}
			}
		});
	}
	if($(window).width()<1024 && $(window).width()>650){
		$(window).scroll(function(){
			var pos = $(window).scrollTop();
		//	console.log(pos);
		if(pos >=0 && pos <= 20){
				$('ul').css("padding","7px");
				$('.a').css("font-family","Times");
				$('.b').css("font-family","Times");
				$('.c').css("font-family","Times");
				$('.d').css("font-family","Times");
				$('.e').css("font-family","Times");
			}
			else if(pos >=21 && pos<=100){
				$('ul').css("padding","0px");
				$('.a').css("font-family","Times");
				$('.b').css("font-family","Times");
				$('.c').css("font-family","Times");
				$('.d').css("font-family","Times");
				$('.e').css("font-family","Times");
			}
			else{
				if(pos >=100 && pos <= 1292){
					
					$('.a').css("font-family","Cursive");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Times");
				}
				else if(pos >=1292 && pos <= 1995){
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Cursive");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Times");

				}
				else if(pos >=1995 && pos <= 3150){
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Cursive");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Times");
				}
				else if(pos >=3150 && pos <= 3744){ 
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Cursive");
					$('.e').css("font-family","Times");
				}
				else{
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Cursive");
				}
			}
		});
	}


	else if($(window).width()<650){
		$(window).scroll(function(){
			var pos = $(window).scrollTop();
	//		console.log(pos);
		if(pos >=0 && pos <= 20){
				$('ul').css("padding","4px");
				$('.a').css("font-family","Times");
				$('.b').css("font-family","Times");
				$('.c').css("font-family","Times");
				$('.d').css("font-family","Times");
				$('.e').css("font-family","Times");
			}
			else if(pos >=21 && pos<=100){
				$('ul').css("padding","0px");
				$('.a').css("font-family","Times");
				$('.b').css("font-family","Times");
				$('.c').css("font-family","Times");
				$('.d').css("font-family","Times");
				$('.e').css("font-family","Times");
			}
			else{
				if(pos >=100 && pos <= 1611){
					
					$('.a').css("font-family","Cursive");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Times");
				}
				else if(pos >=1611 && pos <= 3021){
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Cursive");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Times");

				}
				else if(pos >=3021 && pos <= 5227){
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Cursive");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Times");
				}
				else if(pos >=5227 && pos <= 5875){ 
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Cursive");
					$('.e').css("font-family","Times");
				}
				else{
					$('.a').css("font-family","Times");
					$('.b').css("font-family","Times");
					$('.c').css("font-family","Times");
					$('.d').css("font-family","Times");
					$('.e').css("font-family","Cursive");
				}
			}
		});
	}
});


