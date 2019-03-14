//$(".bg").height(document.documentElement.height);
//初始化，图片随机排序
//图片路径数组
var srcArr = ["imgFirst_1", "imgFirst_2", "imgSecond_1", "imgSecond_2", "imgThird_1", "imgThird_2", "imgFourth_1", "imgFourth_2"];

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
    var dataCategory = $(this).attr("src");
    //console.log(dataCategory);

    if (dataCategory.indexOf("imgFirst") != -1) {
        //console.log("data-a");
        $(this).attr("data-category", "data-First");
    } else if (dataCategory.indexOf("imgSecond") != -1) {
        $(this).attr("data-category", "data-Second");
    } else if (dataCategory.indexOf("imgThird") != -1) {
        $(this).attr("data-category", "data-Third");
    } else {
        $(this).attr("data-category", "data-Fourth");
    }
})

var dragObjects = document.getElementsByClassName('drag-object');
var maxW = document.body.clientWidth - dragObjects[0].offsetWidth;
//console.log(maxW);
var maxH = document.body.clientHeight - dragObjects[0].offsetHeight;

for (var i = 0; i < dragObjects.length; i++) {
    dragObjects[i].addEventListener('touchstart', function (e) {
        var ev = e || window.event;
        var touch = ev.targetTouches[0];
        oL = touch.clientX - this.offsetLeft;
        oT = touch.clientY - this.offsetTop;
        $(".temp-storage").val(this.offsetLeft + "|" + this.offsetTop);

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
    dragObjects[i].addEventListener('touchend', function (e) {
        document.removeEventListener("touchmove", defaultEvent);
        var differX = this.offsetLeft - $(".temp-storage").val().split("|")[0];
        var differY = this.offsetTop - $(".temp-storage").val().split("|")[1];
        var dragObjectTop = $(this).offset().top;
        var dragObjectLeft = $(this).offset().left;
        var dragObjectAttr = $(this).attr("src");
        var _this = $(this);
        console.log(dragObjectLeft);
        console.log(dragObjectAttr);
        //获取put-container要写在dom,图片渲染完成之后
        $(".put-container").each(function () {
            if (dragObjectTop > $(this).offset().top) {
                console.log($(this).offset().left);
                if (dragObjectLeft >= $(this).offset().left && dragObjectLeft <= $(this).offset().left + 80) {
                    console.log($(this).attr("data-category"));
                    //如果垃圾匹配垃圾桶，垃圾消失
                    if (dragObjectAttr.indexOf($(this).attr("data-category")) != -1) {
                        _this.remove();
                    } else {
                        //如果垃圾不匹配垃圾桶，出现错误提示
                        layer.msg("它不是这个分类哦");
                    }
                }
            }
        })

        $(this).animate({
            left: "-=" + differX + "px",
            top: "-=" + differY + "px"
        })
    })


}

function defaultEvent(e) {
    e.preventDefault();
}












