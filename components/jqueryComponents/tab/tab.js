//选项卡
;(function ($) {  
    $.fn.tabs = function (opt) {
        var def = {
            eventType:"click"
        };
        var opts = $.extend(def,opt);
        var obj = $(this);
        obj.children(".tab-nav").children().on(opts.eventType,function () {
            $(this).addClass("active").siblings().removeClass("active");
            obj.children(".tab-page").children().eq($(this).index()).addClass("show").siblings().removeClass("show");
          });
      }
})(jQuery);

//调用
// $("#tab").tabs({
//     eventType:"mouseover"
// });