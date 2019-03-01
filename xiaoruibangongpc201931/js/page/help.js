//载入文档初始化页面
$("#each-help-page").load("iframe.html", function () {
    $(".leftdiv a").removeClass("active");
    $("body").on("click", ".menu-sub-title-a", function () {
        $(".menu-sub-title>a").removeClass("menu-sub-title-a-active");
        $(this).addClass("menu-sub-title-a-active");
    })
    $(".right-content-wrap").append($(".right-content"));
    $(".right-content").show();

    var hash = window.location.hash;
    console.log(hash);
    //页面加载完成以后跳转
    setTimeout(function () {
        if (hash != "") {
            console.log(window.location.href);
            window.location.href = window.location.href;
            setTimeout(function () {
                //如果是pc端
                if ($(".menu-mobile").css("display") == "block") {
                    //如果是手机端
                    var hash = window.location.hash;
                    $("html,body").animate({
                        scrollTop: $(hash).offset().top - 40
                    }, 20);
                }
            }, 20)

        }
    }, 20)

    // $("img").click(function () {
    //     var _this = $(this);  
    //     $(this).addClass("img-enlarge");
    //     $(".lightbox").show();
    //     $(this).stop().animate({
    //         "width": "1000px"
    //     }, 1000)
    //     $(".lightbox").click(function () {
    //         if ($(".lightbox").is(":visible")) {
    //             $(".lightbox").hide();
    //             _this.removeClass("img-enlarge");
    //             _this.stop().animate({
    //                 "width": "600px"
    //             }, 10)
    //         }
    //     })
    // })


});