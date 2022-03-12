import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { deletePublicacao } from "../../api/api";

import { actionMinhaPublicacaoSelecionada } from "../../store/actions/publicacoes/minhaPublicacaoSelecionada.action";
import { actionDeletePublicacao } from "../../store/actions/publicacoes/minhasPublicacoes.action";

export function VerPublicacao({ publico }) {
  const publicacaoSelecionada = useSelector(
    (state) => state.publicacaoSelecionada
  );
  const minhaPublicacaoSelecionada = useSelector(
    (state) => state.minhaPublicacaoSelecionada
  );
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
      const res = await deletePublicacao(publicacao);
      if (res.status === 200) {
        dispatch(actionDeletePublicacao(publicacao.id));
      } else {
        // dispatch(actionFeedback(res.data.message, false));
      }
    } catch (error) {
      // dispatch(actionFeedback("Erro na comunicação com o servidor!", false));
    }
  };

  return (
    <div>
      <p>Id: {publicacao.id}</p>
      <p>Título: {publicacao.titulo}</p>
      <p>Corpo: {publicacao.corpo}</p>
      <p>Data: {publicacao.data}</p>
      {publico && (
        <>
          <p>Usuário tribo: {publicacao.usuario.tribo} </p>
          <p>Usuário assinatura: {publicacao.usuario.assinatura} </p>
        </>
      )}
      {/* <p>Usuário: {publicacao.usuario} </p> */}

      {publico ? (
        <div>
          <NavLink
            to={"/Publicacoes"}
            onClick={publicacaoSelecionada}
            className={"text-light"}
          >
            Voltar
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink
            to={"/EditarPublicacao"}
            onClick={editarPublicacao}
            className={"btn btn-success"}
          >
            Editar
          </NavLink>

          <NavLink
            to={"/MinhasPublicacoes"}
            onClick={deletarPublicacao}
            className={"btn btn-danger"}
          >
            Excluir
          </NavLink>
        </div>
      )}

      {/* clique em selecionar => selecionarPublicacao() */}
    </div>
  );
}
