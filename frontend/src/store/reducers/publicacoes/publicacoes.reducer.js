export const publicacoesReducer = (state = [], action) => {
  switch (action.type) {
    case "actionGetPublicacoes":
      return action.payload;

    default:
      return state;
  }
};
