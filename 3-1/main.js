const resultsList = [];

const multiCalc = (num) => {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      resultsList.push(i * j);
    }
  }
  return resultsList;
};

console.log(multiCalc(9));
