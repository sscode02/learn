"use strict";
exports.__esModule = true;
var dayjs_1 = require("./node_modules/dayjs");
var duration_1 = require("./node_modules/dayjs/plugin/duration");

function converTime() {
     dayjs_1.extend(duration_1);
     return dayjs_1.duration(100,"seconds").format('m+s');
}
converTime();
