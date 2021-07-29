const vertical = process.argv[2]
const horizon = process.argv[3]


for (let i = 1 ; i <= vertical ; i++) {
    let ans = ""
    for (let j = 1 ; j <= horizon ;  j++){
        if(i%2 == 0) {
            if(j%2 == 0){
                ans+="*"
            } else {
                ans += "-"
            }
        } else {
            if(j%2 == 0){
                ans+="-"
            } else {
                ans += "*"
            }
        }
    }
    console.log(ans)
}