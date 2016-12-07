
$(function(){

	$('#headerbox').load('header.html?_'+Math.random(),function(){
		   
//	$('#headerbox #wrap-header').removeAttr('position','fixed');
//	$('#headerbox #wrap-nav').removeAttr('position','fixed');
		
	});
	$('#footbox').load('footer.html?_'+Math.random());

//	
	$('.xiang-r-3 span').click(function(){
		$('.xiang-r-3 span').css('border-color','#C1C1C1');
		$(this).css('border-color','orange');
	})
	
	$('.xiang-r-3 .div3 .i1').click(function(){
		var num=$(this).next().val();
		
		if(num==0){
			$(this).next().text('0');
			return false;
		}
		$(this).next().val(--num);
		
	})
	
	$('.xiang-r-3 .div3 .i2').click(function(){
		
		var num=parseInt($(this).prev().val());
		 num += 1;

		$(this).prev().val(num);
		
	})
	
	//回到顶部
   
   $(window).scroll(function(){
   	    $('.otop').click(function(){
   	      $(window).scrollTop(0);
        })
   	  
   	 
   	  
   })
   
   $('#totop .li1').click(function(){
   	 $('#totop').hide();
   	
   })
   
   
   
   
   //出现微信扫描
   $(window).scroll(function(){
   	     
   	     var oheight=$(this).scrollTop();
   	     if(oheight>=700){
   	          $('#weixingsao').show();	
   	     }else{
   	          $('#weixingsao').hide();	
   	     }
   	     
   	
   })
   
	
	//放大镜
	$(".bigPic").jqueryzoom({
				  xzoom: 500,//放大区域宽度
				  yzoom: 500,//放大区域高度
				  preload: 1,//是否显示预加载
				  offset:10,//放大区域偏离小图的距离
				  position: "right",//放大区域显示的位置（left,right）
				  lens:true //是否显示小图上的透明区域
	             });
	
	
	//商品信息hover变色
	$('.shangping span').hover(function(){
		$('.shangping span').css('background','#efefef');
		$(this).css('background','#ea7514')
		
	})
	
	
	//立即购买
	$('.xiang-r-4 .p2 .span1').click(function(){
		console.log('立即购买');
		
		
		
	})
	
	
	//加入购物车
	
	// 商品数量
	 var i=0;
	 
	 //手动变更的数量
		$('.xiang-r-3 .div3 input').focus(function(){
			console.log('aaaa');
			$(this).val('');
		}).blur(function(){
			if($(this).val() <= 0 || /\D/gi.test($(this).val())) {
			 $(this).val(1);
		     }else{
		     	$(this).val($(this).val());
		     }
		})
		   
	           
	$('.xiang-r-4 .p2 .span2').click(function(){
		if($('.xiang-r-3 .div3 input').val()!=0){
			i=$('.xiang-r-3 .div3 input').val();
		}else{
			alert('商品的数量为零');
		  	return false;
		}
		
		console.log('加入购物车');
		//图片飞到购物车里面
		var  $img=$('#imgshang').clone(true);
		 console.log($img);
		$img.css({
			'position':'absolute',
			'left':$('#imgshang').offset().left,
			'top':$('#imgshang').offset().top,
			 'z-index':1000,
			}).appendTo('.xiang-l');
		 console.log($img.offset().left);
		 console.log($img.offset().top);	
		
		 $img.animate({'left':$('#totop .li3').offset().left,'top':$('#totop .li3').offset().top,'width':0,'height':0},1000,function(){
		 	 
$('<span>'+i+'</span>').css({'width':30,'height':30,'border-radius':"50%",'background':'red','display':'block','color':'white','position':'absolute','left':10,'top':93,'opacity':0.8}).appendTo($('#totop .li3'));
		 	
		 })		 
		

		 //把数据传到cookie里面
		 //思路：把商品的属性用对象的形式编写，再序列化成字符串的形式传到cookie里面,先要判断cookie里有没有对象，如果没有就创建，如果有把cookie里面的对象取出来和现在的对象做比较，把现在的数量加上去
		 
		 //把cookie里的信息获取出来
		 //如果有这个对象就把对象拿出来,没有就创建
		 //http://127.0.0.1:8020/Myproject/detail.html?goodid=2
//		 截取字符串 获取id
		  //?goodid=2
	        var myid=window.location.search.split('=')[1];
	          console.log(myid);  
		 
		 
		// console.log($.cookie('mydata')) ;
		 if (($.cookie('mydata') != 'null') && ($.cookie('mydata') != null)) {
		 	var jsonobj=JSON.parse($.cookie('mydata'));
		 	
		 	console.log('111')
		 } else{
		 	var jsonobj=[];
		 	
		 	console.log('222');
		 }
		  
		  var jsondata={
		 	oid:$('.xiang-r-1 .p1 a').html(),
		 	pinpai:$('.xiang-r-1 .p2 .span1').html(),
		 	price:$('.xiang-r-2 .p1 .oprice').html(),
		 	img:$('#imgshang').attr('src'),
		 	num:$('.xiang-r-3 .div3 input').val()
		 }
		
		 console.log($('.xiang-r-1 .p1 a').html());
		 console.log($('.xiang-r-1 .p2 .span1').html());
		 console.log($('.xiang-r-2 .p1 .oprice').html());
		 console.log($('#imgshang').attr('src'));
		 console.log($('.xiang-r-3 .div3 input').val());
		 
		
		 //遍历对象
		 var istrue=false;
		 var samesindex=0;
		
		 
         console.log(Object.keys(jsonobj).length);
         console.log($(jsonobj).length);
//      console.log(typeof jsonobj);
     //Object.keys(jsonobj).length   获取达到的对象的属性长度
           for (var j=0;j<Object.keys(jsonobj).length;j++) {
		 	   console.log('执行');
		 	
		 	if (jsonobj.oid==$('.xiang-r-1 .p1 a').html()) {
		 		console.log('有相同的商品');
		 		samesindex=j;
		 		istrue=true;
		 	} 
		 }	
        
		 
		 if(istrue){
		 	jsonobj.num =parseInt(jsonobj.num) +parseInt(jsondata.num);
		 	console.log(jsonobj.num);
		 	var jsonstr=JSON.stringify(jsonobj);
		 	
		 }else{
		      console.log(typeof jsonobj);
		 	jsonstr=JSON.stringify(jsondata);
		 }
		     console.log(jsonobj);
		 
		 
		 //把对象序列化成字符串
		
		console.log(jsonstr);
		
		 $.cookie('mydata',jsonstr,{expires: 7});
		 
		 
		 
	})
	
	
	//加入购物车
	$('.shangping .i2').click(function(){
		console.log('加入购物车');
		
	})
	//=============================评论   后期需要写到一个json文件里然后在读取出来显示
	//点击切换各种品论
	$('.pinlun-b ul li').click(function(){
		$('.pinlun-b ul li').css('background','#efefef');
		$(this).css('background','white');
		$('.pinlun-b ul li').find('.boxheight').css({'display':'none','z-index':'-2'});
		
		$(this).find('.boxheight').css({'display':'block','z-index':'-2'});
		
	})
	
	//点击按钮翻页
	$('.quanbu span a').click(function(){
		$('.quanbu span a').css('border-color','#C1C1C1');
		$(this).css('border-color','orange');
	})
	
	
	
	
	
	//发表评论
	$('.pinlun-t-r .fapinlun').click(function(){
	   
      if($.cookie('username')==null || $.cookie('username')=='null' ){
      	alert('登录才可以评论');
      	if (confirm('是否前往登录')) {
      		window.location.href="login.html";
      	} else{
      		return false;
      	}
      }
      
      
      $('#motai').css('display','block');	
	})
	
	//模态窗口
	$('#motaiclose').click(function(){
		$('#motai').css('display','none');
		$('#motaitxt').val('');
	})
	
	$('#motaiset').click(function(){
		var str=$('#motaitxt').val();
		
		if(str.length==0){
			alert('评论不可以为空');
			return false;
		}
		
		console.log(str);
		var da=new Date();
		var year=da.getFullYear();
		var month=da.getMonth();
		var day=da.getDate();  //代表的是今天是几号
		var hour=da.getHours();
		var minute=da.getMinutes();
		var second=da.getSeconds();
		
		
		$('<div class="box clear box1"><div class="fl box-l"><p><img src="img/yonghu.gif"/></img></p><p>'+'xxxx'+'</p></div><div class="fl box-r clear"><div class="fl"><img src="img/xiaoxie.jpg"/></div><ul class="fl oul"><li>'+str+'</li><li>'+'bbb'+'</li><li class="clear"><p>'+'aaaa'+'</p><span>'+year+'-'+month+'-'+day+'-'+hour+':'+minute+'</span></li></ul></div></div>').insertBefore('.box1').addClass('box1').next().removeClass('box1');
		
		if($('.boxheight .box').eq(4)){
		  $('.boxheight .box').eq(4).hide();
	}
		
	})
	
	
	
	
	
	
	
	
})

