//$(".bg").height(document.documentElement.height);
//初始化，图片随机排序
//图片路径数组
var srcArr = ["a_1", "a_2", "b_1", "b_2", "c_1", "c_2", "d_1", "d_2"];

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

    if (dataCategory.indexOf("a") != -1) {
        //console.log("data-a");
        $(this).attr("data-category", "data-a");
    } else if (dataCategory.indexOf("b") != -1) {
        $(this).attr("data-category", "data-b");
    } else if (dataCategory.indexOf("c") != -1) {
        $(this).attr("data-category", "data-c");
    } else {
        $(this).attr("data-category", "data-d");
    }
})

var dragObjects = document.getElementsByClassName('drag-object');
var dragContainer = document.getElementById('drag-container');

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
        var maxW = dragContainer.offsetWidth - dragObjects[0].offsetWidth;
        console.log(dragObjects[0].offsetWidth);
        console.log(maxW);
        var maxH = document.body.clientHeight - dragObjects[0].offsetHeight;

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
        this.style.zIndex = 20;
    })
    dragObjects[i].addEventListener('touchend', function (e) {
        document.removeEventListener("touchmove", defaultEvent);
        var differX = this.offsetLeft - $(".temp-storage").val().split("|")[0];
        var differY = this.offsetTop - $(".temp-storage").val().split("|")[1];
        var dragObjectTop = $(this).offset().top;
        var dragObjectLeft = $(this).offset().left;
        var dragObjectAttr = $(this).attr("src");
        var _this = $(this);
        //console.log(dragObjectTop);
        //console.log(dragObjectAttr);
        //获取put-container要写在dom,图片渲染完成之后
        $(this).animate({
            left: "-=" + differX + "px",
            top: "-=" + differY + "px"
        })
        $(".put-container").each(function () {
            if (dragObjectTop + 40 > $(this).offset().top) {
                console.log($(this).offset().left);
                //console.log($(this).offset().top);
                if (dragObjectLeft >= $(this).offset().left && dragObjectLeft <= $(this).offset().left + 80) {
                    //console.log($(this).attr("data-category"));
                    //console.log($(this).offset().left);
                    //如果垃圾匹配垃圾桶，垃圾停止回到之前起始位置的动画
                    if (_this.attr("data-category") == $(this).attr("data-category")) {
                        console.log($(this).attr("data-category"));
                        //_this.remove();
                        _this.stop();
                        if ($(".drag-object").length == 0) {
                            $(".bgcover").show();
                            $(".tip").show();
                            $(".close").show();
                        }
                    } else {
                        //如果垃圾不匹配垃圾桶，出现错误提示
                        layer.msg("它不是这个分类哦", { time: 1000 });
                    }
                }
            }
        })
    })
}

function defaultEvent(e) {
    e.preventDefault();
}
//点击叉号关闭
$(".close").click(function () {
    //  $(".bgcover").hide();
    //  $(".tip").hide();
    //  $(".close").hide();
    location.reload();
})











