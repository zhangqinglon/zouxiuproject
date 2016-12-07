$(function(){

   $('#headerbox').load('header.html?_'+Math.random());
   $('#footerbox').load('footer.html?_'+Math.random());
    
//  $('#wrap-header').css('position','fixed');
//   $('#wrap-nav').css('position','fixed');

   $('.action div').mouseenter(function(){
   	 $(this).css('left',(this.offsetLeft-5));
   }).mouseleave(function(){
   		 $(this).css('left',(this.offsetLeft+5));
   }).click(function(){
// 	   window.location.href='';
   })
   
   //回到顶部
   
   $(window).scroll(function(){
   	    $('.otop').click(function(){
   	      $(window).scrollTop(0);
        })
   	  
   	 
   	  
   })

   
   
   
   
   //尖货
   $('.jianhuo dl').mouseenter(function(){
   	 $(this).css('opacity','0.5');
   }).mouseleave(function(){
   	 $(this).css('opacity','1');
   })
   
   //热荐专题
   $('.zhuanti dl').mouseenter(function(){
 	
   }).mouseleave(function(){
   
   })
   
   //精选卖场
   $('.maichang dl').mouseenter(function(){
   	 $(this).css('opacity','0.5');
   }).mouseleave(function(){
   	 $(this).css('opacity','1');
   })

  //车
  $('.bus').mouseenter(function(){
  	 $(this).css('opacity','0.7');
  }).mouseleave(function(){
  	 $(this).css('opacity','1');
  })




})

