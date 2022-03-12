export const actionMinhaPublicacaoSelecionada = (publicacao) => {
  return {
    type: "actionMinhaPublicacaoSelecionada",
    payload: publicacao,
  };
};

export const actionLimparMinhaPublicacaoSelecionada = () => {
  return {
    type: "actionLimparMinhaPublicacaoSelecionada",
    payload: null,
  };
};