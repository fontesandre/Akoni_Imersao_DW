import { useState, useEffect } from "react";
import "./App.css";

const assinantes = [];

function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <div>
      <label htmlFor="nome">Nome</label>
      <br />
      <input
        id="nome"
        type="text"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      ></input>
      <br />
      <label htmlFor="cpf">CPF</label>
      <br />
      <input
        id="cpf"
        type="text"
        value={cpf}
        onChange={(evento) => setCpf(evento.target.value)}
      ></input>
      <br />
      <button onClick={()=> salvar(nome,cpf)}>Salvar</button>
      <button onClick={() => buscar(cpf)} >buscar</button>
    </div>
  );
}

function salvar(nomeParametro, cpfParametro){
  let pessoa = {
    nome: nomeParametro,
    cpf: cpfParametro
  }

  assinantes.push(pessoa);
  console.log(assinantes)
}

function buscar(cpf){
  for(let i = 0; i < assinantes.length; i++){
    if(cpf == assinantes[i].cpf){
      window.alert(`${assinantes[i].nome}  ${assinantes[i].cpf}`)
    }
  }
}

export default App;
