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
import { getMeusDados, getProdutos } from "../api/api";
import { existeToken } from "../helpers/jwtToken";
import {
  actionGetMeusDados,
  actionLimparMeusDados,
} from "../store/actions/meusDados/meusDados.action";
import { actionLogin } from "../store/actions/meusDados/estaLogado.action";
import { InfoModal } from "../components/modals/InfoModal";
import { actionInfoModal } from "../store/actions/modal/infoModal.actions";
import { actionLimparMeusProdutos } from "../store/actions/produtos/meusProdutos.action";
import { actionLimparMeuProdutoSelecionado } from "../store/actions/produtos/meuProdutoSelecionado.action";
import { actionLimparMinhasPublicacoes } from "../store/actions/publicacoes/minhasPublicacoes.action";
import { actionLimparMinhaPublicacaoSelecionada } from "../store/actions/publicacoes/minhaPublicacaoSelecionada.action";

function App() {
  const estaLogado = useSelector((state) => state.estaLogado);
  const meusDados = useSelector((state) => state.meusDados);
  const infoModal = useSelector((state) => state.infoModal);
  const produtos = useSelector((state) => state.produtos);
  const dispatch = useDispatch();

  const reqMeusDados = async () => {
    try {
      const res = await getMeusDados();
      if (res.status === 200) {
        dispatch(actionGetMeusDados(res.data));
      } else {
        dispatch(actionInfoModal("Erro ao trazer seus dados!", false));
      }
    } catch (error) {
      dispatch(actionInfoModal("Erro na comunicação com o servidor!", false));
    }
  };

  useEffect(() => {
    if (estaLogado && meusDados === null) {
      reqMeusDados();
    } else if (!estaLogado && meusDados !== null) {
      dispatch(actionLimparMeusDados());
      dispatch(actionLimparMeusProdutos());
      dispatch(actionLimparMeuProdutoSelecionado());
      dispatch(actionLimparMinhasPublicacoes());
      dispatch(actionLimparMinhaPublicacaoSelecionada());
    }
  }, [estaLogado]);

  useEffect(() => {
    if (existeToken()) {
      dispatch(actionLogin());
    }
    (async () => {
      if(produtos.length === 0) dispatch(getProdutos());
    })();
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

          {infoModal !== null && <InfoModal conteudo={infoModal} />}

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
