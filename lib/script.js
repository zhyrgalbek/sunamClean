$(function () {
	var w = $(window).width();
	if (w > 480) {
		$(".main-otzyv .container").removeClass("padding");
	}
	// if(w > 768){
	// 	$(".nav ul li").hover(function(){
	// 		$(this).find("a").addClass("animated tada");
	// 	}, function(){
	// 		$(this).find("a").removeClass("animated tada");
	// 	})
	// }
	var $hamburger = $(".hamburger.menu");
	var $nav = $(".nav");
	$hamburger.on("click", function () {
		$(this).toggleClass("is-active");
		// $nav.toggleClass("rotate");
		if (w > 480) $nav.toggleClass("height");
		$nav.toggleClass("left");
	});
	$('.btn a').click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - 102
		}, 500);
	});
	$('.nav ul li a[href^="#"]').click(function () {
		var target = $(this).attr("href");
		var tab = $(this).attr("data-tab");
		$("html, body").animate({
			scrollTop: $(target).offset().top - 102
		}, 1000);
	});
	// $('.js-tab-trigger').click(function() {
	// 	var id = $(this).attr('data-tab'),
	// 	content = $('.js-tab-content[data-tab="'+ id +'"]');
	// 	$("html, body").animate({
	// 		scrollTop: $(content).offset().top-102
	// 	}, 1000)
	// });
	$(window).scroll(function () {
		var top = $(document).scrollTop();
		if (top > 500) {
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
	});
	var summ = [];
	$(".calc-btn").click(function () {
		var $text = $(this).text();
		var operator = [];
		var total = $(".total");
		if ($text === "C") {
			summ.splice(0, summ.length);
			total.html('0');
			return false;
		}
		if ($text === '=') {
			total.html(eval(total.html()));
			summ.splice(0, summ.length);
			if (total.html() === '0') {
				return false;
				// alert("Hello world");
			}
			summ.push(total.html());
			return false;
		}
		if ($text === "<-") {
			summ.pop();
			total.html(summ);
			return false;
			// alert("Hello world");
		}
		summ.push($text);
		total.html(summ);
		// alert($text);
	});
	$("#vyvod").click(function () {
		alert(summ);
	});

	var calc = function () {
		var divan = 0,
		    stul = 0;
		var itog = 0;
		return {
			setItog: function setItog() {
				itog = divan + stul;
			},
			vvodDivan: function vvodDivan(value) {
				divan = value * 250;
			},
			vvodStul: function vvodStul(value) {
				stul = value * 80;
			},
			getDivan: function getDivan() {
				return divan;
			},
			getStul: function getStul() {
				return stul;
			},
			getItog: function getItog() {
				return itog;
			}
		};
	}();
	$("#divan").on("keyup change", function () {
		var mesto = $(this).val();
		var result = $("#divan-result");
		calc.vvodDivan(mesto);
		result.html("C Вас " + calc.getDivan() + " сом");
		// result.html("идет вычисление....");
		// setInterval(function(){
		// 	result.html("C Вас " + calc.getDivan() + " сом");
		// }, 2000);
	});
	$("#stul").on("keyup change", function () {
		var mesto = $(this).val();
		var result = $("#stul-result");
		calc.vvodStul(mesto);
		result.html("С вас " + calc.getStul() + " сом");
		// result.html("идет вычисление....");
		// setInterval(function(){
		// 	result.html("С вас " + calc.getStul() + " сом");
		// }, 2000);
	});
	$(".calc-div input").on("keyup change", function () {
		calc.setItog();
		var itog = $("#itog");
		itog.html("Итог: " + calc.getItog());
		// itog.html("идет вычисление.....");
		// setInterval(function(){
		// 	itog.html("Итог: " + calc.getItog());
		// }, 2000);
	});

	/// form
	$.mask.definitions['9'] = '';
	$.mask.definitions['d'] = '[0-9]';
	$("#phone").mask("+996 ddd dd-dd-dd");
	$('.form .form-div input').focus(function () {
		$(this).removeClass('error');
	});
	$(".form").submit(function () {
		$name = $(this).find('input[name="name"]').val();
		$tel = $(this).find('input[name="phone"]').val();
		if ($name == "") {
			$(this).find('input[name="name"]').addClass('error');
			// $(this).find('input').val($name).addClass("error");
			return false;
		}
		if ($tel == "") {
			$(this).find('input[name="phone"]').addClass("error");
			return false;
		}
		$.post($(this).attr('action'), $(this).serialize());
		$(this).empty();
		$(this).append('<div>Спасибо Вам перезвонят!</div>');
		return false;
	});
	$(".main-text").on("click", function () {
		var tab = $(this).attr('data-tab');
		$('.matrase#' + tab).css("display", "block");
		$(".matrase .btn").click(function () {
			$(".matrase").css("display", "none");
		});
	});
	var setBool = false;
	$(".hamburger.set").click(function () {
		$(this).toggleClass("is-active");
		if (setBool) {
			$(".set_blocks").css("height", "48px");
			setBool = false;
		} else {
			$(".set_blocks").css("height", "300px");
			setBool = true;
		}
	});
	$(".matrase-content .matrase-btn").click(function () {
		$(this).parent().css("display", "none");
		$("section.main-form").addClass("form-fixed");
		$("section.main-form .form-exit").css("display", "block");
		$("section.main-form .form-exit .btn").click(function () {
			// $(".matrase").css("display", "none");
			$(".matrase-content").css("display", "block");
			$('section.main-form').removeClass("form-fixed");
			$(this).parent().css("display", "none");
		});
	});
	$("li#animac.nav-li-a > a").click(function () {
		$("section.main-form").addClass("form-fixed");
		$("section.main-form .form-exit").css("display", "block");
		$("section.main-form .form-exit .btn").click(function () {
			$('section.main-form').removeClass("form-fixed");
			$(this).parent().css("display", "none");
		});
	});

	/// end form
});