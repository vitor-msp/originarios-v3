import { NavLink } from "react-router-dom";
import { ListaProdutos } from "../../components/produtos/ListaProdutos";

export function PaginaMeusProdutos() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Meus Produtos</strong>
      </h1>

      <NavLink
        to={"/CriarProduto"}
        className={"btn text-light w-auto mb-4"}
        style={{ backgroundColor: "var(--corPoucoEscura)" }}
      >
        Criar Produto
      </NavLink>

      <ListaProdutos publico={false} />
    </div>
  );
}
