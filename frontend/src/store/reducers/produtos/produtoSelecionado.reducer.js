export const produtoSelecionadoReducer = (state = [], action) => {
  switch (action.type) {
    case "actionProdutoSelecionado":
      return action.payload;

    default:
      return state;
  }
};
