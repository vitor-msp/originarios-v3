export const formatarData = (stringData) => {
  return stringData.substring(0, 10).split("-").reverse().join("/");
};
