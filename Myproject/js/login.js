
$(function(){
	
	//合作登录
	$('.ahezuo').mouseenter(function(){
		$(this).next('i').removeClass().addClass('fa fa-sort-up ');
		$('.oul').css('display','block');
	})
	$('.oul').mouseenter(function(){
		$('.oul').css('display','block');
	}).mouseleave(function(){
		$('.oul').css('display','none');
	})
	
	
	
	
	//登录
	
	    var oldname=getCookie("username");
		var oldpass=getCookie("passworld");
		        
              
			
	if(oldname){
			$('#oname').val(oldname);
			$('#opass').val(oldpass);
	  }	   
	  
	   
	$('#btnlog').click(function(){
		    		    	  
		    var name=$('#oname').val();
			var pass=$('#opass').val();
			
			if($('.mian').checked){
				
						//设置有效时间
						var d=new Date();
						d.setDate(d.getDate()+14);
						
						//如果有两个值，则需要加入两次
						setCookie("username",name,d);
						setCookie("passworld",pass,d);
						
						
			   }
			
		if(name==oldname && pass==oldpass){
			console.log('aaa');
			window.location.href="index.html";
		}else{
			alert('用户不存在或密码错误')
		}
		
		
		
	})
	
	
})
