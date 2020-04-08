//Khai báo biến
var nutPhai = document.querySelector('.nuts b.phai'),
	nutTrai = document.querySelector('.nuts b.trai'), //trả về phần tử
	slides = document.querySelectorAll('.slides ul li'), //Trả về mảng
	chiSoHienTai = 0,
	soLuongSlide = slides.length;
	trangthai = 'dangDungYen';

function xacDinh2SlideVaChuyenDong(nutnao) {
	if (trangthai == "dangChuyenDong"){return false;}//dừng chương trình
	trangthai = 'dangChuyenDong';
	var trangThaiCua2ChuyenDong = 0;
	var phanTuHienTai = slides[chiSoHienTai];

	chiSoHienTai = (nutnao == 'nutTrai') ? ((chiSoHienTai > 0)? chiSoHienTai - 1 : soLuongSlide - 1) : ((chiSoHienTai < soLuongSlide -1) ? chiSoHienTai + 1 : 0); //Trong toán tử 3 ngôi nếu dùng ++ -- sẽ bị lỗi, sử dụng + 1, -1 thay thế. 

	var phanTuTiepTheo = slides[chiSoHienTai];
	// endAnimation check
	var xuLyHienTaiKetThucCD = function(){
		this.classList.remove('dangxem');
		this.classList.remove((nutnao == 'nutTrai') ? ('bienMatKhiAnPrev') : ('bienMatKhiAnNext')); // Toán tử 3 ngôi trả về 1 giá trị, chứ không thực hiện 1 hành động. Xác định trả về giá trị nào và để hành động ra ngoài.
		trangThaiCua2ChuyenDong++; // = 1
		trangthai = (trangThaiCua2ChuyenDong == 2) ? ('dangDungYen') : trangthai; //Nếu khuyết ngôi thứ 3, trả về chính nó.
		// console.log(slides[chiSoHienTai]);
	}

	var xuLyTiepTheoKetThucCD = function(){
		var tenClass = ((nutnao == 'nutTrai') ? ('diVaoKhiAnPrev') : ('diVaoKhiAnNext'))
		this.classList.remove(tenClass);
		this.classList.add('dangxem');
		trangThaiCua2ChuyenDong++; // =2
		if(trangThaiCua2ChuyenDong == 2){trangthai = 'dangDungYen';}
	}
	phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD);
	phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD);
	//Khi chuyển động, dựa vào từng nút
	phanTuHienTai.classList.add((nutnao == 'nutTrai') ? ('bienMatKhiAnPrev') : ('bienMatKhiAnNext'));
	phanTuTiepTheo.classList.add((nutnao == 'nutTrai') ? ('diVaoKhiAnPrev') : ('diVaoKhiAnNext'));

}

var chuyenSlideChoNutPhai = function(){
	xacDinh2SlideVaChuyenDong('nutPhai');
}
// Chuyển slide cho nút trái
var chuyenSlideChoNutTrai = function(){
	xacDinh2SlideVaChuyenDong('nutTrai');
}

nutPhai.addEventListener('click', chuyenSlideChoNutPhai);
nutTrai.addEventListener('click', chuyenSlideChoNutTrai);