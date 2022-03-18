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
    <div>
      <div>
        <p>Id: {produto.id}</p>
        <p>Título: {produto.titulo}</p>
        <p>Descrição: {produto.descricao}</p>
        <p>Corpo: {produto.corpo} </p>
        <p>
          Valor: {produto.valor === null ? null : formatarMoeda(produto.valor)}
        </p>

        {produto.imagem1 !== null && (
          <img src={getImagem(produto.imagem1.id)} alt={produto.imagem1.nome} />
        )}
        {produto.imagem2 !== null && (
          <img src={getImagem(produto.imagem2.id)} alt={produto.imagem2.nome} />
        )}
        {produto.imagem3 !== null && (
          <img src={getImagem(produto.imagem3.id)} alt={produto.imagem3.nome} />
        )}
        {produto.imagem4 !== null && (
          <img src={getImagem(produto.imagem4.id)} alt={produto.imagem4.nome} />
        )}

        {publico && (
          <>
            <p>Usuário nome: {produto.usuario.nome} </p>
            <p>Usuário email: {produto.usuario.email} </p>
            <p>Usuário ddd: {produto.usuario.ddd} </p>
            <p>Usuário telefone: {produto.usuario.telefone} </p>
            <p>Usuário cidade: {produto.usuario.cidade} </p>
            <p>Usuário uf: {produto.usuario.uf} </p>
            <p>Usuário tribo: {produto.usuario.tribo} </p>
          </>
        )}
      </div>

      {publico ? (
        <div>
          <NavLink
            to={"/Produtos"}
            onClick={produtoSelecionado}
            className={"text-light"}
          >
            Voltar
          </NavLink>
          <NavLink
            to={"/Produtos"}
            onClick={produtoSelecionado}
            className={"text-light"}
          >
            Whatsapp
          </NavLink>
          <NavLink
            to={"/Produtos"}
            onClick={produtoSelecionado}
            className={"text-light"}
          >
            E-mail
          </NavLink>

          {/*botao de whats e botao de email e botao de voltar*/}
        </div>
      ) : (
        <>
          <button
            type={"button"}
            onClick={editarProduto}
            className={"btn btn-success"}
          >
            Editar
          </button>
          <button
            type={"button"}
            onClick={deletarProduto}
            className={"btn btn-danger"}
          >
            Excluir
          </button>
        </>
      )}
    </div>
  );
}
