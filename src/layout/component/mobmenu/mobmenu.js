$(function () {
	var mobGallery = new Swiper(".mobmenu__gallery", {
		speed: 2000,
		loop: true,
		loopAdditionalSlides: 5,
		allowTouchMove: false,
		centeredSlides: true,
		observer: true,
		observeParents: true,
		direction: "vertical",
		slidesPerView: "auto",
		autoplay: {
			delay: 3000,
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
			speed: 2000,
			loop: true,
			centeredSlides: true,
			loopAdditionalSlides: 5,
			allowTouchMove: false,
			observer: true,
			observeParents: true,
			direction: "vertical",
			slidesPerView: "auto",
			autoplay: {
				delay: 3000,
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
