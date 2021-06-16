const arg=process.argv[2];

const hund=Math.floor(arg/100);
const arg2=Math.floor(arg%100);
const ten=Math.floor(arg2/10);
const one=Math.floor(arg2%10);
//console.log(arg2);
console.log('100円玉${hund}枚,10円玉${ten}枚,1円玉${one}');
