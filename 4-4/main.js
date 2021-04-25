const num = 10;
var array = [];

// for (let i = 0; i < 10; i++) {
  // for (let j = 0; j < ; j++) {
    // const element = array[j];
    // if (array[i]) {
      
      // }
      while(array.length < 10){
      let random = Math.floor(Math.random() * num);
      if(!array.includes(' ' + random)){
        array.push(' ' + random);
      }
    }
    var result = array.join('');
    console.log(result);
