/*js兼容性代码*/

//addEventListener兼容性写法

if (el.addEventListener) {
    el.addEventListener('click', modifyText, false);
} else if (el.attachEvent) {
    el.attachEvent('onclick', modifyText); //ie9以前，使用 attachEvent 方法有个缺点，this 的值会变成 window 对象的引用而不是触发事件的元素。
}

for (var i in arr) {
    if (!arr.hasOwnProperty) {
        continue;
    } else {
        console.log(arr[i].name);
    }
}

//鼠标滚动
window.onload = function() {
    function onMouseWheel(ev) { /*当鼠标滚轮事件发生时，执行一些操作*/
        var ev = ev || window.event;
        var down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作
        down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0;
        if (down) {

        } else {

        }
        return false;
    }
    addEvent(obj, 'mousewheel', onMouseWheel);
    addEvent(obj, 'DOMMouseScroll', onMouseWheel);
}

function addEvent(obj, xEvent, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + xEvent, fn);
    } else {
        obj.addEventListener(xEvent, fn, false);
    }
}