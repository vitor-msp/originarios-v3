import axios from "axios";

const port = 8080;

const api = axios.create({
  baseURL: `http://localhost:${port}/`,
  headers: {
    "Content-type": "application/json",
  },
});

////////////////// produtos //////////////////
export const getProdutos = async () => {
  // const res = await api
  //   .get(`/produtos`)
  //   .then((res) => res)
  //   .catch((error) => error.response);
  // return res;
  const res = {
    status: 200,
    data: [
      { id: 1, nome: "produto 1" },
      { id: 2, nome: "produto 2" },
    ],
  };
  return res;
};

export const getMeusProdutos = async () => {
  // const res = await api
  //   .get(`/meusProdutos`)
  //   .then((res) => res)
  //   .catch((error) => error.response);
  // return res;
  const res = {
    status: 200,
    data: [
      { id: 1, nome: "meu produto 1" },
      { id: 2, nome: "meu produto 2" },
    ],
  };
  return res;
};

export const postProduto = async (produto) => {
  // const res = await api
  //   .post(`/meusProdutos`, produto)
  //   .then((res) => res)
  //   .catch((error) => error.response);
  // return res;
  const res = {
    status: 200,
    data: produto,
  };
  return res;
};

export const putProduto = async (produto) => {
  // const res = await api
  //   .put(`/meusProdutos`, produto)
  //   .then((res) => res)
  //   .catch((error) => error.response);
  // return res;
  const res = {
    status: 200,
    data: produto,
  };
  return res;
};

export const deleteProduto = async (produto) => {
  // const res = await api
  //   .delete(`/meusProdutos`, produto.id)
  //   .then((res) => res)
  //   .catch((error) => error.response);
  // return res;
  const res = {
    status: 200,
    data: produto.id,
  };
  return res;
};

////////////////// publicacoes //////////////////
export const getPublicacoes = async () => {
  // const res = await api
  //   .get(`/publicacoes`)
  //   .then((res) => res)
  //   .catch((error) => error.response);
  // return res;
  const res = {
    status: 200,
    data: [
      { id: 1, nome: "publicacao 1" },
      { id: 2, nome: "publicacao 2" },
    ],
  };
  return res;
};

export const getMinhasPublicacoes = async () => {
  // const res = await api
  //   .get(`/minhasPublicacoes`)
  //   .then((res) => res)
  //   .catch((error) => error.response);
  // return res;
  const res = {
    status: 200,
    data: [
      { id: 1, nome: "minha publicacao 1" },
      { id: 2, nome: "minha publicacao 2" },
    ],
  };
  return res;
};

export const postPublicacao = async (publicacao) => {
  // const res = await api
  //   .post(`/minhasPublicacoes`, publicacao)
  //   .then((res) => res)
  //   .catch((error) => error.response);
  // return res;
  const res = {
    status: 200,
    data: publicacao,
  };
  return res;
};

export const putPublicacao = async (publicacao) => {
  // const res = await api
  //   .put(`/minhasPublicacoes`, publicacao)
  //   .then((res) => res)
  //   .catch((error) => error.response);
  // return res;
  const res = {
    status: 200,
    data: publicacao,
  };
  return res;
};

export const deletePublicacao = async (publicacao) => {
  // const res = await api
  //   .delete(`/minhasPublicacoes`, publicacao.id)
  //   .then((res) => res)
  //   .catch((error) => error.response);
  // return res;
  const res = {
    status: 200,
    data: publicacao.id,
  };
  return res;
};

////////////// endpoints públicos //////////////////

// export const postContato = async (contato) => {
//   const res = await api
//     .post(`/contato`, contato)
//     .then((res) => res)
//     .catch((error) => error.response);
//   return res;
// };

// export const registrarUsuario = async (usuario) => {
//   const res = await api
//     .post(`/registrar`, usuario)
//     .then((res) => res)
//     .catch((error) => error.response);
//   return res;
// };

// export const login = async (autenticacao) => {
//   const res = await api
//     .post(`/login`, autenticacao)
//     .then((res) => res)
//     .catch((error) => error.response);
//   return res;
// };

// ////////////////// endpoints autenticados //////////////////

// export const putMeusDados = async (dadosUsuario) => {
//   const res = await api
//     .put(`/meusDados`, dadosUsuario)
//     .then((res) => res)
//     .catch((error) => error.response);
//   return res;
// };

// export const putMinhaSenha = async (senhaUsuario) => {
//   const res = await api
//     .put(`/minhaSenha`, senhaUsuario)
//     .then((res) => res)
//     .catch((error) => error.response);
//   return res;
// };
