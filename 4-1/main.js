// 入力値24 19 3 25 40
// 5つのうち、3番目に大きい値を出力する

const nums = [
  Number(process.argv[2]),
  Number(process.argv[3]),
  Number(process.argv[4]),
  Number(process.argv[5]),
  Number(process.argv[6]),
];
const thirdNum = nums.sort((a, b) => b - a)[2];

// 逆順にはなるけど
// 右より左の方が大きかったら入れ替え
const sortFunc = (array) => {
  for (let i = 0; i < array.length; i++) {
    //配列の左側から比較していく
    for (let j = array.length; i < j; j--) {
      //右側の数より左側の数が大きい場合は入れ替える。
      if (array[j - 1] < array[j]) {
        array[j - 1] = array[j];
        let tmp = array[j - 1];
        array[j] = tmp;
      }
    }
  }
  return array.reverse()[2], array;
};
const threeNum = sortFunc(nums);
console.log(threeNum);
