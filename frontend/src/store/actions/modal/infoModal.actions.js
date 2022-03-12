export const actionInfoModal = (info, primary = false) => {
  return {
    type: "actionInfoModal",
    payload: {
      info,
      primary,
    },
  };
};
export const actionLimparModal = () => {
  return {
    type: "actionLimparModal",
    payload: null,
  };
};