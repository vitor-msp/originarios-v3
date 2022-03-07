import { login } from "../../api/api";

export function FormLogin() {
  const enviarLogin = async (autenticacao) => {
    if (validarLogin(autenticacao)) {
      try {
        let res = await login(autenticacao);
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

  const validarLogin = (autenticacao) => {
    // valida campos
    // se campos validos => return true
  };

  return (
    <div>
      FormLogin
      {/* exibir formulário com campos para login */}

      {/* email nvarchar(30) not null,
      senha nvarchar(30) not null, */}

      {/* clique em enviar => enviarLogin(dados do formulário) */}
    </div>
  );
}
