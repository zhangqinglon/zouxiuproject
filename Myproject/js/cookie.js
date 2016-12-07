//设置cookie
				function setCookie(name,value,expires,path,domain,secure){
					//获取到第一个必须的值
					var cookieText=encodeURIComponent(name)+"="+encodeURIComponent(value);
					
					//expires   有效时间
					if(expires instanceof Date){
					   //instanceof  判断是否是这个类型	
						cookieText +="; expires="+expires;
					}
					
					//path   路径
					if(path){
						cookieText +="; path="+path;
												
					}
					//domain  域名
					if(domain){
						cookieText +="; domain="+domain;
					}
					
					//secure 安全
					if(secure){
						cookieText +="; secure";
					}
					//把值赋给   document.cookie
					document.cookie=cookieText;
					return document.cookie;
				}
				
				//获取cookie
				////name2=123; name5=456; name=789
				function getCookie(name){
					//uri解码
					var cookie=decodeURIComponent(document.cookie);
					
					var arr=cookie.split("; ");
					for (var i=0;i<arr.length;i++) {
						var arr2=arr[i].split("=");
						if(arr2.length>=2){
							if(arr2[0]==name){
								return arr2[1];
							}
							
						}
						
					}
						return "";
																													
				}
				
				//删除cookie
				function removecookie(name){
					//先要获取当前的日期     声明一个日期对象 利用日期来移除
					var d=new Date();
					document.cookie=decodeURIComponent(name)+"; expires="+d;
					return document.cookie;
				}
				