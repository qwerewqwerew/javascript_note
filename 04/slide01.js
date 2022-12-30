$(function () {
	const visual = $("#brandVisual>ul>li");
	const button = $("#buttonList>li");
	let current = 0; //현재
	let current = 0; //현재
	let id; //setIntervalId
	const speed = 3000;
	//버튼클릭함수
	button.click(function () {
		let btnIdx = $(this).index();
		button.removeClass("on");
		$(this).addClass("on");
		move(btnIdx);
	});

	//시간마다실행
	timer();
	function timer() {
		id = setInterval(function () {
			let next = current + 1;
			if (next == visual.length) {
				next = 0;
			}
			console.log(next);
			button.eq(next).trigger("click");
		}, speed);
	}

	//이동시키는 함수
	function move(btnIdx) {
		if (current == btnIdx) return;
		let cu = visual.eq(current);
		let ne = visual.eq(btnIdx);
		cu.css("left", "0").stop().animate({ left: "-100%" });
		ne.css("left", "100%").stop().animate({ left: "0%" });
		current = btnIdx;
	}
	$("#brandVisual,#buttonList,.button1").mouseenter(function () {
		clearInterval(id);
	});
	$("#brandVisual,#buttonList,.button1").mouseleave(function () {
		timer();
	});
	$(".next").click(function () {
		idx = idx + 1;
		if (idx == visual.length) {
			idx = 0;
		}
		button.removeClass("on");
		button.eq(idx).addClass("on");
		next = idx + 1;

		let current = visual.eq(init);
		let next2 = visual.eq(idx);
		current.css("left", "0").stop().animate({ left: "-100%" });
		next2.css("left", "100%").stop().animate({ left: "0" });
		init = idx;
		return false;
	});
}); //jQuery
