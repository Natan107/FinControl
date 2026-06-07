import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./CardResumo";

export default function MetasFinanceiras() {
  return (
    <Card className="shadow-sm border-0 h-100">
      <CardHeader className="bg-transparent border-0 pt-4 pb-0">
        <CardTitle className="fs-5 fw-bold">Metas financeiras</CardTitle>
      </CardHeader>
      <CardContent className="d-flex flex-column h-100 pb-4">
        <div className="d-flex justify-content-between align-items-center mt-4 mb-4 flex-grow-1">
          {/* Lado Esquerdo: Ícone + Textos + Barra */}
          <div className="flex-grow-1 me-3 d-flex flex-column justify-content-center">
            <div className="d-flex align-items-center gap-3 mb-3">
              {/* Círculo com o Ícone do Laptop */}
              <div
                className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "48px", height: "48px" }}
              >
                <i
                  className="bi bi-laptop fs-4"
                  style={{ color: "#8b5cf6" }}
                ></i>
              </div>

              <div>
                <h6 className="fw-bold mb-0">Comprar Notebook</h6>
                <small className="text-muted">Meta: R$ 4.000,00</small>
              </div>
            </div>

            <div
              className="progress mb-2"
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
            <small className="fw-medium text-dark">
              R$ 2.500,00 / R$ 4.000,00
            </small>
          </div>

          {/* Lado Direito: Círculo */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
            style={{
              width: "70px",
              height: "70px",
              border: "5px solid #8b5cf6",
            }}
          >
            <span className="fs-5 fw-bold" style={{ color: "#8b5cf6" }}>
              62%
            </span>
          </div>
        </div>

        <div className="text-end mt-auto">
          <a
            href="#"
            className="text-success text-decoration-none fw-medium small"
          >
            Ver todas as metas <i className="bi bi-chevron-right small"></i>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
