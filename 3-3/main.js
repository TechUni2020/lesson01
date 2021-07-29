const arg = process.argv[2]

for(let i=1;i<=arg;i++) {
    const ans = 1+2*(i-1)
    let icon =""
    const num = arg -i
    let space = ""
    for(let j=1;j<=num;j++){
        space += " "
    }
    for(let k= 1;k<=ans;k++){
        icon += "*"
    }
    console.log(space + icon)
}