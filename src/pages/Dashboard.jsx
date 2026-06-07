import React from "react";
import GraficoDespesas from "../components/GraficoDespesas";
import AcoesRapidas from "../components/AcoesRapidas";
import UltimasTransacoes from "../components/UltimasTransacoes";
import MetasFinanceiras from "../components/MetasFinanceiras";

export default function Dashboard() {
  return (
    <div className="container-fluid py-4 bg-light min-vh-100">
      {/* Linha 1: Cards de Resumo Coloridos e Horizontais */}
      <div className="row g-4 mb-4">
        {/* Card Saldo (Verde) */}
        <div className="col-md-4">
          <div className="card bg-success bg-opacity-10 border-0 rounded-4 shadow-sm h-100 p-3">
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-wallet2 fs-3"></i>
              </div>
              <div>
                <p className="text-muted mb-0 small">Saldo Atual</p>
                <h3 className="fw-bold text-success mb-0">R$ 2.500,00</h3>
                <small className="text-success opacity-75">Disponível</small>
              </div>
            </div>
          </div>
        </div>

        {/* Card Receitas (Azul) */}
        <div className="col-md-4">
          <div className="card bg-primary bg-opacity-10 border-0 rounded-4 shadow-sm h-100 p-3">
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-arrow-up-short fs-1"></i>
              </div>
              <div>
                <p className="text-muted mb-0 small">Receitas do mês</p>
                <h3 className="fw-bold text-primary mb-0">R$ 4.000,00</h3>
                <small className="text-primary opacity-75">
                  Total de entradas
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Card Despesas (Vermelho) */}
        <div className="col-md-4">
          <div className="card bg-danger bg-opacity-10 border-0 rounded-4 shadow-sm h-100 p-3">
            <div className="d-flex align-items-center gap-3">
              <div
                className="bg-danger text-white rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-arrow-down-short fs-1"></i>
              </div>
              <div>
                <p className="text-muted mb-0 small">Despesas do mês</p>
                <h3 className="fw-bold text-danger mb-0">R$ 1.500,00</h3>
                <small className="text-danger opacity-75">
                  Total de saídas
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Linha 2: Gráficos e Ações Rápidas */}
      <div className="row g-4 mb-4">
        <div className="col-md-8">
          <GraficoDespesas />
        </div>
        <div className="col-md-4">
          <AcoesRapidas />
        </div>
      </div>

      {/* Linha 3: Últimas Transações e Metas Financeiras */}
      <div className="row g-4">
        <div className="col-md-8">
          <UltimasTransacoes />
        </div>
        <div className="col-md-4">
          <MetasFinanceiras />
        </div>
      </div>
    </div>
  );
}
