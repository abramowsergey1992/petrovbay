$(function () {
	$(".btn").each(function () {
		$(this).html(
			`<span class="btn__bg"></span><span>${$(this).text()}</span>`
		);
	});
	$(".link-arrow").each(function () {
		$(this).html(
			`${$(
				this
			).text()}<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.21 1.40332H1.40332M12.21 1.40332V12.21M12.21 1.40332L1.40332 12.21" stroke="" stroke-width="2"/></svg>`
		);
	});
});
