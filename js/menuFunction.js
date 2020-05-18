$('.header-title__btn-menu').on('click', function(){
	$('.headerMenu').is('.show')? $('.headerMenu').removeClass('show').addClass('hide'): $('.headerMenu').removeClass('hide').addClass('show');
	$('.header-title__btn-menu>.header-title__line').is('.show')? $('.header-title__btn-menu>.header-title__line').removeClass('show'): $('.header-title__btn-menu>.header-title__line').addClass('show');
});

for (let key in symbol) {
	let count = key.substr(-1);
	$('.headerMenu__list--child').eq(parseInt(count) - 1).html(symbol[key] + $('.headerMenu__list--child').eq(parseInt(count) - 1).html());
}

$(window).on('load scroll',function() {
	if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
		$('header').css('background-color', '#000');
		$('.header-title').css('padding-top', '30px', 'padding-bottom', '30px');
	}else{
		$('header').css('background-color', 'unset');
		$('.header-title').css('padding-top', '40px', 'padding-bottom', '40px');
	}
	if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
		$('.back-to-top').css('opacity', '1');
	} else {
		$('.back-to-top').css('opacity', '0');
	}
});

function topFunction(){
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
}