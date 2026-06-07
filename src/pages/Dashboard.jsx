import React from "react";
import GraficoDespesas from "../components/GraficoDespesas";
import AcoesRapidas from "../components/AcoesRapidas";
import UltimasTransacoes from "../components/UltimasTransacoes";
import MetasFinanceiras from "../components/MetasFinanceiras";

export default function Dashboard() {
  return (
    // Reduzi o padding inferior para pb-2
    <div
      className="container-fluid px-4 pb-2"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* =========================================
          1. CARDS DE RESUMO
          Reduzido: g-3 (espaço lateral) e mb-3 (espaço inferior)
      ============================================= */}
      <div className="row g-3 mb-3 mx-0">
        {/* Card 1: Saldo Atual (Verde) */}
        <div className="col-md-4">
          {/* Reduzi o padding interno do cartão para p-3 */}
          <div
            className="card border-0 shadow-sm rounded-4 p-3 h-100"
            style={{ backgroundColor: "#e8f5e9" }}
          >
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="bi bi-wallet2 fs-5"></i>
              </div>
              <div>
                <p
                  className="text-muted fw-semibold mb-0"
                  style={{ fontSize: "14px" }}
                >
                  Saldo Atual
                </p>
                <h4 className="text-success fw-bold mb-0">R$ 2.500,00</h4>
                <small className="text-muted" style={{ fontSize: "12px" }}>
                  Disponível
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Receitas do mês (Azul) */}
        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm rounded-4 p-3 h-100"
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="bi bi-arrow-up fs-5"></i>
              </div>
              <div>
                <p
                  className="text-muted fw-semibold mb-0"
                  style={{ fontSize: "14px" }}
                >
                  Receitas do mês
                </p>
                <h4 className="text-dark fw-bold mb-0">R$ 4.000,00</h4>
                <small className="text-muted" style={{ fontSize: "12px" }}>
                  Total de entradas
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Despesas do mês (Vermelho) */}
        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm rounded-4 p-3 h-100"
            style={{ backgroundColor: "#ffebee" }}
          >
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="bi bi-arrow-down fs-5"></i>
              </div>
              <div>
                <p
                  className="text-muted fw-semibold mb-0"
                  style={{ fontSize: "14px" }}
                >
                  Despesas do mês
                </p>
                <h4 className="text-dark fw-bold mb-0">R$ 1.500,00</h4>
                <small className="text-muted" style={{ fontSize: "12px" }}>
                  Total de saídas
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          2. ÁREA DE COMPONENTES COM SOMBRA
      ============================================= */}

      {/* Linha 2: Gráficos e Ações Rápidas */}
      {/* Reduzido: g-3 e mb-3 */}
      <div className="row g-3 mb-3 mx-0">
        <div className="col-md-8">
          {/* Reduzi o padding para p-3 */}
          <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
            <GraficoDespesas />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
            <AcoesRapidas />
          </div>
        </div>
      </div>

      {/* Linha 3: Últimas Transações e Metas Financeiras */}
      {/* Reduzido: g-3 */}
      <div className="row g-3 mx-0">
        <div className="col-md-8">
          <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
            <UltimasTransacoes />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
            <MetasFinanceiras />
          </div>
        </div>
      </div>
    </div>
  );
}
