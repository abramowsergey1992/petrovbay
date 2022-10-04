$(function () {
	$(".preloader").addClass("_start");
	setTimeout(function () {
		$(".preloader").fadeOut(1000, function () {
			$("body").addClass("load");
		});
	}, 1000);
});
