export const actionLogin = (dadosToken = null) => {
  if(dadosToken !== null){
    localStorage.setItem("OrigTkn", JSON.stringify(dadosToken));
  }
  return {
    type: "actionLogin",
    payload: true,
  };
};

export const actionLogout = () => {
  localStorage.removeItem("OrigTkn");
  return {
    type: "actionLogout",
    payload: false,
  };
};