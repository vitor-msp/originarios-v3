export const minhasPublicacoesReducer = (state = [], action) => {
  switch (action.type) {
    case "actionGetMinhasPublicacoes":
      return action.payload;

    case "actionPostPublicacao":
      state.unshift(action.payload);
      return state;

    case "actionPutPublicacao":
      const index = state.findIndex(({id}) => {
        return id === action.payload.id;
      });
      state[index] = action.payload;
      return state;

    case "actionDeletePublicacao":
      return state.filter(({id}) => id !== action.payload);

    default:
      return state;
  }
};
