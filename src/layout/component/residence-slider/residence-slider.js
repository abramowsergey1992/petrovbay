$(function () {
	if ($(".residence-slider").length) {
		$(".residence-slider").each(function () {
			let i = 0;
			$(this)
				.find(".swiper-slide")
				.each(function () {
					i++;
					$(this)
						.find(".residence-slide__paginator-now")
						.text(String(i).padStart(2, "0"));
				});
			$(".residence-slide__paginator-all").text(
				String(i).padStart(2, "0")
			);
			const frontResidenceSlider = new Swiper(this, {
				speed: 400,
				spaceBetween: 0,
				loop: true,
				// effect: "fade",

				navigation: {
					nextEl: $(this).find(".residence-slider__nav-next")[0],
					prevEl: $(this).find(".residence-slider__nav-prev")[0],
				},
			});
		});
	}
});
