import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { actionPublicacaoSelecionada } from "../../store/actions/publicacoes/publicacaoSelecionada.action";
import { actionMinhaPublicacaoSelecionada } from "../../store/actions/publicacoes/minhaPublicacaoSelecionada.action";
import { formatarData } from "../../helpers/formatarData";

export function ItemPublicacao({ publicacao, publico }) {
  const dispatch = useDispatch();

  const selecionarPublicacao = () => {
    if (publico) {
      dispatch(actionPublicacaoSelecionada(publicacao));
    } else {
      dispatch(actionMinhaPublicacaoSelecionada(publicacao));
    }
  }

  return (
    <div>
      <p>Id: {publicacao.id}</p>
      <p>Título: {publicacao.titulo}</p>
      <p>Corpo: {publicacao.corpo}</p>
      <p>Data: {publicacao.data === null ? null : formatarData(publicacao.data)}</p>
      {/* <p>Usuário: {publicacao.usuario} </p> */}

      {publico ? (
          <NavLink
            to={"/VerPublicacao"}
            onClick={selecionarPublicacao}
            className={"text-light"}
          >
            Selecionar
          </NavLink>
      ) : (
          <NavLink
            to={"/VerMinhaPublicacao"}
            onClick={selecionarPublicacao}
            className={"text-light"}
          >
            Selecionar
          </NavLink>
      )}
    </div>
  );
}
