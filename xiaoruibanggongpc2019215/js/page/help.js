 //载入文档初始化页面
 $("#each-help-page").load("iframe.html", function() {
     $(".leftdiv a").removeClass("active");
     $("body").on("click", ".menu-sub-title-a", function() {
         $(".menu-sub-title>a").removeClass("menu-sub-title-a-active");
         $(this).addClass("menu-sub-title-a-active");
     })
     $(".right-content-wrap").append($(".right-content"));
     $(".right-content").show();

     //点击页面，根据页面路径来使当前menu-sub展开
     var currentHref = window.location.href;
 });