import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { deleteProduto } from "../../api/api";
import { actionInfoModal } from "../../store/actions/modal/infoModal.actions";

import { actionMeuProdutoSelecionado } from "../../store/actions/produtos/meuProdutoSelecionado.action";
import { actionDeleteProduto } from "../../store/actions/produtos/meusProdutos.action";

export function VerProduto({ publico }) {
  const produtoSelecionado = useSelector((state) => state.produtoSelecionado);
  const meuProdutoSelecionado = useSelector(
    (state) => state.meuProdutoSelecionado
  );
  const produto = publico ? produtoSelecionado : meuProdutoSelecionado;
  const dispatch = useDispatch();

  const editarProduto = () => {
    dispatch(actionMeuProdutoSelecionado(produto));
    // redireciona p rota EditarProduto
  };

  const deletarProduto = async () => {
    try {
      const res = await deleteProduto(produto);
      if (res.status === 200) {
        dispatch(actionDeleteProduto(produto.id));
        dispatch(actionInfoModal("Produto deletado com sucesso!", true));
      } else {
        dispatch(actionInfoModal("Erro ao deletar o produto!", false));
      }
    } catch (error) {
      dispatch(actionInfoModal("Erro na comunicação com o servidor!", false));
    }
  };

  return (
    <div>
      <div>
        <p>Id: {produto.id}</p>
        <p>Título: {produto.titulo}</p>
        <p>Descrição: {produto.descricao}</p>
        <p>Corpo: {produto.corpo} </p>
        <p>Valor: {produto.valor} </p>
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
        {/* <p>Usuário: {produto.usuario} </p> */}
      </div>

      {/* se publico => exibir informações e botoes de contato */}
      {/* senão => exibir botoes editar e deletar */}

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
          <NavLink
            to={"/EditarProduto"}
            onClick={editarProduto}
            className={"btn btn-success"}
          >
            Editar
          </NavLink>
          <NavLink
            to={"/MeusProdutos"}
            onClick={deletarProduto}
            className={"btn btn-danger"}
          >
            Excluir
          </NavLink>
        </>
      )}
    </div>
  );
}
