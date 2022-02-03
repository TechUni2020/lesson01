const n = +process.argv[2]
if (0<=n<=24){
    console.log(n)
}   else if (25<=n){
        console.log(n-24)
}
