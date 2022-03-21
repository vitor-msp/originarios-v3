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
  };

  return (
    <div>
      {publico ? (
        <>
          <div className="col-12 d-flex flex-row flex-wrap align-content-center">
            <div>
              <h1>{publicacao.titulo}</h1>
              <br></br>
              <div
                style={{
                  maxWidth: 1200,
                  overflow: "hidden",
                  textOverFlow: "ellipsis",
                }}
              >
                <h5 style={{ maxWidth: 1200, textIndent: 50 }} align="justify">
                  {publicacao.corpo.split("\n")[0]}
                  {"..."}
                </h5>
              </div>
              <br></br>
              <h5>
                {publicacao.data === null
                  ? null
                  : formatarData(publicacao.data)}
              </h5>
              <h5>Autor(a): {publicacao.usuario.assinatura} </h5>
              <h5>Tribo/Etnia: {publicacao.usuario.tribo} </h5>
              <br />
              <NavLink
                to={"/VerPublicacao"}
                onClick={selecionarPublicacao}
                className={"btn text-light mx-1"}
                style={{ backgroundColor: "var(--corClara)" }}
              >
                Selecionar
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        <div className="col-12">
          <h4>Título: {publicacao.titulo}</h4>
          <br />
          <h4>
            Data:{" "}
            {publicacao.data === null ? null : formatarData(publicacao.data)}
          </h4>
          <br />

          <NavLink
            to={"/VerMinhaPublicacao"}
            onClick={selecionarPublicacao}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corClara)" }}
          >
            Selecionar
          </NavLink>
        </div>
      )}
      <hr />
    </div>
  );
}
