import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { actionLimparModal } from "../../store/actions/modal/infoModal.actions";

export function InfoModal({ conteudo }) {
  const [modalAberta, setModalAberta] = useState(true);
  const { info, primary } = conteudo;
  const dispatch = useDispatch();

  const fecharModal = () => {
    setModalAberta(false);
    dispatch(actionLimparModal());
  };

  return (
    <Modal show={modalAberta} onHide={fecharModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className={primary ? "text-primary" : "text-secondary"}>
            {primary ? "Sucesso" : "Erro"}
          </span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>{info}</h5>
      </Modal.Body>

      <Modal.Footer>
        <button
          type="button"
          onClick={fecharModal}
          className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}
        >
          Entendi
        </button>
      </Modal.Footer>
    </Modal>
  );
}
