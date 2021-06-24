let array=[];
for(let i=2;i<process.argv.length;i++){
  let number=(process.argv[i]);
  array.push(Number(number));
}

for(let j=0;j<array.length;j++){
  for(let k=array.length;k>j;k--){
    if(array[k-1]>=array[k]){
      let array1=array[k];
      array[k]=array[k-1];
      array[k-1]=array1;
    }
  }
}
console.log(array);