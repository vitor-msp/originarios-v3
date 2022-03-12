import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemPublicacao } from "./ItemPublicacao";
import { getPublicacoes, getMinhasPublicacoes } from "../../api/api";

import { actionGetPublicacoes } from "../../store/actions/publicacoes/publicacoes.action";
import { actionGetMinhasPublicacoes } from "../../store/actions/publicacoes/minhasPublicacoes.action";
import { actionInfoModal } from "../../store/actions/modal/infoModal.actions";

export function ListaPublicacoes({ publico }) {
  const minhasPublicacoes = useSelector((state) => state.minhasPublicacoes);
  const publicacoesPublicas = useSelector((state) => state.publicacoes);
  const publicacoes = publico ? publicacoesPublicas : minhasPublicacoes;
  const dispatch = useDispatch();

  useEffect(() => {
    const obterDados = async () => {
      try {
        const res = publico ? await getPublicacoes() : await getMinhasPublicacoes();
        if (res.status === 200) {
          dispatch(
            publico
              ? actionGetPublicacoes(res.data)
              : actionGetMinhasPublicacoes(res.data)
          );
        } else {
          dispatch(actionInfoModal("Erro ao trazer as publicações!", false));
        }
      } catch (error) {
        dispatch(actionInfoModal("Erro na comunicação com o servidor!", false));
      }
    };
    if (publicacoes.length === 0) {
      obterDados();
    }
  }, []);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center p-0">
      {publicacoes.map((publicacao) => (
        <ItemPublicacao key={publicacao.id} publicacao={publicacao} publico={publico} />
      ))}
    </div>
  );
}
