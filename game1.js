/**
 * Math.PI
 * Math.pow(a,b) a的b次方
 * Math.randow() 0~1之間的數字
 * Math.sqrt() x的平方根
 * Math.abs(-x) 絕對值
 * Math.floor() 取整數(無條件捨去)
 * Math.ceil() 取整數(無條件進位)
 * Math.round() 取整數(四捨五入)
 */

document.getElementById('myButton').onclick=function(){
    let x=Math.random();
    x=x*4;
    x=Math.floor(x);
    if(x==document.getElementById('myInput').value){
        alert("恭喜，您猜對了!");
    }else{
        alert("您猜錯了，這個數字是"+x);
    }
}