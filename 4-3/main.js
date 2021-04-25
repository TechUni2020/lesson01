const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]
// for (let i = 0; i < errorLogs.length; i++) {
//   const result = errorLogs[i].match(/:(.*) -/);
//   if (result != null) {
//       console.log(result[i]); 
//   }
//   result.length = 0;
// }

const before = ':';
const after =  '-';

for (let i = 0; i < errorLogs.length; i++) {
  const beforeIdx = errorLogs[i].indexOf(before);
  // strの中のafterを後ろから検索
  const afterIdx = errorLogs[i].lastIndexOf(after);


  if (beforeIdx >= 0 && afterIdx >= 0) {
      // 両方とも見つかったら中身を取り出す
      const result = errorLogs[i].substring(beforeIdx + before.length, afterIdx);
      console.log(result); 
  }  
}