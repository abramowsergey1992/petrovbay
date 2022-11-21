ymaps.ready(function () {
	createMap1();
});

function createMap1() {
	if ($("#map").length) {
		var myMap = new ymaps.Map("map", {
			center: [43.26501443195482, 132.05784293338527],
			zoom: 11,
			controls: [],
			// behaviors: [
			// 	"drag",
			// 	"dblClickZoom",
			// 	"multiTouch",
			// 	"rightMouseButtonMagnifier",
			// ],
		});
		var multiRoute = new ymaps.multiRouter.MultiRoute(
			{
				referencePoints: [
					"Владивосток",
					[42.87537418528538, 133.8031125095581],
				],
				params: {
					// viaIndexes: [1],
					results: 1,
					wayPointFinishIconContent: "sasd",
				},
			},
			{
				wayPointFinishIconContent: "sasd",

				boundsAutoApply: true,
			}
		);
		// Включение режима редактирования.
		// multiRoute.editor.start();
		console.log("multiRoute", multiRoute);
		myMap.geoObjects.add(multiRoute);
	}
}

$(function () {
	if ($("#contact-form").length) {
		let validContacnt = $("#contact-form").validate({
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
