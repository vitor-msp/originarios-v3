import { useDispatch } from "react-redux";

import { actionPublicacaoSelecionada } from "../../store/actions/publicacoes/publicacaoSelecionada.action";
import { actionMinhaPublicacaoSelecionada } from "../../store/actions/publicacoes/minhaPublicacaoSelecionada.action";
import { NavLink } from "react-router-dom";
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
  }

  return (
    <div>


      {/* clique em selecionar => selecionarProduto() */}
      {publico ? (
        <div>
          <p>Item publicado</p>
          <p>Título: {publicacao.titulo}</p>
          <p>Corpo: {publicacao.corpo}</p>
          <p>Local: {publicacao.localizacao}</p>
          <p>Data: {publicacao.data}</p>
          <NavLink
            to={"/VerPublicacao"}
            onClick={selecionarPublicacao}
            className={"text-light"}
          >
            Selecionar
          </NavLink>
        </div>
      ) : (
        <div>
          <p>Item publicacao</p>
          <p>Título: {publicacao.titulo}</p>
          <p>Data: {publicacao.data}</p>
          <NavLink
            to={"/VerMinhaPublicacao"}
            onClick={selecionarPublicacao}
            className={"text-light"}
          >
            Selecionar
          </NavLink>
        </div>
      )}

      {/* clique em selecionar => selecionarPublicacao() */}
    </div>
  );
}
