$(function () {
	if (!$(".front-top").length) {
		if ($(window).scrollTop() >= 50) {
			$(".header").addClass("_not-top");
		} else {
			$(".header").removeClass("_not-top");
		}
		$(window).scroll(function () {
			if ($(this).scrollTop() >= 50) {
				$(".header").addClass("_not-top");
			} else {
				$(".header").removeClass("_not-top");
			}
		});
	} else {
		if ($(window).scrollTop() >= $(".front-top").outerHeight()) {
			$(".header").addClass("_not-top");
		} else {
			$(".header").removeClass("_not-top");
		}
		$(window).scroll(function () {
			if ($(this).scrollTop() >= $(".front-top").outerHeight()) {
				$(".header").addClass("_not-top");
			} else {
				$(".header").removeClass("_not-top");
			}
		});
	}
});
