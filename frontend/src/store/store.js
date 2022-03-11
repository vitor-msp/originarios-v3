import { combineReducers, createStore } from "redux";

import { produtosReducer } from "./reducers/produtos/produtos.reducer";
import { produtoSelecionadoReducer } from "./reducers/produtos/produtoSelecionado.reducer";
import { meusProdutosReducer } from "./reducers/produtos/meusProdutos.reducer";
import { meuProdutoSelecionadoReducer } from "./reducers/produtos/meuProdutoSelecionado.reducer";

import { publicacoesReducer } from "./reducers/publicacoes/publicacoes.reducer";
import { publicacaoSelecionadaReducer } from "./reducers/publicacoes/publicacaoSelecionada.reducer";
import { minhasPublicacoesReducer } from "./reducers/publicacoes/minhasPublicacoes.reducer";
import { minhaPublicacaoSelecionadaReducer } from "./reducers/publicacoes/minhaPublicacaoSelecionada.reducer";

import { meusDadosReducer } from "./reducers/meusDados/meusDados.reducer";
import { estaLogadoReducer } from "./reducers/meusDados/estaLogado.reducer";

const reducers = combineReducers({
  produtos: produtosReducer,
  produtoSelecionado: produtoSelecionadoReducer,
  meusProdutos: meusProdutosReducer,
  meuProdutoSelecionado: meuProdutoSelecionadoReducer,

  publicacoes: publicacoesReducer,
  publicacaoSelecionada: publicacaoSelecionadaReducer,
  minhasPublicacoes: minhasPublicacoesReducer,
  minhaPublicacaoSelecionada: minhaPublicacaoSelecionadaReducer,

  meusDados: meusDadosReducer,
  estaLogado: estaLogadoReducer,
});

export const store = createStore(reducers);
