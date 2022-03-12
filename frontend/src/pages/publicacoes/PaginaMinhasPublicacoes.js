import { NavLink } from "react-router-dom";
import { ListaPublicacoes } from "../../components/publicacoes/ListaPublicacoes";

export function PaginaMinhasPublicacoes() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Minhas Publicacoes</strong>
      </h1>

      <NavLink to={"/CriarPublicacao"} className={"btn btn-primary w-auto"}>
        Criar Publicacao
      </NavLink>

      <ListaPublicacoes publico={false} />
    </div>
  );
}
