export const minhasPublicacoesReducer = (state = [], action) => {
  switch (action.type) {
    case "actionGetMinhasPublicacoes":
      return action.payload;

    case "actionPostPublicacao":
      return state.push(action.payload);

    case "actionPutPublicacao":
      const index = state.findIndex((publicacao) => {
        return publicacao.id === action.payload.id;
      });
      state[index] = action.payload;
      return state;

    case "actionDeletePublicacao":
      return state.filter((publicacao) => publicacao.id !== action.payload);

    default:
      return state;
  }
};
