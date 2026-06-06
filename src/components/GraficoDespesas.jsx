import { Card, CardHeader, CardTitle, CardContent } from "./CardResumo";

export default function GraficoDespesas() {
  return (
    <Card className="shadow-sm border-0 mb-4 h-100">
      <CardHeader className="bg-transparent border-0 pt-4 pb-2">
        <CardTitle className="fs-5 fw-bold">Despesas por categoria</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="row align-items-center">
          {/* Gráfico de Rosca feito com CSS */}
          <div className="col-md-6 text-center py-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
              style={{
                width: "180px",
                height: "180px",
                background:
                  "conic-gradient(#20c997 0% 30%, #0d6efd 30% 55%, #fd7e14 55% 75%, #a200ff 75% 90%, #6c757d 90% 100%)",
              }}
            >
              {/* O buraco no meio para formar a rosca */}
              <div
                className="bg-white rounded-circle"
                style={{ width: "130px", height: "130px" }}
              ></div>
            </div>
          </div>

          {/* Lista de Categorias */}
          <div className="col-md-6">
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
              <li className="d-flex justify-content-between align-items-center">
                <span>
                  <i className="bi bi-circle-fill text-success me-2 small"></i>{" "}
                  Alimentação
                </span>
                <span className="fw-medium">30%</span>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>
                  <i className="bi bi-circle-fill text-primary me-2 small"></i>{" "}
                  Transporte
                </span>
                <span className="fw-medium">25%</span>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>
                  <i
                    className="bi bi-circle-fill text-warning me-2 small"
                    style={{ color: "#fd7e14" }}
                  ></i>{" "}
                  Contas
                </span>
                <span className="fw-medium">20%</span>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>
                  <i
                    className="bi bi-circle-fill me-2 small"
                    style={{ color: "#a200ff" }}
                  ></i>{" "}
                  Lazer
                </span>
                <span className="fw-medium">15%</span>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <span>
                  <i className="bi bi-circle-fill text-secondary me-2 small"></i>{" "}
                  Outros
                </span>
                <span className="fw-medium">10%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Link do Rodapé */}
        <div className="mt-4">
          <a href="#" className="text-success text-decoration-none fw-medium">
            Ver relatório completo <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
