/**
 * @description 可將數字轉為有千分位的字串且保留小數位數!!
 * @param {Object} value 需進行 filter 的資料
 */
const commafy = (value) => {
  value += ''
  if (!value.includes('.')) value += '.'
  return value.replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
    return $1 + ','
  }).replace(/\.$/, '')
}

export default commafy
