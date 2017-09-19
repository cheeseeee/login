/*
* @Author: 靳振国
* @Date:   2017-09-16 16:26:19
* @Last Modified by:   靳振国
* @Last Modified time: 2017-09-17 00:29:36
*/
let info = document.getElementById('info');
let time = setInterval(function(){
	if(info.innerText<=1){
		clearInterval(time);
		location.replace('login.html');
	}
	info.innerText--;
	}
	,1000);