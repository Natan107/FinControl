import { useState } from "react";
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

    console.log(novaDespesa);

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

      // Limpa o formulário
      setDescricao("");
      setValorD("");
      setData("");

      // Fecha o modal
      handleClose();

    } catch (error) {
      console.error(error);
    }
  };

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

            {/* Rodapé */}
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
    </>
  );
}