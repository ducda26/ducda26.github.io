$(function() {
	/*console.log('chay chua ha cac ban ');
	console.log('tinh thu vi tri bang ham .offset().top');
	console.log($('.chapter1').offset().top); Hàm tính vị trí
*/

	$('.menutren ul li:nth-child(1) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		console.log("click được chưa");

		$('body').animate({	scrollTop: $('.chapter1').offset().top},1400,"easeOutCubic");
	});
	$('.menutren ul li:nth-child(2) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

		$('body').animate({	scrollTop: $('.chapter2').offset().top},1400,"easeOutCubic");
	});

$('.menutren ul li:nth-child(3) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

		$('body').animate({	scrollTop: $('.chapter3').offset().top},1400,"easeOutCubic");
	});



$('.menutren ul li:nth-child(4) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

		$('body').animate({	scrollTop: $('.chapter4').offset().top},1400,"easeOutCubic");
	});


// viet cho nut backtotop
$('.nutlentren').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

		$('body').animate({	scrollTop: 0},400,"easeInOutElastic");
	});



$('.menutren ul li:nth-child(4) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

		$('body').animate({	scrollTop: $('.chapter4').offset().top},1400,"easeOutCubic");
	});
});