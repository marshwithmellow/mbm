// clone对象
export const cloneObj = (obj: any) => {
  if (typeof obj !== "object") return;
  return JSON.parse(JSON.stringify(obj));
};
// 时间字符串转 时间戳
export const dateToStamp = (dateStr: string) => {
  let date = "";
  date = dateStr.substring(0, 19);
  date = dateStr.replace(/-/g, "/");
  return new Date(date).getTime();
};

// 距离目的 时间戳 的时间倒计时
export const countdown = (dateStr: string, fun: Function) => {
  let date = "";
  let resultDate = {
    day: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    milliseconds: "00",
  };
  date = dateStr.substring(0, 19);
  date = dateStr.replace(/-/g, "/");
  let timer = setInterval(() => {
    let aimDate =
      new Date(new Date().toLocaleDateString()).getTime() + 86400000;
    let nowDate = new Date().getTime();
    if (nowDate >= aimDate) {
      alert("时间已过");
      clearInterval(timer);
    } else {
      let resultStamp = aimDate - nowDate;
      resultDate.day =
        Math.floor(resultStamp / (1000 * 60 * 60 * 24)) + "" || "00";
      resultDate.hours =
        Math.floor((resultStamp / (1000 * 60 * 60)) % 24) + "" || "00";
      resultDate.minutes =
        Math.floor((resultStamp / (1000 * 60)) % 60) + "" || "00";
      resultDate.seconds = Math.floor((resultStamp / 1000) % 60) + "" || "00";
      resultDate.milliseconds = Math.floor(resultStamp % 1000) + "" || "00";
    }
    fun(resultDate);
    return resultDate;
  }, 1000);
};
// 今天剩余时间的比率
export const countRate = (dateStr: string, fun: Function) => {
  let date = "";
  let resultDate = {
    day: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    milliseconds: "00",
  };
  date = dateStr.substring(0, 19);
  date = dateStr.replace(/-/g, "/");
  let timer = setInterval(() => {
    let aimDate =
      new Date(new Date().toLocaleDateString()).getTime() + 86400000;
    let nowDate = new Date().getTime();
    if (nowDate >= aimDate) {
      alert("时间已过");
      clearInterval(timer);
    } else {
      let resultStamp = aimDate - nowDate;
      resultDate.day =
        Math.floor(resultStamp / (1000 * 60 * 60 * 24)) + "" || "00";
      resultDate.hours =
        Math.floor((resultStamp / (1000 * 60 * 60)) % 24) + "" || "00";
      resultDate.minutes =
        Math.floor((resultStamp / (1000 * 60)) % 60) + "" || "00";
      resultDate.seconds = Math.floor((resultStamp / 1000) % 60) + "" || "00";
      resultDate.milliseconds = Math.floor(resultStamp % 1000) + "" || "00";
    }
    fun(resultDate);
    return resultDate;
  }, 1000);
};

// 时刻表
// export const digitalClock = (mark = "-", fun: Function) => {
//   const timer = setInterval(() => {
//     const d = new Date();
//     const year = d.getFullYear();
//     let month = d.getMonth() + 1;
//     month = month < 10 ? `0${month}` : month;
//     let date = d.getDate();
//     date = date < 10 ? `0${date}` : date;
//     let hour = d.getHours();
//     hour = hour < 10 ? `0${hour}` : hour;
//     let min = d.getMinutes();
//     min = min < 10 ? `0${min}` : min;
//     let second = d.getSeconds();
//     second = second < 10 ? `0${second}` : second;
//     const dateStr = `${year}${mark}${month}${mark}${date} ${hour}:${min}:${second}`;
//     fun(dateStr);
//   }, 1000);
// };

export const isWeiXinBrowser = () => {
  // window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  let ua = window.navigator.userAgent.toLowerCase();
  // 通过正则表达式匹配ua中是否含有MicroMessenger字符串
  // if (ua.match(/MicroMessenger/i) == "micromessenger") {
  //   return true;
  // } else {
  //   return false;
  // }
  return ua.indexOf("micromessenger") != -1;
};

/**
 * 节流
	节流原理：在一定时间内，只能触发一次
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
var timesr: any = NaN,
  throttleFlag: boolean;
export function throttle(func: Function, wait = 500, immediate = true) {
  if (immediate) {
    if (!throttleFlag) {
      throttleFlag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === "function" && func();
      timesr = setTimeout(() => {
        throttleFlag = false;
      }, wait);
    }
  } else {
    if (!throttleFlag) {
      throttleFlag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timesr = setTimeout(() => {
        throttleFlag = false;
        typeof func === "function" && func();
      }, wait);
    }
  }
}
