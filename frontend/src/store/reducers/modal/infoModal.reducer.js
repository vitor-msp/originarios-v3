export const infoModalReducer = (state = null, action) => {
  switch (action.type) {
    case "actionInfoModal":
      return action.payload;

    case "actionLimparModal":
      return action.payload;

    default:
      return state;
  }
};
