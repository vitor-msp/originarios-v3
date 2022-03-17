import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { postPublicacao, putPublicacao } from "../../api/api";
import { actionInfoModal } from "../../store/actions/modal/infoModal.actions";
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
  const navigate = useNavigate();

  const criarPublicacao = () => {
    const publicacaoObj = {
      id: novaPublicacao ? null : publicacao.id,
      titulo: document.getElementById("pubTit").value,
      corpo: document.getElementById("pubCor").value,
      data: new Date(),
    };
    return publicacaoObj;
  };

  const enviarPublicacao = async (publicacao) => {
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
        dispatch(actionInfoModal("Publicação salva com sucesso!", true));
        navigate("/MinhasPublicacoes");
      } else {
        dispatch(actionInfoModal("Erro ao salvar a publicação!", false));
      }
    } catch (error) {
      dispatch(actionInfoModal("Erro na comunicação com o servidor!", false));
    }
  };

  return (
    <div>
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
        </Row>

        <Form.Group className="mb-3 d-flex justify-content-center">
          <NavLink to="/minhasPublicacoes" className={"btn btn-danger"}>
            Cancelar
          </NavLink>
          <input type={"submit"} value={"Salvar"} className="btn btn-primary" />
        </Form.Group>
      </Form>
    </div>
  );
}
