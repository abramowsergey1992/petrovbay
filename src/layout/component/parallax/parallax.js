$(function () {
	// var rellax = new Rellax(".parallax", {
	// 	center: true,
	// 	wrapper: "#pagescroll",
	// });

	$.fn.plaxmove = function (options) {
		this.defaults = {
			ratioH: 0.013,
			ratioV: 0.013,
			reversed: true,
		};

		var settings = $.extend({}, this.defaults, options),
			layer = $(this),
			center = {
				x: $("html").width() / 2 - layer.width() / 2,
				y: $("html").height() / 2 - layer.height() / 2,
			};

		var eqH = function (e) {
			return (e.pageX - center.x) * settings.ratioH;
		};

		var eqW = function (e) {
			return (e.pageY - center.y) * settings.ratioV;
		};

		if (settings.reversed) {
			var t = eqH;
			eqH = eqW;
			eqW = t;
		}

		$("html").on("mousemove", function (e) {
			x = eqH(e);
			y = eqW(e);
			$(layer).css("margin-left", y);
			$(layer).css("margin-top", x);
		});
	};
	$(".parallax img").each(function (indx, element) {
		$(this).plaxmove({
			reversed: true,
		});
	});
});
