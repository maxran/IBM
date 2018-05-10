//点击<返回上个页面
var p = document.querySelectorAll('p')[0];
p.onclick = function(){
    history.back();
}
//验证
var inp = document.querySelector('.password');
var btn = document.querySelector('.btn');
var spa = document.querySelector('span');
var timer;
btn.onclick = function(){
    var str = '';
    for(i = 0; i < 4; i++){
        str += parseInt(Math.random()*10);
    }
    spa.innerHTML = str;
    var num = 15;
    timer = setInterval(function(){
        btn.value = num;
        num--;
        if(num < 0){
            clearInterval(timer);
            btn.value = '重新输入获取验证码'
        }
    },1000)
}
inp.onblur = function(){
    if(this.value == spa.innerHTML&&this.value!=''){
        clearInterval(timer);
        btn.value = '验证成功'
    }
}
//正则验证用户名
var phoneNum = document.querySelector('.phoneNum');
var login = document.querySelector('.login');
var win;
var pattern = /\S/ig;
login.onclick = function(){
    var res = pattern.test(phoneNum.value);
    if(res){
        win = window.open('mogujie.html','_self');
    } else{
        phoneNum.value = '请输入正确用户名' ;
    }
}
phoneNum.onfocus = function(){
    phoneNum.value = '';
}

