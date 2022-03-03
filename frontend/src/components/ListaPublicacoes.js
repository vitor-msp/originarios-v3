import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function ListaPublicacoes() {
  const publicacoes = useSelector((state) => state.publicacoes);
  const dispatch = useDispatch();

  useEffect(() => {
    const obterDados = async () => {
      try {
        let res = await getPublicacoes();
        if (res.status === 200) {
          dispatch(atualizarPublicacoes(res.data));
        } else {
          dispatch(atualizarFeedback(res.data.message, false));
        }
      } catch (error) {
        dispatch(atualizarFeedback("Erro na comunicação com o servidor!", false));
      }
    };
    if (publicacoes.length === 0) {
      obterDados();
    }
  }, []);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center p-0">
      {publicacoes.map((publicacao) => (
        <Publicacao key={publicacao.id} publicacao={publicacao} />
      ))}
    </div>
  );
}
