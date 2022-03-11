export const estaLogadoReducer = (state = false, action) => {
  switch (action.type) {
    case "actionLogin":
      return action.payload;

    case "actionLogout":
      return action.payload;

    default:
      return state;
  }
};
