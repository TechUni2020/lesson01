// What's the time now?
const hours = process.argv[2];
const currentTime = hours % 24; // Use the remainder(%) operator.
console.log(`${currentTime}`);