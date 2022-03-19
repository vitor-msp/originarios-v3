const paginasPadrao = {
  pgProdutos: 0,
  inMeusProdutos: 0,
  pgPublicacoes: 0,
  inMinhasPublicacoes: 0,
};

export const paginacaoReducer = (state = paginasPadrao, action) => {
  if (action.type.length > 0) {
    return {
      ...state,
      [action.type]: action.payload,
    };
  } else {
    return state;
  }
};
