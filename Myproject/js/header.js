

$(function(){
	
	if ($.cookie('username') != null && $.cookie('username') != 'null' ) {
		var num1=0;  var num2=0;
	if ($.cookie('mydata') !=null && $.cookie('mydata') !='null') {
		$('.mygood').html('');
		var _data1=JSON.parse($.cookie('mydata'));
	    var goodstr1=_data1.oid;		
    	$('.mygood').append($('<span>'+goodstr1+'</span>').css('color','red'));
	    num1=parseInt(_data1.num);
	}
	if ($.cookie('mydata2') !=null && $.cookie('mydata2') !='null') {
		var _data2=JSON.parse($.cookie('mydata2'));
	    var goodstr2=_data2.oid;	
	  $('.mygood').append($('<span>'+goodstr2+'</span>').css('color','red'));
	     num2=parseInt(_data2.num);
	} 
	
	$('.mygoodnum').text(num1+num2);
	}
	
	
	//搜索框提示功能

	
	 
})




