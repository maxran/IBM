//点击返回按钮返回上一个页面
var back = document.querySelectorAll('.header div')[0];
back.onclick = function(){
    history.back();
}
//点击checkbox通过改变img改变选中状态
var img = document.querySelectorAll('.checkbox img');
var img1 = document.querySelectorAll('.checkbox img')[0];
var img2 = document.querySelectorAll('.checkbox img')[1];
var img3 = document.querySelectorAll('.checkbox img')[2];
var img4 = document.querySelectorAll('.checkbox img')[3];
var img5 = document.querySelectorAll('.checkbox img')[4];
var img6 = document.querySelectorAll('.checkbox img')[5];
var img7 = document.querySelectorAll('.checkbox img')[6];
var img8 = document.querySelectorAll('.checkbox img')[7];
for(var i = 0; i < img.length; i++){
    console.log(i);
    img[i].onclick = function(){
        if(i%2==0){
            img[i].style.display = 'none';
            img[i+1].style.display = 'block';
        }else{
            img[i].style.display = 'none';
            img[i-1].style.display = 'block';
        }
    }
}
// img1.onclick = function () {
//     img1.style.display = 'none';
//     img2.style.display = 'block';
// }
// img2.onclick = function () {
//     img2.style.display = 'none';
//     img1.style.display = 'block';
// }
// img3.onclick = function () {
//     img3.style.display = 'none';
//     img4.style.display = 'block';
// }
// img4.onclick = function () {
//     img4.style.display = 'none';
//     img3.style.display = 'block';
// }
// img5.onclick = function () {
//     img5.style.display = 'none';
//     img6.style.display = 'block';
// }
// img6.onclick = function () {
//     img6.style.display = 'none';
//     img5.style.display = 'block';
// }
// img7.onclick = function () {
//     img7.style.display = 'none';
//     img8.style.display = 'block';
// }
// img8.onclick = function () {
//     img8.style.display = 'none';
//     img7.style.display = 'block';
// }

