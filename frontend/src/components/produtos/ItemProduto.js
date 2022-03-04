import { useDispatch } from "react-redux";

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
      <p>Item Produto</p>
      <p>id: {produto.id}</p>
      <p>nome: {produto.nome}</p>

      {/* clique em selecionar => selecionarProduto() */}
    </div>
  );
}
