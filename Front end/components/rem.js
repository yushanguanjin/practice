/*rem布局方案一*/
//如果页面的宽度超过了640px，那么页面中html的font-size恒为100px，否则，页面中html的font-size的大小为： 100 * (当前页面宽度 / 640) 
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/*rem布局方案二*/
// 动态设置rem
function setRem() {
    var html = document.documentElement;
    var width = html.getBoundingClientRect().width;
    var fontSize = width / 30; //默认是1080
    html.style.fontSize = fontSize + 'px'; //36px,需要注意的是chrome最小的字体是12px
}
setRem();
// 当切换屏幕方向的时候，重置
// 小心浏览器在切换屏幕方向有个500毫秒延迟
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        setRem();
    }, 600);
}, false);