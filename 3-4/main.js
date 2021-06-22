const arg1=process.argv[2];
const arg2=process.argv[3];

const array1=arg1.split("");
  array1.reverse("");
  const beforenum1= array1.join("");
  //let num = Number(beforenum1);
//console.log(beforenum1);
const array2=arg2.split("");
  array2.reverse("");
  const beforenum2=array2.join("");
  //let num1=Number(beforenum2);

const result=Number(beforenum1)+Number(beforenum2);
console.log(result);

//これではだめかな？