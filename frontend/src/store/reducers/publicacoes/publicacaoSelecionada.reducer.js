export const publicacaoSelecionadaReducer = (state = [], action) => {
  switch (action.type) {
    case "actionPublicacaoSelecionada":
      return action.payload;

    default:
      return state;
  }
};
