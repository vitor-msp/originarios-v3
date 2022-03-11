export const actionGetMeusDados = (usuario) => {
  return {
    type: "actionGetMeusDados",
    payload: usuario,
  };
};

export const actionLimparMeusDados = () => {
  return {
    type: "actionLimparMeusDados",
    payload: null,
  };
};

export const actionPutMeusDados = (usuario) => {
  return {
    type: "actionPutMeusDados",
    payload: usuario,
  };
};
