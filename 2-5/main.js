// let n = Number(process.argv[2]);
// let coin = 100;
// let text = "";
// while(coin >= 1){
//     let a = Math.floor(n/ coin);
//     text  += (coin + "円玉" + a + "枚");
//     if (coin > 1){
//         text += ", ";
//     }
//     n -= coin * a;
//     coin /= 10;
// }
// console.log(text);
let n = Number(process.argv[2]);
let coin = 100;
let text = "";
while(coin >= 1){
    let a = Math.floor(n/ coin);
    text  += `${coin}円玉 ${a}枚`;
    if (coin > 1){
        text += ", "
    }
    n -= coin * a;
    coin /= 10;
}
console.log(text);