$(function() {

	//---------------引入头部
	$("#headerHea").load("header.html");
	//---------------引入尾部
	$("#footerTT").load("footer.html");

	//一键置顶-----------------------------------------
	$(function() {
		$(window).scroll(function() {
			//				经过鼠标时做出判断--
			if($(window).scrollTop() > 600) {
				//					fadeIn(600); 淡出
				$(".back_top").fadeIn(600);
			} else {
				//					fadeOut(600);淡入 
				$(".back_top").fadeOut(600);
			}
		})
		//			animate--引入动画效果
		//			点击回到顶部----800毫秒(匀速)
		//console.log($(".back_top"))
		$(".back_top").click(function() {
			$("window").animate({
				scrollTop: "0"
			}, 100);
			window.scroll(0, 0);

		})
	})
//轮播图------------------------------------------------》
  var mySwiper = new Swiper ('.swiper-container', {
//  direction: 'vertical',
    loop: true,
//  自动轮播
    autoplay : 1000,
autoplayDisableOnInteraction:false,
    
    // 如果需要分页器
//  pagination: '.swiper-pagination',
//			点击小圆点
    pagination : '.swiper-pagination',
    paginationClickable :true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    

})  
// 2018-7-18周三弄
	//鼠标覆盖停止自动切换
	mySwiper.container[0].onmouseover=function(){
	  mySwiper.stopAutoplay();
	}
	//鼠标移出开始自动切换
	mySwiper.container[0].onmouseout=function(){
	  mySwiper.startAutoplay();
	}


	
	
	
	
})