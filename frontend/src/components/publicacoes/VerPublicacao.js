import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { deletePublicacao } from "../../api/api";
import { formatarData } from "../../helpers/formatarData";

import { actionMinhaPublicacaoSelecionada } from "../../store/actions/publicacoes/minhaPublicacaoSelecionada.action";

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
  const navigate = useNavigate();

  const editarPublicacao = () => {
    dispatch(actionMinhaPublicacaoSelecionada(publicacao));
    navigate("/EditarPublicacao");
  };

  const deletarPublicacao = async () => {
    const res = await dispatch(deletePublicacao(publicacao));
    if (res === true) {
      navigate("/MinhasPublicacoes");
    }
  };

  return (
    <div>
      <p>Id: {publicacao.id}</p>
      <p>Título: {publicacao.titulo}</p>
      <p>Corpo: {publicacao.corpo}</p>
      <p>Data: {publicacao.data === null ? null : formatarData(publicacao.data)}</p>
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
          <button
            type={"button"}
            onClick={editarPublicacao}
            className={"btn btn-success"}
          >
            Editar
          </button>

          <button
            type={"button"}
            onClick={deletarPublicacao}
            className={"btn btn-danger"}
          >
            Excluir
          </button>
        </div>
      )}
    </div>
  );
}
