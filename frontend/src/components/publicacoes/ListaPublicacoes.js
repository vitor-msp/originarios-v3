import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemPublicacao } from "./ItemPublicacao";
import { getPublicacoes, getMinhasPublicacoes } from "../../api/api";

export function ListaPublicacoes({ publico }) {
  const minhasPublicacoes = useSelector((state) => state.minhasPublicacoes);
  const publicacoesPublicas = useSelector((state) => state.publicacoes);
  const publicacoes = publico ? publicacoesPublicas : minhasPublicacoes;
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (publico) {
        if (publicacoesPublicas.length === 0) {
          dispatch(getPublicacoes());
        }
      } else {
        if (minhasPublicacoes.length === 0) {
          dispatch(getMinhasPublicacoes());
        }
      }
    })();
  }, []);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center p-0">
      {publicacoes.map((publicacao) => (
        <ItemPublicacao
          key={publicacao.id}
          publicacao={publicacao}
          publico={publico}
        />
      ))}
    </div>
  );
}
