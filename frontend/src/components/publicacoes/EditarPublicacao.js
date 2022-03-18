import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { postPublicacao, putPublicacao } from "../../api/api";

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
    const res = novaPublicacao
      ? await dispatch(postPublicacao(publicacao))
      : await dispatch(putPublicacao(publicacao));
    if (res === true) {
      navigate("/MinhasPublicacoes");
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
              required
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
