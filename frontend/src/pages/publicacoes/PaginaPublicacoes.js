import {ListaPublicacoes} from '../../components/publicacoes/ListaPublicacoes'

export function PaginaPublicacoes() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5"><strong>Publicacoes</strong></h1>
      <ListaPublicacoes publico={true} />
    </div>
  );
}
