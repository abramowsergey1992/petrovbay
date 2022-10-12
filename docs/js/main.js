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

$(function () {
	if ($("#contact-form").length) {
		let validContacnt = $("#contact-form").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$(".contact-form__btn").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						alert("Форма отправленна успешно");
						$(".contact-form__btn").removeAttr("disabled");
					},
					error: function () {
						alert("Ошибка");
						$(".contact-form__btn").removeAttr("disabled");
					},
				});
			},
		});
	}
});

$(function(){})
$(function(){})
$(function(){})
$(function(){})
$(function(){})
$(function(){})
$(function () {
	// $(".text p,.text ul").each(function () {
	// 	$(this).attr("data-aos", "fade-up");
	// });
	// AOS.init({});
	if ($(".gallery-slider__wrapper").length) {
		$(".gallery-slider__wrapper").each(function () {
			element = this;
			element.addEventListener("wheel", (event) => {
				event.preventDefault();

				element.scrollBy({
					left: event.deltaY < 0 ? -30 : 30,
				});
			});
			var galleryController = new ScrollMagic.Controller({
				container: element,
				vertical: false,
			});

			let galleryScenes = [];
			$(element)
				.find(".gallery-it ")
				.each(function () {
					galleryScenes.push(
						new ScrollMagic.Scene({
							triggerElement: this,
							duration: $(window).width(),
						})
							.triggerHook(1)
							// animate color and top border in relation to scroll position
							.setTween($(this).find(".gallery-it__bg"), {
								x: -500,
							}) // the tween durtion can be omitted and defaults to 1
							// .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
							.addTo(galleryController)
					);
				});
		});
	}
	let controller = new ScrollMagic.Controller({
		refreshInterval: 0,
	});

	let scenes = [];
	$(".anim-block").each(function () {
		scenes.push(
			new ScrollMagic.Scene({
				triggerElement: this,
				duration: 500,
			})
				.triggerHook(1)
				// animate color and top border in relation to scroll position
				.setTween($(this).find(".block"), {
					top: 0,
				}) // the tween durtion can be omitted and defaults to 1
				// .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
				.addTo(controller)
		);
	});
	$(".parallax").each(function () {
		console.log("parallax", $(this).data("parallax"));
		scenes.push(
			new ScrollMagic.Scene({
				triggerElement: this,
				duration: window.innerHeight,
			})
				.triggerHook(1)
				// animate color and top border in relation to scroll position
				.setTween($(this).find("picture"), {
					y: $(this).data("parallax"),
				}) // the tween durtion can be omitted and defaults to 1
				// .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
				.addTo(controller)
		);
	});
	$(".bg-scale,.full-img ").each(function () {
		scenes.push(
			new ScrollMagic.Scene({
				triggerElement: this,
				duration: window.innerHeight,
			})
				.triggerHook(1)
				// animate color and top border in relation to scroll position
				.setTween($(this).find("img,video"), {
					scale: 1,
				}) // the tween durtion can be omitted and defaults to 1
				// .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
				.addTo(controller)
		);
	});

	let x = 0;
	let offset = 0;
	var smallScreen = window.matchMedia("(max-width: 992px)");
	if (smallScreen.matches) {
		offset = 0;
	} else {
		offset = -200;
	}
	$(".audio-player").each(function () {
		let $th = $(this);
		x++;

		scenes.push(
			new ScrollMagic.Scene({
				triggerElement: this,
				duration: window.innerHeight - 100,
				offset: offset,
			})
				.triggerHook(1)
				// .addIndicators({ name: x + " (duration: 300)" }) // add indicators (requires plugin)
				// .on("enter", function () {
				// 	console.log("enter", $th);
				// 	$th.find(".audio-player__play").trigger("click");
				// })
				.on("leave", function () {
					$th.find(".audio-player__stop").trigger("click");
				})
				.addTo(controller)
		);
	});

	let y = 0;

	// initial smooth-scrollbar
	let scrollTag = document.querySelector("#pagescroll");
	let scroll = Scrollbar.init(scrollTag);

	let isChrome =
		/Chrome/.test(navigator.userAgent) &&
		/Google Inc/.test(navigator.vendor);

	console.log("is Chrome ? ", isChrome);
	// update scrollY controller
	if (isChrome) {
		controller.scrollPos(function () {
			return y;
		});
	}

	let scrollHeader = 50;
	if ($(".front-top").length) {
		scrollHeader = $(".front-top").outerHeight();
	}
	scrollTag.setAttribute("scroll", y);

	if (y >= scrollHeader) {
		$(".header").addClass("_not-top");
	} else {
		$(".header").removeClass("_not-top");
	}
	// listener smooth-scrollbar, update controller
	scroll.addListener(function (status) {
		y = status.offset.y;
		scrollTag.setAttribute("scroll", y);
		// console.log("y", y, scrollHeader);
		if (y >= scrollHeader) {
			$(".header").addClass("_not-top");
		} else {
			$(".header").removeClass("_not-top");
		}
		if (isChrome) {
			controller.update(true);
		} else {
			scenes.forEach(function (scene) {
				scene.refresh();
			});
		}
		if (
			y + window.innerHeight >=
			$(".page").innerHeight() - $(".footer").innerHeight() - 50
		) {
			$(".page").addClass("_page-end ");
		} else {
			$(".page").removeClass("_page-end ");
		}
	});
	$(".page-up").click(function () {
		scroll.scrollTo(0, 0, 1000, {
			callback: () => console.log("done!"),
		});
	});
	if ($(".front-top").length) {
		document.addEventListener("mousemove", parallax);
		const elem = document.querySelector(".front-top__bg-blur._top");
		const elem2 = document.querySelector(".front-top__bg-blur._down");

		function parallax(e) {
			let _w = window.innerWidth / 2;
			let _h = window.innerHeight / 2;
			let _mouseX = e.clientX;
			let _mouseY = e.clientY;
			let _depth1 = `${(_mouseX - _w) * 0.005}%`;
			let _depth2 = `${(_mouseY - _h) * 0.005}%`;

			let x = `translateX(${_depth1}) translateY(${_depth2})`;
			elem.style.marginLeft = _depth1;
			elem.style.marginTop = _depth2;
			elem2.style.marginLeft = _depth1;
			elem2.style.marginTop = _depth2;
		}

		// class rotationOfTheObjectTowardsTheCursor {
		// 	constructor() {
		// 		this.circle = Object;
		// 		this.line = Object;

		// 		this.circleRect = Object;

		// 		this.centerPosition = { x: 0, y: 0 };
		// 		this.angels = { actual: 0, target: 0 };

		// 		this.init();
		// 	}

		// 	init() {
		// 		this.circle = document.querySelector(".front-top__bg-blur");
		// 		this.line = document.querySelector(".front-top__bg-blur-point");

		// 		this.onResize();
		// 		window.onresize = (e) => this.onResize(e);

		// 		window.onmousemove = (e) => this.onMouseMove(e);

		// 		requestAnimationFrame(() => this.loop());
		// 	}

		// 	onResize() {
		// 		this.circleRect = this.circle.getBoundingClientRect();
		// 		this.centerPosition = {
		// 			x: this.circleRect.x + this.circleRect.width / 2,
		// 			y: this.circleRect.y + this.circleRect.height / 2,
		// 		};
		// 	}

		// 	onMouseMove(e) {
		// 		const atan2 = Math.atan2(
		// 			e.pageY - this.centerPosition.y,
		// 			e.pageX - this.centerPosition.x
		// 		);

		// 		this.angels.target = atan2;
		// 	}

		// 	loop() {
		// 		this.angels.actual = this.angleLerp(
		// 			this.angels.actual,
		// 			this.angels.target,
		// 			0.1
		// 		);

		// 		this.line.style.transform = `rotate(${this.angels.actual}rad)`;

		// 		requestAnimationFrame(() => this.loop());
		// 	}

		// 	angleLerp(a0, a1, t) {
		// 		const max = Math.PI * 2;
		// 		const da = (a1 - a0) % max;
		// 		return a0 + (((2 * da) % max) - da) * t;
		// 	}
		// }
		// new rotationOfTheObjectTowardsTheCursor();
		let animateplay = false;

		$("body").addClass("_no-scroll");
		$("body").addClass("front-page");
		setTimeout(function () {
			$("html, body").scrollTop(0);
		}, 1000);
		$("html, body").scrollTop(0);
		$(".front-top").attr("state", "top");

		$(".front-top__down").click(function () {
			FrontTopDown();
		});
		function FrontTopUp() {
			if (animateplay == false) {
				let state = $("#front-top").attr("state");
				animateplay = true;
				if (state == "static") {
					$("#front-top").attr("state", "top");
				}
				if (state == "end") {
					scroll.scrollTo(0, 0, 0, {
						callback: () => console.log("done!"),
					});
					$("body").addClass("_no-scroll");
					$("#front-top").attr("state", "static");
					// scroll.updatePluginOptions("modal", { open: true });
				}
				setTimeout(function () {
					animateplay = false;
				}, 1000);
			}
		}
		function FrontTopDown() {
			if (animateplay == false) {
				animateplay = true;
				let state = $("#front-top").attr("state");
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
				}, 1000);
			}
		}
		$("#front-top").swipe({
			preventDefaultEvents: false,
			//Generic swipe handler for all directions
			swipe: function (
				event,
				direction,
				distance,
				duration,
				fingerCount,
				fingerData
			) {
				if (distance >= 50) {
					if (direction == "up") {
						FrontTopDown();
					} else if (direction == "down") {
						FrontTopUp();
					}
				}
			},
		});

		$("#front-top").on("mousewheel", function (e) {
			let state = $("#front-top").attr("state");
			if (e.originalEvent.wheelDelta / 120 > 0) {
				FrontTopUp();
			} else {
				FrontTopDown();
			}
		});
		$("#front-top").on("DOMMouseScroll", function (e) {
			let state = $("#front-top").attr("state");
			console.log(e.originalEvent.wheelDelta);
			if (e.originalEvent.wheelDelta / 120 > 0) {
				FrontTopUp();
			} else {
				FrontTopDown();
			}
		});
	}
	// document.addEventListener("aos:in", ({ detail }) => {
	// 	if ($(detail).hasClass("audio-player")) {
	// 		$(detail).find(".audio-player__play").trigger("click");
	// 	}
	// });
	// document.addEventListener("aos:out", ({ detail }) => {
	// 	if ($(detail).hasClass("audio-player")) {
	// 		$(detail).find(".audio-player__stop").trigger("click");
	// 	}
	// });
});

$(function () {
	$(".audio-player").each(function () {
		$(this).html(
			`<div class="audio-player__stop"><svg  width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6667 7.25343V10.7557M15 4.91857V13.0906M4.5 12.5H2.16667C1.52267 12.5 1 11.9785 1 11.3333V6.66667C1 6.0215 1.52267 5.5 2.16667 5.5H4.5L10.3333 2V16L4.5 12.5Z" stroke="#2F2F2F" /></svg></div>
			<div class="audio-player__play"><svg  width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5783 11.5L4.83137 11.0688L4.71418 11H4.5783V11.5ZM4.5783 4.5V5H4.71418L4.83137 4.93122L4.5783 4.5ZM10.5421 1H11.0421C11.0421 0.820732 10.9462 0.655183 10.7906 0.566101C10.635 0.47702 10.4437 0.47804 10.2891 0.568776L10.5421 1ZM10.5421 15L10.2891 15.4312C10.4437 15.522 10.635 15.523 10.7906 15.4339C10.9462 15.3448 11.0421 15.1793 11.0421 15H10.5421ZM4.5783 11H2.19277V12H4.5783V11ZM2.19277 11C1.79885 11 1.5 10.692 1.5 10.3333H0.5C0.5 11.2649 1.26748 12 2.19277 12V11ZM1.5 10.3333V5.66657H0.5V10.3333H1.5ZM1.5 5.66657C1.5 5.30797 1.79877 5 2.19277 5V4C1.26756 4 0.5 4.73484 0.5 5.66657H1.5ZM2.19277 5H4.5783V4H2.19277V5ZM4.83137 4.93122L10.7952 1.43122L10.2891 0.568776L4.32523 4.06878L4.83137 4.93122ZM10.0421 1V15H11.0421V1H10.0421ZM10.7952 14.5688L4.83137 11.0688L4.32523 11.9312L10.2891 15.4312L10.7952 14.5688ZM13.2769 6.70777L16.6501 10.0071L17.3493 9.29223L13.9762 5.99288L13.2769 6.70777ZM16.6504 5.99288L13.2772 9.29223L13.9765 10.0071L17.3496 6.70777L16.6504 5.99288Z" fill="#2F2F2F"/></svg></div>
			<audio controls><source src="${$(this).data(
				"src"
			)}" type="audio/mpeg"></audio><div class="audio-player__body"> <div class="audio-player__progress"><div class="audio-player__line"><div class="audio-player__line-progress"></div></div> <div class="audio-player__status">0:00</div></div>`
		);
	});
	let audioPlay;
	// $(".audio-player__mute").click(function () {
	// 	let audio = $(this).closest(".audio-player").find("audio")[0];
	// 	if (audio.muted) {
	// 		audio.muted = false;
	// 		$(this)
	// 			.closest(".audio-player")
	// 			.find(".audio-player__play")
	// 			.trigger("click");
	// 		$(this).removeClass("_muted");
	// 	} else {
	// 		audio.muted = true;
	// 		$(this)
	// 			.closest(".audio-player")
	// 			.find(".audio-player__stop")
	// 			.trigger("click");
	// 		$(this).addClass("_muted");
	// 	}
	// });

	$(".audio-player__play").click(function () {
		let audio = $(this).closest(".audio-player").find("audio")[0];
		let progress = $(this)
			.closest(".audio-player")
			.find(".audio-player__line-progress")[0];
		let $time = $(this)
			.closest(".audio-player")
			.find(".audio-player__status");
		$(this).closest(".audio-player").addClass("_stop");
		audio.play();
		audioPlay = setInterval(function () {
			let audioTime = Math.round(audio.currentTime);
			let audioLength = Math.round(audio.duration);
			progress.style.width = (audioTime * 100) / audioLength + "%";
			let sec = Math.floor(audioTime) % 60;
			if (sec <= 9) {
				sec = "0" + sec;
			}
			$time.text(Math.floor(audioTime / 60) + ":" + sec);
		}, 10);
	});
	$(".audio-player__stop").click(function () {
		$(this).closest(".audio-player").removeClass("_stop");
		$(this)
			.closest(".audio-player")
			.find(".audio-player__mute")
			.addClass("_muted");
		let audio = $(this).closest(".audio-player").find("audio")[0];
		audio.pause();
		audio.muted = false;
	});
});

$(function(){})
$(function () {
	$(".btn").each(function () {
		$(this).html(
			`<span class="btn__bg"></span><span class="btn__text">${$(
				this
			).text()}</span>`
		);
	});
	$(".link-arrow").each(function () {
		$(this).html(
			`${$(
				this
			).text()}<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke-width="2"  d="M12.188 1.597H1.38M12.232.61l-.044 11.792m-.045-10.851L1.38 12.403"/></svg>`
		);
	});
});

$(function(){})
$(function () {
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-date").each(function () {
		Inputmask("99.99.9999").mask(this);
	});
});

$(function () {
	Fancybox.defaults.backFocus = false;
	$(" .gallery-slider__padding ").css(
		"min-width",
		($(" .page ").innerWidth() - $(" .gallery-slider ").innerWidth()) / 2
	);
	window.onresize = function (event) {
		$(" .gallery-slider__padding ").css(
			"min-width",
			($(" .page ").innerWidth() - $(" .gallery-slider ").innerWidth()) /
				2
		);
	};
	$(".gallery-swiper ").each(function () {
		let swiperGallery = new Swiper(this, {
			slidesPerView: 4,
			// centeredSlides: true,
			freeMode: {
				enabled: true,
				// sticky: true,
				momentumBounce: false,
			},
			// initialSlide: 2,
			preventClicks: false,
			preventClicksPropagation: false,
			slideToClickedSlide: false,
			spaceBetween: 22,
			watchSlidesProgress: true,
			mousewheel: {
				sensitivity: 0.3,
			},
			breakpoints: {
				320: {
					slidesPerView: 1.2,
				},
				480: {
					slidesPerView: 1.6,
				},
				640: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
			},
			pagination: {
				el: $(this).find(".gallery-swiper__pagi")[0],
				type: "custom",
				renderCustom: function (swiper, current, total) {
					let i = current ? current : 0;
					return `${("0" + i).slice(
						-2
					)} <span class="_divider"></span> ${("0" + total).slice(
						-2
					)}`;
				},
			},
		});

		const interleaveOffset = 0.1;
		swiperGallery.on("progress", function (swiper, progress) {
			console.log("progress");
			for (let i = 0; i < swiper.slides.length; i++) {
				let slideProgress = swiper.slides[i].progress;
				console.log(swiper.slides[i].progress);
				let innerOffset = swiper.width * interleaveOffset;
				let innerTranslate = slideProgress * innerOffset;

				// TweenMax.set(swiper.slides[i], {
				// 	skewY: `${innerTranslate * 0.025}deg`,
				// });
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

$(function () {
	$("[data-popup]").click(function () {
		let $popup = $($(this).data("popup"));
		$popup.addClass("_display");
		setTimeout(function () {
			$popup.addClass("_animate");
		}, 100);
	});
	$(".popup__close,.popup__overlay").click(function () {
		let $popup = $(this).closest(".popup");
		$popup.removeClass("_animate");
		setTimeout(function () {
			$popup.removeClass("_display");
		}, 1000);
	});
});

$(function () {
	if ($(".header__temp").length) {
		setInterval(function () {
			$(".header__temp").toggleClass("_water");
		}, 5000);
	}
});

let step = 50;
let timeM = 0;
let timeMinutMax = 1000;
let timeH = 0;
let timeHoursMax = timeMinutMax * 12;
let delta = 1;
let start = false;
let hours = document.querySelector(".preloader__arrow-hours");
let minuts = document.querySelector(".preloader__arrow-minuts");
let preloader = setInterval(function () {
	minuts.style.transform = `rotate(${
		(360 / 100) * (100 / (timeMinutMax / timeM))
	}deg)`;
	hours.style.transform = `rotate(${
		(360 / 100) * (100 / (timeHoursMax / timeH))
	}deg)`;
	if (start) {
		delta > 0 ? (delta -= step / 1000 / 2) : (delta = 0);
	}
	timeM < timeMinutMax ? (timeM += step * delta) : (timeM = 0);
	timeH < timeHoursMax ? (timeH += step * delta) : (timeH = 0);
}, step);
$(function () {
	setTimeout(function () {
		start = true;
		$(".preloader").addClass("_start");
		setTimeout(function () {
			$(".preloader").fadeOut(1000, function () {
				$("body").addClass("load");
				clearInterval(preloader);
			});
		}, 2000);
	}, 2000);
});

$(function(){})
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
var width = window.innerWidth;
window.addEventListener("resize", () => {
	if (width != window.innerWidth) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
		width = window.innerWidth;
	}
});

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

$(function () {
	$.fn.plaxmove = function (options) {
		this.defaults = {
			ratioH: 0.013,
			ratioV: 0.013,
			reversed: true,
		};

		var settings = $.extend({}, this.defaults, options),
			layer = $(this),
			center = {
				x: $("html").width() / 2 - layer.width() / 2,
				y: $("html").height() / 2 - layer.height() / 2,
			};

		var eqH = function (e) {
			return (e.pageX - center.x) * settings.ratioH;
		};

		var eqW = function (e) {
			return (e.pageY - center.y) * settings.ratioV;
		};

		if (settings.reversed) {
			var t = eqH;
			eqH = eqW;
			eqW = t;
		}

		$("html").on("mousemove", function (e) {
			x = eqH(e);
			y = eqW(e);
			$(layer).css("transform", `translateY(${y}px) translateX(${x}px)`);
		});
	};
	$(".parallax img, .mouseparallax img").each(function (indx, element) {
		$(this).plaxmove({
			reversed: true,
		});
	});
});
