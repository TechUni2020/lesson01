const num=[1,2,3,4,5,6,7,8,9];

for(let i=0;i<num.length;i++){

  var array=[];

  for(let j=1;j<=9;j++){

    let result=num[i]*j;
    array.push(result);
    
  }

  console.log(array.join("\t"));

}