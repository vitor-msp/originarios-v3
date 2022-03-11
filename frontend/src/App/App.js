import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

import { PaginaHome } from "../pages/PaginaHome";
import { PaginaContato } from "../pages/PaginaContato";
import { PaginaRegistro } from "../pages/PaginaRegistro";
import { PaginaLogin } from "../pages/PaginaLogin";
import { PaginaMeusDados } from "../pages/PaginaMeuDados";

import { PaginaProdutos } from "../pages/produtos/PaginaProdutos";
import { PaginaMeusProdutos } from "../pages/produtos/PaginaMeusProdutos";
import { PaginaVerProduto } from "../pages/produtos/PaginaVerProduto";
import { PaginaVerMeuProduto } from "../pages/produtos/PaginaVerMeuProduto";
import { PaginaEditarProduto } from "../pages/produtos/PaginaEditarProduto";
import { PaginaCriarProduto } from "../pages/produtos/PaginaCriarProduto";

import { PaginaPublicacoes } from "../pages/publicacoes/PaginaPublicacoes";
import { PaginaMinhasPublicacoes } from "../pages/publicacoes/PaginaMinhasPublicacoes";
import { PaginaVerPublicacao } from "../pages/publicacoes/PaginaVerPublicacao";
import { PaginaVerMinhaPublicacao } from "../pages/publicacoes/PaginaVerMinhaPublicacao";
import { PaginaEditarPublicacao } from "../pages/publicacoes/PaginaEditarPublicacao";
import { PaginaCriarPublicacao } from "../pages/publicacoes/PaginaCriarPublicacao";
import { getMeusDados } from "../api/api";
import { existeToken } from "../helpers/jwtToken";
import {
  actionGetMeusDados,
  actionLimparMeusDados,
} from "../store/actions/meusDados/meusDados.action";
import { actionLogin } from "../store/actions/meusDados/estaLogado.action";

function App() {
  const estaLogado = useSelector((state) => state.estaLogado);
  const meusDados = useSelector((state) => state.meusDados);
  const dispatch = useDispatch();

  const reqMeusDados = async () => {
    try {
      const res = await getMeusDados();
      if (res.status === 200) {
        dispatch(actionGetMeusDados(res.data));
        // dispatch(actionFeedback("enviado com sucesso", false));
      } else {
        // dispatch(actionFeedback(res.data.message, false));
      }
    } catch (error) {
      // dispatch(actionFeedback("Erro na comunicação com o servidor!", false));
    }
  };

  useEffect(() => {
    if (estaLogado && meusDados === null) {
      reqMeusDados();
    } else if (!estaLogado && meusDados !== null) {
      dispatch(actionLimparMeusDados());
    }
  }, [estaLogado]);

  useEffect(() => {
    if (existeToken()) {
      dispatch(actionLogin());
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="row p-0 m-0">
        <div className="col-12 p-0 m-0">
          <div style={{ minHeight: "100vh" }}>
            <Navbar />

            <Routes>
              <Route path="/" element={<PaginaHome />}></Route>
              <Route path="/Home" element={<PaginaHome />}></Route>
              <Route path="/Contato" element={<PaginaContato />}></Route>
              <Route path="/Registro" element={<PaginaRegistro />}></Route>
              <Route path="/Login" element={<PaginaLogin />}></Route>
              <Route path="/MeusDados" element={<PaginaMeusDados />}></Route>

              {/* Produtos */}
              <Route path="/Produtos" element={<PaginaProdutos />}></Route>
              <Route path="/VerProduto" element={<PaginaVerProduto />}></Route>
              <Route
                path="/MeusProdutos"
                element={<PaginaMeusProdutos />}
              ></Route>
              <Route
                path="/VerMeuProduto"
                element={<PaginaVerMeuProduto />}
              ></Route>
              <Route
                path="/CriarProduto"
                element={<PaginaCriarProduto />}
              ></Route>
              <Route
                path="/EditarProduto"
                element={<PaginaEditarProduto />}
              ></Route>

              {/* Publicacoes */}
              <Route
                path="/Publicacoes"
                element={<PaginaPublicacoes />}
              ></Route>
              <Route
                path="/VerPublicacao"
                element={<PaginaVerPublicacao />}
              ></Route>
              <Route
                path="/MinhasPublicacoes"
                element={<PaginaMinhasPublicacoes />}
              ></Route>
              <Route
                path="/VerMinhaPublicacao"
                element={<PaginaVerMinhaPublicacao />}
              ></Route>
              <Route
                path="/CriarPublicacao"
                element={<PaginaCriarPublicacao />}
              ></Route>
              <Route
                path="/EditarPublicacao"
                element={<PaginaEditarPublicacao />}
              ></Route>
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
