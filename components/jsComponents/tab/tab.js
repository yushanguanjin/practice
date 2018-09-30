//选项卡
function Tab(obj) {
    this.oParent = document.getElementById(obj.id);
    console.log(obj.id);
    this.oNav = this.oParent.getElementsByClassName("nav");
    this.oPage = this.oParent.getElementsByClassName("page");
    for (var i = 0; i < this.oNav.length; i++) {
        this.oNav[i].style.width = obj.oNavWidth + "px";
        this.oPage[i].style.width = obj.oNavWidth * this.oPage.length + "px";
    }

}
Tab.prototype = {
    constructor: Tab,
    init: function () {
        var _this = this;
        for (var i = 0; i < this.oNav.length; i++) {
            this.oNav[i].index = i;
            var eventType = obj.eventType || onclick;
            console.log(eventType);
            this.oNav[i].onclick = function () {
                console.log(10);
                for (var k = 0; k < _this.oNav.length; k++) {
                    _this.oNav[k].className = "nav";
                }
                this.className = "nav active";
                _this.change(this.index);
            }

        }
    },
    change: function (i) {
        for (var j = 0; j < this.oPage.length; j++) {
            this.oPage[j].className = "page hide";
        }
        this.oPage[i].className = "page show";
    }
}

//调用

// var obj = {
//     id: "tab1",
//     oNavWidth: 60,
//     eventType: "onmouseover" //注意加引号
// };
// var tab1 = new Tab(obj);
// tab1.init();