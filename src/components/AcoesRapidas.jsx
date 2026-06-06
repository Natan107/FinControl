import { Card, CardHeader, CardTitle, CardContent } from "./CardResumo";

export default function AcoesRapidas({ abrirReceita, abrirDespesa }) {
  return (
    <Card className="shadow-sm border-0 h-100">
      <CardHeader className="bg-transparent border-0 pt-4 pb-2">
        <CardTitle className="fs-5 fw-bold">Ações rápidas</CardTitle>
      </CardHeader>

      <CardContent className="d-flex flex-column gap-3 pb-4">
          {/* Botão de Receita */}
        <button
          onClick={abrirReceita}
          className="btn border border-light-subtle d-flex align-items-center gap-3 w-100 text-start p-3 rounded-3 hover-shadow transition"
        >
          <div className="bg-success bg-opacity-10 text-success p-2 rounded">
            <i className="bi bi-graph-up-arrow fs-5"></i>
          </div>
          <div>
            <h6 className="mb-0 fw-bold text-dark">Adicionar Receita</h6>
            <small className="text-muted">Registrar uma nova entrada</small>
          </div>
        </button>
          {/* Botão de Despesa */}
        <button
          onClick={abrirDespesa}
          className="btn border border-light-subtle d-flex align-items-center gap-3 w-100 text-start p-3 rounded-3 hover-shadow transition"
        >
          <div className="bg-danger bg-opacity-10 text-danger p-2 rounded">
            <i className="bi bi-graph-down-arrow fs-5"></i>
          </div>
          <div>
            <h6 className="mb-0 fw-bold text-dark">Adicionar Despesa</h6>
            <small className="text-muted">Registrar uma nova saída</small>
          </div>
        </button>

      </CardContent>
    </Card>
  );
}