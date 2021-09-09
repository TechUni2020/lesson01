const tatelines = process.argv[2];

for( let i = 1; i <= tatelines; i++){
  
  let array = [];
   for(let j = 1; j <= tatelines - i; j++ ){
     array.push(" ")
   }
     
      for( let j = 2; j <= i * 2; j++){
     array.push("*")
   }
  console.log(array.join(""))
};