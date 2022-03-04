export const produtosReducer = (state = [], action) => {
  switch (action.type) {
    case "actionGetProdutos":
      return action.payload;

    default:
      return state;
  }
};
