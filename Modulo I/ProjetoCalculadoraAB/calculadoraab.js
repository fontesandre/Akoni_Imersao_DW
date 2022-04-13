function clicouNumero(valor) {
  let elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML += valor;
}


function exibirResultado() {
  let exibeResultado = document.getElementById ("resultado").innerHTML;
  if (exibeResultado) {
    document.getElementById ("resultado").innerHTML = eval(exibeResultado);
  }
  else {
  document.getElementById ("resultado").innerHTML = 0
  }

}