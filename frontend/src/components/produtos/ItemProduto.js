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
    <div
      className="my-3"
      style={{
        minWidth: 250,
        maxHeight: 300,
        boxSizing: "border-box",
      }}
    >
      <div className="my-2" style={{ textAlign: "center" }}>
        <h4>{produto.titulo}</h4>
        <h6
          style={{
            maxWidth: 270,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {produto.descricao}
        </h6>

        <h5>{produto.valor === null ? null : formatarMoeda(produto.valor)} </h5>

        {produto.imagem1 !== null && (
          <img
            src={getImagem(produto.imagem1.id)}
            alt={produto.imagem1.nome}
            style={{ width: 110, height: 110, borderRadius: 20 }}
          />
        )}
      </div>

      <div style={{ position: "relative", textAlign: "center" }}>
        {publico ? (
          <NavLink
            to={"/VerProduto"}
            onClick={selecionarProduto}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corClara)" }}
          >
            Selecionar
          </NavLink>
        ) : (
          <NavLink
            to={"/VerMeuProduto"}
            onClick={selecionarProduto}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corClara)" }}
          >
            Selecionar
          </NavLink>
        )}
      </div>
    </div>
  );
}
