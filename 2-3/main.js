let n = process.argv[2];
if(n >= 24){
    while(n >= 24){
        n -= 24;
    }
}
console.log(n);