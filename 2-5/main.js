const arg = process.argv[2];
console.log('test')
console.log(arg/100)
const num = (arg/100)
var hundred = parseInt(num, 10);
console.log( "100円", hundred );
console.log((arg-hundred*100)/10)
const abc = ((arg-hundred*100)/10)
var ten = parseInt(abc, 10);
console.log( "10円", ten );
console.log("1円",arg%10) 
