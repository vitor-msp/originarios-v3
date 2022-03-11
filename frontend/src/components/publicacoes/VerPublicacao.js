import { useDispatch, useSelector } from "react-redux";
import { deletePublicacao } from '../../api/api'
import { actionMinhaPublicacaoSelecionada } from "../../store/actions/publicacoes/minhaPublicacaoSelecionada.action";
import { actionDeletePublicacao } from "../../store/actions/publicacoes/minhasPublicacoes.action";
import { NavLink } from "react-router-dom";
export function VerPublicacao({ publico }) {
  const publicacaoSelecionada = useSelector((state) => state.publicacaoSelecionada)
  const minhaPublicacaoSelecionada = useSelector((state) => state.minhaPublicacaoSelecionada)
  const publicacao = publico
    ? publicacaoSelecionada
    : minhaPublicacaoSelecionada;
  const dispatch = useDispatch();

  const editarPublicacao = () => {
    dispatch(actionMinhaPublicacaoSelecionada(publicacao));
    // redireciona p rota EditarPublicacao
  };

  const deletarPublicacao = async () => {
    try {
      let res = await deletePublicacao(publicacao);
      if (res.status === 200) {
        dispatch(actionDeletePublicacao(res.data));
      } else {
        // dispatch(actionFeedback(res.data.message, false));
      }
    } catch (error) {
      // dispatch(actionFeedback("Erro na comunicação com o servidor!", false));
    }
  };

  return (
    <div>


      {/* clique em selecionar => selecionarProduto() */}
      {publico ? (
        <div>
          <p>Item publicado</p>
          <p>Título: {publicacao.titulo}</p>
          <p>Corpo: {publicacao.corpo}</p>
          <p>Local: {publicacao.localizacao}</p>
          <p>Data: {publicacao.data}</p>
          <NavLink
            to={"/Publicacoes"}
            onClick={publicacaoSelecionada}
            className={"text-light"}
            >
            Voltar
          </NavLink>
        </div>
      ) : (
        <div>
          <p>Item publicacao</p>
          <p>Título: {publicacao.titulo}</p>
          <p>Data: {publicacao.data}</p>
          <NavLink
            to={"/EditarPublicacao"}
            onClick={editarPublicacao}
            className={"btn btn-success"}
          >
            Editar
          </NavLink>

          <NavLink
            to={"/MinhasPublicacoes"}
            onClick={deletarPublicacao}
            className={"btn btn-danger"}
          >
            Excluir
          </NavLink>

        </div>
      )}

      {/* clique em selecionar => selecionarPublicacao() */}
    </div>
  );
}