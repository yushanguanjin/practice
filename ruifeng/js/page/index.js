$(function () {
    //全屏滚动
    $('#fullPage').fullpage({
        sectionsColor: ['#ffffff', '#4BBFC3', '#7BAABE', '#f90', '#ff0000', '#00ff00', '#0000ff', '#000000'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        menu: '#menu',
        'navigation': true,
        scrollingSpeed: 100,
        navigation: true,//是否显示导航，默认为false
        navigationTooltips: ['首页', '业务', '案例', '客户', '品质', '增值', '关于', '联系'],//导航小圆点的提示
        showActiveTooltip: true,//是否显示当前页面的tooltip信息
        //slidesNavigation: true,//是否显示横向幻灯片的导航，默认为false
        //slidesNavPosition: 'bottom',//横向导航的位置，默认为bottom，可以设置为top或bottom
        resize: true,//字体是否随窗口缩放而缩放，默认false
    });
    if ($(".fp-tooltip").siblings("a").hasClass("active")) {
        console.log(10);
        $(".fp-tooltip").siblings("a").filter(".active").siblings(".fp-tooltip").css({
            "opacity": "1"
        });

    }
    //页面第一次打开获得url的hash值在当前页面发生动画
    //$(".section").eq(0).addClass("animated zoomIn");


     // 轮播图
     var mySwiper = new Swiper('#section1-carrousel', {
        autoplay: 3000, //可选选项，自动滑动
        pagination: '.swiper-pagination',
        paginationClickable: true,
    })
    
    console.log($(window).height());
    //$(".section").not(":eq(0)").height($(window).height() - 70);




    
});

//箭头点击到下一页
$(".down").click(function () {
    var currentPage = $(this).parents(".section").attr("data-anchor");
    var nextPageNumber = parseInt(currentPage.slice(-1)) + 1;
    var nextPage = "page" + nextPageNumber;
    console.log(nextPage);
    window.location.hash = nextPage;
})

//刷新页面后将hash值改为page1
window.reload = function () {
    if (hash != '') {
        location.hash = '';
        window.location.hash = "page1";
    }
}

$(window).load(function() {
//页面第一次打开以后，鼠标滚动，根据url的hash值在当前页面发生动画
if (("onhashchange" in window) && ((typeof document.documentMode === "undefined") || document.documentMode == 8)) {
    // 浏览器支持onhashchange事件
    window.onhashchange = hashChangeFire;  // TODO，对应新的hash执行的操作函数
} else {
    // 不支持则用定时器检测的办法
    setInterval(function () {
        var ischanged = isHashChanged();  // TODO，检测hash值或其中某一段是否更改的函数
        if (ischanged) {
            hashChangeFire();  // TODO，对应新的hash执行的操作函数
        }
    }, 150);
}
function hashChangeFire() {
    var hash = window.location.hash;
    alert(hash);
    var nextPage = hash.slice(-1);
    //锚点变化，头部菜单样式发生变化
    if(hash!= "#page1") {
        $(".header").addClass("header-animate");
        $(".logo-img").attr({
            "src":"img/header/logo-change.png"
        })
        $(".logo-name").css({
            "color": "#000",
            "font-weight": "500"
        })
        $("#menu>li>a").css({
            "color": "#000",
            "font-weight": "500"
         })
    } else {
        $(".header").removeClass("header-animate");
        $(".logo-img").attr({
            "src":"img/header/logo.png"
        })
        $(".logo-name").css({
            "color": "#fff",
            "font-weight": "normal"
        })
        $("#menu>li>a").css({
            "color": "#fff",
            "font-weight": "normal"
         })
    }
    $(".section").removeClass("animated zoomIn");
    //等浏览器渲染好dom结构再执行动画，在浏览器渲染页面之前加载动画
    setTimeout(
        function() {
            $(".section").eq(nextPage - 1).addClass("animated zoomIn");
        },100)
}
})

/*小屏幕适配*/
$("#mobile-menu").click(function() {
    $(".menu-mobile").toggle();
})


