import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { putMinhaSenha } from "../../api/api";
import { actionInfoModal } from "../../store/actions/modal/infoModal.actions";

export function FormMinhaSenha() {
  const dispatch = useDispatch();

  const criarMinhaSenha = () => {
    return {
      velhaSenha: document.getElementById("vSenha").value,
      novaSenha: document.getElementById("nSenha").value,
    };
  };

  const enviarMinhaSenha = async (senhas) => {
    if (validarMinhaSenha(senhas)) {
      try {
        const res = await putMinhaSenha(senhas);
        if (res.status === 200) {
          dispatch(actionInfoModal("Senha atualizada com sucesso!", true));
        } else if (
          res.status === 400 &&
          res.data.mensagem.trim() === "senhaIncorreta"
        ) {
          dispatch(actionInfoModal("Senha incorreta!", false));
        } else {
          dispatch(actionInfoModal("Erro ao atualizar a senha!", false));
        }
      } catch (error) {
        dispatch(actionInfoModal("Erro na comunicação com o servidor!", false));
      }
    } else {
      // feedback p usuario => dados inválidos
    }
  };

  const validarMinhaSenha = (senhas) => {
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
          enviarMinhaSenha(criarMinhaSenha());
        }}
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
        <Form.Group className="mb-3  d-flex justify-content-center">
          <input
            type={"reset"}
            value={"Limpar"}
            className="btn btn-secondary"
          />
          <input type={"submit"} value={"Salvar"} className="btn btn-primary" />
        </Form.Group>
      </Form>
    </div>
  );
}