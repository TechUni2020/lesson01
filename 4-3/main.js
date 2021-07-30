const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]
const first = "Invalid";
const finish= "-";

for (let i=0; i < errorLogs.length; i++ ){
  var serach1= errorLogs[i].indexOf(first);
  var serach2= errorLogs[i].lastIndexOf(finish);
  var result =　errorLogs[i].substring( serach1, serach2 );
  console.log(result);
}
