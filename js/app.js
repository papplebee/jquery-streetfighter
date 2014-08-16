jQuery(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		console.log('mousedown');
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate({'left':'300px'}, 500, function() {
				$(this).hide();
				$(this).css('left','-150px');
			});
	})
	.mouseup(function() {
		console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(event) {
		if (event.which == 88) {
			playCool();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(event) {
		if (event.which == 88) {
			pauseCool();
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playCool() {
	$('#cool-sound')[0].play();
}

function pauseCool() {
	$('#cool-sound')[0].pause();
	$('#cool-sound')[0].load();
}