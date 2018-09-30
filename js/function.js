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