$(function () {
	$(".gallery-slider ").each(function () {
		let swiperGallery = new Swiper(this, {
			slidesPerView: "auto",
			// freemode: true,
			// allowTouchMove: false,
			slideToClickedSlide: false,
			spaceBetween: 22,
			watchSlidesProgress: true,
			// mousewheel: {
			// 	forceToAxis: true,
			// },
			pagination: {
				el: $(this).find(".gallery-slider__pagi")[0],
				type: "custom",
				renderCustom: function (swiper, current, total) {
					let i = current ? current : 0;
					return `${("0" + i).slice(-2)} / ${("0" + total).slice(
						-2
					)}`;
				},
			},
		});
		const interleaveOffset = 0.1;
		swiperGallery.on("progress", function (swiper, progress) {
			for (let i = 0; i < swiper.slides.length; i++) {
				let slideProgress = swiper.slides[i].progress;
				let innerOffset = swiper.width * interleaveOffset;
				let innerTranslate = slideProgress * innerOffset;

				//TweenMax.set(swiper.slides[i], {
				//skewY: `${innerTranslate*0.025}deg`,
				//});
				TweenMax.set(
					swiper.slides[i].querySelector(".gallery-it__bg"),
					{
						x: innerTranslate,
					}
				);
			}
		});
	});
});
