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
