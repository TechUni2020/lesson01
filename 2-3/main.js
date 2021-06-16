
const arg=process.argv[2];

if(arg>=24){
  const arg2=arg%24;
  console.log(arg2);
}else{
  console.log(arg);

}
