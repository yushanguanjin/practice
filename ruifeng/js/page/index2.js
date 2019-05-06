
 // 轮播图
//  var mySwiper = new Swiper('#section1-carrousel', {
//     autoplay: 3000, //可选选项，自动滑动
//     pagination: '.swiper-pagination',
//     paginationClickable: true,
// })

var swiper2 = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    hashNavigation: true
});

console.log($(window).height());
//$(".section").not(":eq(0)").height($(window).height() - 70);


//箭头点击到下一页
$(".down").click(function() {
    var currentPage = $(this).parents(".section").attr("data-anchor");
    var nextPageNumber = parseInt(currentPage.slice(-1)) + 1;
    var nextPage = "page" + nextPageNumber;
    console.log(nextPage);
    window.location.hash = nextPage;
})

//刷新页面后将hash值改为page1
window.reload = function() {
    if (hash != '') {
        location.hash = '';
        window.location.hash = "page1";
    }
}

$(window).load(function() {
    //页面第一次打开以后，鼠标滚动，根据url的hash值在当前页面发生动画

    var hash = window.location.hash;
    if (hash != "#page1") {
        $("#mobile-menu").attr({
            "src":"img/index/mobile_menu2.png"
        })
    } else {
        $("#mobile-menu").attr({
            "src":"img/index/mobile_menu.png"
        })
    }

    window.onhashchange = hashChangeFire;

    function hashChangeFire() {
        var hash = window.location.hash;
        var nextPage = hash.slice(-1);
        //锚点变化，头部菜单样式发生变化
        if (hash != "#page1") {
            $(".header").addClass("header-animate");
            $(".logo-img").attr({
                "src": "img/header/logo-change.png"
            })
            $(".logo-name").css({
                "color": "#000",
                "font-weight": "500"
            })
            $("#menu>li>a").css({
                "color": "#000",
                "font-weight": "500"
            })
            $("#mobile-menu").attr({
                "src":"img/index/mobile_menu2.png"
            })
        } else {
            $(".header").removeClass("header-animate");
            $(".logo-img").attr({
                "src": "img/header/logo.png"
            })
            $(".logo-name").css({
                "color": "#fff",
                "font-weight": "normal"
            })
            $("#menu>li>a").css({
                "color": "#fff",
                "font-weight": "normal"
            })
            $("#mobile-menu").attr({
                "src":"img/index/mobile_menu.png"
            })
        }
        // $(".section").removeClass("animated zoomIn");
        //等浏览器渲染好dom结构再执行动画，在浏览器渲染页面之前加载动画
        // setTimeout(
        //     function() {
        //         $(".section").eq(nextPage - 1).addClass("animated zoomIn");
        //     }, 100)
    }
})

/*第四屏*/
$(".our-customers-img").hover(
    // function() {
    //     $(this).stop().animate({
    //         "top": "-100%"
    //     }, 500)

    // },
    // function() {
    //     $(this).stop().animate({
    //         "top": "100%"
    //     }, 500)

    // }

)
/*第六屏*/
//联系我们
var map = new AMap.Map('container', {
    //zoom:10,
    //resizeEnable: false,
    //scrollWheel:false,
    zoom: 12,
    center: ["121.0412","31.000441"], //中心点坐标
});
//监听地图的click事件，点击地图，允许鼠标滚轮缩小或放大地图
var clickEventListener = map.on('mouseover', function () {
    map.setStatus({ scrollWheel: true });
});
//监听地图的mouseout事件，鼠标移出地图区域，鼠标滚轮缩小或放大地图功能取消
var mouseOutEventListener = map.on('mouseout', function () {
    map.setStatus({ scrollWheel: true });
});
var marker = new AMap.Marker({
    position: map.getCenter(),
    offset: new AMap.Pixel(-13, -30)
});

marker.setMap(map);

// 设置鼠标划过点标记显示的文字提示
marker.setTitle('我是marker的title');

// 设置label标签
// label默认蓝框白底左上角显示，样式className为：amap-marker-label
marker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(20, 20),
    content: "<div class='info'>上海市静安区中山北路900号2号楼211</div>"
});

//地图缩放时，文档不能滚动
//用firefox变量表示火狐代理
var firefox = navigator.userAgent.indexOf('Firefox') != -1;
function MouseWheel(e) { //阻止事件冒泡和默认行为的完整兼容性代码
    e = e || window.event;
    if (e.stopPropagation) { //这是取消冒泡
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    };
    if (e.preventDefault) {//这是取消默认行为，要弄清楚取消默认行为和冒泡不是一回事
        e.preventDefault();
    } else {
        e.returnValue = false;
    };
}
var con = document.getElementById('container');
//要在content内部滚动，而页面不受影响，所以这里获取要滚动的对象

//如果是ff就绑定DOMMouseScroll事件，其他浏览器就用onmousewheel事件触发
firefox ? con.addEventListener('DOMMouseScroll', MouseWheel, false) : (con.onmousewheel = MouseWheel);
/*小屏幕适配*/
$("#mobile-menu").click(function() {
    $(".menu-mobile").toggle();
})