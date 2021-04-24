const n=(process.argv[2]);
const arg1=(n/100|0);
const arg2=((n-arg1*100)/10|0);
const arg3=(n-(arg1*100)-(arg2*10));
console.log("百円玉"+arg1+"枚");
console.log("十円玉"+arg2+"枚");
console.log("一円玉"+arg3+"枚");
