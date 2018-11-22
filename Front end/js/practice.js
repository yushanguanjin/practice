//查找数组元素位置
function indexOf(arr, item) {
    var obj = {};
    for (var key in arr) {
        obj[key] = arr[key];
        for (var prop in obj) {
            if (obj[prop] == item) {
                return prop;
            }
        }
    }
    return -1;
}