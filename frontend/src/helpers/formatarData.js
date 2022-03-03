export const formatarData = (stringData) => {
  const data = new Date(stringData);

  return `
    ${adcZerosEsq(data.getDate())}/${adcZerosEsq(
    data.getMonth() + 1
  )}/${adcZerosEsq(data.getFullYear(), 4)}`;
};

const adcZerosEsq = (numero, tamanho = 2) => {
  const len = numero.toString().length;
  let numFormatado = ``;

  if (len < tamanho) {
    for (let i = 0; i < tamanho - len; i++) {
      numFormatado += `0`;
    }
  }

  numFormatado += numero.toString();
  return numFormatado;
};
