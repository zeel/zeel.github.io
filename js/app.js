function setupTypedJS() {
	$("#home-title-typed").typed({
		strings: ["Zeel Shah", "Front-End Developer", "living in Gurgaon, India"],
		typeSpeed: 70,
		loop: true,
		startDelay: 70,
	});
}

function setupStickyHeader() {
	$(window).scroll(function() {
		var jBody = $('body'),
			isScrolled = jBody.scrollTop() > ($('.scroll-down').offset().top + $('.scroll-down').height() - 20);
		jBody.toggleClass('fixed', isScrolled);
	});
}

function checkHash() {
	lstrHash = window.location.hash.replace('#/', '#');

	if ($('a[href="' + lstrHash + '"]').length > 0) {
		$('a[href="' + lstrHash + '"]').trigger('click');
	}
}

function applyScrollSpy() {
	$('.navbar').on('activate.bs.scrollspy', function() {
		window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
	});
}

function applyNavigationFixForPhone() {
	$('.navbar li a').click(function(event) {
		$('.navbar-collapse').removeClass('in').addClass('collapse');
	});
}
$(function() {
	setupTypedJS();
	setupStickyHeader();
	checkHash();
	applyScrollSpy();
	applyNavigationFixForPhone();
});