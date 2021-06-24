const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]
const colon=":";
const hyphen="-";
for(let i=0;i<errorLogs.length;i++){
  const before=errorLogs[i].indexOf(colon);
  const after=errorLogs[i].lastIndexOf(hyphen);

if(before>=0&&after>=0){
  const result=errorLogs[i].substring(before+colon.length,after);
console.log(result);
}
}