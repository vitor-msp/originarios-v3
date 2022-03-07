import { postRegistro } from "../../api/api";

export function FormRegistro() {
  const enviarRegistro = async (usuario) => {
    if (validarRegistro(usuario)) {
      try {
        let res = await postRegistro(usuario);
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

  const validarRegistro = (usuario) => {
    // valida campos
    // se campos validos => return true
  };

  return (
    <div>
      FormRegistro
      {/* exibir formulário com campos para registro */}

      {/* nome nvarchar(50) not null,
      cpf char(11) not null,
      dt_nasc date not null,
      email nvarchar(30) not null,
      cidade nvarchar(30),
      estado char(2),
      ddd char(2) not null,
      whatsapp varchar(10) not null,
      tribo nvarchar(30) not null,
      assinatura nvarchar(30),
      senha nvarchar(30) not null,
      confirmacao_senha nvarchar(30) not null*/}

      {/* clique em enviar => enviarRegistro(dados do formulário) */}
    </div>
  );
}
