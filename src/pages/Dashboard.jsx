import React from "react";
import GraficoDespesas from "../components/GraficoDespesas";
import AcoesRapidas from "../components/AcoesRapidas";
import UltimasTransacoes from "../components/UltimasTransacoes";
import MetasFinanceiras from "../components/MetasFinanceiras";

export default function Dashboard() {
  return (
    <div className="p-4" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* =========================================
          1. CARDS DE RESUMO (Saldo, Receitas, Despesas)
          O "g-4" dá um espaçamento perfeito entre os 3 cartões
      ============================================= */}
      <div className="row g-4 mb-4">
        {/* Card 1: Saldo Atual (Verde) */}
        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm rounded-4 p-4 h-100"
            style={{ backgroundColor: "#e8f5e9" }}
          >
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-wallet2 fs-4"></i>
              </div>
              <div>
                <p className="text-muted fw-semibold mb-0">Saldo Atual</p>
                <h3 className="text-success fw-bold mb-0">R$ 2.500,00</h3>
                <small className="text-muted">Disponível</small>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Receitas do mês (Azul) */}
        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm rounded-4 p-4 h-100"
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-arrow-up fs-4"></i>
              </div>
              <div>
                <p className="text-muted fw-semibold mb-0">Receitas do mês</p>
                <h3 className="text-dark fw-bold mb-0">R$ 4.000,00</h3>
                <small className="text-muted">Total de entradas</small>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Despesas do mês (Vermelho) */}
        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm rounded-4 p-4 h-100"
            style={{ backgroundColor: "#ffebee" }}
          >
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-arrow-down fs-4"></i>
              </div>
              <div>
                <p className="text-muted fw-semibold mb-0">Despesas do mês</p>
                <h3 className="text-dark fw-bold mb-0">R$ 1.500,00</h3>
                <small className="text-muted">Total de saídas</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          2. ÁREA DE COMPONENTES COM SOMBRA
      ============================================= */}

      {/* Linha 2: Gráficos e Ações Rápidas */}
      <div className="row g-4 mb-4">
        <div className="col-md-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <GraficoDespesas />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <AcoesRapidas />
          </div>
        </div>
      </div>

      {/* Linha 3: Últimas Transações e Metas Financeiras */}
      <div className="row g-4">
        <div className="col-md-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <UltimasTransacoes />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <MetasFinanceiras />
          </div>
        </div>
      </div>
    </div>
  );
}
