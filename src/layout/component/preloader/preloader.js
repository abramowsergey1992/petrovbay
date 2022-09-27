$(function () {
	setTimeout(function () {
		$(".preloader").addClass("_start");
		setTimeout(function () {
			$(".preloader").fadeOut(1000, function () {
				$("body").addClass("load");
			});
		}, 2000);
	}, 1000);
});
