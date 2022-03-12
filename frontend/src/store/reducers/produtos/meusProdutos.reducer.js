export const meusProdutosReducer = (state = [], action) => {
  switch (action.type) {
    case "actionGetMeusProdutos":
      return action.payload;

    case "actionPostProduto":
      state.unshift(action.payload);
      return state;

    case "actionPutProduto":
      const index = state.findIndex(({id}) => {
        return id === action.payload.id;
      });
      state[index] = action.payload;
      return state;

    case "actionDeleteProduto":
      return state.filter(({id}) => id !== action.payload);

    default:
      return state;
  }
};
