import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

function App() {

  return (
    <BrowserRouter basename="/Originarios">
      <div className="row p-0 m-0">
        <div className="col-12 p-0 m-0">
          <div style={{ minHeight: "100vh" }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<PaginaHome />}></Route>
              <Route path="/Home" element={<PaginaHome />}></Route>
              <Route path="/Produtos" element={<PaginaProdutos />}></Route>
              <Route path="/Produto" element={<PaginaProduto />}></Route>
              <Route path="/Publicacoes" element={<PaginaPublicacoes />}></Route>
              <Route path="/Publicacao" element={<PaginaPublicacao />}></Route>
              <Route path="/Contato" element={<PaginaContato />}></Route>

              <Route path="/MeusProdutos" element={<PaginaMeusProdutos />}></Route>
              <Route path="/MeuProduto" element={<PaginaMeuProduto />}></Route>
              <Route path="/MinhasPublicacoes" element={<PaginaMinhasPublicacoes />}></Route>
              <Route path="/MinhaPublicacao" element={<PaginaMinhaPublicacao />}></Route>

              <Route path="/Registro" element={<PaginaRegistro />}></Route>
              <Route path="/Login" element={<PaginaLogin />}></Route>
              <Route path="/MeusDados" element={<PaginaMeusDados />}></Route>
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
