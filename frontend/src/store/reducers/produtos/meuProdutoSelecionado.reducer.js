export const meuProdutoSelecionadoReducer = (state = null, action) => {
  switch (action.type) {
    case "actionMeuProdutoSelecionado":
      return action.payload;

    case "actionLimparMeuProdutoSelecionado":
      return action.payload;

    default:
      return state;
  }
};
