function getCookie(e, t = !1) {
	if (!e) return;
	let n = document.cookie.match(
		new RegExp(
			"(?:^|; )" +
				e.replace(/([.$?*|{}()\[\]\\\/+^])/g, "\\$1") +
				"=([^;]*)"
		)
	);
	if (n) {
		let e = decodeURIComponent(n[1]);
		if (t)
			try {
				return JSON.parse(e);
			} catch (e) {}
		return e;
	}
}
function setCookie(e, t, n = { path: "/" }) {
	if (!e) return;
	(n = n || {}).expires instanceof Date &&
		(n.expires = n.expires.toUTCString()),
		t instanceof Object && (t = JSON.stringify(t));
	let o = encodeURIComponent(e) + "=" + encodeURIComponent(t);
	for (let e in n) {
		o += "; " + e;
		let t = n[e];
		!0 !== t && (o += "=" + t);
	}
	document.cookie = o;
}
function deleteCookie(e) {
	setCookie(e, null, { expires: new Date(), path: "/" });
}

if (getCookie("firstload")) {
	document.querySelector(".preloader").style.display = "none";
	$(function () {
		$("body").addClass("load");
	});
} else {
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
					setCookie("firstload", true);
				});
			}, 2000);
		}, 2000);
	});
}
