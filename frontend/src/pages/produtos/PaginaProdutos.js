import {ListaProdutos} from '../../components/produtos/ListaProdutos'

export function PaginaProdutos() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5"><strong>Produtos</strong></h1>
      <ListaProdutos publico={true} />
    </div>
  );
}
