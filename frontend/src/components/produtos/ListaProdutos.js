import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemProduto } from "./ItemProduto";
import { getMeusProdutos, getProdutos } from "../../api/api";

import { actionGetProdutos } from "../../store/actions/produtos/produtos.action";
import { actionGetMeusProdutos } from "../../store/actions/produtos/meusProdutos.action";

export function ListaProdutos({ publico }) {
  const meusProdutos = useSelector((state) => state.meusProdutos);
  const produtosPublicos = useSelector((state) => state.produtos);
  const produtos = publico ? produtosPublicos : meusProdutos;
  const dispatch = useDispatch();

  useEffect(() => {
    const obterDados = async () => {
      try {
        let res = publico ? await getProdutos() : await getMeusProdutos();
        if (res.status === 200) {
          dispatch(
            publico
              ? actionGetProdutos(res.data)
              : actionGetMeusProdutos(res.data)
          );
        } else {
          // dispatch(atualizarFeedback(res.data.message, false));
        }
      } catch (error) {
        // atualizarFeedback("Erro na comunicação com o servidor!", false)
      }
    };
    if (produtos.length === 0) {
      obterDados();
    }
  }, []);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center p-0">
      {produtos.map((produto) => (
        <ItemProduto key={produto.id} produto={produto} publico={publico} />
      ))}
    </div>
  );
}
