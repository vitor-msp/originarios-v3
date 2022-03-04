export const actionGetMinhasPublicacoes = (publicacoes) => {
  return {
    type: "actionGetMinhasPublicacoes",
    payload: publicacoes,
  };
};

export const actionPostPublicacao = (publicacao) => {
  return {
    type: "actionPostPublicacao",
    payload: publicacao,
  };
};

export const actionPutPublicacao = (publicacao) => {
  return {
    type: "actionPutPublicacao",
    payload: publicacao,
  };
};

export const actionDeletePublicacao = (publicacaoId) => {
  return {
    type: "actionDeletePublicacao",
    payload: publicacaoId,
  };
};