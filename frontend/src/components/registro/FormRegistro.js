import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postRegistro } from "../../api/api";
import { actionInfoModal } from "../../store/actions/modal/infoModal.actions";

export function FormRegistro() {
  const dispatch = useDispatch();

  const criarRegistro = () => {
    return {
      nome: document.getElementById("regNome").value,
      cpf: document.getElementById("regCpf").value,
      dataNascimento: document.getElementById("regDtNasc").value,
      assinatura: document.getElementById("regAss").value,
      cidade: document.getElementById("regCid").value,
      uf: document.getElementById("regUf").value,
      tribo: document.getElementById("regTribo").value,
      ddd: document.getElementById("regDdd").value,
      telefone: document.getElementById("regTel").value,
      email: document.getElementById("regEmail").value,
      senha: document.getElementById("regSenha").value,
    };
  };

  const enviarRegistro = async (registro) => {
    if (validarRegistro(registro)) {
      try {
        const res = await postRegistro(registro);
        if (res.status === 200) {
          document.getElementById("regReset").click();
          dispatch(actionInfoModal("Cadastro realizado com sucesso!", true));
        } else if (
          res.status === 400 &&
          res.data.mensagem.trim() === "emailJaEmUso"
        ) {
          dispatch(
            actionInfoModal("O e-mail selecionado já está em uso!", false)
          );
        } else {
          dispatch(actionInfoModal("Erro ao realizar o cadastro!", false));
        }
      } catch (error) {
        dispatch(actionInfoModal("Erro na comunicação com o servidor!", false));
      }
    } else {
      // feedback p usuario => dados inválidos
    }
  };

  const validarRegistro = (registro) => {
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
          enviarRegistro(criarRegistro());
        }}
        className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"
      >
        <Row className="my-3">
          <Form.Group className={`mb-2`}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              id={"regNome"}
              required
              type={"text"}
              maxLength={50}
              size={50}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Cpf:</Form.Label>
            <Form.Control
              id={"regCpf"}
              required
              type={"text"}
              minLength={11}
              maxLength={11}
              size={11}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Data de nascimento:</Form.Label>
            <Form.Control id={"regDtNasc"} type={"date"} />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Assinatura:</Form.Label>
            <Form.Control
              id={"regAss"}
              required
              type={"text"}
              maxLength={30}
              size={30}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Cidade:</Form.Label>
            <Form.Control
              id={"regCid"}
              required={false}
              type={"text"}
              maxLength={30}
              size={30}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>UF:</Form.Label>
            <Form.Control
              id={"regUf"}
              required={false}
              type={"text"}
              maxLength={2}
              size={2}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Tribo:</Form.Label>
            <Form.Control
              id={"regTribo"}
              required
              type={"text"}
              maxLength={30}
              size={30}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>DDD:</Form.Label>
            <Form.Control
              id={"regDdd"}
              required
              type={"text"}
              maxLength={2}
              size={2}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Telefone:</Form.Label>
            <Form.Control
              id={"regTel"}
              required
              type={"text"}
              maxLength={10}
              size={10}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              id={"regEmail"}
              required
              type={"email"}
              maxLength={30}
              size={30}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              id={"regSenha"}
              required
              type={"password"}
              maxLength={100}
              size={100}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Confirmação da Senha:</Form.Label>
            <Form.Control
              id={"regConfSenha"}
              required
              type={"password"}
              maxLength={100}
              size={100}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3  d-flex justify-content-center">
          <input
            id={"regReset"}
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
