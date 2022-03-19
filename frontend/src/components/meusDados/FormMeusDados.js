import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { putMeusDados } from "../../api/api";
import { FormMinhaSenha } from "./FormMinhaSenha";

export function FormMeusDados() {
  const meusDados = useSelector((state) => state.meusDados);
  const [edicao, setEdicao] = useState(false);
  const [edicaoSenha, setEdicaoSenha] = useState(false);
  const [cpf, setCpf] = useState(
    meusDados === null || meusDados.cpf === null ? "" : meusDados.cpf
  );
  const [ddd, setDdd] = useState(
    meusDados === null || meusDados.ddd === null ? "" : meusDados.ddd
  );
  const [tel, setTel] = useState(
    meusDados === null || meusDados.telefone === null ? "" : meusDados.telefone
  );
  const dispatch = useDispatch();

  const criarMeusDados = () => {
    return {
      nome: document.getElementById("mdNome").value,
      cpf: cpf,
      dataNascimento: document.getElementById("mdDtNasc").value,
      assinatura: document.getElementById("mdAss").value,
      cidade: document.getElementById("mdCid").value,
      uf: document.getElementById("mdUf").value,
      tribo: document.getElementById("mdTribo").value,
      ddd: ddd,
      telefone: tel,
      email: meusDados.email,
      senha: document.getElementById("mdSenha").value,
    };
  };

  const enviarMeusDados = async (usuario) => {
    const res = await dispatch(putMeusDados(usuario));
    if (res === true) {
      setEdicao(false);
    }
  };

  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          enviarMeusDados(criarMeusDados());
        }}
        className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"
      >
        <Row className="my-3">
          <Form.Group className={`mb-2`}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              id={"mdNome"}
              required
              type={"text"}
              maxLength={50}
              size={50}
              defaultValue={
                meusDados === null || meusDados.nome === null
                  ? ""
                  : meusDados.nome
              }
              disabled={!edicao}
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
              disabled={!edicao}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>
              Assinatura{" "}
              {
                <span style={{ fontSize: "0.8rem" }}>
                  (é sua identificação nas publicações)
                </span>
              }
              :
            </Form.Label>
            <Form.Control
              id={"mdAss"}
              required
              type={"text"}
              maxLength={30}
              size={30}
              defaultValue={
                meusDados === null || meusDados.assinatura === null
                  ? ""
                  : meusDados.assinatura
              }
              disabled={!edicao}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Cidade:</Form.Label>
            <Form.Control
              id={"mdCid"}
              type={"text"}
              maxLength={30}
              size={30}
              defaultValue={
                meusDados === null || meusDados.cidade === null
                  ? ""
                  : meusDados.cidade
              }
              disabled={!edicao}
            />
          </Form.Group>

          <div className="d-flex flex-row justify-content-between">
            <Form.Group className={`mb-2`}>
              <Form.Label>UF:</Form.Label>
              <Form.Control
                id={"mdUf"}
                type={"text"}
                minLength={2}
                maxLength={2}
                size={2}
                defaultValue={
                  meusDados === null || meusDados.uf === null
                    ? ""
                    : meusDados.uf
                }
                disabled={!edicao}
              />
            </Form.Group>

            <Form.Group className={`mb-2`}>
              <Form.Label>Data de nascimento:</Form.Label>
              <Form.Control
                id={"mdDtNasc"}
                type={"date"}
                defaultValue={
                  meusDados === null || meusDados.dataNascimento === null
                    ? ""
                    : meusDados.dataNascimento.substring(0, 10)
                }
                disabled={!edicao}
              />
            </Form.Group>
          </div>

          <Form.Group className={`mb-2`}>
            <Form.Label>Tribo:</Form.Label>
            <Form.Control
              id={"mdTribo"}
              required
              type={"text"}
              maxLength={30}
              size={30}
              defaultValue={
                meusDados === null || meusDados.tribo === null
                  ? ""
                  : meusDados.tribo
              }
              disabled={!edicao}
            />
          </Form.Group>

          <div className="d-flex flex-row justify-content-between">
            <Form.Group className={`mb-2`}>
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
                disabled={!edicao}
              />
            </Form.Group>

            <Form.Group className={`mb-2`}>
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
                disabled={!edicao}
              />
            </Form.Group>
          </div>

          <Form.Group className={`mb-2`}>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              id={"mdEmail"}
              required
              type={"email"}
              value={
                meusDados === null || meusDados.email === null
                  ? ""
                  : meusDados.email
              }
              readOnly
              disabled
            />
          </Form.Group>

          {edicao && (
            <Form.Group className={`mb-2`}>
              <Form.Label>Senha para validação:</Form.Label>
              <Form.Control
                id={"mdSenha"}
                required
                type={"password"}
                maxLength={100}
                size={100}
              />
            </Form.Group>
          )}
        </Row>

        <Form.Group className="mb-3 d-flex justify-content-center">
          {edicao ? (
            <>
              <button
                type={"button"}
                onClick={() => setEdicao(false)}
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
            </>
          ) : (
            <>
              <NavLink
                to={"/"}
                className={"btn text-light mx-1"}
                style={{ backgroundColor: "var(--corClara)" }}
              >
                Voltar
              </NavLink>
              <button
                type={"button"}
                onClick={() => setEdicao(true)}
                className={"btn text-light mx-1"}
                style={{ backgroundColor: "var(--corMaisEscura)" }}
              >
                Editar
              </button>
            </>
          )}
        </Form.Group>
      </Form>

      <hr className="my-4" />

      {!edicaoSenha && (
        <Form.Group className="mb-3 d-flex justify-content-center">
          <button
            type={"button"}
            onClick={() => setEdicaoSenha(true)}
            className={"btn text-light"}
            style={{ backgroundColor: "var(--corMaisEscura)" }}
          >
            Alterar Senha
          </button>
        </Form.Group>
      )}

      {edicaoSenha && <FormMinhaSenha edicaoSenha={setEdicaoSenha} />}
    </div>
  );
}
