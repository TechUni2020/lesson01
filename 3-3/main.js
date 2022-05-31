//   3つ空欄(受け取った引数-1)  *   3つ空欄
//  2つ空欄 *** 2つ空欄
// 1つ空欄 ***** 1つ空欄
// 0つ空欄 ******* 0つ空欄
// 7個出力する これは4*2-1=7
// という感じにする

const stageNum = Number(process.argv[2]);
const space = " ";
const star = "*";

for (let i = 0; i < stageNum; i++) {
  let init = "";

  init += space.repeat(stageNum - i - 1);
  init += star.repeat(i * 2 + 1);
  console.log(init);
}
