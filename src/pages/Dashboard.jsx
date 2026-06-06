import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/CardResumo"; // Confirme se o caminho da importação está correto no seu projeto
import GraficoDespesas from "../components/GraficoDespesas";
import AcoesRapidas from "../components/AcoesRapidas";

export default function Dashboard() {
  return (
    <div className="container-fluid py-4">
      {/* Linha dos Cards de Resumo */}
      <div className="row g-4 mb-4">
        {/* Card 1: Disponível */}
        <div className="col-md-4">
          <Card className="h-100 shadow-sm border-0">
            <CardHeader className="border-0 bg-transparent pt-4 pb-0">
              <div className="d-inline-flex align-items-center justify-content-center rounded bg-success bg-opacity-10 text-success p-2 mb-2">
                {/* Ícone de Carteira */}
                <i className="bi bi-wallet2 fs-5"></i>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-success fw-bold fs-3 mb-1">
                R$ 2.500,00
              </CardTitle>
              <p className="text-muted mb-0">Disponível</p>
            </CardContent>
          </Card>
        </div>

        {/* Card 2: Total de entradas */}
        <div className="col-md-4">
          <Card className="h-100 shadow-sm border-0">
            <CardHeader className="border-0 bg-transparent pt-4 pb-0">
              <div className="d-inline-flex align-items-center justify-content-center rounded bg-primary bg-opacity-10 text-primary p-2 mb-2">
                {/* Ícone de Gráfico Subindo */}
                <i className="bi bi-graph-up-arrow fs-5"></i>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-primary fw-bold fs-3 mb-1">
                R$ 4.000,00
              </CardTitle>
              <p className="text-muted mb-0">Total de entradas</p>
            </CardContent>
          </Card>
        </div>

        {/* Card 3: Total de saídas */}
        <div className="col-md-4">
          <Card className="h-100 shadow-sm border-0">
            <CardHeader className="border-0 bg-transparent pt-4 pb-0">
              <div className="d-inline-flex align-items-center justify-content-center rounded bg-danger bg-opacity-10 text-danger p-2 mb-2">
                {/* Ícone de Gráfico Descendo */}
                <i className="bi bi-graph-down-arrow fs-5"></i>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-danger fw-bold fs-3 mb-1">
                R$ 1.500,00
              </CardTitle>
              <p className="text-muted mb-0">Total de saídas</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Gráficos e Ações Rápidas virão aqui */}
      <div className="row">
        <div className="col-md-8">
          <GraficoDespesas />
        </div>
        <div className="col-md-4">
          <AcoesRapidas />
        </div>
      </div>
    </div>
  );
}
