import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { putMinhaSenha } from "../../api/api";
import { actionInfoModal } from "../../store/actions/modal/infoModal.actions";

export function FormMinhaSenha({ edicaoSenha }) {
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (validarSenha()) {
      enviarMinhaSenha(criarMinhaSenha());
    } else {
      dispatch(
        actionInfoModal("Senha e confirmação precisam ser iguais!", false)
      );
    }
  };

  const validarSenha = () => {
    return (
      document.getElementById("nSenha").value ===
      document.getElementById("cnSenha").value
    );
  };

  const criarMinhaSenha = () => {
    return {
      velhaSenha: document.getElementById("vSenha").value,
      novaSenha: document.getElementById("nSenha").value,
    };
  };

  const enviarMinhaSenha = async (senhas) => {
    const res = await dispatch(putMinhaSenha(senhas));
    if (res === true) {
      edicaoSenha(false);
    }
  };

  return (
    <div>
      <Form
        onSubmit={submit}
        className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"
      >
        <Row className="my-3">
          <Form.Group className={`mb-2`}>
            <Form.Label>Senha atual:</Form.Label>
            <Form.Control
              id={"vSenha"}
              required
              type={"password"}
              maxLength={100}
              size={100}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Nova senha:</Form.Label>
            <Form.Control
              id={"nSenha"}
              required
              type={"password"}
              maxLength={100}
              size={100}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Confirmação da nova senha:</Form.Label>
            <Form.Control
              id={"cnSenha"}
              required
              type={"password"}
              maxLength={100}
              size={100}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 d-flex justify-content-center">
          <button
            type={"button"}
            onClick={() => edicaoSenha(false)}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corClara)" }}
          >
            Cancelar
          </button>
          <input
            type={"submit"}
            value={"Salvar"}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corMaisEscura)" }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
