import { useDispatch, useSelector } from "react-redux";

import {deleteProduto} from '../../api/api'

import { actionMeuProdutoSelecionado } from "../../store/actions/produtos/meuProdutoSelecionado.action";
import { actionDeleteProduto } from "../../store/actions/produtos/meusProdutos.action";


export function VerProduto({ publico }) {
  const produtoSelecionado = useSelector((state) => state.produtoSelecionado)
  const meuProdutoSelecionado = useSelector((state) => state.meuProdutoSelecionado)
  const produto = publico
    ? produtoSelecionado
    : meuProdutoSelecionado;
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
      {/* exibir dados do produto */}

      {/* se publico => exibir informações e botoes de contato */}
      {/* senão => exibir botoes editar e deletar */}
    </div>
  );
}
