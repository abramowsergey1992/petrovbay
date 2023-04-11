$(function () {
	let videowrap = $(".video-popup__video-wrap");
	$(".video-popup__close,.video-popup__overlay ").click(function () {
		$(".video-popup ").fadeOut();
		videowrap.html("");
	});
	$(".video-preview__link").click(function () {
		$(".video-popup ").fadeIn();
		console.log(
			$(this)
				.closest(".video-preview ")
				.find(".video-preview__frame ")
				.html()
		);
		videowrap.html(
			$(this)
				.closest(".video-preview ")
				.find(".video-preview__frame ")
				.html()
		);
	});
});
