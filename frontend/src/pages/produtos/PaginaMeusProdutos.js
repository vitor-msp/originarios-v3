import { ListaProdutos } from "../../components/produtos/ListaProdutos";

export function PaginaMeusProdutos() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Meus Produtos</strong>
      </h1>

      <a href="/CriarProduto" className="btn btn-primary w-auto">
        Criar Produto
      </a>

      <ListaProdutos publico={false} />
    </div>
  );
}
