
$(function(){
	
  $('#headerbox').load('header.html?_'+Math.random());
  $('#footerbox').load('footer.html?_'+Math.random());
  
  
  $('.location ul li').mouseenter(function(){
  $('.location ul li').css('border','1px solid white');
  	  $(this).css({'border':'1px solid orange'});
  	  $(this).children('ul').css('display','block');
  	  
  }).mouseleave(function(){
  	 $(this).css('border','1px solid white');
  	 $(this).children('ul').css('display','none');
  });
  
  $('.location ul li ul').mouseleave(function(){
  	$(this).css('display','none')
  	
  })
  
  $('.xiala').click(function(){
  	$(this).children('label').text('经选项');
  	$(this).children('i').removeClass('fa fa-hand-o-down').addClass('fa fa-hand-o-up');
  	$('.ohide').slideToggle();
  	
  	if($('.ohide').height()==0){
  		$(this).children('label').text('更多选择(颜色，尺码等)');
  	$(this).children('i').removeClass('fa fa-hand-o-up').addClass('fa fa-hand-o-down');

  		
  	}
  	
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
  
  
  
  
  //生成数据json
  $.ajax({
  	type:"get",
  	url:"jsonlist/list.txt",
  	async:true,
  	success:function(_data){
  		var datalist=typeof _data=='string'? JSON.parse(_data) :_data;
  		
  		get_json(datalist);
  	}
  	
  });
  
  //到了第几页    json数据里到了第几页
  
  function get_json(respon){
  	//每一页共有多少条数据  一共有多少条
  	var pagedatanum=respon.pageSize;
    var countnum=respon.totalCount;
    
    //一共有多少个按钮
    var btnleght= Math.ceil(countnum/pagedatanum);
    $('.totalye').html(btnleght);
     //声明一个空的字符串来存储按钮
     var btnstr='';
     for (var i=0;i<btnleght;i++) {
     	
     	btnstr += '<button type="button" class="btn page">'+(i+1)+'</button>';
     }
     console.log(btnstr);
     //在.btn-group .pre插入
     $('.pagnbtn .btn-group button:first').after(btnstr);
    
     //修改当前是第几页
     var index=1;
     $('.currentye').html(index);
     
     //显示第一页
    showmes(index,respon.result,btnleght,countnum,pagedatanum); 
    
    //点击页码显示所对应的数据
    
    $('.btn-group').on('click','.page',function(){
    	
    	$('.btn-group .btn').css('border-color','deepskyblue');
    	
    	$(this).css('border-color','orange');
    	$('.goodshow').remove();
    	//这里的新添加的按钮的下标是从零开始的，所以要下标加一
    	index=$('.page').index(this)+1;
    	$('.currentye').html(index);
    	showmes(index,respon.result,btnleght,countnum,pagedatanum);
    })
    
    //点击页数滚回数据位置
    $('.btn-group .btn').click(function(){
    	
    	if($(window).scrollTop()>600){
    		var timer=setInterval(function(){
    			$(window).scrollTop(function(){
    				//缓冲运动
    				var speed=$(window).scrollTop()/8;
    				$(window).scrollTop($(window).scrollTop()-speed);
    			})
    			
    			if($(window).scrollTop()<350){
    				clearInterval(timer);
    			}
    			
    		},300)
    	}
    	
    	
    	
    })
    
 
    
    //上下页
    $('.btn-group .prev').click(function(){
    	console.log('aaa');
    	$('.btn-group .btn').css('border-color','deepskyblue');
    	
    	$(this).css('border-color','orange');
   
    	if(index==1){
    		  alert('已是最前页');
    	      return false;
    	}
    	//清掉之前的数据  然后再调用生成的方法
    	$('.goodshow').remove();
    	     index--;
    		 $('.currentye').html(index);
    	     showmes(index,respon.result,btnleght,countnum,pagedatanum);    	
    })
    
    $('.btn-group .next').click(function(){
    	$('.btn-group .btn').css('border-color','deepskyblue');
    	
    	$(this).css('border-color','orange');
    
    	if(index==btnleght){
    		 alert('已是最后页');
    	      return false;
    		
    	}
    	$('.goodshow').remove();
    	index++;
    	 $('.currentye').html(index);
    	 showmes(index,respon.result,btnleght,countnum,pagedatanum);
    })
    
    //上面的上下页
    $('.lastye').click(function(){
    	console.log('aaa');
   
    	if(index==1){
    		  alert('已是最前页');
    	      return false;
    	}
    	$('.goodshow').remove();
    	     index--;
    		 $('.currentye').html(index);
    	     showmes(index,respon.result,btnleght,countnum,pagedatanum);    	
    })
    
    $('.nextye').click(function(){
    
    	if(index==btnleght){
    		 alert('已是最后页');
    	      return false;
    		
    	}
    	$('.goodshow').remove();
    	index++;
    	 $('.currentye').html(index);
    	 showmes(index,respon.result,btnleght,countnum,pagedatanum);
    })
    
    
    
    
  	
  }
  
 
  
  //把到了第几页的数据动态加到显示区域内  显示第几页的商品
  //index下标   respon总数据   btnleght一共有多少页   countnum数据的总条数   pagedatanum每一页有多少条
  function showmes(index,respon,btnleght,countnum,pagedatanum){
  	
  	   //当前页数的条数
  	   var currentnum=0;
  	   if(index==btnleght){//标示是最后一页l
  	   	  currentnum=countnum-(index-1)*pagedatanum;
  	   }else{
  	   	  currentnum=pagedatanum;
  	   }
  	   
  	    //依次循环把当前页面上所有的对象都遍历出来
  	    for (var j=0;j<currentnum;j++) {
  	    	//从currentnum*(index-1)条开始   一直到j+currentnum*(index-1)条
  	    	var oindex=j+currentnum*(index-1);
  	    	///console.log('sss');
  	    	
  	    	show_dc(respon[oindex].ourl,respon[oindex].src,respon[oindex].title,
  	    		respon[oindex].paizi,respon[oindex].price);
  	    		
  	    }
  	    
  	     $('.goodshow input.jiarche').click(function(){
     
  	 //商品飞的效果
  	 console.log('aaaa');
  	 var newimg= $('#oimg').clone(true);
  	 newimg.css({
  	 	'position':'absolute',
  	 	'left':$('#oimg').offset().left,
  	 	'top':$('#oimg').offset().top,
  	 	
  	  }).appendTo('.goodshow');
  	
  	 newimg.animate({'left':$('#totop .li3').offset().left,'top':$('#totop .li3').offset().top,'width':0,'height':0},2000,function(){
  	 	$('<span>'+'1'+'</span>').css({'width':30,'height':30,'border-radius':"50%",'background':'red','display':'block','color':'white','position':'absolute','left':10,'top':93,'opacity':0.8}).appendTo($('#totop .li3'));
  	 	
  	 	//获取cookie里面的数据
  	 	
  	 	
	 	var jsondata={
	 		'oid':$('.title').html(),
	 		'pinpai':$('.content').html(),
	 		'price':$('.dabox .goodshow .price').html(),
	 		'img':$('#oimg').attr('src'),
	 		'num':1
	 	}
	 	if ( $.cookie('mydata2') !=null && $.cookie('mydata2') !='null') {
	 		console.log('aaa');
	 		var jsonobj=JSON.parse($.cookie('mydata2'));
	 		if(jsonobj.oid == $('.title').html() ){
	 			jsonobj.num =parseInt(jsonobj.num)+parseInt(jsondata.num);
	 			console.log(jsonobj.num);
	 			var jsonstr=JSON.stringify(jsonobj);
	 		}
	 		
	 	}else{
	 		var jsonstr=JSON.stringify(jsondata);
	 	}
	 
	 	
	 	console.log(jsonstr);
	 	$.cookie('mydata2',jsonstr,{expires: 7});
	 	
  	 	
  	 	
  	 })
  	 
  	 
  	
  })
  	
  }
  
  //拼接字符串显示在页面
  function show_dc(ourl,src,title,paizi,price){
  	   //console.log('aaa');
    	$('.dabox').append( '<li class="goodshow"><a href=" '+ourl+' "><img src=" '+src+' " id="oimg"/><div class="ojunma"><span>可售尺码</span><span>均码</span></div></a>'+'<p class="title">'+title+'</p>'+'<p class="content">'+paizi+'</p>'+'￥<p class="price">'+price+'</p>'+'<input type="button" class="jiarche" value="加到购物车"/>'+'</li>' );	
   
  }
  
 
     

  

  
  //轮播图


 var ullist=document.getElementsByClassName('ullist')[0];
 var lilist=ullist.getElementsByTagName('li');
 
 ullist.innerHTML += ullist.innerHTML;
 var owidth=lilist[0].offsetWidth;
 console.log(lilist.length);
 ullist.style.width=owidth*lilist.length+"px";
 
 //下标
 var index=0;
 //目标值
 var targetnum=0;
 
 //自动滑动
 
   var timer=setInterval(move,3000);
   function move(){
   	index++;
   	targetnum=-index*owidth;
   	
   	startMove(ullist,'left',targetnum,next);
   	
   }
   
   //判断是否到了第四张
   function next(){
   	if(index==lilist.length/2){
   		index=0;
   		ullist.style.left=0;
   	}
   	
   }
   
   function btnmove(){
   	move();
   	clearInterval(timer);
   	timer=setInterval(move,3000);
   	
   }
   
   //点击上下页
   //上页
   $('.lunbobox .oprev').click(function(){
   	  if(index==0){
   	  	 index=lilist.length/2-2;
   	  	 ullist.style.left=-lilist.length/2*owidth+'px';
   	  }else{
   	  	index=index-2;
   	  }
   	  next();
   	  btnmove();
   	
   })
   //下页
   $('.lunbobox .onext').click(function(){
   	  next();
   	  btnmove();
   })

   //hover事件
   $('.lilist img').mouseenter(function(){
   	clearInterval(timer);
   	
   }).mouseleave(function(){
   	timer=setInterval(move,3000);
   })
   
  
     //搜索功能
     
  
  
  
  
})

