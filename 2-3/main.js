const arg1=process.argv[2];
if(arg1<24){
  console.log(arg1);
}else if(arg1>=24){
  console.log(arg1-24);
}else if(arg1){
  console.log("0");
}

console.log("追記：% 24でもできるのか、ひえ〜");