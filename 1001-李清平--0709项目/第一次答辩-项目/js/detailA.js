	//---------------引入头部
$("#headyr").load("header.html")
	//---------------引入尾部
$("#footeryr").load("footer.html")



$(function(){
//	---商品详情页--？(色取值)后面的方法
	//获取url中的search	
	function GetQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
//		
		var r = window.location.search.substr(1).match(reg); 
//		
		if (r!=null) return (r[2]); return null; 
	}
//	获取商品id  同过商品id发送ajax--请求商品详情数据
//	
//	var pid=GetQueryString("pid");
//	console.log(pid)
//	darr-创建变量  一开始等于开始状态var darr=null;
	var darr=null;
//	num=0;创建新的变量
	var num=0;
	$.ajax({
//		请求地址---
		url:"Commodity.json",
//		请求方式----
		type:"get",
//		是否异步---
		async:true,
//		success--请求成功函数
		success:function(res){
//			调用商品详情页的--secondkills //json的名字
			 darr=res.secondKillA0;
			console.log(darr)
//          存储一个字符串的新变量                                       
			loaddata(darr)
//			$.each---循环数组
//            darr---数组的名字
//			数组的下标	--index
//          ele---每一个数组的集合/下标

			$("li>goods_img").click(function(){
			window.location.href="Commodity_detail.html?pid="+$(this).attr("pid");
			})
		}
	})
	function loaddata(darr){
		
		var str="";
			$.each(darr, function(index,ele){
				
		   str+='<li pid="'+ele.pid+'">'
			+'<div class="goods_img">'	
				+'<a href="" class="mens_wear">'
					+'<img class="clothes_yi" src="'+ele.imgsrc+'"/>'
					+'<img class="accompany" src="'+ele.xiaimg+'"/>'
				+'</a>'
				+'<a href="" class="shopping_cart">'
					+'<img src="img/049.png"/>'
				+'</a>'
				+'<span class="more">快速查看</span>'
			+'</div>'
			+'<div class="spring">'
				+'<a href="" class="text_cmart5">'
					+'<span>'+ele.name+'</span>'
				+'</a>'
				+'<ul class="Price">'
					+'<li>'+ele.price+'</li>'
					+'<li>5.0折</li>'
				+'</ul>'
			+'</div>'
		 +'</li>'
		 
			});
//			提取body---让它显示在页面中
			$(".classif_ation").html(str)
	}
	//加载更多
	$(".water_bar").click(function(){
		num++;
//		让每点一次进行加加
		if(num==3){
			alert("没有数据了")
			$(".water_bar").html("没有数据了");
		}else{
			$.ajax({
//				请求地址---
				url:"Commodity.json",
//				请求方式----
				type:"get",
//				success--请求成功函数
				success:function(res){
//					创建新的变量datarr
//					加载相对的数据     secondKillA加1  一点击加一secondKillA1
					var datarr=res["secondKillA"+num];
//					res---传入的数据
					console.log(datarr)
//					darr.concat(datarr); 将这两组数据连接
					darr=darr.concat(datarr);
					//	darr-创建变量 一开始等于开始状态             
//				            导入数据——---等于已经加载出来的数据
					loaddata(darr)
					
					
				}
			})
		
		}
	
		
	})
	
})
