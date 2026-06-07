import { useState } from "react";
import { createPortal } from "react-dom";
import InputMoeda from "./InputMoeda";

export default function ModalDespesa({
  show,
  handleClose,
}) {
  const [descricao, setDescricao] = useState("");
  const [valorD, setValorD] = useState("");
  const [data, setData] = useState("");

  const salvarDespesa = async () => {
    const novaDespesa = {
      descricao,
      valor: valorD,
      data,
    };

    try {
      const response = await fetch(
        "http://localhost:3001/despesas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(novaDespesa),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao salvar despesa");
      }

      setDescricao("");
      setValorD("");
      setData("");

      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  if (!show) return null;

  return createPortal(
    <>
      <div
        className="modal-backdrop fade show"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1050,
        }}
        onClick={handleClose}
      />

      <div
        className="modal d-block"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1055,
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

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

            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) =>
                  setDescricao(e.target.value)
                }
              />

              <InputMoeda
                value={valorD}
                onChange={setValorD}
                className="mb-3"
              />

              <input
                type="date"
                className="form-control"
                value={data}
                onChange={(e) =>
                  setData(e.target.value)
                }
              />
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancelar
              </button>

              <button
                className="btn btn-danger"
                onClick={salvarDespesa}
              >
                Salvar
              </button>
            </div>

          </div>
        </div>
      </div>
    </>,
    document.body
  );
}