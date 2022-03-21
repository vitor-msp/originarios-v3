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
      <h1>{publicacao.titulo}</h1>
      <br />
      {publicacao.corpo.split("\n").map((par) => {
        return (
          <h5
            key={Math.random()}
            style={{ textIndent: 50, textAlign: "justify" }}
          >
            {par}
          </h5>
        );
      })}
      <br />
      <h5>
        Data: {publicacao.data === null ? null : formatarData(publicacao.data)}
      </h5>
      <br />
      {publico && (
        <>
          <h5>Autor(a): {publicacao.usuario.assinatura}</h5>
          <h5>Tribo/Etnia: {publicacao.usuario.tribo}</h5>
          <br />
        </>
      )}

      {publico ? (
        <div>
          <NavLink
            to={"/Publicacoes"}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corClara)" }}
          >
            Voltar
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink
            to={"/MinhasPublicacoes"}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corClara)" }}
          >
            Voltar
          </NavLink>

          <button
            type={"button"}
            onClick={editarPublicacao}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corClara)" }}
          >
            Editar
          </button>

          <button
            type={"button"}
            onClick={deletarPublicacao}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corMaisEscura)" }}
          >
            Excluir
          </button>
        </div>
      )}
    </div>
  );
}

// <div>
//   <p>Id: {publicacao.id}</p>
//   <p>Título: {publicacao.titulo}</p>
//   <p>Corpo: {publicacao.corpo}</p>
//   <p>Data: {publicacao.data === null ? null : formatarData(publicacao.data)}</p>
//   {publico && (
//     <>
//       <p>Usuário tribo: {publicacao.usuario.tribo} </p>
//       <p>Usuário assinatura: {publicacao.usuario.assinatura} </p>
//     </>
//   )}
//   {/* <p>Usuário: {publicacao.usuario} </p> */}

//   {publico ? (
//     <div>
//       <NavLink
//         to={"/Publicacoes"}
//         onClick={publicacaoSelecionada}
//         className={"text-light"}
//       >
//         Voltar
//       </NavLink>
//     </div>
