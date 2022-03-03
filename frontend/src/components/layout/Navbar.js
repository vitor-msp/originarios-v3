import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {

  return (
    <nav className="row p-0 m-0 bg-transparent">
      <div id="nav" className="col-9 navbar navbar-expand-lg navbar-dark">
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
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "activeNav nav-link py-3 bg-transparent"
                      : "nav-link py-3 bg-transparent"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={"/Produtos"}
                  className={({ isActive }) =>
                    isActive
                      ? "activeNav nav-link py-3 bg-transparent"
                      : "nav-link py-3 bg-transparent"
                  }
                >
                  Produtos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={"/Publicacoes"}
                  className={({ isActive }) =>
                    isActive
                      ? "activeNav nav-link py-3 bg-transparent"
                      : "nav-link py-3 bg-transparent"
                  }
                >
                  Publicacoes
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={"/Contato"}
                  className={({ isActive }) =>
                    isActive
                      ? "activeNav nav-link py-3 bg-transparent"
                      : "nav-link py-3 bg-transparent"
                  }
                >
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-3 d-flex justify-content-center align-items-center">
        <NavLink
          to={"/Registrar"}
          className={({ isActive }) =>
            isActive
              ? "activeNav nav-link py-3 bg-transparent"
              : "nav-link py-3 bg-transparent"
          }
        >
          Registrar
        </NavLink>

        <NavLink
          to={"/Login"}
          className={({ isActive }) =>
            isActive
              ? "activeNav nav-link py-3 bg-transparent"
              : "nav-link py-3 bg-transparent"
          }
        >
          Login
        </NavLink>

        <NavLink
          to={"/MeusDados"}
          className={({ isActive }) =>
            isActive
              ? "activeNav nav-link py-3 bg-transparent"
              : "nav-link py-3 bg-transparent"
          }
        >
          Meus Dados
        </NavLink>

        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "activeNav nav-link py-3 bg-transparent"
              : "nav-link py-3 bg-transparent"
          }
        >
          Sair
        </NavLink>
      </div>
    </nav>
  );
}
