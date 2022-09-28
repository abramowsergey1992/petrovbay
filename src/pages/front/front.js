$(function () {
	// var controller = new ScrollMagic.Controller();
	l = window.innerHeight;
	if ($(".front-top").length) {
		$(".traveline__date").click(function () {
			$(".traveline__date-wrap").removeClass("_open");
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
			console.log("sx");

			console.log("zzzz");
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
				var count =
					Number.parseInt(
						$(".traveline__counter-inpt.adults").val()
					) +
					Number.parseInt(
						$(".traveline__counter-inpt.children").val()
					);
				if (count < 10) {
					$(".traveline__count").val("0" + count);
				} else {
					$(".traveline__count").val(count);
				}
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
				if (count < 10) {
					$(".traveline__count").val("0" + count);
				} else {
					$(".traveline__count").val(count);
				}

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

		class rotationOfTheObjectTowardsTheCursor {
			constructor() {
				this.circle = Object;
				this.line = Object;

				this.circleRect = Object;

				this.centerPosition = { x: 0, y: 0 };
				this.angels = { actual: 0, target: 0 };

				this.init();
			}

			init() {
				this.circle = document.querySelector(".front-top__bg-blur");
				this.line = document.querySelector(".front-top__bg-blur-point");

				this.onResize();
				window.onresize = (e) => this.onResize(e);

				window.onmousemove = (e) => this.onMouseMove(e);

				requestAnimationFrame(() => this.loop());
			}

			onResize() {
				this.circleRect = this.circle.getBoundingClientRect();
				this.centerPosition = {
					x: this.circleRect.x + this.circleRect.width / 2,
					y: this.circleRect.y + this.circleRect.height / 2,
				};
			}

			onMouseMove(e) {
				const atan2 = Math.atan2(
					e.pageY - this.centerPosition.y,
					e.pageX - this.centerPosition.x
				);

				this.angels.target = atan2;
			}

			loop() {
				this.angels.actual = this.angleLerp(
					this.angels.actual,
					this.angels.target,
					0.1
				);

				this.line.style.transform = `rotate(${this.angels.actual}rad)`;

				requestAnimationFrame(() => this.loop());
			}

			angleLerp(a0, a1, t) {
				const max = Math.PI * 2;
				const da = (a1 - a0) % max;
				return a0 + (((2 * da) % max) - da) * t;
			}
		}

		let animateplay = false;
		new rotationOfTheObjectTowardsTheCursor();
		$("body").addClass("_no-scroll");
		setTimeout(function () {
			$("html, body").scrollTop(0);
			console.log("sadasd");
		}, 1000);
		$("html, body").scrollTop(0);
		$(".front-top").attr("state", "top");

		$(".front-top__down").click(function () {
			if (animateplay == false) {
				animateplay = true;
				$("#front-top").attr("state", "static");
				setTimeout(function () {
					animateplay = false;
				}, 3000);
			}
		});
		$("#front-top").swipe({
			//Generic swipe handler for all directions
			swipe: function (
				event,
				direction,
				distance,
				duration,
				fingerCount,
				fingerData
			) {
				console.log("You swiped " + direction);
				if (direction == "up") {
					if (animateplay == false) {
						animateplay = true;
						if (state == "static") {
							$("#front-top").attr("state", "top");
						}
						if (state == "end") {
							$("html, body").animate({ scrollTop: 0 });
							$("body").addClass("_no-scroll");
							$("#front-top").attr("state", "static");
						}
						setTimeout(function () {
							animateplay = false;
						}, 3000);
					}
				} else if (direction == "down") {
					if (animateplay == false) {
						animateplay = true;

						if (state == "end") {
							$("body").removeClass("_no-scroll");
						}
						if (state == "static") {
							$("#front-top").attr("state", "end");
						}
						if (state == "top") {
							$("#front-top").attr("state", "static");
						}
						setTimeout(function () {
							animateplay = false;
						}, 3000);
					}
				}
			},
		});

		$("#front-top").bind("mousewheel", function (e) {
			let state = $("#front-top").attr("state");

			if (e.originalEvent.wheelDelta / 120 > 0) {
				if (animateplay == false) {
					animateplay = true;
					if (state == "static") {
						$("#front-top").attr("state", "top");
					}
					if (state == "end") {
						$("html, body").animate({ scrollTop: 0 });
						$("body").addClass("_no-scroll");
						$("#front-top").attr("state", "static");
					}
					setTimeout(function () {
						animateplay = false;
					}, 3000);
				}
			} else {
				if (animateplay == false) {
					animateplay = true;

					if (state == "end") {
						$("body").removeClass("_no-scroll");
					}
					if (state == "static") {
						$("#front-top").attr("state", "end");
					}
					if (state == "top") {
						$("#front-top").attr("state", "static");
					}
					setTimeout(function () {
						animateplay = false;
					}, 3000);
				}
			}
		});
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
	if ($(".front-residence-slider").length) {
		let i = 0;
		$(".front-residence-slider .swiper-slide").each(function () {
			i++;
			$(this)
				.find(".front-residence__paginator-now")
				.text(String(i).padStart(2, "0"));
		});
		$(".front-residence__paginator-all").text(String(i).padStart(2, "0"));
		const frontResidenceSlider = new Swiper(".front-residence-slider", {
			speed: 400,
			spaceBetween: 0,
			loop: true,
			// effect: "fade",

			navigation: {
				nextEl: $(".front-residence-slider__nav-next")[0],
				prevEl: $(".front-residence-slider__nav-prev")[0],
			},
		});
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
		const frontServicesSlider = new Swiper(
			".front-services-slider-content",
			{
				speed: 400,
				spaceBetween: 500,
				loop: true,
				effect: "fade",
				fadeEffect: {
					crossFade: true,
				},
			}
		);
		const frontServicesSliderBg = new Swiper(".front-services-slider-bg", {
			speed: 800,
			spaceBetween: 500,
			loop: true,
		});
		frontServicesSlider.on("slideChange", function (swiper) {
			frontServicesSliderBg.slideTo(swiper.activeIndex);
		});
		$(".front-service__prev").click(function () {
			frontServicesSlider.slidePrev();
		});
		$(".front-service__next").click(function () {
			frontServicesSlider.slideNext();
		});
	}
	if ($(".front-environ").length) {
		$(".front-environ__white-block").css(
			"height",
			$(".front-environ__divider").offset().top -
				50 -
				$(".front-environ__content ").offset().top
		);
		$(window).on("resize", function () {
			$(".front-environ__white-block").css(
				"height",
				$(".front-environ__divider").offset().top -
					50 -
					$(".front-environ__content ").offset().top
			);
		});
	}
});
