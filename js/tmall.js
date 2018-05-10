//导航栏出现二级菜单
var myTB = document.querySelector('.myTB');
var myTBlist = document.querySelector('.myTB div');
var favorite = document.querySelector('.favorite');
var favoriteList = document.querySelector('.favorite div');
myTB.onmouseover = function(){
    myTBlist.style.display = 'block';
}
myTB.onmouseout = function(){
    myTBlist.style.display = 'none';
}
favorite.onmouseover = function(){
    favoriteList.style.display = 'block';
}
favorite.onmouseout = function(){
    favoriteList.style.display = 'none';
}
//显示和隐藏的shopSonDtls菜单
var shopSonDtls = document.querySelector('.shopSonDtls');
var shopSonLis = document.querySelectorAll('.shopSonLi');
for(i = 0; i < shopSonLis.length; i++){
	shopSonLis[i].index = i;
	shopSonLis[i].onmouseover = function(){
		shopSonDtls.style = 'display:block';
	}
}
for(j = 0; j < shopSonLis.length; j++){
	shopSonLis[j].index = j;
	shopSonLis[j].onmouseout = function(){
		shopSonDtls.style = 'display:none';
	}
}
shopSonDtls.onmouseover = function(){
    shopSonDtls.style = 'display:block';
}
shopSonDtls.onmouseout = function(){
    shopSonDtls.style = 'display:none';
}
//轮播图
var underBtn = document.querySelector('.underBtn');
var underLi = document.querySelectorAll('.underBtn li');
var divs = document.querySelectorAll('.adBox div');
var adBox = document.querySelector('.adBox');
var index = 0;
var li1 = underLi[0];
var li2 = underLi[1];
var li3 = underLi[2];
var li4 = underLi[3];
var li5 = underLi[4];
var li6 = underLi[5];
var timer;
hideDiv(0);
function hideDiv(a){
    for(i = 0; i < divs.length; i++){
        divs[i].style.display = 'none';
        underLi[i].style.background = 'grey';
    }
    divs[a].style.display = 'block';
    underLi[a].style.background = 'white';
}
time();
function time(){
    timer = setInterval(function(){
        index++;
        if(index > 5){
            index = 0;
        }
        hideDiv(index);
    },2000)
}
adBox.onmouseover = function(){
    clearInterval(timer);
    console.log(1)
}
adBox.onmouseout = function(){
    console.log(1)
    time();
}
li1.onmouseover = function(){
	clearInterval(timer);
	hideDiv(0)
}
li1.onmouseout = function(){
	time();
}
li2.onmouseover = function(){
    clearInterval(timer);
    hideDiv(1)
}
li2.onmouseout = function(){
    time();
}
li3.onmouseover = function(){
    clearInterval(timer);
    hideDiv(2)
}
li3.onmouseout = function(){
    time();
}
li4.onmouseover = function(){
    clearInterval(timer);
    hideDiv(3)
}
li4.onmouseout = function(){
    time();
}
li5.onmouseover = function(){
    clearInterval(timer);
    hideDiv(4)
}
li5.onmouseout = function(){
    time();
}
li6.onmouseover = function(){
    clearInterval(timer);
    hideDiv(5)
}
li6.onmouseout = function(){
    time();
}

//天猫超市商品切换
!function(){
	var lis = document.querySelectorAll('.adSon1Top1 li');
	var li1 = document.querySelectorAll('.adSon1Top1 li')[0];
	var li2 = document.querySelectorAll('.adSon1Top1 li')[1];
	var img = document.querySelector('.adSon1Top2 img');
	var num = 18;
	var index = 0;
	var timer;
	time();
	li1.onmouseover = function(){
		img.src = 'img/ad18.jpg';
		clearInterval(timer);
	}
	li1.onmouseout = function(){
		time();
	}
	li2.onmouseover = function(){
		img.src = 'img/ad19.jpg';
		clearInterval(timer);
	}
	li2.onmouseout = function(){
		time();
	}
	function time(){
	timer = setInterval(function(){
			num++;
			if(num > 19){
				num = 18;
			}
			img.src = 'img/ad' + num + '.jpg';
		},2000)
	}
}();
//左侧边栏一定高度隐藏
var lsideNav = document.querySelector('.lsideNav');
window.addEventListener('scroll',function(e){
    var h = document.documentElement.scrollTop||document.body.scrollTop;
    if(h > 600){
        lsideNav.style = 'width:35px;height:369px';
    } else {
        lsideNav.style = 'width:0;height:0';
    }
})
//右侧边栏效果
var symbol1 = document.querySelector('.symbol1');
var rsideDtls1 = document.querySelector('.rsideDtls1');
var symbol2 = document.querySelector('.symbol2');
var rsideDtls2 = document.querySelector('.rsideDtls2');
var symbol3 = document.querySelector('.symbol3');
var rsideDtls3 = document.querySelector('.rsideDtls3');
var symbol4 = document.querySelector('.symbol4');
var rsideDtls4 = document.querySelector('.rsideDtls4');
symbol1.onmouseover = function(){
    rsideDtls1.style = 'right:35px;z-index:800;opacity:.8';
}
symbol1.onmouseout = function(){
    rsideDtls1.style = 'right:90px;z-index:800;opacity:0';
}
symbol2.onmouseover = function(){
    rsideDtls2.style = 'right:35px;z-index:800;opacity:.8';
}
symbol2.onmouseout = function(){
    rsideDtls2.style = 'right:90px;z-index:800;opacity:0';
}
symbol3.onmouseover = function(){
    rsideDtls3.style = 'right:35px;z-index:800;opacity:.8';
}
symbol3.onmouseout = function(){
    rsideDtls3.style = 'right:90px;z-index:800;opacity:0';
}
symbol4.onmouseover = function(){
    rsideDtls4.style = 'right:35px;z-index:800;opacity:.8';
}
symbol4.onmouseout = function(){
    rsideDtls4.style = 'right:90px;z-index:800;opacity:0';
}
//头部导航栏隐藏和出现
var hideTop = document.querySelector('.hideTop');
window.addEventListener('scroll',function(e){
    var h = document.documentElement.scrollTop||document.body.scrollTop;
    if(h > 600){
        hideTop.style = 'height:50px';
    } else {
        hideTop.style = 'height:0';
    }
})
