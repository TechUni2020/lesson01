const arg = process.argv[2];
const num = (arg/100)
var hundred = parseInt(num, 10);
console.log( "100円", hundred );
const abc = ((arg-hundred*100)/10)
var ten = parseInt(abc, 10);
console.log( "10円", ten );
console.log("1円",arg%10) 