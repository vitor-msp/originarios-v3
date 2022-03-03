import { useSelector } from "react-redux";

export function ListaMinhasPublicacoes() {
  const minhasPublicacoes = useSelector((state) => state.minhasPublicacoes);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center p-0">
      {minhasPublicacoes.map((minhaPublicacao) => (
        <MinhaPublicacao key={minhaPublicacao.id} minhaPublicacao={minhaPublicacao} />
      ))}
    </div>
  );
}
