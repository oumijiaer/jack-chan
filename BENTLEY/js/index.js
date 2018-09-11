var back = document.getElementById('back')
var cd1 = document.getElementById('cd1')
var cd2 = document.getElementById('cd2')
var none1 = document.getElementById('none1')
var flag = true;
console.log(back)
// 滚动条跳转事件
back.onclick=function(){
	var timer=setInterval(function(){
		window.scrollBy(0,-10)
		if(window.scrollY==0){
			clearInterval(timer)
		}
	},10)
}

cd2.onclick=function(){
	if(flag){
		none1.style.display='block'
		flag=false
	}else{
		none1.style.display='none'
		flag=true
	}
	
}