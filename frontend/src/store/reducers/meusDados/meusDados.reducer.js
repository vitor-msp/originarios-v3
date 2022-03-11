export const meusDadosReducer = (state = null, action) => {
  switch (action.type) {
    case "actionGetMeusDados":
      return action.payload;

    case "actionLimparMeusDados":
      return action.payload;

    case "actionPutMeusDados":
      return action.payload;

    default:
      return state;
  }
};
