import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRegistro } from "../../api/api";
import { actionInfoModal } from "../../store/actions/modal/infoModal.actions";

export function FormRegistro() {
  const [cpf, setCpf] = useState("");
  const [ddd, setDdd] = useState("");
  const [tel, setTel] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (validarSenha()) {
      enviarRegistro(criarRegistro());
    } else {
      dispatch(
        actionInfoModal("Senha e confirmação precisam ser iguais!", false)
      );
    }
  };

  const validarSenha = () => {
    return (
      document.getElementById("regSenha").value ===
      document.getElementById("regConfSenha").value
    );
  };

  const criarRegistro = () => {
    return {
      nome: document.getElementById("regNome").value,
      cpf: cpf,
      dataNascimento: document.getElementById("regDtNasc").value,
      assinatura: document.getElementById("regAss").value,
      cidade: document.getElementById("regCid").value,
      uf: document.getElementById("regUf").value,
      tribo: document.getElementById("regTribo").value,
      ddd: ddd,
      telefone: tel,
      email: document.getElementById("regEmail").value,
      senha: document.getElementById("regSenha").value,
    };
  };

  const enviarRegistro = async (registro) => {
    const res = await dispatch(postRegistro(registro));
    if (res === true) {
      navigate("/Login");
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
              required
              type={"text"}
              minLength={11}
              maxLength={11}
              size={11}
              value={cpf}
              onChange={(event) => {
                setCpf(event.target.value.replace(/\D/gim, ""));
              }}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>
              Assinatura{" "}
              {
                <span style={{ fontSize: "0.8rem" }}>
                  (será sua identificação nas publicações)
                </span>
              }
              :
            </Form.Label>
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
              type={"text"}
              maxLength={30}
              size={30}
            />
          </Form.Group>

          <Form.Group className={`mb-2 col-4`}>
            <Form.Label>UF:</Form.Label>
            <Form.Control
              id={"regUf"}
              type={"text"}
              minLength={2}
              maxLength={2}
              size={2}
            />
          </Form.Group>

          <Form.Group className={`mb-2 col-8`}>
            <Form.Label>Data nascimento:</Form.Label>
            <Form.Control id={"regDtNasc"} type={"date"} />
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

          <Form.Group className={`mb-2 col-4`}>
            <Form.Label>DDD:</Form.Label>
            <Form.Control
              required
              type={"text"}
              minLength={2}
              maxLength={2}
              size={2}
              value={ddd}
              onChange={(event) => {
                setDdd(event.target.value.replace(/\D/gim, ""));
              }}
            />
          </Form.Group>

          <Form.Group className={`mb-2 col-8`}>
            <Form.Label>Telefone:</Form.Label>
            <Form.Control
              required
              type={"tel"}
              minLength={8}
              maxLength={10}
              size={10}
              value={tel}
              onChange={(event) => {
                setTel(event.target.value.replace(/\D/gim, ""));
              }}
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
            onClick={() => {
              setCpf("");
              setDdd("");
              setTel("");
            }}
            value={"Limpar"}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corClara)" }}
          />
          <input
            type={"submit"}
            value={"Enviar"}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corMaisEscura)" }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
