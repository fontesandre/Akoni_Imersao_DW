import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Componente from "./Componente";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <img style={{width:"50px"}} src={"./estrela.png"}></img>
        </div>
        <div className="navbar-menu ">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/componente">
              Componente
            </Link>
            <Link className="navbar-item" to="/katreque">
              Katreque
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="*" element={<h1>Pagina Home</h1>}></Route>
        <Route path="/componente" element={<Componente></Componente>}></Route>
        <Route path="/katreque" element={<h1>Pagina Katreque</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
