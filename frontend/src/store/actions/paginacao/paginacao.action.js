export const actionPaginacao = (nomePagina, paginaAtual) => {
  return {
    type: nomePagina,
    payload: paginaAtual,
  };
};