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
$(function() {
	setupTypedJS();
	setupStickyHeader();
});