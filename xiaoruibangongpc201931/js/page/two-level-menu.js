setTimeout(function() {
    var hash = window.location.hash;
    if (!hash) {

        $(".two-level-menu-title").each(function() {
            if (location.href.indexOf($(this).attr("href")) > 0) {
                $(this).addClass("two-level-menu-title-active");
                $(".three-level-menu-title-a").removeClass("three-level-menu-title-a-active");
            }
        })
    } else {
        $(".three-level-menu-title-a").each(function() {
            if ($(this).attr("href") == hash) {
                $(".three-level-menu-title-a").removeClass("three-level-menu-title-a-active");
                $(this).addClass("three-level-menu-title-a-active");
                $(".two-level-menu-title").removeClass("two-level-menu-title-active");
            }
        })

    }

}, 100)




window.onhashchange = hashChangeFire; // TODO，对应新的hash执行的操作函数

function hashChangeFire() {
    var hash = window.location.hash;
    if (!hash) {
        $(".two-level-menu-title").each(function() {
            if (location.href.indexOf($(this).attr("href")) > 0) {
                $(this).addClass("two-level-menu-title-active");
                $(".three-level-menu-title-a").removeClass("three-level-menu-title-a-active");
            }
        })
    } else {
        $(".three-level-menu-title-a").each(function() {
            if ($(this).attr("href") == hash) {
                $(".three-level-menu-title-a").removeClass("three-level-menu-title-a-active");
                $(this).addClass("three-level-menu-title-a-active");
                $(".two-level-menu-title").removeClass("two-level-menu-title-active");
            }
        })
    }

}