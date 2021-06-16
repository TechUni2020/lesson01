const arg1=process.argv[2];
const arg2=process.argv[3];

for(let i=0;i<arg1;i++){
  let array=[];
  const x=[i];
  for(let j=0;j<arg2;j++){
    const y=[j];
    if(x%2==1){
      if(y%2==1){
        array.push('*');
      }else{
        array.push('-');
      }
    }else{
      if(y%2==1){
        array.push('-');
      }else{
        array.push('*');
      }
    }
  }
  
  var result=array.join('');
  console.log(result);
}