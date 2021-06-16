const arg1=process.argv[2];

for(let i=0;i<=arg1;i++){
  let array=[];
  for(let j=0;j<arg1-i;j++){
    array.push(" ");
  }
  for(let k=0;k<i*2-1;k++){
    array.push("\*");
  }
  console.log(array.join(""));
}
