import { useEffect, useState } from "react";
import './bulma/css/bulma.min.css' ; 
import mock from "./mock.json";

function ListaDeUsuarios() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setTimeout(() => setCarregando(false), 5000);
  }, []);

  if (carregando) {
    <progress class="progress" value="15" max="100">15%</progress>
    return <p className="m-5">Carregando</p>;
    
  } else {
    return (
      <div className="columns">
        {mock.usuarios.map((usuario) => (
          <div className="card m-1 p-4 has-text-info column" key={usuario.nome}>
            <div className="is-clipped">
              <p>{usuario.nome}</p>
              <p className="is-clipped">{usuario.ativo.toString()}</p>
            </div>
            <div className="column"></div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListaDeUsuarios;

/*import mock from "./mock.json";

function ListaDeUsuarios() {
  console.log(mock);
  return (
    <div className="content">
      {mock.usuarios.map((usuario) => (
        <div className="card m-1 p-4 has-text-info" key={usuario.nome}>
          {usuario.ativo && <p>{usuario.nome}</p>}
        </div>
      ))}
    </div>
  );
}

export default ListaDeUsuarios;
*/
/*import mock from './mock.json'

function ListaDeUsuarios() {
    console.log(mock)
  return (
    <div>
        {mock.usuarios.map((usuario)=>(
            <li key={usuario.nome}>
                <p>{usuario.nome}</p>
                <p>{usuario.ativo.toString()}</p>
            </li>
        ))}
    </div>
  );
}


export default ListaDeUsuarios;*/