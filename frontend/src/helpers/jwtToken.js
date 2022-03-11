export const existeToken = () => {
  try {
    const dadosToken = JSON.parse(localStorage.getItem("OrigTkn"));
    return dadosToken === null || dadosToken === undefined ? false : true;
  } catch (error) {
    return false;
  }
};
