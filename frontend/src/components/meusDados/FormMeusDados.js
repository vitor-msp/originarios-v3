import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { putMeusDados } from "../../api/api";
import { actionPutMeusDados } from "../../store/actions/meusDados/meusDados.action";
import { FormMinhaSenha } from "./FormMinhaSenha";

export function FormMeusDados() {
  const meusDados = useSelector((state) => state.meusDados);
  const dispatch = useDispatch();

  const criarMeusDados = () => {
    return {
      nome: document.getElementById("mdNome").value,
      cpf: document.getElementById("mdCpf").value,
      dataNascimento: document.getElementById("mdDtNasc").value,
      assinatura: document.getElementById("mdAss").value,
      cidade: document.getElementById("mdCid").value,
      uf: document.getElementById("mdUf").value,
      tribo: document.getElementById("mdTribo").value,
      ddd: document.getElementById("mdDdd").value,
      telefone: document.getElementById("mdTel").value,
      email: document.getElementById("mdEmail").value,
      senha: document.getElementById("mdSenha").value,
    };
  };

  const enviarMeusDados = async (usuario) => {
    if (validarMeusDados(usuario)) {
      try {
        const res = await putMeusDados(usuario);
        if (res.status === 200) {
          delete usuario.senha;
          dispatch(actionPutMeusDados(usuario));
          // dispatch(actionFeedback(res.data, false));
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

  const validarMeusDados = (usuario) => {
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
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Cpf:</Form.Label>
            <Form.Control
              id={"mdCpf"}
              required
              type={"text"}
              minLength={11}
              maxLength={11}
              size={11}
              defaultValue={
                meusDados === null || meusDados.cpf === null
                  ? ""
                  : meusDados.cpf
              }
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
                  : meusDados.dataNascimento
              }
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Assinatura:</Form.Label>
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
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Cidade:</Form.Label>
            <Form.Control
              id={"mdCid"}
              required={false}
              type={"text"}
              maxLength={30}
              size={30}
              defaultValue={
                meusDados === null || meusDados.cidade === null
                  ? ""
                  : meusDados.cidade
              }
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>UF:</Form.Label>
            <Form.Control
              id={"mdUf"}
              required={false}
              type={"text"}
              maxLength={2}
              size={2}
              defaultValue={
                meusDados === null || meusDados.uf === null ? "" : meusDados.uf
              }
            />
          </Form.Group>

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
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>DDD:</Form.Label>
            <Form.Control
              id={"mdDdd"}
              required
              type={"text"}
              maxLength={2}
              size={2}
              defaultValue={
                meusDados === null || meusDados.ddd === null
                  ? ""
                  : meusDados.ddd
              }
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Telefone:</Form.Label>
            <Form.Control
              id={"mdTel"}
              required
              type={"text"}
              maxLength={10}
              size={10}
              defaultValue={
                meusDados === null || meusDados.telefone === null
                  ? ""
                  : meusDados.telefone
              }
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              id={"mdEmail"}
              required
              type={"email"}
              maxLength={30}
              size={30}
              value={
                meusDados === null || meusDados.email === null
                  ? ""
                  : meusDados.email
              }
              readOnly
              disabled
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              id={"mdSenha"}
              required
              type={"password"}
              maxLength={100}
              size={100}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Confirmação da Senha:</Form.Label>
            <Form.Control
              id={"mdConfSenha"}
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
      {/* pensei em o formulário começar com os campos desabilitados para edição */}
      {/* quando o usuário clicar em "editar", os campos ficarem habilitados para edição */}
      {/* clique em salvar => salvarMeusDados(dados do formulário) */}
      {/* clique em salvar => salvarMinhaSenha(dados do formulário) */}
      <FormMinhaSenha />
    </div>
  );
}
