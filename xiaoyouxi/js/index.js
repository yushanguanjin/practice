//$(".bg").height(document.documentElement.height);
//初始化，图片随机排序
//图片路径数组
var srcArr = ["a", "b", "c", "d", "e", "f", "g"];

$(".drag-object").each(function (index, item) {
    //随机返回数组中一张图片选项
    var srcItem = srcArr[Math.floor((Math.random() * srcArr.length))];
    //返回的图片索引
    var srcIndex = srcArr.indexOf(srcItem);
    //从图片路径数组中移出这一项图片路径
    srcArr.splice(srcIndex, 1);
    //console.log(srcIndex);//1 
    //console.log(srcArr);
    $(this).attr("src", "img/" + srcItem + ".png");
})
//图片拖拽
// $(".draggable").on("touchend",function() {
//     console.log(10);
// })

// 判断默认行为是否可以被禁用
// if (e.cancelable) {
//     // 判断默认行为是否已经被禁用
//     if (!e.defaultPrevented) {
//         e.preventDefault();
//     }
// }
var dragObjects = document.getElementsByClassName('drag-object');
var maxW = document.body.clientWidth - dragObjects[0].offsetWidth;
console.log(maxW);
var maxH = document.body.clientHeight - dragObjects[0].offsetHeight;

for (var i = 0; i < dragObjects.length; i++) {
    dragObjects[i].addEventListener('touchstart', function (e) {
        var ev = e || window.event;
        var touch = ev.targetTouches[0];
        oL = touch.clientX - this.offsetLeft;
        oT = touch.clientY - this.offsetTop;

        console.log(this.offsetLeft);
        $(".temp-storage").val(this.offsetLeft+"|"+this.offsetTop);
        
        document.addEventListener("touchmove", defaultEvent, false);
    })


    dragObjects[i].addEventListener('touchmove', function (e) {
        var ev = e || window.event;
        var touch = ev.targetTouches[0];
        var oLeft = touch.clientX - oL;
        var oTop = touch.clientY - oT;
        if (oLeft < 0) {
            oLeft = 0;
        } else if (oLeft >= maxW) {
            oLeft = maxW;
        }
        if (oTop < 0) {
            oTop = 0;
        } else if (oTop >= maxH) {
            oTop = maxH;
        }

        this.style.left = oLeft + 'px';
        this.style.top = oTop + 'px';

    })
    dragObjects[i].addEventListener('touchend', function () {
        document.removeEventListener("touchmove", defaultEvent);
        var  differX =  this.offsetLeft - $(".temp-storage").val().split("|")[0];
        var  differY =  this.offsetTop - $(".temp-storage").val().split("|")[1];
        //斜率
        //var k = differY/differX;
       
        
        //var _this = this;
        //运动轨迹
       
        $(this).animate({
                left:"-="+differX+"px",
                top:"-="+differY+"px"
            })
        },30);
        // setInterval(function() {
            
        //     _this.offsetLeft -=10;
        //     // _this.offsetLeft -=1;
        //     // _this.offsetTop -= (1 - _this.offsetTop + k*_this.offsetLeft)/k;
            
            

        //     // _this.style.left =  _this.offsetLeft + 'px';
        //     // _this.style.top =  _this.offsetTop + 'px';

        //     // console.log(  _this.offsetLeft);
        // },100)
        
   
}

function defaultEvent(e) {
    e.preventDefault();
}







