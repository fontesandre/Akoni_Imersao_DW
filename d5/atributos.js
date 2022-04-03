const Jason = {
  altura: 1.96,
  corDaMascara: "branca",
  possuiFaca: true,
};

delete Jason["possuiFaca"];

Jason.altura = 1.86;

console.log(Jason);
