import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { actionProdutoSelecionado } from "../../store/actions/produtos/produtoSelecionado.action";
import { actionMeuProdutoSelecionado } from "../../store/actions/produtos/meuProdutoSelecionado.action";

export function ItemProduto({ produto, publico }) {
  const dispatch = useDispatch();

  const selecionarProduto = () => {
    if (publico) {
      dispatch(actionProdutoSelecionado(produto));
      // redireciona p rota VerProduto
    } else {
      dispatch(actionMeuProdutoSelecionado(produto));
      // redireciona p rota VerMeuProduto
    }
  };

  return (

    <div>
      <p>Título: {produto.titulo}</p>
      <p>Descrição: {produto.descricao}</p>
      <p>Corpo: {produto.corpo} </p>
      <p>Usuário: {produto.usuario} </p>

      {/* clique em selecionar => selecionarProduto() */}
      {publico ? (
        <NavLink
          to={"/VerProduto"}
          onClick={selecionarProduto}
          className={"text-light"}
        >
          Selecionar
        </NavLink>
      ) : (
        <NavLink
          to={"/VerMeuProduto"}
          onClick={selecionarProduto}
          className={"text-light"}
        >
          Selecionar
        </NavLink>
      )}
    </div>
  );
}
