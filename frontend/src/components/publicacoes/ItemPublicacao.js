import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

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
  }

  return (
    <div>
      <p>Id: {publicacao.id}</p>
      <p>Título: {publicacao.titulo}</p>
      <p>Corpo: {publicacao.corpo}</p>
      <p>Data: {publicacao.data}</p>
      {/* <p>Usuário: {publicacao.usuario} </p> */}

      {/* clique em selecionar => selecionarProduto() */}
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
