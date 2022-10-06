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
	}, 1000);
});
