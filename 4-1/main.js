//最大値の必要削除回数
// 2=最大値+[最大値-1]/2
// 3=1
// 4=最大値削除| 最大値+[最大値-1]/2
// 5=2
// 7=3

//奇数の場合は/2のMath.floor
//偶数の場合は/2-1
const arr = [];
let args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  arr.push(Number(args[i]));
}

//最大値を指定数消す関数
function remove_max(arr, num) {
  for (let i = 0; i < num; i++) {
    const max = Math.max.apply(null, arr);
    const index = arr.indexOf(max);
    arr.splice(index, 1);
  }
  return arr;
}

if (arr.length % 2 !== 0) {
  //奇数の場合
  //削除回数式
  const OddNum = Math.floor(arr.length / 2);
  const OddArray = remove_max(arr, OddNum);
  //最大値を指定数消した後はその中の最大値を取得する
  const OddMax = Math.max.apply(null, OddArray);
  console.log(OddMax);
} else {
  //偶数の場合
  //削除回数式
  const EvenNum = arr.length / 2 - 1;
  const EvenArray = remove_max(arr, EvenNum);
  //最大値を指定数消した後はその中の最大値+2番目の最大値/2をする
  const EvenMax = Math.max.apply(null, EvenArray); //削除後の中での最大値取得
  const EvenMaxIndex = EvenArray.indexOf(EvenMax);
  EvenArray.splice(EvenMaxIndex, 1);
  const EvenSecondMax = Math.max.apply(null, EvenArray); //削除後の中での最大値2番目取得
  console.log((EvenMax + EvenSecondMax) / 2);
}