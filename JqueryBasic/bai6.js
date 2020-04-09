$(function() {
	// Xử lý việc click đổi màu
	$('.tdkhoi').click(function(event){
		$(this).toggleClass('xanh');
		$(this).next().slideToggle(500);

		// sử dụng hàm animate để chuyển nội dung lên
		$('body').animate({scrollTop: $(this).offset().top},900,"easeInOutExpo");
	});
	// code cho phần phóng to ảnh
	$('.vaicaianh a').fancybox();
	// nhóm ảnh: thêm  rel và tên class

	// xử lý co giãn nội dụng
	$('.ndkhoi').slideUp();
});