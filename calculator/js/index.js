require.config({
    paths: {
        'jq': '../js/library/jquery', //不需要在结尾加.js的
        'handlebars': '../js/library/handlebars',
    },
    shim: {
        'layer': {
            deps: ['jq'], //deps数组，表明该模块的依赖性
        }
    }

})
require(['jq', 'handlebars'], function(jq, layer, handlebars) {
    var i = 0;
    $("tbody").on("click", "td", function() {


        //初始，第一次点击
        if (i == 0) {
            $(".calc-in").text($(this).text());
        }
        //第二,三......次点击
        if (i > 0) {
            $(".calc-in").text($(".calc-in").text() + $(this).text());
        }
        i++;

        //平方运算
        if ($(this).hasClass("square")) {
            var num = $(".calc-in").text().substring(0, "x2");
            var str = $(".calc-in").text();
            var newStr = str.substring(0, str.length - 1);
            console.log(newStr);
            var arr = newStr.split("");
            console.log(arr);
            var len = arr.length;
            arr.forEach(function(item, index) {
                if (item == "x") {
                    console.log(index);
                    console.log(newStr.slice(0, index));
                    var powNum = newStr.slice(0, index);
                    var replaceNum = powNum + "x" + "2";
                    console.log(replaceNum);
                    var a = Math.pow(powNum, 2);
                    console.log(a);
                    replaceNum.replace(replaceNum, a);
                    console.log(replaceNum.replace(replaceNum, a));
                    var powResult = replaceNum.replace(replaceNum, a);
                    console.log(powResult + eval(newStr.slice(index + 2)));
                    console.log(eval(Math.pow(10, 2)));
                    $(".calc-out").text(eval(powResult));
                }
            })
        }
        //点击运算符
        if ($(this).hasClass("eq")) {
            var str = $(".calc-in").text();
            $(".calc-out").text(eval(str.substring(0, str.length - 1)));


        }
        //重新计算
        console.log($(".calc-out").text().length);
        $("tbody td").click(function() {

            })
            //清空运算

        if ($(this).hasClass("cls")) {
            $(".calc-in").empty();
            $(".calc-out").empty();
        }




    })
})