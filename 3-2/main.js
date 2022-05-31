const vNum = Number(process.argv[2]);
const hNum = Number(process.argv[3]);

for (let i = 0; i < vNum; i++) {
  let result = "";
  if (i % 2 == 0) {
    for (let m = 0; m < hNum; m++) {
      if (m % 2 === 0) {
        result += "*";
      } else {
        result += "-";
      }
    }
  } else {
    for (let m = 0; m < hNum; m++) {
      if (m % 2 === 0) {
        result += "-";
      } else {
        result += "*";
      }
    }
  }
  console.log(result);
}
