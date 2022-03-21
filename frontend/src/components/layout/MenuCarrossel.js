import { useRef } from "react";
import "./MenuCarrossel.css";
import rightarrow from "../../pages/img/rightarrow.png";
import { useDispatch, useSelector } from "react-redux";
import { getImagem } from "../../helpers/getImagem";
import { formatarMoeda } from "../../helpers/formatarMoeda";
import { actionProdutoSelecionado } from "../../store/actions/produtos/produtoSelecionado.action";
import { NavLink } from "react-router-dom";

function MenuScroll() {
  const carousel = useRef(null);
  const produtos = useSelector((state) => state.produtos);
  const dispatch = useDispatch();

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!produtos || !produtos.length) return null;

  return (
    <div className="scroll text-center">
      <h1 className="pt-5 text-white">Produtos </h1>
      <h3 className=" text-white">
        Conheça alguns dos produtos indígenas que são style{" "}
      </h3>
      <div className="buttons d-flex justify-content-end">
        <button onClick={handleLeftClick}>
          <img src={rightarrow} alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src={rightarrow} alt="Scroll Right" />
        </button>
      </div>

      <div className="carousel text-center" ref={carousel}>
        {produtos.map((produto) => {
          const { id, titulo, valor, imagem1 } = produto;
          if (imagem1 === null) {
            return <div key={id}></div>;
          } else {
            return (
              <div className="item" key={id}>
                <NavLink
                  to={"/VerProduto"}
                  onClick={() => dispatch(actionProdutoSelecionado(produto))}
                >
                  <img src={getImagem(imagem1.id)} alt={imagem1.nome} />
                  <span className="price shadow text-center">
                    <div className="text-center " style={{ lineHeight: "3px" }}>
                      {valor !== null && (
                        <strong>
                          <span className="d-block  text-danger ">
                            {formatarMoeda(valor)}
                          </span>
                        </strong>
                      )}
                      {titulo !== null && <span className="">{titulo}</span>}
                    </div>
                  </span>
                </NavLink>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default MenuScroll;
