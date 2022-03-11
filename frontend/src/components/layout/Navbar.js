import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  const logout = () => {
    localStorage.removeItem("OrigTkn");
  };

  return (
    <nav className="row p-0 m-0 bg-transparent">
      <div id="nav" className="col-8 navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid justify-content-start px-0">
          <button
            className="navbar-toggler my-2 my-lg-0 bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navToggler"
            aria-controls="navToggler"
            aria-expanded="false"
            aria-label="Menu de navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to={"/"} className="navbar-brand mx-2 mx-lg-4">
            Originarios{" "}
          </Link>

          <div className="collapse navbar-collapse" id="navToggler">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item ">
                <NavLink to={"/"} className={"text-light"}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/Contato"} className={"text-light"}>
                  Contato
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/Produtos"} className={"text-light"}>
                  Produtos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/Publicacoes"} className={"text-light"}>
                  Publicacoes
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/MeusProdutos"} className={"text-light"}>
                  Meus Produtos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/MinhasPublicacoes"} className={"text-light"}>
                  Minhas Publicacoes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-4 d-flex justify-content-center align-items-center">
        <NavLink to={"/Registro"} className={"text-light"}>
          Registrar
        </NavLink>

        <NavLink to={"/Login"} className={"text-light"}>
          Login
        </NavLink>

        <NavLink to={"/MeusDados"} className={"text-light"}>
          Meus Dados
        </NavLink>

        <NavLink to={"/"} onClick={logout} className={"text-light"}>
          Sair
        </NavLink>
      </div>
    </nav>
  );
}
