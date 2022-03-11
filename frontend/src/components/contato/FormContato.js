import { Form, Row } from "react-bootstrap";
import { postContato } from "../../api/api";

export function FormContato() {
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
    if (validarContato(contato)) {
      try {
        let res = await postContato(contato);
        if (res.status === 200) {
          console.log(res);
          document.getElementById("cttReset").click();
          // dispatch(actionFeedback("enviado com sucesso", false));
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

  const validarContato = (contato) => {
    console.log(contato);
    return contato;
    // valida campos
    // se campos validos => return true
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
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Endereço:</Form.Label>
            <Form.Control
              id={"cttEnd"}
              required={false}
              type={"text"}
              maxLength={70}
              size={70}
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
        <Form.Group className="mb-3  d-flex justify-content-center">
          <input
            id={"cttReset"}
            type={"reset"}
            value={"Limpar"}
            className="btn btn-secondary"
          />
          <input type={"submit"} value={"Enviar"} className="btn btn-primary" />
        </Form.Group>
      </Form>
    </div>
  );
}
