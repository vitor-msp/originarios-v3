export const estaLogado = () => {
  try {
    const OrigTkn = JSON.parse(localStorage.getItem("OrigTkn"));
    console.log(OrigTkn.email);
    return true;
  } catch (error) {
    return false;
  }
};
