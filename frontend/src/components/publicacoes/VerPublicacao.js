import { useDispatch, useSelector } from "react-redux";

import {deletePublicacao} from '../../api/api'

import { actionMinhaPublicacaoSelecionada } from "../../store/actions/publicacoes/minhaPublicacaoSelecionada.action";
import { actionDeletePublicacao } from "../../store/actions/publicacoes/minhasPublicacoes.action";


export function VerPublicacao({ publico }) {
  const publicacaoSelecionada = useSelector((state) => state.publicacaoSelecionada)
  const minhaPublicacaoSelecionada = useSelector((state) => state.minhaPublicacaoSelecionada)
  const publicacao = publico
    ? publicacaoSelecionada
    : minhaPublicacaoSelecionada;
  const dispatch = useDispatch();

  const editarPublicacao = () => {
    dispatch(actionMinhaPublicacaoSelecionada(publicacao));
    // redireciona p rota EditarPublicacao
  };

  const deletarPublicacao = async () => {
    try {
      let res = await deletePublicacao(publicacao);
      if (res.status === 200) {
        dispatch(actionDeletePublicacao(res.data));
      } else {
        // dispatch(actionFeedback(res.data.message, false));
      }
    } catch (error) {
      // dispatch(actionFeedback("Erro na comunicação com o servidor!", false));
    }
  };

  return (
    <div>
      {/* exibir dados da publicacao */}

      {/* se publico => exibir informações e botoes de contato */}
      {/* senão => exibir botoes editar e deletar */}
    </div>
  );
}
