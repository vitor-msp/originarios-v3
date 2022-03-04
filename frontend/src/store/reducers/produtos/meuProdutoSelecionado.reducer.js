export const meuProdutoSelecionadoReducer = (state = [], action) => {
  switch (action.type) {
    case "actionMeuProdutoSelecionado":
      return action.payload;

    default:
      return state;
  }
};
