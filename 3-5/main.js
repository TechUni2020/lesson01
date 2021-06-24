const students=[17,38,100,95,23,62,77,45,69,81,83,51,42,36,60];
let wid=[1,2,3,4,5,6,7,8,9,10];
let count=[];
let mark=" * ";
let space="   ";
let arr1=[];
let result=[];

for(let i=0;i<students.length;i++){
  let arg1=Math.floor(students[i]/10); //console.log(arg1);
  count.push(arg1);
}
//console.log(count);
let number1=0;
for (let j=0;j<wid.length;j++){
  for(let k=0;k<count.length;k++){
    if(wid[j]==count[k]){
    number1++;
    }
  }
arr1.push(number1);
number1=0;

}
//console.log(arr1);//[ 1, 1, 2, 2, 1, 3, 1, 2, 1, 1 ]

let max=Math.max(...arr1);//...でバラバラにする。

for(let l=0;l<max;l++){
  for(let m=0;m<arr1.length;m++){
    if(arr1[m]>=max-l){
      result.push(mark);
    }else{
      result.push(space);
    }
  }
  let result1=result.join('');
  console.log(result1);
  result.length=0;
}
console.log('--------------------------------');
console.log('10 20 30 40 50 60 70 80 90 100');
