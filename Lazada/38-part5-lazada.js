var logo = document.querySelector(".logo"),
	menu = document.querySelector(".menu"),
	nutdanhmuc = document.querySelector(".tatcadanhmuc"),
	menubottom = document.querySelector(".menubottom"),
	nut = document.querySelector(".nut"),
	trangthai = "binhthuong";
	console.log(nutdanhmuc);

nutdanhmuc.addEventListener('click',function () {
		// console.log("Bạn vừa click vào nút");
		if (trangthai == "binhthuong"){
			menubottom.classList.add('botdira');
			nut.innerHTML = "Ẩn danh mục ngành hàng";
			trangthai = "Đã thay text";
		} else {
			menubottom.classList.add('botdira');
			nut.innerHTML = "Tất cả danh mục";
			trangthai = "binhthuong";
		}	
});

window.addEventListener('scroll',function () {
	var vitri = window.pageYOffset;
	if (vitri > 300) {
		// console.log("Bạn đang ở vị trí lớn hơn 300");
		logo.classList.add('truotlen');
		menu.classList.add('bienhinh1');
	} else {
		// console.log("Bạn đang ở dưới 300");
		logo.classList.remove('truotlen');
		menu.classList.remove('bienhinh1');
	}
});