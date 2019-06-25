/*功能性代码*/

//获取当前时间
function CurentTime() {
    var now = new Date();
    var year = now.getFullYear(); //年
    var month = now.getMonth() + 1; //月
    var day = now.getDate(); //日

    var hh = now.getHours(); //时
    var mm = now.getMinutes(); //分
    var ss = now.getSeconds(); //秒
    var clock = year + "-";

    if (month < 10)
        clock += "0";

    clock += month + "-";

    if (day < 10)
        clock += "0";

    clock += day + " ";

    if (hh < 10)
        clock += "0";

    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm + ":";

    if (ss < 10) clock += '0';
    clock += ss;
    return (clock);
}

CurentTime();

//清除字符串前后的空格
function trim(str) {
    if (str & typeof str === "string") {
        return str.replace(/(^s*)|(s*)$/g, ""); //去除前后空白符
    }
}

//js获得url的参数的值
function get_url_data(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

//js自定义事件



//实现jquery中的hasClass,addClass,removeClass功能
function hasClass(ele, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + ele.className + ' ');
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
    }
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ');
        }
        ele.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
/*判断undefined:*/
/*undefined 表示一个未声明的变量，或已声明但没有赋值的变量，或一个并不存在的对象属性。
函数没有返回值时，默认返回undefined。*/
var tmp = undefined;
if (typeof(tmp) == "undefined") {
    alert("undefined");
}
//判断null:
//方法一
var tmp = null;
if (tmp == null) {
    alert("null");
}
//方法二
var tmp = null;
if (!tmp && typeof(tmp) != "undefined" && tmp != 0) {
    alert("null");
}
//判断NaN:
var tmp = 0 / 0;
if (isNaN(tmp)) {
    alert("NaN");
}
//判断undefined和null
var tmp = undefined;
if (tmp == undefined) {
    alert("null or undefined");
}
var tmp = undefined;
if (tmp == null) {
    alert("null or undefined");
}
//判断undefined、null与NaN:
var tmp = null;
if (!tmp) {
    alert("null or undefined or NaN");
}
/*判断变量不存在*/
if (!tmp) {

} // 相当于判断tmp=""、tmp=null、tmp= undefined、tmp=0
//判断是否手机端
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

var flag = IsPC(); //true为PC端，false为手机端
//Map To Object
function mapToObj(map) {
    let obj = Object.create(null);
    for (let [k, v] of map) {
        obj[k] = v;
    }
    return obj;
}
//Object To Map
function objToMap(obj) {
    let map = new Map();
    for (let k of Object.keys(obj)) {
        map.set(k, obj[k]);
    }
    return map;
}
//Map To Set
function mapToSet(map) {
    let set = new Set()
    for (let [k, v] of map) {
        set.add([k, v])
    }
    return set;
}