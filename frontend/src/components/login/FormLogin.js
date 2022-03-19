import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/api";

export function FormLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const criarLogin = () => {
    return {
      email: document.getElementById("logEmail").value,
      senha: document.getElementById("logSenha").value,
    };
  };

  const enviarLogin = async (autenticacao) => {
    const res = await dispatch(login(autenticacao));
    if (res === true) {
      navigate("/");
    }
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
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corClara)" }}
          />
          <input
            type={"submit"}
            value={"Acessar"}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corMaisEscura)" }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
