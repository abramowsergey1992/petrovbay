$(function () {
	function declination(number, titles) {
		cases = [2, 0, 1, 1, 1, 2];
		return titles[
			number % 100 > 4 && number % 100 < 20
				? 2
				: cases[number % 10 < 5 ? number % 10 : 5]
		];
	}
	// var controller = new ScrollMagic.Controller();
	l = window.innerHeight;
	if ($(".front-top").length) {
		$(".traveline__date").click(function () {
			$(".traveline__date-wrap").removeClass("_open");

			$(".traveline__popup").removeClass("_show");
			$(this).closest(".traveline__date-wrap").addClass("_open");
		});
		if ($(".traveline").length) {
			var t = new Date();
			var d = new Date();
			d.setDate(d.getDate() + 1);
			t.setDate(t.getDate() + 7);
			$(".traveline__date.from").val(
				`${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`
			);
			setTimeout(function () {
				$(".traveline__date.to").val(
					`${t.getDate()}.${t.getMonth() + 1}.${t.getFullYear()}`
				);
			}, 300);
			new AirDatepicker("#traveline__date-from", {
				minDate: new Date(),
				autoClose: true,
				inline: true,
				onSelect: function (formattedDate, date, inst) {
					var d = new Date(date);
					d.setDate(d.getDate() + 1);
					to.update("minDate", d);
					var tt = to.date;
					console.log(
						d.getTime(),
						to.date.getTime(),
						d.getTime() > to.date.getTime()
					);
					if (d.getTime() > to.date.getTime()) {
						to.selectDate(d);
					} else {
						to.selectDate(tt);
					}
				},
			});
			let to = "";

			to = new AirDatepicker("#traveline__date-to", {
				minDate: d,
				startDate: t,
				inline: true,
				autoClose: true,
			});

			var container = $(".traveline__popup");
			$(".traveline__go").click(function () {
				var url = new URL($(this).data("link"));
				var from = $(".traveline__date.from").val().split(".");
				var to = $(".traveline__date.to").val().split(".");
				let date1 = new Date(from[2], from[1], from[0]),
					date2 = new Date(to[2], to[1], to[0]);
				url.searchParams.append(
					"date",
					`${from[2]}-${from[1]}-${from[0]}`
				);
				url.searchParams.append(
					"nights",
					Math.ceil(
						Math.abs(date2.getTime() - date1.getTime()) /
							(1000 * 3600 * 24)
					)
				);
				url.searchParams.append(
					"adults",
					Number.parseInt($(".traveline__counter-inpt.adults").val())
				);
				var chidage = "";
				$(".traveline__children._open").each(function () {
					chidage += $(this).find("select").val() + ";";
				});
				url.searchParams.append("children-age", chidage);
				document.location.href = url.href;
			});
			$(".traveline__count").click(function () {
				container.addClass("_show");
				$(".traveline__date-wrap").removeClass("_open");
			});
			$(".traveline__child-finish").click(function (e) {
				container.removeClass("_show");
			});
			$(document).click(function (e) {
				if (
					$(".traveline__block._counter").has(e.target).length === 0
				) {
					container.removeClass("_show");
				}
				if (
					$(e.target).hasClass(".traveline__date-wrap") &&
					$(e.target).closest(".traveline__date-wrap")
				) {
					$(".traveline__date-wrap").removeClass("_open");
				}
			});
			var val;
			$(".traveline__minus").click(function () {
				var $counter = $(this)
					.closest(".traveline__counter")
					.find(".traveline__counter-inpt");
				val = Number.parseInt($counter.val().replace(/\D+/g, ""));
				val--;
				if (val >= 0) {
					if (val <= 9) {
						$counter.val(`0${val}`);
					} else {
						$counter.val(`${val}`);
					}
				}
				let humanCounts =
					Number.parseInt(
						$(".traveline__counter-inpt.adults").val()
					) +
					Number.parseInt(
						$(".traveline__counter-inpt.children").val()
					);

				$(".traveline__count").val(
					`${humanCounts} ${declination(humanCounts, [
						" человек",
						" человека",
						" человека",
					])}`
				);
				if ($counter.hasClass("children")) {
					var i = 1,
						child = Number.parseInt(
							$(".traveline__counter-inpt.children").val()
						);
					$(".traveline__children").each(function () {
						if (i <= child) {
							$(this).addClass("_open").stop().slideDown();
						} else {
							$(this).removeClass("_open").stop().slideUp();
						}
						i++;
					});
				}
			});
			$(".traveline__plus").click(function () {
				var $counter = $(this)
					.closest(".traveline__counter")
					.find(".traveline__counter-inpt");
				val = Number.parseInt($counter.val().replace(/\D+/g, ""));
				val++;
				if (val <= 9) {
					$counter.val(`0${val}`);
				} else {
					$counter.val(`${val}`);
				}
				var count =
					Number.parseInt(
						$(".traveline__counter-inpt.adults").val()
					) +
					Number.parseInt(
						$(".traveline__counter-inpt.children").val()
					);
				let humanCounts =
					Number.parseInt(
						$(".traveline__counter-inpt.adults").val()
					) +
					Number.parseInt(
						$(".traveline__counter-inpt.children").val()
					);

				$(".traveline__count").val(
					`${humanCounts} ${declination(humanCounts, [
						" человек",
						" человека",
						" человека",
					])}`
				);

				if ($counter.hasClass("children")) {
					var i = 1,
						child = Number.parseInt(
							$(".traveline__counter-inpt.children").val()
						);
					$(".traveline__children").each(function () {
						console.log("adas");
						if (i <= child) {
							$(this).addClass("_open").stop().slideDown();
						} else {
							$(this).removeClass("_open").stop().slideUp();
						}
						i++;
					});
				}
			});
		}

		// const frontTop = new Swiper(".front-top-slider", {
		// 	// slidesPerView: 1,
		// 	direction: "vertical",
		// 	virtualTranslate: true,
		// 	mousewheel: {
		// 		forceToAxis: true,
		// 	},
		// 	on: {
		// 		slideChange: function (swiper) {
		// 			console.log(swiper.activeIndex);
		// 			if (swiper.activeIndex == 0) {
		// 				$(".front-top").attr("state", "top");
		// 			}
		// 			if (swiper.activeIndex == 1) {
		// 				$(".front-top").attr("state", "static");
		// 			}
		// 			if (swiper.activeIndex == 2) {
		// 				$(".front-top").attr("state", "end");
		// 				$("body").removeClass("_no-scroll");
		// 			}
		// 		},
		// 	},
		// });

		// $(window).scroll(function () {
		// 	var aTop = $(".ad").height();
		// 	if ($(this).scrollTop() <= 50) {
		// 		$(".front-top").attr("state", "top");
		// 		// gsap.to(".front-top__mask", { duration: 3, scale: 1, y: 410 });
		// 	}
		// 	if (
		// 		$(this).scrollTop() >= 50 &&
		// 		$(this).scrollTop() <= window.innerHeight
		// 	) {
		// 		$(".front-top").attr("state", "static");
		// 		// gsap.to(".front-top__mask", { duration: 3, y: 0, scale: 3 });
		// 	}
		// 	if (
		// 		$(this).scrollTop() >= window.innerHeight &&
		// 		$(this).scrollTop() <= window.innerHeight * 1.3
		// 	) {
		// 		$(".front-top").attr("state", "end");
		// 		// gsap.to(".front-top__mask", 0.5, {
		// 		// 	scale: 1,
		// 		// 	duration: 3,
		// 		// 	y: -410,
		// 		// });
		// 	}
		// });
		// var frontTopPin = new ScrollMagic.Scene({
		// 	triggerElement: "#front-top",
		// 	triggerHook: 0,
		// 	duration: window.innerHeight * 1.5,
		// })
		// 	.setPin(".front-top__pin")
		// 	// .addIndicators({ name: "1 (duration: 300)" })
		// 	.addTo(controller);

		// var FrontTopMaskStart = new ScrollMagic.Scene({
		// 	triggerElement: "#front-top",
		// 	offset: 100,
		// 	triggerHook: 0,
		// 	duration: 10,
		// })
		// 	.setTween(".front-top__mask", 4.5, {
		// 		scale: 2.3,
		// 	})
		// 	// .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
		// 	.addTo(controller);
		// var FrontTopMaskFinish = new ScrollMagic.Scene({
		// 	triggerElement: "#front-top-mask-finish-trigger",
		// 	triggerHook: 1,
		// 	duration: 300,
		// })
		// 	.setTween(".front-top__mask", 0.5, {
		// 		scale: 1,
		// 		y: -900,
		// 	})
		// 	.addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
		// 	.addTo(controller);
		// var FrontTopContentStart2 = new ScrollMagic.Scene({
		// 	triggerElement: "#front-top",
		// 	offset: 200,
		// 	triggerHook: 0,
		// 	duration: 300,
		// })
		// 	.setTween(".front-top__radius", 0.5, {
		// 		borderRadius: 0,
		// 	})
		// 	.addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
		// 	.addTo(controller);
	}

	if ($(".front-services-slider-content").length) {
		let i = 0;
		$(".front-service.swiper-slide").each(function () {
			i++;
			$(this)
				.find(".front-service__now")
				.text(String(i).padStart(2, "0"));
		});
		$(".front-service__count").text(String(i).padStart(2, "0"));
		let slide = 1;
		let slideLenght = $(".front-service-bg__bg").length;

		const frontServicesSlider = new Swiper(
			".front-services-slider-content",
			{
				speed: 1,
				spaceBetween: 0,
				loop: true,
				allowTouchMove: false,
				// effect: "fade",

				// fadeEffect: {
				// 	crossFade: true,
				// },
			}
		);

		const frontServicesSliderBg = new Swiper(".front-services-slider-bg", {
			speed: 800,
			allowTouchMove: true,
			spaceBetween: 500,
			loop: true,
			allowTouchMove: false,
			watchSlidesProgress: true,
			thumbs: {
				swiper: frontServicesSlider,
			},
			// effect: "creative",
			// creativeEffect: {
			// 	prev: {
			// 		shadow: false,
			// 		translate: ["-120%", 0, -500],
			// 	},
			// 	next: {
			// 		shadow: false,
			// 		translate: ["120%", 0, -500],
			// 	},
			// },
		});
		frontServicesSliderBg.on("slideChange", function (swiper) {
			frontServicesSlider.slideTo(swiper.realIndex + 1);
			// console.log(
			// 	frontServicesSlider.activeIndex,
			// 	frontServicesSliderBg.activeIndex
			// );
		});
		$(document).on("click", ".front-service__prev", function () {
			// console.log("front-service__prev", slide);
			// frontServicesSlider.slidePrev();
			frontServicesSliderBg.slidePrev();
			// slide--;
			// slide == -1 ? (slide = slideLenght - 1) : (slide = slide);
			// frontServicesSliderBg.slideTo(slide);
			// frontServicesSlider.slideTo(slide);
			// console.log("slide", slide);
		});
		$(document).on("click", ".front-service__next", function () {
			// frontServicesSlider.slideNext();
			frontServicesSliderBg.slideNext();
			// slide++;
			// slide == slideLenght ? (slide = 0) : (slide = slide);

			// frontServicesSliderBg.slideTo(slide);
			// frontServicesSlider.slideTo(slide);
			// console.log("slide", slide);
		});
	}
	if ($(".front-environ").length) {
		const mediaQuery = window.matchMedia("(max-width: 992px)");
		if (mediaQuery.matches) {
			$(".front-environ__white-block").css(
				"height",
				$(".front-environ__row-2 .front-environ__left").height() + 300
			);
		} else {
			$(".front-environ__white-block").css(
				"height",
				$(".front-environ__divider").offset().top -
					50 -
					$(".front-environ__content ").offset().top
			);
		}
		setTimeout(function () {
			if (mediaQuery.matches) {
				$(".front-environ__white-block").css(
					"height",
					$(".front-environ__row-2 .front-environ__left").height() +
						300
				);
			} else {
				$(".front-environ__white-block").css(
					"height",
					$(".front-environ__divider").offset().top -
						50 -
						$(".front-environ__content ").offset().top
				);
			}
		}, 1000);
		$(window).on("resize", function () {
			if (mediaQuery.matches) {
			} else {
				$(".front-environ__white-block").css(
					"height",
					$(".front-environ__divider").offset().top -
						50 -
						$(".front-environ__content ").offset().top
				);
			}
		});
	}
});
