var anhs = document.querySelectorAll('.cacAnh img'),
	nenDen = document.querySelector('.nenden'),
	dongLai = document.querySelector('.dongLai'),
	thongtinanh = document.querySelector('.thongtinanh'),
	khoiCacAnhLis = document.querySelectorAll('.khoiCacAnh ul li'),
	nphai = document.querySelector('.nphai'),
	ntrai = document.querySelector('.ntrai'),
	thuTuCuaActive = 0;

// Khi click vào nút đóng (Nút đóng lại nằm trong nền đen, nên như nhau)
// dongLai.addEventListener('click',function () {
// 	nenDen.classList.remove('ra');
// 	thongtinanh.classList.remove('ra');
// 	var anhActive = document.querySelector('.khoiCacAnh ul li.active');
// 	anhActive.classList.remove('active');
// })

//Khi click vào nền đen cũng đóng lại
nenDen.addEventListener('click',function () {
	nenDen.classList.remove('ra');
	thongtinanh.classList.remove('ra');
	var anhActive = document.querySelector('.khoiCacAnh ul li.active');
	anhActive.classList.remove('active');
});

for (var i = 0; i < anhs.length; i++) {
	anhs[i].addEventListener('click',function () {
		// console.log("bạn vừa kích vào ảnh");
		// console.log(this);
		nenDen.classList.add('ra');
		thongtinanh.classList.add('ra');
		var anhDuocClick = this;
			// console.log(anhDuocClick.previousElementSibling)
		for (var chiSo = 0; anhDuocClick = anhDuocClick.previousElementSibling; chiSo++){
			
		};
		// console.log(k);
		// In ra phần tử được active
		thuTuCuaActive = chiSo
		khoiCacAnhLis[chiSo].classList.add('active');
    })
}

var hienTai2 = thuTuCuaActive; //hienTai2 sẽ không tạo lại nữa mà sẽ chị tiếp
nphai.addEventListener('click',function () {
	// console.log("Số lượng ảnh là " + khoiCacAnhLis.length);
	// Xác định phần tử tiếp theo
	var soLuongAnh = khoiCacAnhLis.length;
	var phanTuHienTai = khoiCacAnhLis[hienTai2]; // cái này bình thường

	hienTai2 = (hienTai2 < soLuongAnh - 1)? hienTai2 + 1 : 0;
	var phanTuTiepTheo = khoiCacAnhLis[hienTai2]; // Cái này đã tăng thêm 1
	// console.log("Chỉ số của phần tử đang được hiển thị là " + thuTuCuaActive);
	// console.log("Chỉ số của phần tử tiếp theo là " + thuTuCuaPhanTuTiepTheo);
	phanTuHienTai.classList.remove('active');
	phanTuTiepTheo.classList.add('active');

});

ntrai.addEventListener('click',function () {
	// console.log("Số lượng ảnh là " + khoiCacAnhLis.length);
	// Xác định phần tử tiếp theo
	var soLuongAnh = khoiCacAnhLis.length;
	var phanTuHienTai = khoiCacAnhLis[hienTai2]; // cái này bình thường

	hienTai2 = (hienTai2 > 0)? hienTai2 - 1 : soLuongAnh - 1;
	var phanTuTiepTheo = khoiCacAnhLis[hienTai2]; // Cái này đã tăng thêm 1
	// console.log("Chỉ số của phần tử đang được hiển thị là " + thuTuCuaActive);
	// console.log("Chỉ số của phần tử tiếp theo là " + thuTuCuaPhanTuTiepTheo);
	phanTuHienTai.classList.remove('active');
	phanTuTiepTheo.classList.add('active');

})