$(function(){
	//---------------引入头部
	$("#headerHea").load("header.html");
	//---------------引入尾部
	$("#footerTT").load("footer.html");
	
	
	
	
	
//	判断正则
        	var arr=$("#search_").val()
//      	var arr2=$(".input_").val()
            var reg=/^1[3|5|7|8]\d{9}$/;
				$("#search_").blur(function(){
				if(!reg.test($(this).val())){
					$(this).next().show();
				}else{
					$(this).next().hide()
				}
			})
})
