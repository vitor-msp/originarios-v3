import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { ImagemCrop } from "./ImagemCrop";
import { postProduto, putProduto } from "../../api/api";
import { actionMeuProdutoSelecionado } from "../../store/actions/produtos/meuProdutoSelecionado.action";

export function EditarProduto({ novoProduto }) {
  const [img1Final, setImg1Final] = useState(null);
  const [img2Final, setImg2Final] = useState(null);
  const [img3Final, setImg3Final] = useState(null);
  const [img4Final, setImg4Final] = useState(null);

  const meuProdutoSelecionado = useSelector(
    (state) => state.meuProdutoSelecionado
  );
  const produto = novoProduto ? null : meuProdutoSelecionado;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const criarProduto = () => {
    const produtoObj = {
      id: novoProduto ? null : produto.id,
      titulo: document.getElementById("prodTit").value,
      descricao: document.getElementById("prodDes").value,
      corpo: document.getElementById("prodCor").value,
      valor: document.getElementById("prodVal").value,
      imagem1: img1Final,
      imagem2: img2Final,
      imagem3: img3Final,
      imagem4: img4Final,
    };
    return produtoObj;
  };

  const enviarProduto = async (produto) => {
    const res = novoProduto
      ? await dispatch(postProduto(produto))
      : await dispatch(putProduto(produto));
    if (res === true) {
      navigate("/MeusProdutos");
    }
  };

  const selecionarProduto = () => {
    dispatch(actionMeuProdutoSelecionado(produto));
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
        <h4>Informações do produto: </h4>
        <br></br>
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
              required
              min={0}
              defaultValue={produto === null ? "" : produto.valor}
            />
          </Form.Group>

          <h4>Selecionar imagens: </h4>
          <br></br>

          <ImagemCrop
            imgInicial={produto === null ? null : produto.imagem1}
            imgFinal={setImg1Final}
          />
          <ImagemCrop
            imgInicial={produto === null ? null : produto.imagem2}
            imgFinal={setImg2Final}
          />
          <ImagemCrop
            imgInicial={produto === null ? null : produto.imagem3}
            imgFinal={setImg3Final}
          />
          <ImagemCrop
            imgInicial={produto === null ? null : produto.imagem4}
            imgFinal={setImg4Final}
          />
        </Row>

        <Form.Group className="mb-3 d-flex justify-content-center">
          {novoProduto ? (
            <NavLink
              to={"/MeusProdutos"}
              className={"btn text-light mx-1"}
              style={{ backgroundColor: "var(--corMaisEscura)" }}
            >
              Cancelar
            </NavLink>
          ) : (
            <NavLink
              to={"/VerMeuProduto"}
              onClick={selecionarProduto}
              className={"btn text-light mx-1"}
              style={{ backgroundColor: "var(--corMaisEscura)" }}
            >
              Cancelar
            </NavLink>
          )}
          <input
            type={"submit"}
            value={"Salvar"}
            className={"btn text-light mx-1"}
            style={{ backgroundColor: "var(--corClara)" }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
