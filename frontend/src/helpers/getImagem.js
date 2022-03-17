import { url } from "../api/api";

export const getImagem = (id) => {
  return `${url}/api/imagens/${id}`;
};
