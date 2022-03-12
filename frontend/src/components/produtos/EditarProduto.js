import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Form, Row } from "react-bootstrap";
// import { validarForm } from "../../helpers/validarForm";
// import { getMeusProdutos } from "../../api/api";

import { postProduto, putProduto } from "../../api/api";
import {
  actionPutProduto,
  actionPostProduto,
} from "../../store/actions/produtos/meusProdutos.action";
import { actionInfoModal } from "../../store/actions/modal/infoModal.actions";

export function EditarProduto({ novoProduto }) {
  const meuProdutoSelecionado = useSelector(
    (state) => state.meuProdutoSelecionado
  );
  const produto = novoProduto ? null : meuProdutoSelecionado;
  const dispatch = useDispatch();

  const criarProduto = () => {
    const produtoObj = {
      titulo: document.getElementById("prodTit").value,
      descricao: document.getElementById("prodDes").value,
      corpo: document.getElementById("prodCor").value,
      valor: document.getElementById("prodVal").value,
    };
    if (!novoProduto) {
      produtoObj.id = produto.id;
    }
    return produtoObj;
  };

  const enviarProduto = async (produto) => {
    if (validarProduto(produto)) {
      try {
        const res = novoProduto
          ? await postProduto(produto)
          : await putProduto(produto);
        if (res.status === 200) {
          dispatch(
            novoProduto
              ? actionPostProduto(res.data)
              : actionPutProduto(res.data)
          );
          dispatch(actionInfoModal("Produto salvo com sucesso!", true));
        } else {
          dispatch(actionInfoModal("Erro ao salvar o produto!", false));
        }
      } catch (error) {
        dispatch(actionInfoModal("Erro na comunicação com o servidor!", false));
      }
    } else {
      //dispatch(actionFeedback("Erro na comunicação com o servidor!", false));
      // feedback p usuario => dados inválidos
    }
  };

  const validarProduto = (produto) => {
    return true;
    // valida campos
    // se campos validos => return true
  };

  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          enviarProduto(criarProduto());
        }}
        className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"
      >
        <Row className="my-3">
          <Form.Group className={`mb-2`}>
            <Form.Label>Título:</Form.Label>
            <Form.Control
              id={"prodTit"}
              required
              type={"text"}
              maxLength={30}
              size={30}
              defaultValue={produto === null ? "" : produto.titulo}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              id={"prodDes"}
              required
              type={"text"}
              maxLength={100}
              size={100}
              defaultValue={produto === null ? "" : produto.descricao}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Mensagem:</Form.Label>
            <Form.Control
              id={"prodCor"}
              as={"textarea"}
              maxLength={5000}
              size={5000}
              defaultValue={produto === null ? "" : produto.corpo}
            />
          </Form.Group>

          <Form.Group className={`mb-2`}>
            <Form.Label>Valor:</Form.Label>
            <Form.Control
              id={"prodVal"}
              type={"number"}
              min={0}
              defaultValue={produto === null ? "" : produto.valor}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 d-flex justify-content-center">
          <NavLink to="/meusProdutos" className={"btn btn-danger"}>
            Cancelar
          </NavLink>
          <input type={"submit"} value={"Salvar"} className="btn btn-primary" />
        </Form.Group>
      </Form>
      {/* exibir formulário com dados do produto */}
      <div>
        {/* <form class="row" align="left">
          <div class="col-sm-10 form-group">
            <label>Título:</label>
            <br />
            <input
              type="text"
              name={"tituloproduto"}
              id="formproduto"
              cols="140"
              rols="1"
              maxLength={100}
            />
          </div>
          <div class="col-sm-10 form-group">
            <label>Descrição:</label>
            <br />
            <input
              type="text"
              name="descricaoproduto"
              id="formproduto"
              cols="140"
              rols="1"
              maxLength={100}
            />
          </div>
          <div class="col-sm-10 form-group">
            <label>Corpo:</label>
            <br />
            <input
              type="text"
              name="corpoproduto"
              id="formproduto"
              cols="140"
              rols="1"
              maxLength={100}
            />
          </div>
          <div class="col-sm-10 form-group">
            <label>Valor:</label>
            <br />
            <input
              type="text"
              name={"valorproduto"}
              id="formproduto"
              cols="140"
              rols="1"
              maxLength={100}
            />
          </div>
        </form> */}
      </div>

      {/*<div>
        <p>id: {produto.id}</p>
        <p>nome: {produto.nome}</p>
      </div>*/}

      {/* clique em salvar => salvarProduto(dados do formulário) */}
    </div>
  );
}
