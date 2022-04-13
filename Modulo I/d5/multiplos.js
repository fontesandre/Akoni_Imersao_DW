const numeros = [1, 2, 3, 4, 5];
//               0  1  2  3  4

for (let i = 0; i < numeros.length; i++) {
  let resultado = numeros[i] * 2;
  let resto = resultado % 3;

  console.log("O indice atual é: " + i);

  if (resto == 0) {
    console.log("O numero " + numeros[i] + " é multiplo 3");
  }
}
