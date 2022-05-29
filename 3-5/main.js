// students配列を受け取って、その一つずつを＊で表現する
// 30個 3*10 = 30ずつ配置・両端は--2個配置
// 生徒を低い順に並べる・10・20・30・40・50・60・70・80・90・100
// 各位ずつ、生徒の数を数える
// それを上に2個の隙間をあけて表示する そこは引数で受け取りたい

const students = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60];

const sortStudents = students.sort((a, b) => a - b);

// 10で割った時の商が何個あるか
const placeNum = (num) => {
  const tenPlace = sortStudents.filter(
    (score) => score / 10 < num + 1 && score / 10 > num
  );
  return tenPlace.length;
};

// 各位ずつ、生徒の数を数える
const placeArray = [...Array(11).keys()]
  .map((v, i) => i)
  .map((num) => {
    return placeNum(num);
  });

console.log(placeArray);
// 各位で
//   *
//   --
//   10
// その間は-で埋める

const space = " ";
const star = "*";

for (let i = 0; i < placeArray.length; i++) {
  let result = "";
  result += i * 10;
  if (i === 0) {
    result += space.repeat(3) + "|";
  } else if (i === 10) {
    result += space + "|";
  } else {
    result += space.repeat(2) + "|";
  }
  result += space.repeat(2);
  result += star.repeat(placeArray[i]);
  console.log(result);
}
