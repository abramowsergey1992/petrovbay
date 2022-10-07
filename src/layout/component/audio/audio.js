$(function () {
	$(".audio-player").each(function () {
		$(this).html(
			`<div class="audio-player__stop"></div><div class="audio-player__play"></div><audio controls><source src="${$(
				this
			).data(
				"src"
			)}" type="audio/mpeg"></audio><div class="audio-player__body"> <div class="audio-player__progress"><div class="audio-player__mute"><svg class="audio-player__mute-on" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5783 11.5L4.83137 11.0688L4.71418 11H4.5783V11.5ZM4.5783 4.5V5H4.71418L4.83137 4.93122L4.5783 4.5ZM10.5421 1H11.0421C11.0421 0.820732 10.9462 0.655183 10.7906 0.566101C10.635 0.47702 10.4437 0.47804 10.2891 0.568776L10.5421 1ZM10.5421 15L10.2891 15.4312C10.4437 15.522 10.635 15.523 10.7906 15.4339C10.9462 15.3448 11.0421 15.1793 11.0421 15H10.5421ZM4.5783 11H2.19277V12H4.5783V11ZM2.19277 11C1.79885 11 1.5 10.692 1.5 10.3333H0.5C0.5 11.2649 1.26748 12 2.19277 12V11ZM1.5 10.3333V5.66657H0.5V10.3333H1.5ZM1.5 5.66657C1.5 5.30797 1.79877 5 2.19277 5V4C1.26756 4 0.5 4.73484 0.5 5.66657H1.5ZM2.19277 5H4.5783V4H2.19277V5ZM4.83137 4.93122L10.7952 1.43122L10.2891 0.568776L4.32523 4.06878L4.83137 4.93122ZM10.0421 1V15H11.0421V1H10.0421ZM10.7952 14.5688L4.83137 11.0688L4.32523 11.9312L10.2891 15.4312L10.7952 14.5688ZM13.2769 6.70777L16.6501 10.0071L17.3493 9.29223L13.9762 5.99288L13.2769 6.70777ZM16.6504 5.99288L13.2772 9.29223L13.9765 10.0071L17.3496 6.70777L16.6504 5.99288Z" fill="#2F2F2F"/></svg><svg  class="audio-player__mute-off" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6667 7.25343V10.7557M15 4.91857V13.0906M4.5 12.5H2.16667C1.52267 12.5 1 11.9785 1 11.3333V6.66667C1 6.0215 1.52267 5.5 2.16667 5.5H4.5L10.3333 2V16L4.5 12.5Z" stroke="#2F2F2F" /></svg></div><div class="audio-player__line"><div class="audio-player__line-progress"></div></div> <div class="audio-player__status">0:00</div></div>`
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
