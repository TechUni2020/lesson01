let yen = process.argv[2] ;
let c100 = 100
let c10 = 10
let c1 = 1



c100 = yen/c100
yen = yen % 100
c10 = yen/c10
yen = yen%10
c1 = yen/c1




console.log(`100円玉${c100}枚、10円玉${c10}枚、1円玉${c1}枚`)