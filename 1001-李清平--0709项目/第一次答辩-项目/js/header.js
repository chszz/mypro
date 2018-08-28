$(function() {

	//	首页-----跳转商品列表
	$(".homepage_Jump").click(function() {
		console.log(11111)
		window.location.href = "homepage.html";
	})
	
		
	//	会员中心---跳转到登录页面
	$(".member_jump").click(function() {
		console.log(111)
		window.location.href="login.html";
	})
	//	登录---跳转登录页面
	$(".fast").click(function() {
		console.log(111)
		window.location.href="login.html";
	})
	//  新品商品---跳转商品列表
	$(".new_Roduct").click(function() {
		window.location.href = "Commodity_detail.html";
	})
//	
//	//	所有商品---跳转商品列表
//	$(".navigation_center").click(function() {
//		window.location.href = "Commodity_detail.html";
//	})	
	











	//	所有商品---跳转商品列表
	$(".navigation_center").click(function() {
		window.location.href = "Commodity_detail.html";
	})
	
	//搜索的点击事件----------------------
//console.log( $("#search"))
    $("#search").click(function(){
    	$("#search").css("borderColor", "#0000FF");
//  	console.log(111111);
		$("#search").animate({width:"220px"},100);
//		$("#search").animate({border:"dodgerblue"},400);
		
    	
    })






	
	
	
	
	
	
	
	
	
	
	

})