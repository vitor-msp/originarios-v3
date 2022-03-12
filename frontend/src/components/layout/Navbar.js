import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionLogout } from "../../store/actions/meusDados/estaLogado.action";
import logo from "../../pages/img/originarios-cortado.png";
import "animate.css";

export function Navbar() {
  const estaLogado = useSelector((state) => state.estaLogado);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(actionLogout());
  };

  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      styled="background-color: #e3f2fd;"
    >
      {/* <nav className="row pr-2 mr-5 bg-transparent"> */}
      <div
        id="nav"
        className="col-8 navbar navbar-expand-lg navbar-dark animate__animated animate__backInDown animate__delay-0.5s"
      >
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
            <img className="logo mr-0 " src={logo} alt="" />
            Originarios{" "}
          </Link>

          <div className="collapse navbar-collapse" id="navToggler">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/"} className={"nav-link text-light"}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/Contato"} className={"nav-link text-light"}>
                  Contato
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/Produtos"} className={"nav-link text-light"}>
                  Produtos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={"/Publicacoes"} className={"nav-link text-light"}>
                  Publicacoes
                </NavLink>
              </li>

              {estaLogado && (
                <>
                  <li className="nav-item">
                    <NavLink
                      to={"/MeusProdutos"}
                      className={"nav-link text-light"}
                    >
                      Meus Produtos
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to={"/MinhasPublicacoes"}
                      className={"nav-link text-light"}
                    >
                      Minhas Publicacoes
                    </NavLink>
                  </li>
                </>
              )}

              {estaLogado ? (
                <>
                  <li className="nav-item d-sm-block d-lg-none">
                    <NavLink
                      to={"/MeusDados"}
                      className={"nav-link text-light"}
                    >
                      Meus Dados
                    </NavLink>
                  </li>
                  <li className="nav-item d-sm-block d-lg-none">
                    <NavLink to={"/"} onClick={logout} className={"text-light"}>
                      Sair
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item  d-sm-block d-lg-none">
                    <NavLink to={"/Registro"} className={"nav-link text-light"}>
                      Registrar
                    </NavLink>
                  </li>
                  <li className="nav-item d-sm-block d-lg-none">
                    <NavLink to={"/Login"} className={"nav-link text-light"}>
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="col-4 d-flex justify-content-center align-items-center animate__animated animate__backInDown animate__delay-1s">
        {estaLogado ? (
          <>
            <NavLink
              to={"/MeusDados"}
              className={"nav-link text-light d-none d-lg-block d-xl-block"}
            >
              Meus Dados
            </NavLink>

            <NavLink
              to={"/"}
              onClick={logout}
              className={"text-light d-none d-lg-block d-xl-block"}
            >
              Sair
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to={"/Registro"}
              className={"nav-link text-light d-none d-lg-block d-xl-block"}
            >
              Registrar
            </NavLink>

            <NavLink
              to={"/Login"}
              className={"nav-link text-light d-none d-lg-block d-xl-block"}
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
