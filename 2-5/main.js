var price = Number(process.argv[2]);

const price1 = price / 100 | 0;
const price2 = price - price1 * 100 ;
const price3 = price2 / 10 | 0;
const price4 = price2 - price3 * 10 ;
const price5 = price4 / 1 | 0;

console.log(`100円玉${price1}枚, 10円玉${price2}枚, 1円玉${price3}枚`);

