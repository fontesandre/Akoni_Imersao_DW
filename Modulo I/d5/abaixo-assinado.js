const arrayPessoas = [];

function salvar() {
  let elementoNome = document.getElementById("inputNome");
  let elementoCpf = document.getElementById("inputCPF");

  const jsonPessoa = {
    nome:  elementoNome.value,
    cpf: elementoCpf.value,
  };

  arrayPessoas.push(jsonPessoa);

  console.log(arrayPessoas);
}

function buscar() {
  let elementoBusca = document.getElementById("inputBusca");

  let cpfBuscar = elementoBusca.value;
  let achado;
  for (let i = 0; i < arrayPessoas.length; i++) {
    if (arrayPessoas[i].cpf == cpfBuscar) {
      achado = arrayPessoas[i];
    }
  }
  window.alert(`Nome: ${achado.nome}\nCpf: ${achado.cpf}`);
}
