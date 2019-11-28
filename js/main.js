document.querySelector('body').classList.remove('preload');

var el = document.querySelector('.nav-toggle');
el.onclick = function() {
	document.querySelector('body').classList.toggle('open');
	document.querySelector('.burger').classList.toggle('open');
}

$(document).ready(function() {
	$(".emotion .slides").slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear'
	});

});