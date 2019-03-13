/**
 * @description 產生 unique key 字串，用來產生唯一的 id 。
 */
const genGuid = () => {
  const s4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4())
}

export default {
  genGuid
}
