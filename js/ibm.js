//鼠标移动到顶部菜单出现菜单详情
var lis = document.querySelectorAll('.header li');
var product = document.querySelectorAll('.hdDetails');
lis[0].onmousemove = function(){
    product[0].style.height = '600px';
}
lis[0].onmouseout = function(){
    product[0].style.height = '0';
}
product[0].onmousemove =function(){
    product[0].style.height = '600px';
}
product[0].onmouseout =function(){
    product[0].style.height = '0';
}
lis[1].onmousemove = function(){
    product[1].style.height = '600px';
}
lis[1].onmouseout = function(){
    product[1].style.height = '0';
}
product[1].onmousemove =function(){
    product[1].style.height = '600px';
}
product[1].onmouseout =function(){
    product[1].style.height = '0';
}
lis[3].onmousemove = function(){
    product[2].style.height = '600px';
}
lis[3].onmouseout = function(){
    product[2].style.height = '0';
}
product[2].onmousemove =function(){
    product[2].style.height = '600px';
}
product[2].onmouseout =function(){
    product[2].style.height = '0';
}
//顶部菜单自动隐藏
var header = document.querySelector('.header');
window.addEventListener('scroll',function(e){
    var h = document.documentElement.scrollTop||document.body.scrollTop;
    if(h < 900){
        header.style = 'height:50px';
    } else {
        header.style = 'height:0;overflow: hidden';
    }
})
//鼠标移动登录出现登录弹出
var login = document.querySelector('.login');
var signDom = document.querySelector('.signDom');
login.onmouseover = function(){
    signDom.style.height = '122px';
}
signDom.onmouseover = function(){
    signDom.style.height = '122px';
}
login.onmouseout = function(){
    signDom.style.height = '0';
}
signDom.onmouseout = function(){
    signDom.style.height = '0';
}
//鼠标移动菜单出现登录弹出
var menuList = document.querySelector('.menuList');
var rightList = document.querySelector('.rightList');
var close = document.querySelector('.close');
var cover = document.querySelector('.cover');
menuList.onclick = function(){
    cover.style.display = 'block';
    rightList.style.right = '0';
}
close.onclick = function(){
    rightList.style.right = '-400px';
    cover.style.display = 'none';
}
//点击下拉菜单收缩
var listDtls = document.querySelectorAll('.listDtls');
var uls =  document.querySelectorAll('.rightList ul');
var num1 = 0;
var num2 = 0;
var num3 = 0;
listDtls[0].onclick=function(){
    if(num1%2==0){
        uls[0].style.display='none';
    }else{
        uls[0].style.display='block';
    }
    num1++;
}
listDtls[1].onclick=function(){
    if(num2%2==0){
        uls[1].style.display='none';
    }else{
        uls[1].style.display='block';
    }
    num2++;
}
listDtls[2].onclick=function(){
    if(num3%2==0){
        uls[2].style.display='none';
    }else{
        uls[2].style.display='block';
    }
    num3++;
}
//鼠标移动出现三级菜单
var details = document.querySelectorAll('.product');
var products = document.querySelectorAll('.products li');
appear(0);
function appear(a){
   for(var i = 0; i < details.length; i++){
       details[i].style.display = 'none';
   }
   details[a].style.display = 'block';
}
for(var j = 0; j < products.length; j++){
    products[j].index = j;
    products[j].onmouseover = function(){
        appear(this.index);
    }
}