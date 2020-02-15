export function getData(nums) {
  let point = [];
  function generate() {
    for (let i = 0 ; i < 200; i ++) {
      let x = normalRandom()
      let y = normalRandom()
      point({x, y})
    }
  }
  // 黄点
  generate();
  // 蓝点
  generate();
  return point;

}

function normalRandom() {
  let u1 = Math.random();
  let u2 = Math.random();
  let result = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
  return result
}
