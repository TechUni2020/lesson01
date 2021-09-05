const tatelines = process.argv[2]
const yokolines = process.argv[3]


for(let i = 1; i < tatelines*yokolines; i++){
  if(i % 2 === 0){
    process.stdout.write("-")
  }else{
    process.stdout.write("*")
  }
  if(i % yokolines === 0){
    console.log(" ")
  }
};
