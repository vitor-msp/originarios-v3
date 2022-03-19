import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postContato } from "../../api/api";

export function FormContato() {
  const meusDados = useSelector((state) => state.meusDados);
  const dispatch = useDispatch();

  const criarContato = () => {
    return {
      nome: document.getElementById("cttNome").value,
      email: document.getElementById("cttEmail").value,
      endereco: document.getElementById("cttEnd").value,
      assunto: document.getElementById("cttAss").value,
      corpo: document.getElementById("cttMsg").value,
    };
  };

  const enviarContato = async (contato) => {
    const res = await dispatch(postContato(contato));
    if (res === true) {
      document.getElementById("cttReset").click();
    }
  };

  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          enviarContato(criarContato());
        }}
        className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"
      >
        <Row className="my-3">
          <Form.Group className={`mb-2`}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              id={"cttNome"}
              required
              type={"text"}
              maxLength={50}
              size={50}
              defaultValue={
                meusDados === null || meusDados.nome === null
                  ? ""
                  : meusDados.nome
              }
              disabled={!(meusDados === null || meusDados.nome === null)}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              id={"cttEmail"}
              required
              type={"email"}
              maxLength={30}
              size={30}
              defaultValue={
                meusDados === null || meusDados.email === null
                  ? ""
                  : meusDados.email
              }
              disabled={!(meusDados === null || meusDados.email === null)}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Endereço:</Form.Label>
            <Form.Control
              id={"cttEnd"}
              type={"text"}
              maxLength={70}
              size={70}
              defaultValue={
                meusDados === null
                  ? ""
                  : `${meusDados.cidade === null ? "" : meusDados.cidade} - ${
                      meusDados.uf === null ? "" : meusDados.uf
                    }`
              }
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Assunto:</Form.Label>
            <Form.Control
              id={"cttAss"}
              required
              type={"text"}
              maxLength={30}
              size={30}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Mensagem:</Form.Label>
            <Form.Control
              id={"cttMsg"}
              required
              as={"textarea"}
              maxLength={2000}
              size={2000}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3 d-flex justify-content-center">
          <input
            id={"cttReset"}
            type={"reset"}
            value={"Limpar"}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corClara)" }}
          />
          <input
            type={"submit"}
            value={"Enviar"}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "w" }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
