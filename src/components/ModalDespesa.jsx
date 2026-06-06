import { useState } from "react";
import InputMoeda from "./InputMoeda";

export default function ModalDespesa({
  show,
  handleClose,
}) {
  const [valor, setValor] = useState("");

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="modal d-block">
        <div className="modal-dialog">
          <div className="modal-content">

            {/* Cabeçalho */}
            <div className="modal-header">
              <div className="d-flex align-items-center gap-3">

                <div className="bg-danger bg-opacity-10 text-danger p-2 rounded">
                  <i className="bi bi-graph-down-arrow fs-5"></i>
                </div>

                <div>
                  <h5 className="modal-title mb-0">
                    Nova Despesa
                  </h5>

                  <small className="text-muted">
                    Registrar uma nova saída
                  </small>
                </div>

              </div>

              <button
                className="btn-close"
                onClick={handleClose}
              />
            </div>

            {/* Corpo */}
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Descrição"
              />

              <InputMoeda
                value={valor}
                onChange={setValor}
                className="mb-3"
              />

              <input
                type="date"
                className="form-control"
              />
            </div>

            {/* Rodapé */}
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancelar
              </button>

              <button className="btn btn-danger">
                Salvar
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}