import { Form, Row } from "react-bootstrap";
import { login } from "../../api/api";

export function FormLogin() {
  const criarLogin = () => {
    return {
      email: document.getElementById("logEmail").value,
      senha: document.getElementById("logSenha").value,
    };
  };

  const enviarLogin = async (autenticacao) => {
    if (validarLogin(autenticacao)) {
      try {
        const res = await login(autenticacao);
        if (res.status === 200) {
          localStorage.setItem("OrigTkn", JSON.stringify(res.data));
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

  const validarLogin = (autenticacao) => {
    return true;
    // valida campos
    // se campos validos => return true
  };

  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          enviarLogin(criarLogin());
        }}
        className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"
      >
        <Row className="my-3">
          <Form.Group className={`mb-2`}>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              id={"logEmail"}
              required
              type={"email"}
              maxLength={30}
              size={30}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              id={"logSenha"}
              required
              type={"password"}
              maxLength={100}
              size={100}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3  d-flex justify-content-center">
          <input
            type={"reset"}
            value={"Limpar"}
            className="btn btn-secondary"
          />
          <input
            type={"submit"}
            value={"Acessar"}
            className="btn btn-primary"
          />
        </Form.Group>
      </Form>
    </div>
  );
}
