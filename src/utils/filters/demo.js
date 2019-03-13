/**
 * @description 將字串轉為 Welcome to XXX!!
 * @param {Object} value 需進行 filter 的資料
 */
const filter = (value) => {
  if (value) {
    return `Welcome to ${String(value)}!!`
  }
}

export default filter
