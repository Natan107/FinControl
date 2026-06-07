import { useState } from "react";
import { createPortal } from "react-dom";
import InputMoeda from "./InputMoeda";
import { criarReceita } from "../controllers/receitaController";

export default function ModalReceita({
  show,
  handleClose,
}) {
  const [descricao, setDescricao] = useState("");
  const [valorD, setValorD] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const salvarReceita = async () => {
    try {
      setLoading(true);

      await criarReceita({
        descricao,
        valor: valorD,
        data,
      });

      setDescricao("");
      setValorD("");
      setData("");

      handleClose();
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar receita.");
    } finally {
      setLoading(false);
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
                <div className="bg-success bg-opacity-10 text-success p-2 rounded">
                  <i className="bi bi-graph-up-arrow fs-5"></i>
                </div>

                <div>
                  <h5 className="modal-title mb-0">
                    Nova Receita
                  </h5>

                  <small className="text-muted">
                    Registrar uma nova entrada
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
                className="btn btn-success"
                onClick={salvarReceita}
                disabled={loading}
              >
                {loading ? "Salvando..." : "Salvar"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </>,
    document.body
  );
}