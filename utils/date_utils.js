"use strict";
exports.__esModule = true;
var dayjs_1 = require("../node_modules/dayjs");
var duration_1 = require("../node_modules/dayjs/plugin/duration");
// 轉換秒數為時間
function converTime() {
    dayjs_1["default"].extend(duration_1["default"]);
    var t = dayjs_1["default"].duration(12800, "seconds").format('Y年 M月 D日 H時 m分 ss秒');
    console.log(t);
}
converTime();
