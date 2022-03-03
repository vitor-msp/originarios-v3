import axios from "axios";

const port = 8080;

const api = axios.create({
  baseURL: `http://localhost:${port}/`,
  headers: {
    "Content-type": "application/json",
  },
});

////////////////// endpoints públicos //////////////////
export const postContato = async (contato) => {
  const res = await api
    .post(`/contato`, contato)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const getProdutos = async () => {
  const res = await api
    .get(`/produtos`)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const getPublicacoes = async () => {
  const res = await api
    .get(`/publicacoes`)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const registrarUsuario = async (usuario) => {
  const res = await api
    .post(`/registrar`, usuario)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const login = async (autenticacao) => {
  const res = await api
    .post(`/login`, autenticacao)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

////////////////// endpoints autenticados //////////////////

export const getMeusProdutos = async () => {
  const res = await api
    .get(`/meusProdutos`)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

// post, put, delete meuProduto

export const getMinhasPublicacoes = async () => {
  const res = await api
    .get(`/minhasPublicacoes`)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

// post, put, delete minhaPublicacao

export const putMeusDados = async (dadosUsuario) => {
  const res = await api
    .put(`/meusDados`, dadosUsuario)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const putMinhaSenha = async (senhaUsuario) => {
  const res = await api
    .put(`/minhaSenha`, senhaUsuario)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};