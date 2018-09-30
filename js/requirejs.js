// require.config({
//     paths: {
//         'jq': '../js/library/jquery', //不需要在结尾加.js的
//         'layer': '..js/library/layer',
//         'handlebars': '../js/library/handlebars',
//          'demo':"../js/demo"
//     },
//     shim:{
//         'layer':{
//             deps:['jq'],//deps数组，表明该模块的依赖性
//             exports:'layer'//exports值（输出的变量名），表明这个模块外部调用时的名称
//         }
//     }

// })
// require(['jq', 'handlebars','demo'], function (jq, layer,handlebars,demo) {

//     demo.foo();
// })




// 配置 Mock 路径
require.config({
    paths: {
        mock: 'http://mockjs.com/dist/mock'
    }
})
// 加载 Mock
require(['mock'], function (Mock) {
    // 使用 Mock
    var data = Mock.mock({
        "object|2-4": {
            "110000": "北京市",
            "120000": "天津市",
            "130000": "河北省",
            "140000": "山西省"
        }
    })
    // 输出结果
    document.body.innerHTML +=

        '<pre>' +
        JSON.stringify(data, null, 4) +
        '</pre>';
    console.log(typeof JSON.stringify(data, null, 4));
})