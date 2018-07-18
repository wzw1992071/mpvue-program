// function formatNumber (n) {
//   const str = n.toString()
//   return str[1] ? str : `0${str}`
// }

// export function formatTime (date) {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()

//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   const t1 = [year, month, day].map(formatNumber).join('/')
//   const t2 = [hour, minute, second].map(formatNumber).join(':')

//   return `${t1} ${t2}`
// }

// export default {
//   formatNumber,
//   formatTime
// }

let cutImg =function (url, width, height, type = 1) {
  switch (parseInt(type)) {
    case 1 :
      if (parseInt(width) && parseInt(height)) {
        // 按比例裁剪
        url = url + '?x-oss-process=image/crop,x_' + width + ',y_' + height
      }
      break
    case 2 :
      // 按照宽度缩放
      if (parseInt(width)) {
        url = url + '?x-oss-process=image/resize,w_' + width
      }
      break
    case 3 :
      // 按照高度缩放
      if (parseInt(height)) {
        url = url + '?x-oss-process=image/resize,h_' + height
      }
      break
    default:
      return url
  }
  return url
}
export {cutImg}