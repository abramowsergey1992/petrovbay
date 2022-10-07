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

	$(".audio-player").each(function () {
		let $th = $(this);
		scenes.push(
			new ScrollMagic.Scene({
				triggerElement: this,
				duration: 300,
			})
				.triggerHook(0.7)
				// .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
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
		// Add event listener
		document.addEventListener("mousemove", parallax);
		const elem = document.querySelector(".front-top__bg-blur._top");
		const elem2 = document.querySelector(".front-top__bg-blur._down");
		// Magic happens here
		function parallax(e) {
			let _w = window.innerWidth / 2;
			let _h = window.innerHeight / 2;
			let _mouseX = e.clientX;
			let _mouseY = e.clientY;
			let _depth1 = `${(_mouseX - _w) * 0.005}%`;
			let _depth2 = `${(_mouseY - _h) * 0.005}%`;

			let x = `translateX(${_depth1}) translateY(${_depth2})`;
			console.log(x);
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
