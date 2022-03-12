export const minhaPublicacaoSelecionadaReducer = (state = null, action) => {
  switch (action.type) {
    case "actionMinhaPublicacaoSelecionada":
      return action.payload;

    case "actionLimparMinhaPublicacaoSelecionada":
      return action.payload;

    default:
      return state;
  }
};
