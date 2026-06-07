import { useState } from "react";
import InputMoeda from "./InputMoeda";

export default function ModalReceita({ show, handleClose }) {
  const [valor, setValor] = useState("");

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show" onClick={handleClose}></div>

      {/* Modal */}
      <div className="modal d-block">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Cabeçalho */}
            <div className="modal-header">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-success bg-opacity-10 text-success p-2 rounded">
                  <i className="bi bi-graph-up-arrow fs-5"></i>
                </div>

                <div>
                  <h5 className="modal-title mb-0">Nova Receita</h5>

                  <small className="text-muted">
                    Registrar uma nova entrada
                  </small>
                </div>
              </div>

              <button className="btn-close" onClick={handleClose} />
            </div>

            {/* Corpo */}
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Descrição"
              />

              <InputMoeda value={valor} onChange={setValor} className="mb-3" />

              <input type="date" className="form-control" />
            </div>

            {/* Rodapé */}
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={handleClose}>
                Cancelar
              </button>

              <button className="btn btn-success">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
