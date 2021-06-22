

for(let i=1;i<9;i++){//配列なんかいらなかったことに気づきました（笑）

  var array=[];

  for(let j=1;j<=9;j++){

    let result=i*j;
    array.push(result);
    
  }

  console.log(array.join("\t"));

}