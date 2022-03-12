import axios from "axios";

const url = `https://originarios.herokuapp.com`;

const api = axios.create({
  baseURL: `${url}/api`,
  headers: {
    "Content-type": "application/json",
  },
});

const configToken = () => {
  const OrigTkn = JSON.parse(localStorage.getItem("OrigTkn"));
  const header = {
    Authorization: `${OrigTkn.tokenType} ${OrigTkn.token}`,
  };
  return header;
};

////////////// endpoints usuário //////////////////
export const postContato = async (contato) => {
  const res = await api
    .post(`/contato`, contato)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const postRegistro = async (registro) => {
  const res = await api
    .post(`/auth/registro`, registro)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const login = async (autenticacao) => {
  const res = await api
    .post(`/auth/login`, autenticacao)
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const getMeusDados = async () => {
  const res = await api
    .get(`/usuario`, {
      headers: configToken(),
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const putMeusDados = async (usuario) => {
  const res = await api
    .put(`/usuario`, usuario, {
      headers: configToken(),
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const putMinhaSenha = async (senhas) => {
  const res = await api
    .put(`/usuario/senha`, senhas, {
      headers: configToken(),
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

////////////////// produtos //////////////////
export const getProdutos = async () => {
  const res = await api
    .get(`/produtos`)
    .then((res) => {
      res.data = res.data.map(({ produto, usuarioResponse }) => {
        return {
          ...produto,
          usuario: { ...usuarioResponse },
        };
      });
      return res;
    })
    .catch((error) => error.response);
  return res;
};

export const getMeusProdutos = async () => {
  const res = await api
    .get(`/meus-produtos`, {
      headers: configToken(),
    })
    .then((res) => res)
    .catch((error) => error.response);
  console.log(res);
  return res;
};

export const postProduto = async (produto) => {
  const res = await api
    .post(`/meus-produtos`, produto, {
      headers: configToken(),
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const putProduto = async (produto) => {
  const res = await api
    .put(`/meus-produtos`, produto, {
      headers: configToken(),
    })
    .then((res) => res)
    .catch((error) => error.response);
  return res;
};

export const deleteProduto = async (produto) => {
  const res = await api
    .delete(`/meus-produtos`, {
      headers: configToken(),
      params: {
        produtoId: produto.id,
      },
    })
    .then((res) => res)
    .catch((error) => error.response);
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
