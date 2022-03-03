import { useSelector } from "react-redux";

export function ListaMeusProdutos() {
  const meusProdutos = useSelector((state) => state.meusProdutos);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center p-0">
      {meusProdutos.map((meuProduto) => (
        <MeuProduto key={meuProduto.id} meuProduto={meuProduto} />
      ))}
    </div>
  );
}
