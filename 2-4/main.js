const kisetsu = +process.argv[2]

switch (kisetsu){
    case 2:
    case 3:
    case 4:
      console.log('春');
      break;
    case 5:
    case 6:
    case 7:
      console.log('夏');
      break;
    case 8:
    case 9:
    case 10:
      console.log('秋');         
      break;
    default:
      console.log('冬');
  }