$(function(){
	var w = $(window).width();
	if(w > 480){
		$(".main-otzyv .container").removeClass("padding");
	}
	// if(w > 768){
	// 	$(".nav ul li").hover(function(){
	// 		$(this).find("a").addClass("animated tada");
	// 	}, function(){
	// 		$(this).find("a").removeClass("animated tada");
	// 	})
	// }
	var $hamburger = $(".hamburger");
	var $nav = $(".nav");
	$hamburger.on("click", function(){
		$(this).toggleClass("is-active");
		// $nav.toggleClass("rotate");
		if(w > 480)
			$nav.toggleClass("height");
		$nav.toggleClass("left");
	});
	$('.btn a').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top-102
		}, 500);
	});
	$('.nav ul li a[href^="#"]').click(function(){
		var target = $(this).attr("href");
		var tab = $(this).attr("data-tab");
		$("html, body").animate({
			scrollTop: $(target).offset().top-102
		}, 1000);
	});
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		if(top > 500){
			$(".header-head").addClass("fixed");
		} else {
			$(".header-head").removeClass("fixed");
		}
	});
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: false,
		navText: ["", ""],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1,
				nav: true
			},
			1000: {
				items: 1,
				nav: true
			}
		}
	})
});