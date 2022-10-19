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

	if ($("#popup-form").length) {
		let validContacnt = $("#popup-form").validate({
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
