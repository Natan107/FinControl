import React, { useState } from "react";
import ModalReceita from "./ModalReceita";
import ModalDespesa from "./ModalDespesa";

export default function AcoesRapidas() {
  const [showModalReceita, setShowModalReceita] = useState(false);
  const [showModalDespesa, setShowModalDespesa] = useState(false);

  const handleOpenModalReceita = () => setShowModalReceita(true);
  const handleCloseModalReceita = () => setShowModalReceita(false);

  const handleOpenModalDespesa = () => setShowModalDespesa(true);
  const handleCloseModalDespesa = () => setShowModalDespesa(false);

  return (
    <div className="d-flex flex-column h-100">
      {/* Título do Componente */}
      <h5 className="fw-bold mb-4">Ações rápidas</h5>

      {/* 1. Botão Adicionar Receita (Verde) */}
      <div
        className="card border rounded-3 p-3 mb-3 shadow-sm-hover"
        style={{ cursor: "pointer" }}
        onClick={handleOpenModalReceita}
      >
        <div className="d-flex align-items-center gap-3">
          {/* Caixa do Ícone Verde */}
          <div
            className="bg-success bg-opacity-10 text-success rounded-3 d-flex align-items-center justify-content-center"
            style={{ width: "48px", height: "48px" }}
          >
            <i className="bi bi-graph-up fs-5"></i>
          </div>

          {/* Textos */}
          <div>
            <h6 className="fw-bold mb-0 text-dark">Adicionar Receita</h6>
            <small className="text-muted">Registrar uma nova entrada</small>
          </div>
        </div>
      </div>

      {/* 2. Botão Adicionar Despesa (Vermelho) */}
      <div
        className="card border rounded-3 p-3 mb-3"
        style={{ cursor: "pointer" }}
        onClick={handleOpenModalDespesa}
      >
        <div className="d-flex align-items-center gap-3">
          {/* Caixa do Ícone Vermelho */}
          <div
            className="bg-danger bg-opacity-10 text-danger rounded-3 d-flex align-items-center justify-content-center"
            style={{ width: "48px", height: "48px" }}
          >
            <i className="bi bi-graph-down fs-5"></i>
          </div>

          {/* Textos */}
          <div>
            <h6 className="fw-bold mb-0 text-dark">Adicionar Despesa</h6>
            <small className="text-muted">Registrar uma nova saída</small>
          </div>
        </div>
      </div>

      {/* 3. Botão Ver Relatórios (Azul) */}
      <div className="card border rounded-3 p-3" style={{ cursor: "pointer" }}>
        <div className="d-flex align-items-center gap-3">
          {/* Caixa do Ícone Azul */}
          <div
            className="bg-info bg-opacity-10 text-info rounded-3 d-flex align-items-center justify-content-center"
            style={{ width: "48px", height: "48px" }}
          >
            <i className="bi bi-file-earmark-text fs-5"></i>
          </div>

          {/* Textos */}
          <div>
            <h6 className="fw-bold mb-0 text-dark">Ver Relatórios</h6>
            <small className="text-muted">Análise completa das finanças</small>
          </div>
        </div>
      </div>

      {/* Modais */}
      <ModalReceita
        show={showModalReceita}
        handleClose={handleCloseModalReceita}
      />
      <ModalDespesa
        show={showModalDespesa}
        handleClose={handleCloseModalDespesa}
      />
    </div>
  );
}
