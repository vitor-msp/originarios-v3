import { useDispatch, useSelector } from "react-redux";
import {NavLink} from "react-router-dom";
import { postPublicacao, putPublicacao } from "../../api/api";
import {
  actionPutPublicacao,
  actionPostPublicacao,
} from "../../store/actions/publicacoes/minhasPublicacoes.action";

export function EditarPublicacao({ novaPublicacao }) {
  const minhaPublicacaoSelecionada = useSelector(
    (state) => state.minhaPublicacaoSelecionada
  );
  const publicacao = novaPublicacao ? {} : minhaPublicacaoSelecionada;
  const dispatch = useDispatch();

  const salvarPublicacao = async (publicacao) => {
    if (validarPublicacao(publicacao)) {
      try {
        let res = novaPublicacao
          ? await postPublicacao(publicacao)
          : await putPublicacao(publicacao);
        if (res.status === 200) {
          dispatch(
            novaPublicacao
              ? actionPostPublicacao(res.data)
              : actionPutPublicacao(res.data)
          );
        } else {
          // dispatch(actionFeedback(res.data.message, false));
        }
      } catch (error) {
        // dispatch(actionFeedback("Erro na comunicação com o servidor!", false));
      }
    } else {
      // feedback p usuario => dados inválidos
    }
  };

  const validarPublicacao = (publicacao) => {
    // valida campos
    // se campos validos => return true
  };

  return (
    <div>
      {/* exibir formulário com dados da publicacao */}
      <div>
        <form class="row" align="center">
          <div class="col-sm-10 form-group">
            <label>Título:</label>
            <br />
            <input type="text" name={"titulopublic"} id="formpublic" cols="140" rols="1" maxLength={100} />

          </div>
          <br />
          <div class="col-sm-5 form-group">
            Local:
            <br />
            <input type="text" name="localpublic" id="formpublic" cols="50" rols="1" maxLength={20} />
            <br />
          </div>

          <div class="col-sm-5 form-group">
            Data:
            <br />
            <input type="text" name="datapublic" id="formpublic" cols="50" rols="1" maxLength={10} />
            <br />

          </div>

          <div class="col-sm-10 form-group">
            <label>Texto</label>
            <textarea name="textopublic" id="formpublic" cols="30" rows="20" class="form-control"
              placeholder="Digite aqui seu texto." maxLength={5000} />

          </div>

          {/* exibir formulário com dados da publicacao */}

          <div >
            <br />
          </div>
          <div  >
            <div class="col-sm-10 form-group">
              <NavLink to="/MinhasPublicacoes" 
              onclick={salvarPublicacao} 
              className={"btn btn-success"}>Salvar</NavLink>
            </div>

            <br />

            <div class="col-sm-10 form-group" >
            <NavLink to="/MinhasPublicacoes"
            className={"btn btn-danger"}
            >Cancelar</NavLink>         
            </div>
            
          </div>
        </form>


        
      </div>


      {/* clique em salvar => salvarPublicacao(dados do formulário) */}
    </div>
  )
}
