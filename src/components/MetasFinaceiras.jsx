import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./CardResumo";

export default function MetasFinanceiras() {
  return (
    <Card className="shadow-sm border-0 h-100">
      <CardHeader className="bg-transparent border-0 pt-4 pb-0">
        <CardTitle className="fs-5 fw-bold">Metas financeiras</CardTitle>
      </CardHeader>
      <CardContent className="d-flex flex-column justify-content-between pb-4">
        <div className="d-flex justify-content-between align-items-center mt-3 mb-4">
          <div>
            <h5 className="fw-bold mb-1">Comprar Notebook</h5>
            <p className="text-muted small mb-2">Meta: R$ 4.000,00</p>
            <p className="fw-medium mb-0">R$ 2.500,00 / R$ 4.000,00</p>
          </div>

          {/* Círculo de porcentagem roxo */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "80px",
              height: "80px",
              border: "6px solid #8b5cf6",
            }}
          >
            <span className="fs-4 fw-bold" style={{ color: "#8b5cf6" }}>
              62%
            </span>
          </div>
        </div>

        {/* Barra de progresso */}
        <div
          className="progress mb-4"
          style={{ height: "8px", backgroundColor: "#e9ecef" }}
        >
          <div
            className="progress-bar rounded-pill"
            role="progressbar"
            style={{ width: "62%", backgroundColor: "#8b5cf6" }}
            aria-valuenow="62"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        {/* Rodapé com link */}
        <div className="text-center mt-auto">
          <a href="#" className="text-success text-decoration-none fw-medium">
            Ver todas as metas <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
