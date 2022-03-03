export const formatarMoeda = (valor) => {
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
};
