import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./CardResumo";

export default function GraficoDespesas() {
  return (
    <Card className="shadow-sm border-0 h-100">
      <CardHeader className="bg-transparent border-0 pt-4 pb-0">
        <CardTitle className="fs-5 fw-bold">Despesas por categoria</CardTitle>
      </CardHeader>
      <CardContent className="d-flex flex-column h-100 pb-4">
        <div className="row align-items-center flex-grow-1">
          <div className="col-md-5 text-center py-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
              style={{
                width: "160px",
                height: "160px",
                background:
                  "conic-gradient(#20c997 0% 30%, #0d6efd 30% 55%, #fd7e14 55% 75%, #a200ff 75% 90%, #6c757d 90% 100%)",
              }}
            >
              <div
                className="bg-white rounded-circle"
                style={{ width: "100px", height: "100px" }}
              ></div>
            </div>
          </div>

          <div className="col-md-7">
            <ul className="list-unstyled mb-0 d-flex flex-column gap-3 w-100">
              <li className="d-flex justify-content-between align-items-center w-100">
                <span>
                  <i className="bi bi-circle-fill text-success me-2 small"></i>{" "}
                  Alimentação
                </span>
                <span className="text-muted small">R$ 450,00</span>
              </li>
              <li className="d-flex justify-content-between align-items-center w-100">
                <span>
                  <i className="bi bi-circle-fill text-primary me-2 small"></i>{" "}
                  Transporte
                </span>
                <span className="text-muted small">R$ 375,00</span>
              </li>
              <li className="d-flex justify-content-between align-items-center w-100">
                <span>
                  <i
                    className="bi bi-circle-fill text-warning me-2 small"
                    style={{ color: "#fd7e14" }}
                  ></i>{" "}
                  Contas
                </span>
                <span className="text-muted small">R$ 300,00</span>
              </li>
              <li className="d-flex justify-content-between align-items-center w-100">
                <span>
                  <i
                    className="bi bi-circle-fill me-2 small"
                    style={{ color: "#a200ff" }}
                  ></i>{" "}
                  Lazer
                </span>
                <span className="text-muted small">R$ 225,00</span>
              </li>
              <li className="d-flex justify-content-between align-items-center w-100">
                <span>
                  <i className="bi bi-circle-fill text-secondary me-2 small"></i>{" "}
                  Outros
                </span>
                <span className="text-muted small">R$ 150,00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-auto pt-3">
          <a
            href="#"
            className="text-success text-decoration-none fw-medium small"
          >
            Ver relatório completo <i className="bi bi-chevron-right small"></i>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
