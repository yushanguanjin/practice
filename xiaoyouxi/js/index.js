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
var dragObject = document.getElementsByClassName("drag-container");
var sortable = new Sortable(dragObject[0], {
    sort:false,
    animation: 150, 
    onStart: function (evt) {
       //拖动的元素初始位置
       var itemLeft = $(evt.item).css("left");
       var itemTop = $(evt.item).css("top");
       console.log(itemLeft,itemTop);

    },
    onEnd:function(evt) {
       //拖动的元素初始位置
       var itemLeft = $(evt.item).position().left;
       var itemTop = $(evt.item).position().top;
       console.log($(evt.item));
    }
})







