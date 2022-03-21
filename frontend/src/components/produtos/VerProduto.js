import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { deleteProduto } from "../../api/api";
import { formatarMoeda } from "../../helpers/formatarMoeda";
import { getImagem } from "../../helpers/getImagem";

import { actionMeuProdutoSelecionado } from "../../store/actions/produtos/meuProdutoSelecionado.action";

export function VerProduto({ publico }) {
  const produtoSelecionado = useSelector((state) => state.produtoSelecionado);
  const meuProdutoSelecionado = useSelector(
    (state) => state.meuProdutoSelecionado
  );
  const produto = publico ? produtoSelecionado : meuProdutoSelecionado;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editarProduto = () => {
    dispatch(actionMeuProdutoSelecionado(produto));
    navigate("/EditarProduto");
  };

  const deletarProduto = async () => {
    const res = await dispatch(deleteProduto(produto));
    if (res === true) {
      navigate("/MeusProdutos");
    }
  };

  return (
    <div className="containerd-flex flex-row flex-wrap justify-content-around align-content-center">
      <div className="container">
        <h1>{produto.titulo}</h1>
        <br></br>
        <h3>Descrição: </h3>
        <div
          style={{
            textIndent: 45,
            maxWidth: 1120,
            textAlign: "justify",
            overflowWrap: "break-word",
          }}
        >
          {produto.descricao}
        </div>
        <br></br>

        {produto.corpo.length !== 0 && (
          <>
            <h3>Detalhes: </h3>
            <div
              style={{ textIndent: 45, maxWidth: 1120, textAlign: "justify" }}
            >
              {produto.corpo}
            </div>
            <br />
          </>
        )}

        <h3>
          Valor:{" "}
          <u>{produto.valor === null ? "-" : formatarMoeda(produto.valor)} </u>
        </h3>

        <br />
        {publico && (
          <>
            <h4>Informações do produtor(a):</h4>
            <h5>Nome: {produto.usuario.nome}</h5>
            <h5>E-mail: {produto.usuario.email}</h5>
            <h5>
              Telefone: ({produto.usuario.ddd}) {produto.usuario.telefone}
            </h5>
            <h5>
              Cidade e UF: {produto.usuario.cidade} - {produto.usuario.uf}
            </h5>
            <h5>Tribo/Etnia: {produto.usuario.tribo}</h5>
            <br />
          </>
        )}

        <div className="d-flex flex-row flex-wrap justify-content-around align-content-center">
          {produto.imagem1 !== null && (
            <img
              src={getImagem(produto.imagem1.id)}
              alt={produto.imagem1.nome}
              className="img-fluid mb-5"
              style={{ width: 350, height: 350, borderRadius: 30 }}
            />
          )}
          {produto.imagem2 !== null && (
            <img
              src={getImagem(produto.imagem2.id)}
              alt={produto.imagem2.nome}
              className="img-fluid mb-5"
              style={{ width: 350, height: 350, borderRadius: 30 }}
            />
          )}
          {produto.imagem3 !== null && (
            <img
              src={getImagem(produto.imagem3.id)}
              alt={produto.imagem3.nome}
              className="img-fluid mb-5"
              style={{ width: 350, height: 350, borderRadius: 30 }}
            />
          )}
          {produto.imagem4 !== null && (
            <img
              src={getImagem(produto.imagem4.id)}
              alt={produto.imagem4.nome}
              className="img-fluid mb-5"
              style={{ width: 350, height: 350, borderRadius: 30 }}
            />
          )}
        </div>

        {publico ? (
          <div style={{ position: "relative", bottom: 0, left: 0 }}>
            <NavLink
              to={"/Produtos"}
              className={"btn text-light mx-1"}
              style={{ backgroundColor: "var(--corClara)" }}
            >
              Voltar
            </NavLink>

            <a
              href={`https://api.whatsapp.com/send?phone=55+${produto.usuario.ddd}${produto.usuario.telefone}&text=Olá, queria saber mais sobre o produto - ${produto.titulo} - que vi no site Originários!`}
              className={"btn btn-success text-light mx-1"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              {" "}
              Whatsapp{" "}
            </a>

            <a
              href={`mailto:${produto.usuario.email}?subject=Interesse%20em%20produto&body=Ola%2C%20vi%20o%20produto%20-%20${produto.titulo}%20-%20no%20site%20Originarios%20e%20me%20interessei.%20Como%20adquiro%3F`}
              className={"btn btn-danger text-light mx-1 "}
            >
              {" "}
              E-mail{" "}
            </a>
          </div>
        ) : (
          <>
            <NavLink
              to={"/MeusProdutos"}
              className={"btn text-light mx-1"}
              style={{ backgroundColor: "var(--corClara)" }}
            >
              Voltar
            </NavLink>
            <button
              type={"button"}
              onClick={editarProduto}
              className={"btn text-light mx-1"}
              style={{ backgroundColor: "var(--corClara)" }}
            >
              Editar
            </button>
            <button
              type={"button"}
              onClick={deletarProduto}
              className={"btn text-light mx-1"}
              style={{ backgroundColor: "var(--corMaisEscura)" }}
            >
              Excluir
            </button>
          </>
        )}
      </div>
    </div>
  );
}