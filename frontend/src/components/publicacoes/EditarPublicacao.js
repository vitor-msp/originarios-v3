import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { postPublicacao, putPublicacao } from "../../api/api";
import {
  actionPutPublicacao,
  actionPostPublicacao,
} from "../../store/actions/publicacoes/minhasPublicacoes.action";

export function EditarPublicacao({ novaPublicacao }) {
  const minhaPublicacaoSelecionada = useSelector(
    (state) => state.minhaPublicacaoSelecionada
  );
  const publicacao = novaPublicacao ? null : minhaPublicacaoSelecionada;
  const dispatch = useDispatch();

  const criarPublicacao = () => {
    const publicacaoObj = {
      titulo: document.getElementById("pubTit").value,
      corpo: document.getElementById("pubCor").value,
      data: document.getElementById("pubDat").value,
    };
    if (!novaPublicacao) {
      publicacaoObj.id = publicacao.id;
    }
    return publicacaoObj;
  };

  const enviarPublicacao = async (publicacao) => {
    if (validarPublicacao(publicacao)) {
      try {
        const res = novaPublicacao
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
    return true;
    // valida campos
    // se campos validos => return true
  };

  return (
    <div>
      {/* exibir formulário com dados da publicacao */}
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          enviarPublicacao(criarPublicacao());
        }}
        className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"
      >
        <Row className="my-3">
          <Form.Group className={`mb-2`}>
            <Form.Label>Título:</Form.Label>
            <Form.Control
              id={"pubTit"}
              required
              type={"text"}
              maxLength={100}
              size={100}
              defaultValue={publicacao === null ? "" : publicacao.titulo}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Mensagem:</Form.Label>
            <Form.Control
              id={"pubCor"}
              as={"textarea"}
              maxLength={5000}
              size={5000}
              defaultValue={publicacao === null ? "" : publicacao.corpo}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Data:</Form.Label>
            <Form.Control
              id={"pubDat"}
              type={"date"}
              required
              defaultValue={publicacao === null ? "" : publicacao.valor}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 d-flex justify-content-center">
          <NavLink to="/minhasPublicacoes" className={"btn btn-danger"}>
            Cancelar
          </NavLink>
          <input type={"submit"} value={"Salvar"} className="btn btn-primary" />
        </Form.Group>
      </Form>
      {/* <div>
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
    */}

      {/* clique em salvar => salvarPublicacao(dados do formulário) */}
    </div>
  );
}
