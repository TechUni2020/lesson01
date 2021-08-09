const r =  Number(process.argv[2]);

const PI = 3.14;

function circle (hankei){
  const menseki =hankei * hankei * PI;
  console.log(menseki);
};

circle(r);
