const args = process.argv[2];

if(args < 24) {
    console.log(args);
}
else {
    console.log(args % 24);
}