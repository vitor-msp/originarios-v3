import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemProduto } from "./ItemProduto";
import { getMeusProdutos, getProdutos } from "../../api/api";

import { actionGetProdutos } from "../../store/actions/produtos/produtos.action";
import { actionGetMeusProdutos } from "../../store/actions/produtos/meusProdutos.action";
import { actionInfoModal } from "../../store/actions/modal/infoModal.actions";

export function ListaProdutos({ publico }) {
  const meusProdutos = useSelector((state) => state.meusProdutos);
  const produtosPublicos = useSelector((state) => state.produtos);
  const produtos = publico ? produtosPublicos : meusProdutos;
  const dispatch = useDispatch();

  useEffect(() => {
    const obterDados = async () => {
      try {
        let res = null;
        if (publico) {
          res = await getProdutos();
        } else if (meusProdutos.length === 0) {
          res = await getMeusProdutos();
        } else {
          return;
        }

        if (res.status === 200) {
          dispatch(
            publico
              ? actionGetProdutos(res.data)
              : actionGetMeusProdutos(res.data)
          );
        } else {
          dispatch(actionInfoModal("Erro ao trazer os produtos!", false));
        }
      } catch (error) {
        dispatch(actionInfoModal("Erro na comunicação com o servidor!", false));
      }
    };
    obterDados();
  }, [meusProdutos]);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center p-0">
      {produtos.map((produto) => (
        <ItemProduto key={produto.id} produto={produto} publico={publico} />
      ))}
    </div>
  );
}
