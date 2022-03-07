export const meusDadosReducer = (state = [], action) => {
  switch (action.type) {
    case "actionGetMeusDados":
      return action.payload;

    case "actionPutMeusDados":
      return action.payload;

    default:
      return state;
  }
};
