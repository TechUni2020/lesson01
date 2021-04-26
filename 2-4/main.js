//JavaScript switch文で検索
let season = process.argv[2];

switch (season){
  case '２':
  case '3':
  case '4':
    console.log('春');
    break;
  case '５':
  case '6':
  case '7':
    console.log('夏');
    break;
  case '8':
  case '9':
  case '10':
      console.log('秋')  
    break;
  case '11':
  case '12':
  case '1':
          console.log('冬');
          break;
  default:
    console.log('1年は12ヶ月です');
}