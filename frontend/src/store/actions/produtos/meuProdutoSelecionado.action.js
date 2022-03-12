export const actionMeuProdutoSelecionado = (produto) => {
  return {
    type: "actionMeuProdutoSelecionado",
    payload: produto,
  };
};

export const actionLimparMeuProdutoSelecionado = () => {
  return {
    type: "actionLimparMeuProdutoSelecionado",
    payload: null,
  };
};