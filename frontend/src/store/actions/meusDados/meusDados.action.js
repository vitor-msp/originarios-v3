export const actionGetMeusDados = (usuario) => {
  return {
    type: "actionGetMeusDados",
    payload: usuario,
  };
};

export const actionPutMeusDados = (usuario) => {
  return {
    type: "actionPutMeusDados",
    payload: usuario,
  };
};
