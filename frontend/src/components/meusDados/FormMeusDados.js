import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeusDados, putMeusDados, putMinhaSenha } from "../../api/api";
import {
  actionGetMeusDados,
  actionPutMeusDados,
} from "../../store/actions/meusDados/meusDados.action";

export function FormMeusDados() {
  const meusDados = useSelector((state) => state.meusDados);
  const dispatch = useDispatch();

  useEffect(() => {
    const obterDados = async () => {
      try {
        let res = await getMeusDados();
        if (res.status === 200) {
          dispatch(actionGetMeusDados(res.data));
        } else {
          // dispatch(atualizarFeedback(res.data.message, false));
        }
      } catch (error) {
        // atualizarFeedback("Erro na comunicação com o servidor!", false)
      }
    };
    if (meusDados.length === 0) {
      obterDados();
    }
  }, []);

  const salvarMeusDados = async (usuario) => {
    if (validarMeusDados(usuario)) {
      try {
        let res = await putMeusDados(usuario);
        if (res.status === 200) {
          dispatch(actionPutMeusDados(res.data));
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

  const salvarMinhaSenha = async (senhas) => {
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
    // valida campos
    // se campos validos => return true
  };

  const validarMinhaSenha = (senhas) => {
    // valida campos
    // se campos validos => return true
  };

  return (
    <div>
      FormMeusDados
      {/* exibir formulário com dados do usuário (variável meusDados) */}
      {/* nome nvarchar(50) not null,
      cpf char(11) not null,
      dt_nasc date not null,
      email nvarchar(30) not null (NÃO PODE EDITAR),
      cidade nvarchar(30),
      estado char(2),
      ddd char(2) not null,
      whatsapp varchar(10) not null,
      tribo nvarchar(30) not null,
      assinatura nvarchar(30), */}
      {/* pensei em o formulário começar com os campos desabilitados para edição */}
      {/* quando o usuário clicar em "editar", os campos ficarem habilitados para edição */}
      {/* clique em salvar => salvarMeusDados(dados do formulário) */}
      {/* clique em salvar => salvarMinhaSenha(dados do formulário) */}
    </div>
  );
}
