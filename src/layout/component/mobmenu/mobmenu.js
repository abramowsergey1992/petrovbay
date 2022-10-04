$(function () {
	var mobGallery = new Swiper(".mobmenu__gallery", {
		speed: 9000,
		loop: true,
		loopAdditionalSlides: 5,
		allowTouchMove: false,
		observer: true,
		observeParents: true,
		direction: "vertical",
		slidesPerView: 2,
		autoplay: {
			delay: 1,
		},
		breakpoints: {
			991: {
				spaceBetween: 45,
			},
		},
	});
	$(".header__burger").click(function () {
		$(".mobmenu").fadeIn();
		var mobGallery = new Swiper(".mobmenu__gallery", {
			speed: 9000,
			loop: true,
			loopAdditionalSlides: 5,
			allowTouchMove: false,
			observer: true,
			observeParents: true,
			direction: "vertical",
			slidesPerView: 2,
			autoplay: {
				delay: 1,
			},
			breakpoints: {
				991: {
					spaceBetween: 45,
				},
			},
		});
	});
	$(".header__burger-close").click(function () {
		$(".mobmenu").fadeOut();
	});
});
