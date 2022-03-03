import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function ListaProdutos() {
  const produtos = useSelector((state) => state.produtos);
  const dispatch = useDispatch();

  useEffect(() => {
    const obterDados = async () => {
      try {
        let res = await getProdutos();
        if (res.status === 200) {
          dispatch(atualizarProdutos(res.data));
        } else {
          dispatch(atualizarFeedback(res.data.message, false));
        }
      } catch (error) {
        dispatch(atualizarFeedback("Erro na comunicação com o servidor!", false));
      }
    };
    if (produtos.length === 0) {
      obterDados();
    }
  }, []);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center p-0">
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
