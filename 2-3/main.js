//時間を定義
let hour1 =process.argv[2] 
   
//時間修正
if (hour1>=24 && hour1<=48){
  hour1-=24
  console.log(hour1) 
}else if(hour1>=48 && hour1<=72){
  hour1-=48
  console.log(hour1) 
}else if(hour1>=72){
  hour1-=72
  console.log(hour1) 
}else{
  console.log(hour1)  
}
//------------------------------------------

let hour2 =process.argv[3]

if (hour2>=24 && hour2<=48){
  hour2-=24
  console.log(hour2) 
}else if(hour2>=48 && hour2<=72){
  hour2-=48
  console.log(hour2) 
}else if(hour1>=72){
  hour2-=72
  console.log(hour2) 
}else{
  console.log(hour2)  
}






  



