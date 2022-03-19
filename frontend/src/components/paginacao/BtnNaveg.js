import { useDispatch, useSelector } from "react-redux";
import {
  getMeusProdutos,
  getMinhasPublicacoes,
  getProdutos,
  getPublicacoes,
} from "../../api/api";

export function BtnNaveg({ nomePagina }) {
  const paginacao = useSelector((state) => state.paginacao);
  const dispatch = useDispatch();
  let atualizarPagina = null;
  let paginaAtual = 0;
  let inicioAtual = 0;

  switch (nomePagina) {
    case "pgProdutos":
      paginaAtual = paginacao.pgProdutos;
      atualizarPagina = (sinal) => {
        const novaPg = sinal === "+" ? paginaAtual + 1 : paginaAtual - 1;
        if (novaPg >= 0) dispatch(getProdutos(novaPg));
      };
      break;

    case "inMeusProdutos":
      inicioAtual = paginacao.inMeusProdutos;
      atualizarPagina = (sinal) => {
        const novoInicio = sinal === "+" ? inicioAtual + 10 : inicioAtual - 10;
        if (novoInicio >= 0) dispatch(getMeusProdutos(novoInicio));
      };
      break;

    case "pgPublicacoes":
      paginaAtual = paginacao.pgPublicacoes;
      atualizarPagina = (sinal) => {
        const novaPg = sinal === "+" ? paginaAtual + 1 : paginaAtual - 1;
        if (novaPg >= 0) dispatch(getPublicacoes(novaPg));
      };
      break;

    case "inMinhasPublicacoes":
      inicioAtual = paginacao.inMinhasPublicacoes;
      atualizarPagina = (sinal) => {
        const novoInicio = sinal === "+" ? inicioAtual + 10 : inicioAtual - 10;
        if (novoInicio >= 0) dispatch(getMinhasPublicacoes(novoInicio));
      };
      break;

    default:
      break;
  }

  return (
    <div className="d-flex justify-content-center pt-4">
      <button
        type="button"
        onClick={() => atualizarPagina("-")}
        disabled={nomePagina.startsWith('pg') ? (paginaAtual <= 0) : (inicioAtual <= 0)}
        className="btn text-light"
        style={{
          backgroundColor: "var(--corMaisouMenosClara)",
          fontWeight: "bold",
        }}
      >
        {"<<"}
      </button>
      <span
        className="px-3"
        style={{ fontSize: "1.5rem", color: "var(--corMaisouMenosClara)" }}
      >
        {nomePagina.startsWith('pg') ? (paginaAtual + 1) : (inicioAtual/10 + 1)}
      </span>
      <button
        type="button"
        onClick={() => atualizarPagina("+")}
        className="btn text-light"
        style={{
          backgroundColor: "var(--corMaisouMenosClara)",
          fontWeight: "bold",
        }}
      >
        {">>"}
      </button>
    </div>
  );
}
