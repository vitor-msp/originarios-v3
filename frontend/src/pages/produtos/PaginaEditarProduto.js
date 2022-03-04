import {EditarProduto} from '../../components/produtos/EditarProduto'

export function PaginaEditarProduto() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Pagina Editar Produto</strong>
      </h1>

      <EditarProduto novoProduto={false} />
    </div>
  );
}
