import { useDispatch, useSelector } from "react-redux";

import { postPublicacao, putPublicacao } from "../../api/api";
import {
  actionPutPublicacao,
  actionPostPublicacao,
} from "../../store/actions/publicacoes/minhasPublicacoes.action";

export function EditarPublicacao({ novaPublicacao }) {
  const minhaPublicacaoSelecionada = useSelector(
    (state) => state.minhaPublicacaoSelecionada
  );
  const publicacao = novaPublicacao ? {} : minhaPublicacaoSelecionada;
  const dispatch = useDispatch();

  const salvarPublicacao = async (publicacao) => {
    if (validarPublicacao(publicacao)) {
      try {
        let res = novaPublicacao
          ? await postPublicacao(publicacao)
          : await putPublicacao(publicacao);
        if (res.status === 200) {
          dispatch(
            novaPublicacao
              ? actionPostPublicacao(res.data)
              : actionPutPublicacao(res.data)
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

  const validarPublicacao = (publicacao) => {
    // valida campos
    // se campos validos => return true
  };

  return (
    <div>
      {/* exibir formulário com dados da publicacao */}

      {/* clique em salvar => salvarPublicacao(dados do formulário) */}
    </div>
  );
}
