

$(function(){
	
	//生成四位验证码
	$('.span1').click(function(){
		var str='';
		for (var i=0;i<4;i++) {
			str +=parseInt(Math.random()*10);
		}
		$('.em1').text(str)
		
	})
	
	//验证验证码
	$('#yan').blur(function(){
		 
		if ($(this).val()==$('.em1').text() && $(this).val().length == 4) {
			$('<i>验证成功</i>').addClass('iyan').appendTo('.yanzheng');
			
		}else{
			$('<i>验证失败</i>').addClass('iyan').appendTo('.yanzheng');
		}
		
	}).focus(function(){
		 $('.iyan').html('');
	})
	
	//密码强度
	$('#pass').blur(function(){
		
		if ( $(this).val().length >=5 && $(this).val().length <=10) {
			console.log('aa');
			$('.one').html('弱');
		}
		if ( $(this).val().length >10 && $(this).val().length <=15) {
			console.log('aa');
			$('.one').html('中');
		}
		if ( $(this).val().length >15 && $(this).val().length <=18) {
			console.log('aa');
			$('.one').html('强');
		}
		
		
		
		
	})
	
	
	
	//其他验证
					$('#loginbox').validate({
					rules:{
					  phone:{
					  	required: true,
					  	isPhone:true,
					  },
					    pass: {
					        required: true,
					        minlength: 5
					   },
						
						 repass: {
						        required: true,
						        minlength: 5,
						        equalTo: "#pass"
						},
						 
						 agree: "required",
						
					},
					messages:{
						username:{required:'必填',minlength:'至少输入二个字符'},
						 pass: {
					        required: "请输入密码",
					        minlength: "密码长度不能小于 5 个字母"
					      },
					      repass: {
					        required: "请输入密码",
					        minlength: "密码长度不能小于 5 个字母",
					        equalTo: "两次密码输入不一致"
					      },
						
					}
					
				});
	
	  //上传数据到cookie
	        
	           var oldname=getCookie("username");
				var oldpass=getCookie("passworld");
					        
		       			
	           
   	           $('.login').click(function(){
	        	   var oname=$('#phone').val();
		           var opass=$('#pass').val();        
	             
	             //设置有效时间
	             var d=new Date();
				 d.setDate(d.getDate()+1);
				 
				 setCookie('username',oname,d);
	        	 setCookie('passworld',opass,d);
	        	 if(oname==oldname && oname.length!=0){
					alert('该用户名已经被注册')
					return false;
				}	
				
				if($('#phone').val().length==0 || $('#pass').val().length==0 || $('#repass').val().length==0 || $('#yan').val().length==0 ){
					alert('输入信息不正确');
					return false;
					
				}
				
				window.location.href="login.html";
	        })
     
	
})

