import dayjs from '../node_modules/dayjs'
import duration from '../node_modules/dayjs/plugin/duration'

// 轉換秒數為時間
function converTime() {
  dayjs.extend(duration);
  let t = dayjs.duration(12800, "seconds").format('Y年 M月 D日 H時 m分 ss秒');
  console.log(t)
}

converTime();
