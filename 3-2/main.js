// **コマンドライン引数の1つ目を縦、2つ目を横の数とし"\*-"が連続した四角形を作る。
// ルール：奇数行は、"\*"から始まるが、偶数行は"-"から始める。**
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
for(let n = 1; n <= a; n++){
    let wei = "";
    if (n % 2 == 0){
        for (let m = 1; m <= b; m++){
            if(m % 2 == 0){
                wei += "*";
            } else{
                wei += "-";
                }
        }
    } else {
        for (let m = 1; m <= b; m++){
            if(m % 2 == 0){
                wei += "-";
            }else{
                wei += "*";
            }
        }
        
    }
    console.log(wei);
}