import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getImagem } from "../../helpers/getImagem";

import { actionProdutoSelecionado } from "../../store/actions/produtos/produtoSelecionado.action";
import { actionMeuProdutoSelecionado } from "../../store/actions/produtos/meuProdutoSelecionado.action";
import { formatarMoeda } from "../../helpers/formatarMoeda";

export function ItemProduto({ produto, publico }) {
  const dispatch = useDispatch();

  const selecionarProduto = () => {
    if (publico) {
      dispatch(actionProdutoSelecionado(produto));
    } else {
      dispatch(actionMeuProdutoSelecionado(produto));
    }
  };

  return (
    <div>
      <p>Id: {produto.id}</p>
      <p>Título: {produto.titulo}</p>
      <p>Descrição: {produto.descricao}</p>
      <p>Corpo: {produto.corpo} </p>
      <p>Valor: {produto.valor === null ? null : formatarMoeda(produto.valor)} </p>

      {produto.imagem1 !== null && (
        <img src={getImagem(produto.imagem1.id)} alt={produto.imagem1.nome} />
      )}

      {/* <p>Usuário: {produto.usuario} </p> */}

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
