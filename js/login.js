/*
* @Author: 靳振国
* @Date:   2017-09-15 17:14:41
* @Last Modified by:   靳振国
* @Last Modified time: 2017-09-16 16:25:28
*/
let user = document.getElementById('user');
let password = document.getElementById('password');
let button = document.getElementById('button');
	button.onclick =function(){
	let u = user.value.trim();
	let p = password.value.trim();
	if(u == 'lijiefang' && p == '123456'){
		alert('恭喜你密码正确，不过没什么卵用');
	}else{
		location.href=('error.html');
	}
}