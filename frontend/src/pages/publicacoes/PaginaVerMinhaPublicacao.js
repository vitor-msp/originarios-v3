import {VerPublicacao} from '../../components/publicacoes/VerPublicacao'

export function PaginaVerMinhaPublicacao() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Minha Publicação</strong>
      </h1>

      <VerPublicacao publico={false} />
    </div>
  );
}
