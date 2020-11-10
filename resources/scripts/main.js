$(document).ready(function() {
		
var acc1 = document.getElementsByClassName("plus-minus"); //"mobile-plus" removed
var acc2 = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc1.length; i++) {
    acc1[i].onclick = function(e){
        $(this).toggleClass("active");
        //this.nextElementSibling.classList.toggle("show");
  }
}

for (i = 0; i < acc2.length; i++) {
    acc2[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
} 


var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);


	// grab the initial top offset of the navigation 
   	var stickyNavTop = $('.mobilehead').offset().top;
   	var winWidth = $(window).width();
   	
   	// our function that decides whether the navigation bar should have "fixed" css position or not.
   	var stickyNav = function(){
		var scrollTop = $(window).scrollTop(); // our current vertical position from the top
	         
	    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	    // otherwise change it back to relative
	    if (scrollTop > stickyNavTop) { 
	        $('.mobilehead').addClass('sticky');
	        $('main').addClass('sticky-padding  safari_only');
		} else {
		    $('.mobilehead').removeClass('sticky');
		    $('main').removeClass('sticky-padding  safari_only');
		}
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		var winWidth = $(window).width();
		if(winWidth > 768){
			stickyNav();
		}
	});
	
});
