const numString1 = String(process.argv[2]);
const numString2 = String(process.argv[3]);

const reverse = (numString) => {
  return numString.split("").reverse().join("");
};

const sum = (n1, n2) => {
  const number1 = Number(n1);
  const number2 = Number(n2);
  return number1 + number2;
};

console.log(sum(reverse(numString1), reverse(numString2)));
