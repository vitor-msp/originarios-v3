import { EditarPublicacao } from "../../components/publicacoes/EditarPublicacao";

export function PaginaEditarPublicacao() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Pagina Editar Publicacao</strong>
      </h1>

      <EditarPublicacao novaPublicacao={false} />
    </div>
  );
}
