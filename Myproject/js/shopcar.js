

$(function(){
	
	/**
	 * 如何把面向过程变成面向对象    本页面需要后期优化
	 * 
	 * */
	
	
	//获取数据cookie
	if ($.cookie('mydata')!=null && $.cookie('mydata') !='null') {
		 var datalist=JSON.parse($.cookie('mydata'));
		 $('<div class="goodmess-detial-box-boxnum goodmess-detial-box-boxnum1"><input type="checkbox" checked="checked" class="fl xuanze" /><img src="'+datalist.img+'" class="fl" /><div class="fl shuxing"><p>'+datalist.oid+' </p><p>'+datalist.pinpai+' </p></div><span class="fl ogoumaijia">￥：'+datalist.price+'</span><span class="fl oxiaoji oxiaoji1">￥:'+datalist.price*datalist.num+'</span><div class="fl shuliang clear"><button class="fl btnjian">—</button><input type="text" class="iptext fl quiptext1" value="'+datalist.num+'"/><button class="fl btnjia">+</button></div><div class="fl del"><span>移至收藏夹</span><span class="delbtn del1">删除</span></div></div>').appendTo('.goodmess-detial-box');
	}
	
	
	if ($.cookie('mydata2')!=null && $.cookie('mydata2') !='null') {
		var datalist2=JSON.parse($.cookie('mydata2'))
	 	$('<div class="goodmess-detial-box-boxnum goodmess-detial-box-boxnum2"><input type="checkbox" checked="checked" class="fl xuanze" /><img src="'+datalist2.img+'" class="fl" /><div class="fl shuxing"><p>'+datalist2.oid+' </p><p>'+datalist2.pinpai+' </p></div><span class="fl ogoumaijia">￥：'+datalist2.price+'</span><span class="fl oxiaoji oxiaoji2">￥:'+datalist2.price*datalist2.num+'</span><div class="fl shuliang clear"><button class="fl btnjian">—</button><input type="text" class="iptext fl quiptext2" value="'+datalist2.num+'"/><button class="fl btnjia">+</button></div><div class="fl del"><span>移至收藏夹</span><span class="delbtn del2">删除</span></div></div>').appendTo('.goodmess-detial-box');
	}
	
	 
	 //遍历把所有的属性都取出来
	 //index为下标       val为属性名
       
//     if($('.iptext')){
//     	datalist.num=parseInt($('.iptext').val());
//     	console.log($('.iptext').val());
//     	console.log(datalist.num);
//     	
//     }else{
//     	datalist.num=parseInt(datalist.num);
//     	console.log('bb');
//     }
       
	    
	    //显示用户名
	    if ($.cookie('username') !=null && $.cookie('username')!='null') {
	    	var oname=$.cookie('username');
	    	$('<span>用户：'+oname+'</span>').insertBefore($('.header-r-b'));
	    }
	    
	 	
	 	
//        var newnum=parseInt(datalist.num)+parseInt( $('.iptext').val());
//	    $('.iptext').val(newnum);
	    
	 //购物车里的点击按钮数量改变
	 //减   并保存到cookie中
	  var totleprice=0;
	 $('.goodmess-detial-box-boxnum .shuliang .btnjian').click(function(){
	 	//e.stopPropagation();
	 	var num=$(this).next().val();
		
		if(num==0){
			$(this).next().text('0');
			return false;
		}
		$(this).next().val(--num);
		if ($(this).next().hasClass('quiptext1')) {
			console.log('true');
			totleprice=num*datalist.price;
	 	    //上传到cookie中   获取当前的值赋给对象里面的num属性  再一次传给cookie中
	 	    datalist.num=num;
	 	    var jsonstr=JSON.stringify(datalist);
	 	     $('.oxiaoji1').text('￥:'+totleprice);
	 	    $.cookie('mydata',jsonstr,{expires: 7});
	 	    totoalnum();
	 	    console.log(datalist);
		} else{
			console.log('false');
			totleprice=num*datalist2.price
	 	    //上传到cookie中   获取当前的值赋给对象里面的num属性  再一次传给cookie中
	 	    datalist2.num=num;
	 	    var jsonstr=JSON.stringify(datalist2);
	 	     $('.oxiaoji2').text('￥:'+totleprice);
	 	    $.cookie('mydata2',jsonstr,{expires: 7});
	 	    console.log(datalist2);
	 	    totoalnum();
		}
	 	 
	 	  	
		
	 })
	 //加 并保存到cookie中
	
	 $('.goodmess-detial-box-boxnum .shuliang .btnjia').click(function(){
	 	//e.stopPropagation();
	 	var num=parseInt($(this).prev().val());
		 num += 1;
         
		$(this).prev().val(num);
		if ($(this).prev().hasClass('quiptext1')) {
			console.log('true');
			totleprice=num*datalist.price;
	 	    //上传到cookie中   获取当前的值赋给对象里面的num属性  再一次传给cookie中
	 	    datalist.num=num;
	 	    var jsonstr=JSON.stringify(datalist);
	 	     $('.oxiaoji1').text('￥:'+totleprice);
	 	    $.cookie('mydata',jsonstr,{expires: 7});
	 	   totoalnum();
	 	    console.log(datalist);
		} else{
			console.log('false');
			totleprice=num*datalist2.price
	 	    //上传到cookie中   获取当前的值赋给对象里面的num属性  再一次传给cookie中
	 	    datalist2.num=num;
	 	    var jsonstr=JSON.stringify(datalist2);
	 	     $('.oxiaoji2').text('￥:'+totleprice);
	 	    $.cookie('mydata2',jsonstr,{expires: 7});
	 	    console.log(datalist2);
	 	   totoalnum();
		}
	 	
	 })
	 
	 //手动输入 修改和判断
	 $('.quiptext1').focus(function(){
	 	$(this).val('');
	 	
	 	
	 }).blur(function(){
	 	if($(this).val()>=0){
	 		$(this).val($(this).val());
	 		totleprice=$(this).val()*datalist.price;
	 		  $('.oxiaoji1').text('￥:'+totleprice);
	 		  datalist.num=$(this).val();
	 	    var jsonstr=JSON.stringify(datalist);
	 	    $.cookie('mydata',jsonstr,{expires: 7});
	 		  totoalnum();
	 	}else{
	 		$(this).val('0');
	 		 $('.oxiaoji1').text('￥:'+0);
	 		 totoalnum();
	 	}
	 	
	 	
	 })
	 
	  $('.quiptext2').focus(function(){
	 	$(this).val('');
	 	
	 	
	 }).blur(function(){
	 	if($(this).val()>=0){
	 		$(this).val($(this).val());
	 		totleprice=$(this).val()*datalist2.price;
	 		  $('.oxiaoji2').text('￥:'+totleprice);
	 		  datalist2.num=$(this).val();
	 	    var jsonstr=JSON.stringify(datalist2);
	 	    $.cookie('mydata2',jsonstr,{expires: 7});
	 		  totoalnum();
	 	}else{
	 		$(this).val('0');
	 		 $('.oxiaoji2').text('￥:'+0);
	 		 totoalnum();
	 	}
	 	
	 	
	 })
	 
	 
	 
	 //修改价格总
	//默认的总价格显示   
	//修改总的数量
	totoalnum();
	function totoalnum(){
//		console.log($('.oxiaoji1').parent().children().eq(0).attr('checked'));
		if ($('.oxiaoji1').text()!='' && $('.oxiaoji2').text()!='') {
			var totalnum=parseInt($('.oxiaoji1').text().split(':')[1])+parseInt($('.oxiaoji2').text().split(':')[1]);
		
			$('.yixuan').text(parseInt($('.quiptext1').val())+parseInt($('.quiptext2').val()))
		} else if($('.oxiaoji1').text()!='' && $('.oxiaoji2').text()==''){
			var totalnum=parseInt($('.oxiaoji1').text().split(':')[1]);
			$('.yixuan').text(parseInt($('.quiptext1').val()));
		}else if($('.oxiaoji1').text()=='' && $('.oxiaoji2').text()!=''){
			$('.yixuan').text(parseInt($('.quiptext2').val()));
			var totalnum=parseInt($('.oxiaoji2').text().split(':')[1]);
		}else{
			$('.yixuan').text(0);
			var totalnum=0;
		}
	     $('.otatal-show').text('￥'+totalnum); 
	}
	

     //删除数据和清空cookie的数据
     $('.goodmess-detial-box .del1').click(function(){
     	
     		
     		if (confirm('亲你真的不要我了吗?')) {
     	   $.cookie('mydata',null);
     	   $('.goodmess-detial-box-boxnum1').remove();
     	   totoalnum();
     	   alert('删除成功');
     	   }    else{
     	   alert('删除失败');
     	   }
     	
     })
     
      $('.goodmess-detial-box .del2').click(function(){
     	
     		
     		if (confirm('亲你真的不要我了吗?')) {
     	   $.cookie('mydata2',null);
     	   $('.goodmess-detial-box-boxnum2').remove();
     	   totoalnum();
     	   alert('删除成功');
     	   }    else{
     	   alert('删除失败');
     	   }
     	
     })
     
     
     
     //如果全选按钮被选中  则会变颜色
     var $checkbox=$(':checkbox').not('.allxuan');
    $('.goodmess-detial .allxuan').click(function(){
    	//prop表示属性值的改变
    	$checkbox.prop('checked',this.checked)
    	console.log(this.checked);
    	if (this.checked) {
    		$checkbox.parent().css('opacity',1);
    		
    	} else{
    		$checkbox.parent().css('opacity',0.6);
    	}
    	
    	
    })
    
    //每一个的选择按钮
    $('.goodmess-detial-box-boxnum .xuanze').click(function(){
        if (!$(this)[0].kk) {
        	$(this).parent().css({'opacity':0.6});
        	var a=parseInt($('.otatal-show').text().split('￥')[1]);
        	var b= parseInt($(this).parent().children().eq(4).text().split(':')[1]);
          	var c=a-b;
            $('.goodmess-setmeun .otatal-show').text('￥'+c);
            
            //数量的改变
            var d=parseInt($('.yixuan').text());
            var e=parseInt($(this).parent().children().eq(5).children().eq(1).val());
            var f=d-e;
            $('.yixuan').text(f);
        	$(this)[0].kk=true;
        } else{
        
        	$(this).parent().css({'opacity':1});
        	var a=parseInt($('.otatal-show').text().split('￥')[1]);
        	var b= parseInt($(this).parent().children().eq(4).text().split(':')[1]);
          	var c=a+b;
            $('.goodmess-setmeun .otatal-show').text('￥'+c);
            
            //数量的改变
            var d=parseInt($('.yixuan').text());
            var e=parseInt($(this).parent().children().eq(5).children().eq(1).val());
            var f=d+e;
            $('.yixuan').text(f);
        	$(this)[0].kk=false;
        }  	
    })
    
    
	 //全部删除
	 //所有已经勾选的都全部删除
	 
	 $('.allcheck').click(function(){
	 	 var $checkbox=$(':checkbox').not('.allcheck');
	 	$checkbox.prop('checked',this.checked)
    	console.log(this.checked);
    	if (this.checked) {
    		$checkbox.parent().css('opacity',1);
    		
    	} else{
    		$checkbox.parent().css('opacity',0.6);
    	}
	 	
	 })
	 
	 $('.alldele').click(function(){
	 	//$('allcheck')[0].checked  为原生js的属性   而jq是没有的，所以要先把jq转化成js对象
	 	//把js  转化为jq  加一个  $()
       if ($('.allcheck')[0].checked) {
       	   $('.otatal-show').text('0');
       	   $.cookie('mydata',null);
       	   $.cookie('mydata2',null);
       	   $('.goodmess-detial-box-boxnum').remove();
       	   $('.yixuan').text('');
       	   $('.otatal-show').text('￥'+0); 
       }
	 	
	 })
	 
	 
})

