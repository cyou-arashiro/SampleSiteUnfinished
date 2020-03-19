$(document).ready(function(){
	$('.slider').bxSlider({
		auto: true,
		buildPager: function(slideIndex){
			switch(slideIndex){
				case 0:
				return '<img src="./images/view1.jpg" width="150" height="100">';
				case 1:
				return '<img src="./images/view2.jpg" width="150" height="100">';
				case 2:
				return '<img src="./images/view3.jpg" width="150" height="100">';
				case 3:
				return '<img src="./images/view4.jpg" width="150" height="100">';
				case 4:
				return '<img src="./images/view5.jpg" width="150" height="100">';
			}
		}
	});
});

//トップページアクセス時にロゴ表示
$(function() {
  setTimeout(function(){
    $('.start p').fadeIn(1600);
  },500); //0.5秒後にロゴをフェードイン
  setTimeout(function(){
    $('.start').fadeOut(500);
  },2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト
});

function modalfnc(no) {
	var id = `js-popup${no}`;
	var popup = document.getElementById(id);
	if(!popup) return;
	popup.classList.toggle('is-show');
}