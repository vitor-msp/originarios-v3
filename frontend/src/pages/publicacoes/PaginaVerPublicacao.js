import {VerPublicacao} from '../../components/publicacoes/VerPublicacao'

export function PaginaVerPublicacao() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Publicação</strong>
      </h1>

      <VerPublicacao publico={true} />
    </div>
  );
}
