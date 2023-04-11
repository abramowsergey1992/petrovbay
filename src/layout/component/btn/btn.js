$(function () {
	$(".btn").each(function () {
		$(this).html(
			`<span class="btn__bg"></span><span class="btn__text">${$(
				this
			).text()}</span>`
		);
	});
	$(".link-arrow").each(function () {
		$(this).html(
			`${$(
				this
			).text()}<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke-width="2"  d="M12.188 1.597H1.38M12.232.61l-.044 11.792m-.045-10.851L1.38 12.403"/></svg>`
		);
	});
});
