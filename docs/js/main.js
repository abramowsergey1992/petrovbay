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

$(function(){})
$(function(){})
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
$(function () {
	// $(".text p,.text ul").each(function () {
	// 	$(this).attr("data-aos", "fade-up");
	// });
	// AOS.init({});

	let controller = new ScrollMagic.Controller({
		refreshInterval: 0,
	});
	let scenes = [];
	$(".anim-block").each(function () {
		scenes.push(
			new ScrollMagic.Scene({
				triggerElement: this,
				duration: 400,
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
		console.log($(this).data("parallax"));
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

	$(".audio-player").each(function () {
		let $th = $(this);
		scenes.push(
			new ScrollMagic.Scene({
				triggerElement: this,
				duration: window.innerHeight,
			})
				.triggerHook(1)
				.addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
				.on("enter", function () {
					console.log("enter", $th);
					$th.find(".audio-player__play").trigger("click");
				})
				.on("leave", function () {
					console.log("leave", $th);
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
	});

	if ($(".front-top").length) {
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
					$("html, body").animate({ scrollTop: 0 });
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
					// scroll.updatePluginOptions("modal", { open: false });
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
					FrontTopUp();
				} else if (direction == "down") {
					FrontTopDown();
				}
			},
		});

		$("#front-top").on("mousewheel", function (e) {
			let state = $("#front-top").attr("state");
			console.log(e.originalEvent.wheelDelta);
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
			`<div class="audio-player__stop"></div><div class="audio-player__play"></div><audio controls><source src="${$(
				this
			).data(
				"src"
			)}" type="audio/mpeg"></audio><div class="audio-player__body"> <div class="audio-player__progress"><div class="audio-player__mute"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5783 11.5L4.83137 11.0688L4.71418 11H4.5783V11.5ZM4.5783 4.5V5H4.71418L4.83137 4.93122L4.5783 4.5ZM10.5421 1H11.0421C11.0421 0.820732 10.9462 0.655183 10.7906 0.566101C10.635 0.47702 10.4437 0.47804 10.2891 0.568776L10.5421 1ZM10.5421 15L10.2891 15.4312C10.4437 15.522 10.635 15.523 10.7906 15.4339C10.9462 15.3448 11.0421 15.1793 11.0421 15H10.5421ZM4.5783 11H2.19277V12H4.5783V11ZM2.19277 11C1.79885 11 1.5 10.692 1.5 10.3333H0.5C0.5 11.2649 1.26748 12 2.19277 12V11ZM1.5 10.3333V5.66657H0.5V10.3333H1.5ZM1.5 5.66657C1.5 5.30797 1.79877 5 2.19277 5V4C1.26756 4 0.5 4.73484 0.5 5.66657H1.5ZM2.19277 5H4.5783V4H2.19277V5ZM4.83137 4.93122L10.7952 1.43122L10.2891 0.568776L4.32523 4.06878L4.83137 4.93122ZM10.0421 1V15H11.0421V1H10.0421ZM10.7952 14.5688L4.83137 11.0688L4.32523 11.9312L10.2891 15.4312L10.7952 14.5688ZM13.2769 6.70777L16.6501 10.0071L17.3493 9.29223L13.9762 5.99288L13.2769 6.70777ZM16.6504 5.99288L13.2772 9.29223L13.9765 10.0071L17.3496 6.70777L16.6504 5.99288Z" fill="#2F2F2F"/></svg></div><div class="audio-player__line"><div class="audio-player__line-progress"></div></div> <div class="audio-player__status">0:00</div></div>`
		);
	});
	let audioPlay;

	$(".audio-player__mute").click(function () {
		let audio = $(this).closest(".audio-player").find("audio")[0];
		if (audio.muted) {
			audio.muted = false;
			$(this).removeClass("_muted");
		} else {
			audio.muted = true;
			$(this).addClass("_muted");
		}
	});

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

		let audio = $(this).closest(".audio-player").find("audio")[0];
		audio.pause();
	});
});

$(function () {
	$(".btn").each(function () {
		$(this).html(
			`<span class="btn__bg"></span><span>${$(this).text()}</span>`
		);
	});
	$(".link-arrow").each(function () {
		$(this).html(
			`${$(
				this
			).text()}<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.21 1.40332H1.40332M12.21 1.40332V12.21M12.21 1.40332L1.40332 12.21" stroke="" stroke-width="2"/></svg>`
		);
	});
});

$(function(){})
$(function () {
	// Переехал в АОS
	// if (!$(".front-top").length) {
	// 	if ($("#pagescroll").scrollTop() >= 50) {
	// 		$(".header").addClass("_not-top");
	// 	} else {
	// 		$(".header").removeClass("_not-top");
	// 	}
	// 	$("#pagescroll").scroll(function () {
	// 		if ($(this).scrollTop() >= 50) {
	// 			$(".header").addClass("_not-top");
	// 		} else {
	// 			$(".header").removeClass("_not-top");
	// 		}
	// 	});
	// } else {
	// 	$("body").addClass("front-page");
	// 	if ($("#pagescroll").scrollTop() >= $(".front-top").outerHeight()) {
	// 		$(".header").addClass("_not-top");
	// 	} else {
	// 		$(".header").removeClass("_not-top");
	// 	}
	// 	$("#pagescroll").scroll(function () {
	// 		if ($(this).scrollTop() >= $(".front-top").outerHeight()) {
	// 			$(".header").addClass("_not-top");
	// 		} else {
	// 			$(".header").removeClass("_not-top");
	// 		}
	// 	});
	// }
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
	console.log(100 / (timeHoursMax / timeH));
	minuts.style.transform = `rotate(${
		(360 / 100) * (100 / (timeMinutMax / timeM))
	}deg)`;
	hours.style.transform = `rotate(${
		(360 / 100) * (100 / (timeHoursMax / timeH))
	}deg)`;
	if (start) {
		delta > 0 ? (delta -= step / 1000) : (delta = 0);
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
	}, 1000);
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
	Fancybox.defaults.backFocus = false;
	$(".gallery-it__bg").click(function () {
		console.log("asdas");
	});
	$(".gallery-slider ").each(function () {
		let swiperGallery = new Swiper(this, {
			slidesPerView: "auto",
			// freemode: true,
			// allowTouchMove: false,
			preventClicks: false,
			preventClicksPropagation: false,
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
