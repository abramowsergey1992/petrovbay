$(function () {
	if ($(".header__temp").length) {
		setInterval(function () {
			$(".header__temp").toggleClass("_water");
			$(".mobmenu__weather").toggleClass("_water");
		}, 5000);
	}
});
