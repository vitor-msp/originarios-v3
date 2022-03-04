import { useDispatch, useSelector } from "react-redux";

import { postProduto, putProduto } from "../../api/api";
import {
  actionPutProduto,
  actionPostProduto,
} from "../../store/actions/produtos/meusProdutos.action";

export function EditarProduto({ novoProduto }) {
  const meuProdutoSelecionado = useSelector(
    (state) => state.meuProdutoSelecionado
  );
  const produto = novoProduto ? {} : meuProdutoSelecionado;
  const dispatch = useDispatch();

  const salvarProduto = async (produto) => {
    if (produtoValido(produto)) {
      try {
        let res = novoProduto
          ? await postProduto(produto)
          : await putProduto(produto);
        if (res.status === 200) {
          dispatch(
            novoProduto
              ? actionPostProduto(res.data)
              : actionPutProduto(res.data)
          );
        } else {
          // dispatch(actionFeedback(res.data.message, false));
        }
      } catch (error) {
        // dispatch(actionFeedback("Erro na comunicação com o servidor!", false));
      }
    } else {
      // feedback p usuario => dados inválidos
    }
  };

  const produtoValido = (produto) => {
    // valida campos
    // se campos validos => return true
  };

  return (
    <div>
      {/* exibir formulário com dados do produto */}

      {/* clique em salvar => salvarProduto(dados do formulário) */}
    </div>
  );
}
