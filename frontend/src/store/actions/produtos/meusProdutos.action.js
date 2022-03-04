export const actionGetMeusProdutos = (produtos) => {
  return {
    type: "actionGetMeusProdutos",
    payload: produtos,
  };
};

export const actionPostProduto = (produto) => {
  return {
    type: "actionPostProduto",
    payload: produto,
  };
};

export const actionPutProduto = (produto) => {
  return {
    type: "actionPutProduto",
    payload: produto,
  };
};

export const actionDeleteProduto = (produtoId) => {
  return {
    type: "actionDeleteProduto",
    payload: produtoId,
  };
};