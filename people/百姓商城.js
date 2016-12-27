//滚动到一定的距离显示搜索框
var qq=document.getElementById("ppp");
function funss(){
	var st=document.body.scrollTop||document.documentElement.scrollTop;
	if(st>300){
		debugger;
		qq.style.display="block";
	}else{
		qq.style.display="none";
	}
}
window.onscroll=funss;

//客厅家具大图的无缝滚动
var tyw=document.getElementsByName("ktju3")[0];
var typic=document.getElementsByName("ktpic3")[0];
typic.innerHTML+=typic.innerHTML;
		var tytimer;
		function tybegin(){
			if(tyw.scrollLeft==tyw.scrollWidth/2){
				tyw.scrollLeft=0;
			}else{
				tyw.scrollLeft++;
			}
		}
		function tytim(){
			tytimer=setInterval(tybegin,10);
		}
		tytim();
		
//setInterval("tyw.scrollLeft++",10);
//获取显示图片的div元素
var wap=document.getElementById("picb");
//获取盛放图片的div
var con=document.getElementById("bigp");
con.innerHTML+=con.innerHTML;
//alert(con.scrollHeight);//1440
var timer,t;
		function scrollchange(){	
			if(wap.scrollTop%360==0){
				clearInterval(timer);
				t=setTimeout(timers,1000);
				
			}
			if(wap.scrollTop==con.scrollHeight/2){
				wap.scrollTop=0;
			}else{wap.scrollTop++;}							
		}
		//客厅大图的无缝滚动向横向
		//获取最外层的div
		var wap2=document.getElementById("ktju2");
		var pics2=document.getElementById("ktpic");
		var timer2,t2;	
			pics2.innerHTML+=pics2.innerHTML;
			function begins2(){
				if(wap2.scrollLeft%580==0){
					clearInterval(timer2);
					t=setTimeout(beg2,1000);
				}
				if(wap2.scrollLeft==wap2.scrollWidth/2){
					wap2.scrollLeft=0;
				}else{
					wap2.scrollLeft++;
				}
			}
			function beg2(){
				wap2.scrollLeft++;
				timer2=setInterval(begins2,10);
			}
				beg2();
//			setInterval("wap2.scrollLeft++",10);
			wap2.onmousemove=function(){
				clearInterval(timer2);
				clearTimeout(t);
			}
			wap2.onmouseout=function(){
				beg2();
			}
		
//定时器
function timers(){
	wap.scrollTop++;
	timer=setInterval(scrollchange,10);
}
timers();
wap.onmouseover=function(){
	clearInterval(timer);
	clearTimeout(t);
}
wap.onmouseout=function(){
	timers();
}
//选中有边框显示
var divs=document.getElementsByName("clic");
for(var i=0;i<divs.length;i++){
	divs[i].onmouseover=function(){
		this.style.border="1px solid red";
	}
	divs[i].onmouseout=function(){
		this.style.border="1px solid transparent"
	}
}
//二级菜单
var clis=document.getElementsByName("too");
var xs=document.getElementsByName("xianshi");
//for(var i=0;i<clis.length;i++){
//	
//	clis[i].onmouseover=function(){
//		xs[i].style.display="block";
//	}
//}
function clic(){
	xs[0].style.display="block";
}
function dis(){
	xs[0].style.display="none";
}
function chuxia(){
		xs[1].style.display="block";
}
function xiaosh(){
	xs[1].style.display="none";
}
//二级菜单
var kts=document.getElementsByName("keting");
var jus=document.getElementsByName("jiaju");
for(var i=0;i<kts.length;i++){
		kts[i].onmouseover=function(){
			fun(this);		
			}	
		kts[i].onmouseout=function(){
		funs(this);		
		}	
		
}
function fun(obj){
	for(var i=0;i<kts.length;i++){
		if(kts[i]==obj){
			debugger;
			jus[i].style.display="block";
		}else{
			jus[i].style.display="none";
		}
	}
}
function funs(obj){
	for(var i=0;i<kts.length;i++){
		if(kts[i]==obj){
			debugger;
			jus[i].style.display="none";
		}else{
			jus[i].style.display="block";
		}
	}
}
