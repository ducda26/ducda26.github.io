document.addEventListener("DOMContentLoaded",function () {
	//Khai báo một số biến cần dùng
	var menudo = document.querySelector('.menu');
	// console.log(menudo);
	var trangthaimenudo = 'duoi100';

	var chungtoi = document.querySelector('.chungtoi');
	// Chặn đầu hiển thị chungtoi
	var vtkhoivang = chungtoi.offsetTop;
	var trangthaikhoivang = 'duoi';
		//Kiểm tra
		// console.log(chungtoi.offsetTop);

	// Chặn cuối hienthichungtoi
	var khoangcachhienthi = 100; //Đây là khoảng thời gian chungtoi hiển thị
	var chancuoi = vtkhoivang + khoangcachhienthi;
	// console.log(vtkhoivang);
	// console.log(chancuoi);


	window.addEventListener('scroll', function(){
		console.log(window.pageYOffset);
		if(window.pageYOffset > 100){
			if(trangthaimenudo == 'duoi100'){
				trangthaimenudo = 'tren100';
				menudo.classList.add('menuden');
			}
		}
		else if (window.pageYOffset <= 100){
			if(trangthaimenudo == 'tren100'){
				trangthaimenudo = 'duoi100';
				menudo.classList.remove('menuden');
			}
		}
		//Xử lý cho khối vàng
		if((window.pageYOffset > vtkhoivang) && (window.pageYOffset < chancuoi)) {
			if(trangthaikhoivang == 'duoi'){
				trangthaikhoivang = "danghienthi";
				chungtoi.classList.add('vangdunglai');
			}
		} else if((window.pageYOffset < vtkhoivang) || (window.pageYOffset > chancuoi)){
			if(trangthaikhoivang == 'danghienthi'){
				trangthaikhoivang = 'duoi';
				chungtoi.classList.remove('vangdunglai');
			}
		}
	})

},false);