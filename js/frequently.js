/*常用的一些代码*/


//对象转换为数组

//方法1
function convert(object) {
    var arr = [];
    for (var i in object) {
        arr.push(object[i]);
    }
    return arr;
}
//方法二
Object.values(object);

//json对象克隆

//方法1
function cp(a) {
    return JSON.parse(JSON.stringify(a))
}
//方法二
function clone(obj) { //深克隆
    var resObj = {};
    for (key in obj) { /*key/in循环*/
        if (obj[key] instanceof Object) { /*如果属性是对象，则再次调用clone（）（递归）*/
            resObj[key] = clone(obj[key]);
        } else {
            resObj[key] = obj[key]; /*clone*/
        }
    }
    return resObj; /*返回resObj*/
}

//数组转字符串
var arr = [0, 1, 2, 3];
var str = arr.join(",");
console.log(str);

//字符串转数组
var str = "a,b,c,d";
var arr = str.split(",");
console.log(arr);

//数组转换为对象
function toObj(arr) {
    var obj = {};
    for (var key in arr) {
        obj[key] = arr[key];
    }
    return obj;
}
//查找数组元素位置
function indexOf(arr, item) {
    if (Array.prototype.indexOf) {
        return arr.indexOf(item);
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
    }
    return -1;
}

//移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

//方法一
function remove(arr, item) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== item) {
            newArr.push(arr[i]);
        }
    }
    return newArr; //注意return在for循环外部，for循环结束以后才返回新的创建的数组
}
//方法二
function remove(arr, item) {
    return arr.filter(function(ele) {
        return ele != item;
    })
}

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