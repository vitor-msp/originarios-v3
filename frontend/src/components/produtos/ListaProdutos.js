import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemProduto } from "./ItemProduto";
import { getMeusProdutos, getProdutos } from "../../api/api";

export function ListaProdutos({ publico }) {
  const meusProdutos = useSelector((state) => state.meusProdutos);
  const produtosPublicos = useSelector((state) => state.produtos);
  const produtos = publico ? produtosPublicos : meusProdutos;
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (!publico && meusProdutos.length === 0) {
        dispatch(getMeusProdutos());
      }
    })();
  }, []);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center p-0">
      {produtos.map((produto) => (
        <ItemProduto key={produto.id} produto={produto} publico={publico} />
      ))}
    </div>
  );
}
