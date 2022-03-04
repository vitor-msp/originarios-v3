import { combineReducers, createStore } from "redux";

import { meuProdutoSelecionadoReducer } from "./reducers/produtos/meuProdutoSelecionado.reducer";
import { produtoSelecionadoReducer } from "./reducers/produtos/produtoSelecionado.reducer";
import { meusProdutosReducer } from "./reducers/produtos/meusProdutos.reducer";
import { produtosReducer } from "./reducers/produtos/produtos.reducer";

import { minhaPublicacaoSelecionadaReducer } from "./reducers/publicacoes/minhaPublicacaoSelecionada.reducer";
import { publicacaoSelecionadaReducer } from "./reducers/publicacoes/publicacaoSelecionada.reducer";
import { minhasPublicacoesReducer } from "./reducers/publicacoes/minhasPublicacoes.reducer";
import { publicacoesReducer } from "./reducers/publicacoes/publicacoes.reducer";

const reducers = combineReducers({
  meusProdutos: meusProdutosReducer,
  produtos: produtosReducer,
  meuProdutoSelecionado: meuProdutoSelecionadoReducer,
  produtoSelecionado: produtoSelecionadoReducer,

  minhasPublicacoes: minhasPublicacoesReducer,
  publicacoes: publicacoesReducer,
  minhaPublicacaoSelecionada: minhaPublicacaoSelecionadaReducer,
  publicacaoSelecionada: publicacaoSelecionadaReducer,
});

export const store = createStore(reducers);
