import { postContato } from "../../api/api";

export function FormContato() {
  const enviarContato = async (contato) => {
    if (validarContato(contato)) {
      try {
        let res = await postContato(contato);
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

  const validarContato = (contato) => {
    // valida campos
    // se campos validos => return true
  };

  return (
    <div>
      FormContato
      {/* exibir formulário com campos para contato */}

      {/* nome nvarchar(50) not null,
      email nvarchar(30) not null,
      endereco nvarchar(70),
      assunto nvarchar(30) not null,
      corpo nvarchar(2000) not null, */}

      {/* clique em enviar => enviarContato(dados do formulário) */}
    </div>
  );
}
