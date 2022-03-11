import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { validarForm } from "../../helpers/validarForm";
import { getMeusProdutos } from "../../api/api";

import { postProduto, putProduto } from "../../api/api";
import {
  actionPutProduto,
  actionPostProduto,
} from "../../store/actions/produtos/meusProdutos.action";

export function EditarProduto({ novoProduto }) {
  const meuProdutoSelecionado = useSelector(
    (state) => state.meuProdutoSelecionado
  );

const validarProduto = {validarForm}
  // valida campos
  // se campos validos => return true

  const produto = novoProduto ? {} : meuProdutoSelecionado;
  const dispatch = useDispatch();

  const salvarProduto = async (produto) => {
    if (validarProduto(produto)) {
      try {
        let res = novoProduto
          ? await postProduto(produto)
          : await putProduto(produto);
        if (res.status === 200) {
          dispatch(
            novoProduto
              ? actionPostProduto(res.data)
              : actionPutProduto(res.data)
          );
        } else {
          // dispatch(actionFeedback(res.data.message, false));
        }
      } catch (error) {
        // dispatch(actionFeedback("Erro na comunicação com o servidor!", false));
      }
    } else {
      //dispatch(actionFeedback("Erro na comunicação com o servidor!", false));
      // feedback p usuario => dados inválidos
    }
  };

  return (
    <div>
      {/* exibir formulário com dados do produto */}
      <div>
        <form class="row" align="left">
          <div class="col-sm-10 form-group">
            <label>Título:</label>
            <br />
            <input type="text" name={"tituloproduto"} id="formproduto" cols="140" rols="1" maxLength={100} />
          </div>
          <div class="col-sm-10 form-group">
            <label>Descrição:</label>
            <br />
            <input type="text" name="descricaoproduto" id="formproduto" cols="140" rols="1" maxLength={100} />
          </div>
          <div class="col-sm-10 form-group">
            <label>Corpo:</label>
            <br />
            <input type="text" name="corpoproduto" id="formproduto" cols="140" rols="1" maxLength={100} />
          </div>
          <div class="col-sm-10 form-group">
            <label>Valor:</label>
            <br />
            <input type="text" name={"valorproduto"} id="formproduto" cols="140" rols="1" maxLength={100} />
          </div>
        </form>
      </div>

      {/*<div>
        <p>id: {produto.id}</p>
        <p>nome: {produto.nome}</p>
      </div>*/}

      {/* clique em salvar => salvarProduto(dados do formulário) */}
      <div>
        <NavLink
          to={"/meusProdutos"}
          onClick={salvarProduto, validarProduto}
          className={"btn btn-success"}
          //action={validarProduto}
        > Salvar
        </NavLink>

        <NavLink to="/meusProdutos"
            className={"btn btn-danger"}
            >Cancelar</NavLink> 
      </div>
    </div>
  );
}
