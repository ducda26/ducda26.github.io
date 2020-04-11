$(function() {
	
	//Cho thời gian chạy tự động sau một khoảng thời gian
	thoigian = setInterval(function () {
		// Cách 1: Copy đoạn code nút next
		// Cách 2: sử dụng hàm sau
		$('.next').trigger('click');
	},3000);

	// Viết code cho nút next

	$('.next').click(function(event) {
		
		//Khi click nút next rồi thì bỏ tính năng chạy tự động
		clearInterval(thoigian);

		var sau = $('.active').next();

		//Xử lý cho phần nút
		var vitri = $('.xanh').index() + 1;
		$('.nutslide ul li').removeClass('xanh');
		if (vitri == $('.nutslide ul li').length) {
			vitri = 0;
		}

		$('.nutslide ul li:nth-child('+ (vitri + 1) +')').addClass('xanh'); // Số thứ tự thằng tiếp theo được nút xanh nên cộng thêm 1

		//Xử lý cho phần slide

		// console.log(sau.length); // có nghĩa là đến slide cuối cùng rồi
		if(sau.length == 0)
		{
			$('.active').addClass('sangbentrai').one('webkitAnimationEnd', function(event) {
				$('.sangbentrai').removeClass('sangbentrai');
				});
			// first-child : phần tử con đầu tiên
			$('.anhslide ._1slide:first-child').addClass('vaobenphai').one('webkitAnimationEnd', function(event) {
			// Bỏ .active đi
			$('.active').removeClass('active')
			// Cho slide sau nhận active
			$('.vaobenphai').addClass('active').removeClass('vaobenphai');
			});
		} else {
			// code cho phần addClass ban đầu
			$('.active').addClass('sangbentrai').one('webkitAnimationEnd', function(event) {
				$('.sangbentrai').removeClass('sangbentrai');
			});
			sau.addClass('vaobenphai').one('webkitAnimationEnd', function(event) {
				// Bỏ .active đi
				$('.active').removeClass('active')
				// Cho slide sau nhận active
				$('.vaobenphai').addClass('active').removeClass('vaobenphai');
			});

		}	
	}); // end nút next


	$('.prev').click(function(event) {
		
		//Hủy thời gian chạy tự động khi đã ấn vào nút prev
		clearInterval(thoigian);

		var truoc = $('.active').prev();

		//Xử lý cho phần nút
		var vitri = $('.xanh').index() + 1;
		$('.nutslide ul li').removeClass('xanh');
		if (vitri == 1) {
			vitri = $('.nutslide ul li').length +1;
		}

		$('.nutslide ul li:nth-child('+ (vitri - 1) +')').addClass('xanh'); // Số thứ tự thằng tiếp theo được nút xanh nên cộng thêm 1


		// Xử lý cho phần slide

		if(truoc.length == 1){

			$('.active').addClass('sangbenphai').one('webkitAnimationEnd', function(event) {
				$('.sangbenphai').removeClass('sangbenphai');
				});

			truoc.addClass('vaobentrai').one('webkitAnimationEnd', function(event) {
					// Bỏ .active đi
					$('.active').removeClass('active')
					// Cho slide sau nhận active
					$('.vaobentrai').addClass('active').removeClass('vaobentrai');
				});
		} else {
			$('.active').addClass('sangbenphai').one('webkitAnimationEnd', function(event) {
				$('.sangbenphai').removeClass('sangbenphai');
				});

			$('.anhslide ._1slide:last-child').addClass('vaobentrai').one('webkitAnimationEnd', function(event) {
				// Bỏ .active đi
				$('.active').removeClass('active')
					// Cho slide sau nhận active
				$('.vaobentrai').addClass('active').removeClass('vaobentrai');
			});
		}
	});

	//code cho nút chuyển slide bên dưới
	$('.nutslide ul li').click(function(event) {
		
		//tất cả không nút nào xanh cả
		$('.nutslide ul li').removeClass('xanh');

		//this = nút được click
		$(this).addClass('xanh');

		// Code xử lý cho slide

		// Cho slide hiện tại biến mất

		$('.active').addClass('sangbenphai').one('webkitAnimationEnd', function(event) {
			$('.sangbenphai').removeClass('sangbenphai');
		});

		// console.log($(this).index()+1) // Hàm index bắt đầu bằng số 0

		$('.anhslide ._1slide:nth-child('+ ($(this).index()+1) +')').addClass('vaobentrai').one('webkitAnimationEnd', function(event) {
			// Bỏ .active đi
			$('.active').removeClass('active');
			// Cho slide sau nhận active
			$('.vaobentrai').addClass('active').removeClass('vaobentrai');
		});


	});


});