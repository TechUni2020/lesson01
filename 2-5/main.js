const money = process.argv[2]
const a = Math.floor(money/100)
const b = money-100*a
const c = Math.floor(b/10)
const d = b-10*c

console.log('100円玉'+ a +'枚,10円玉' + c + '枚,1円玉'+ d +'枚')