import { NavLink } from "react-router-dom";
import { ListaPublicacoes } from "../../components/publicacoes/ListaPublicacoes";

export function PaginaMinhasPublicacoes() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Minhas Publicações</strong>
      </h1>

      <NavLink
        to={"/CriarPublicacao"}
        className={"btn text-light w-auto mb-4"}
        style={{ backgroundColor: "var(--corPoucoEscura)" }}
      >
        Criar Publicação
      </NavLink>

      <ListaPublicacoes publico={false} />
    </div>
  );
}
