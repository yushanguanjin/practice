$(function () {
    //全屏滚动
    $('#fullPage').fullpage({
        // sectionsColor: ['#ffffff', '#4BBFC3', '#fff', '#ffffff', '#ffffff', '#00ff00', '#0000ff', '#000000'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        'navigation': true,
        scrollingSpeed: 20,
        navigation: true, //是否显示导航，默认为false
        // navigationTooltips: ['首页', '业务', '案例', '客户', '品质', '增值', '关于', '联系'], //导航小圆点的提示
        showActiveTooltip: true, //是否显示当前页面的tooltip信息
        //slidesNavigation: true,//是否显示横向幻灯片的导航，默认为false
        //slidesNavPosition: 'bottom',//横向导航的位置，默认为bottom，可以设置为top或bottom
        resize: true, //字体是否随窗口缩放而缩放，默认false
        onLeave:function(index, nextIndex, direction) {
            //头部菜单导航
            console.log(nextIndex - 1);
            if(nextIndex - 1 !=0 ) {
                $("#menu>li").removeClass("menu-a-active-page2");
                $("#menu>li").eq(nextIndex - 1).addClass("menu-a-active-page2");
                $("#menu>li").removeClass("menu-a-active-page1");
            } else {
                $("#menu>li").removeClass("menu-a-active-page1");
                $("#menu>li").eq(nextIndex - 1).addClass("menu-a-active-page1");
                $("#menu>li").removeClass("menu-a-active-page2");
            }
           
        }
    });
    if ($(".fp-tooltip").siblings("a").hasClass("active")) {
       
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

    
    $(".section").not(":eq(0)").height($(window).height() - 70);





});

//箭头点击到下一页
$(".down").click(function () {
    var currentPage = $(this).parents(".section").attr("data-anchor");
    var nextPageNumber = parseInt(currentPage.slice(-1)) + 1;
    var nextPage = "page" + nextPageNumber;
    window.location.hash = nextPage;
})

//刷新页面后将hash值改为page1
// window.reload = function () {
//     if (hash != '') {
//         location.hash = '';
//         window.location.hash = "page1";
//     }
// }

//var hash = window.location.hash;
// $(".menu-a").click(function () {
//     //console.log(hash);
//     console.log($(this).attr("href"));
   
//         console.log($(this).attr("href"));
//         $(".menu-a").removeClass("menu-a-active");
//         $(this).addClass("menu-a-active");
    
// })


$(window).load(function () {
    //页面第一次打开以后，鼠标滚动，根据url的hash值在当前页面发生动画

    var hash = window.location.hash;
 
    if (hash != "#page1") {
        // $("#mobile-menu").attr({
        //     "src": "img/index/mobile_menu2.png"
        // })

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
            "src": "img/index/mobile_menu2.png"
        })
    } else {
        $("#mobile-menu").attr({
            "src": "img/index/mobile_menu.png"
        })

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
            "src": "img/index/mobile_menu.png"
        })
    }
    
    $(".our-customers-img-phone").each(function(index,item) {
        
      
        if(index%2==1) {
          
            $(this).css({
                "margin-left": "auto",
                "margin-right": "auto"
            })
        } else {
            $(this).css({
                "margin-left": "auto",
                "margin-right": "auto"
            })
        }
        
     })

    //头部菜单

    window.onhashchange = hashChangeFire;

    // $(".menu-a").each(function () {
    //     if ($(this).attr("href") == hash) {
    //         console.log($(this).attr("href"));
    //         $(".menu-a").removeClass("menu-a-active");
    //         $(this).addClass("menu-a-active");
    //     }
    // })

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
                "src": "img/index/mobile_menu2.png"
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
                "src": "img/index/mobile_menu.png"
            })
        }
        $(".section").removeClass("animated zoomIn");



       


        // $(".menu-a").each(function () {
        //     if ($(this).attr("href") == hash) {
        //         console.log($(this).attr("href"));
        //         $(".menu-a").removeClass("menu-a-active");
        //         $(this).addClass("menu-a-active");
        //     }
        // })

         $(".section").eq(nextPage - 1).addClass("animated zoomIn");

        //等浏览器渲染好dom结构再执行动画，在浏览器渲染页面之前加载动画
        setTimeout(
            function () {
                // $(".section").eq(nextPage - 1).addClass("animated zoomIn");
            }, 100)


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
    center: ["121.455", "31.25885"], //中心点坐标
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
    content: "<div class='address-info'>上海市静安区中山北路900号2号楼211</div>"
});

//地图缩放时，文档不能滚动
//用firefox变量表示火狐代理
var firefox = navigator.userAgent.indexOf('Firefox') != -1;
// function MouseWheel(e) { //阻止事件冒泡和默认行为的完整兼容性代码
//     if (e && e.stopPropagation) {//非IE  
//         e.stopPropagation();  
//     }  
//     else {//IE  
//         window.event.cancelBubble = true;  
//     }  
// }
// //var con = document.getElementById('container');
// //要在content内部滚动，而页面不受影响，所以这里获取要滚动的对象

// //如果是ff就绑定DOMMouseScroll事件，其他浏览器就用onmousewheel事件触发
// con.onmousewheel = MouseWheel;

$("#container").on("mousewheel",function(e) {
    var e=arguments.callee.caller.arguments[0]||event; //若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容
  if (e && e.stopPropagation) {
    e.stopPropagation();
  } else if (window.event) {
    window.event.cancelBubble = true;
  }
})
/*小屏幕适配*/
$("#mobile-menu").click(function () {
    $(".menu-mobile").toggle();
})


var demoHeight = $("#demo").height();

function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
        marginTop: -demoHeight+"px"
    },
    1000,
    function() {
        $(this).css({
            marginTop: "0px"
        }).find("li:first").appendTo(this);
    });
}
$(document).ready(function() {
    setInterval('AutoScroll("#demo")', 2000)
});


