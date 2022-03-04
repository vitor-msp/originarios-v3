export const minhaPublicacaoSelecionadaReducer = (state = [], action) => {
  switch (action.type) {
    case "actionMinhaPublicacaoSelecionada":
      return action.payload;

    default:
      return state;
  }
};
