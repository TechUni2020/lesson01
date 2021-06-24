const array=[];
for(let i=2;i<process.argv.length;i++){
  array.push(Number(process.argv[i]));
}
array.sort((a,b)=>a-b);
console.log(array[2]);