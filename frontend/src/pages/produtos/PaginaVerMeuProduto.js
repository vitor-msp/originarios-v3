import {VerProduto} from '../../components/produtos/VerProduto'

export function PaginaVerMeuProduto() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Produto</strong>
      </h1>

      <VerProduto publico={false} />
    </div>
  );
}
