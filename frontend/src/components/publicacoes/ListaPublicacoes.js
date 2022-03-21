import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemPublicacao } from "./ItemPublicacao";
import { getPublicacoes, getMinhasPublicacoes } from "../../api/api";
import { BtnNaveg } from "../paginacao/BtnNaveg";

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
    <>
      <hr />
      {publicacoes.map((publicacao) => (
        <ItemPublicacao
          key={publicacao.id}
          publicacao={publicacao}
          publico={publico}
        />
      ))}
      <BtnNaveg
        nomePagina={publico ? "pgPublicacoes" : "inMinhasPublicacoes"}
      />
    </>
  );
}
