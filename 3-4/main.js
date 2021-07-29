const first = process.argv[2]
const second = process.argv[3]

// const divide1 = first.split("");
// const divide2 = second.split("");

// const ary1 = divide1.reverse();
// const ary2 = divide2.reverse();

// const result1 = ary1.join("");
// const result2 = ary2.join("");

// const num1 = Number(result1);
// const num2 = Number(result2);

function plus (number){
    const reverse = number.split("").reverse().join("");
    return Number(reverse);
}

console.log(plus(first)+plus(second));
