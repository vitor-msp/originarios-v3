import { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { putMeusDados, putMinhaSenha } from "../../api/api";
import { actionPutMeusDados } from "../../store/actions/meusDados/meusDados.action";

export function FormMeusDados() {
  const meusDados = useSelector((state) => state.meusDados);
  const [dadosAtuais, setDadosAtuais] = useState(meusDados);
  const dispatch = useDispatch();

  const criarMeusDados = () => {
    return Object.assign({}, dadosAtuais);
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

  const enviarMinhaSenha = async (senhas) => {
    if (validarMinhaSenha(senhas)) {
      try {
        let res = await putMinhaSenha(senhas);
        if (res.status === 200) {
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

  const validarMeusDados = (usuario) => {
    return true;
    // valida campos
    // se campos validos => return true
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
              value={dadosAtuais === null ? "" : dadosAtuais.nome}
              onChange={(event) => {
                setDadosAtuais({
                  ...dadosAtuais,
                  nome: event.target.value,
                });
              }}
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
              value={dadosAtuais === null ? "" : dadosAtuais.cpf}
              onChange={(event) => {
                setDadosAtuais({
                  ...dadosAtuais,
                  cpf: event.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Data de nascimento:</Form.Label>
            <Form.Control
              id={"mdDtNasc"}
              type={"date"}
              value={dadosAtuais === null ? "" : dadosAtuais.dataNascimento}
              onChange={(event) => {
                setDadosAtuais({
                  ...dadosAtuais,
                  dataNascimento: event.target.value,
                });
              }}
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
              value={dadosAtuais === null ? "" : dadosAtuais.assinatura}
              onChange={(event) => {
                setDadosAtuais({
                  ...dadosAtuais,
                  assinatura: event.target.value,
                });
              }}
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
              value={dadosAtuais === null ? "" : dadosAtuais.cidade}
              onChange={(event) => {
                setDadosAtuais({
                  ...dadosAtuais,
                  cidade: event.target.value,
                });
              }}
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
              value={dadosAtuais === null ? "" : dadosAtuais.uf}
              onChange={(event) => {
                setDadosAtuais({
                  ...dadosAtuais,
                  uf: event.target.value,
                });
              }}
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
              value={dadosAtuais === null ? "" : dadosAtuais.tribo}
              onChange={(event) => {
                setDadosAtuais({
                  ...dadosAtuais,
                  tribo: event.target.value,
                });
              }}
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
              value={dadosAtuais === null ? "" : dadosAtuais.ddd}
              onChange={(event) => {
                setDadosAtuais({
                  ...dadosAtuais,
                  ddd: event.target.value,
                });
              }}
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
              value={dadosAtuais === null ? "" : dadosAtuais.telefone}
              onChange={(event) => {
                setDadosAtuais({
                  ...dadosAtuais,
                  telefone: event.target.value,
                });
              }}
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
              value={dadosAtuais === null ? "" : dadosAtuais.email}
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
              value={
                dadosAtuais === null || dadosAtuais.senha === null
                  ? ""
                  : dadosAtuais.senha
              }
              onChange={(event) => {
                setDadosAtuais({
                  ...dadosAtuais,
                  senha: event.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Confirmação da Senha:</Form.Label>
            <Form.Control
              id={"mdConfSenha"}
              // required
              type={"password"}
              maxLength={100}
              size={100}
              value={""}
              // onChange={(event) => {
              //   setDadosAtuais({
              //     ...dadosAtuais,
              //     nome: event.target.value,
              //   });
              // }}
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
    </div>
  );
}
