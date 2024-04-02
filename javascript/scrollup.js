// КНОПКА ВВЕРХ
$(window).scroll(function(){
	let scrolled = $(window).scrollTop();

	if (scrolled > 500) {
		$('#back-to-top').addClass('active');
	}
	else {
		$('#back-to-top').removeClass('active');
	}

});

$('#back-to-top').click(function(){
	$('body,html').animate({scrollTop: 0}, 100)
});