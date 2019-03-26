window.onload = function() {

	var timeline = document.querySelector('.timeline');
	var dateBlock = document.querySelector('.date-block');
	var hourBlockLength = document.querySelectorAll('.hour-block').length;
	var hourBlock = document.querySelector('.hour-block');
	var timelineLeft = document.querySelector('.timeline__left');
	var timelineRight = document.querySelector('.timeline__right');
	const amountHourBlock = hourBlock.offsetWidth * hourBlockLength;
	var onRightEdge, onLeftEdge;
	const step = 30;

	var state = {
		left: 0,
		width: 30
	}

	// function widthTimeline() {
	// 	width = timeline.width();
	// 	state.width = width;
	// 	console.log(width, state.width);
	// }
	// widthTimeline();
	// $('.date-block').on({
	// 	mouseenter: function() {
	// 		$('.timeline').addClass('display');
	// 	},
	// 	mouseleave: function() {
	// 		$('.timeline').removeClass('display');
	// 	}
	// });

	// timeline.onmousedown = function(e) {
	// 	var timelineCoords = getCoords(timeline);
	// 	var shiftX = e.pageX - timelineCoords.left;

	// 	var dateBlockCoords = getCoords(dateBlock);
	// 	document.onmousemove = function(e) {
	// 		var newLeft = e.pageX - shiftX - dateBlockCoords.left;

	// 		// курсор ушёл вне блока
	// 		if (newLeft < 0) {
	// 			newLeft = 0;
	// 		}
	// 		var rightEdge = amountHourBlock - timeline.offsetWidth;
	// 		if (newLeft > rightEdge) {
	// 			newLeft = rightEdge;
	// 		}

	// 		timeline.style.left = newLeft + 'px';
	// 	}
	// 	document.onmouseup = function() {
	// 		document.onmousemove = document.onmouseup = null;
	// 	};

	// 	return false; // disable selection start (cursor change)
	// };
	timelineRight.onmousedown = function(e) {
		var timelineCoords = getCoords(timeline);
		var dateBlockCoords = getCoords(dateBlock);
		var shiftX = e.pageX - timelineCoords.left;
		document.onmousemove = function(e) {
			var newLeft = e.pageX - shiftX - dateBlockCoords.left;
			console.log(newLeft, timeline.offsetWidth);
			var LeftEdge = timeline.offsetWidth + newLeft;
			timeline.style.width = LeftEdge + 'px';
		}
	};
	document.onmouseup = function() {
		document.onmousemove = document.onmouseup = null;
	};
	timeline.ondragstart = function() {
		return false;
	};
	function getCoords(e) {
		var box = e.getBoundingClientRect();
		return {
			left: box.left + pageXOffset
		};
	}
}
