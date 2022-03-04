export const meusProdutosReducer = (state = [], action) => {
  switch (action.type) {
    case "actionGetMeusProdutos":
      return action.payload;

    case "actionPostProduto":
      return state.push(action.payload);

    case "actionPutProduto":
      const index = state.findIndex((produto) => {
        return produto.id === action.payload.id;
      });
      state[index] = action.payload;
      return state;

    case "actionDeleteProduto":
      return state.filter((produto) => produto.id !== action.payload);

    default:
      return state;
  }
};
