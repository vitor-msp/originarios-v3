export const validarForm = (campos) => {
  if (Object.values(campos).some((campo) => campo === null)) {
    return false;
  }
  return true;
};