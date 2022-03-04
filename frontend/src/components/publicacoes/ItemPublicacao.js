import { useDispatch } from "react-redux";

import { actionPublicacaoSelecionada } from "../../store/actions/publicacoes/publicacaoSelecionada.action";
import { actionMinhaPublicacaoSelecionada } from "../../store/actions/publicacoes/minhaPublicacaoSelecionada.action";

export function ItemPublicacao({ publicacao, publico }) {
  const dispatch = useDispatch();

  const selecionarPublicacao = () => {
    if (publico) {
      dispatch(actionPublicacaoSelecionada(publicacao));
      // redireciona p rota VerPublicacao
    } else {
      dispatch(actionMinhaPublicacaoSelecionada(publicacao));
      // redireciona p rota VerMinhaPublicacao
    }
  };

  return (
    <div>
      <p>Item publicacao</p>
      <p>id: {publicacao.id}</p>
      <p>nome: {publicacao.nome}</p>

      {/* clique em selecionar => selecionarPublicacao() */}
    </div>
  );
}
