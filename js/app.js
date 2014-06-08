$(document).ready(function(){
$(".ryu").mouseenter(function(){
	$(".ryu-still").hide();
	$(".ryu-ready").show();
})
.mouseleave(function(){
	$(".ryu-still").show();
	$(".ryu-ready").hide();
	$(".hadouken").hide();
})
.mousedown(function(){
	playHadouken();
    $(".ryu-ready").hide();
    $(".ryu-throwing").show();
    $(".hadouken").show();
	$(".hadouken").finish().show().animate(
  {'left': '1020px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '520px');
  }
);
})
.mouseup(function(){
	// console.log('mouseup')
	 // ryu goes back to his ready position
	 $(".ryu-throwing").hide();
	 $(".hadouken").hide();
	 $(".ryu-ready").show();
})

$(document).keydown(function(key){
	
	switch(parseInt(key.which,10)) {
		case 88:
				$(".ryu-still").hide();
				$(".ryu-ready").hide();
				$(".hadouken").hide();
				$(".ryu-cool").show();
		break;
	}
});

$(document).keyup(function(key){
	
	switch(parseInt(key.which,10)) {
		case 88:
				$(".ryu-cool").hide();
				$(".ryu-ready").show();
		break;
	}
});


});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}