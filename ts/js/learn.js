"use strict";
function add(x, y) {
    if (x === void 0) { x = 2; }
    if (y === void 0) { y = 3; }
    console.log(x + y);
    return x + y;
}
add(); //5
add(6); //9
add(6, 5); //11
add(undefined, 5); //7
function edit(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    var num = x ? x : 1;
    for (var _a = 0, y_1 = y; _a < y_1.length; _a++) {
        var ele = y_1[_a];
        num += ele;
    }
    console.log(num);
}
edit(); //1
edit(3); //3
edit(1, 2, 3, 4, 5);
var Demo2 = /** @class */ (function () {
    function Demo2(x, y) {
        this.x = x;
        this.y = y;
    }
    Demo2.prototype.test = function () {
        return this.x + "\u662FX\u7684\u503C\uFF0C" + this.y + "\u662FY \u7684\u503C";
    };
    Demo2.chanage = function () {
        return '测试是否能被继承';
    };
    return Demo2;
}());
var str2 = new Demo2(5, 6).test();
var str3 = Demo2.chanage();
console.log(str2); //5是X的值，6是Y 的值
console.log(str3); //测试是否能被继承
