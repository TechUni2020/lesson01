const n = Number(process.argv[2]);
switch(n){
    case 2:
    case 3:
    case 4:
        console.log("春");
        break;

    case 5:
    case 6:
    case 7:
        console.log("夏");
        break;

    case 8:
    case 9:
    case 10:
        console.log("秋");
        break;

    case 11:
    case 12:
    case 1:
        console.log("冬");
        break;
}

// * 2〜4月：春
// * 5〜7月：夏
// * 8〜10月：秋
// * 11〜1月：冬