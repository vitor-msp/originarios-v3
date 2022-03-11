import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { deleteProduto } from "../../api/api";

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
      let res = await deleteProduto(produto);
      if (res.status === 200) {
        dispatch(actionDeleteProduto(res.data));
      } else {
        // dispatch(actionFeedback(res.data.message, false));
      }
    } catch (error) {
      // dispatch(actionFeedback("Erro na comunicação com o servidor!", false));
    }
  };

  return (
    <div>

      <div>
        <p>Título: {produto.titulo}</p>
        <p>Descrição: {produto.descricao}</p>
        <p>Corpo: {produto.corpo} </p>
        <p>Usuário: {produto.usuario} </p>
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