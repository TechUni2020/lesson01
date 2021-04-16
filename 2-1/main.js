const ARG1 = process.argv["2"];
const ARG2 = process.argv["3"];
const PERCENTAGE = ARG1 / ARG2 * 100;

console.log(`${PERCENTAGE}%`);
