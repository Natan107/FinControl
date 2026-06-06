import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./CardResumo";

export default function UltimasTransacoes() {
  return (
    <Card className="shadow-sm border-0 h-100">
      <CardHeader className="bg-transparent border-0 pt-4 pb-0">
        <CardTitle className="fs-5 fw-bold">Últimas transações</CardTitle>
      </CardHeader>
      <CardContent className="d-flex flex-column justify-content-between h-100 pb-4">
        {/* Espaço centralizado com a mensagem */}
        <div className="py-5 text-center my-4">
          <span className="text-muted">Nenhuma transação recente</span>
        </div>

        {/* Rodapé com link */}
        <div className="text-center mt-auto">
          <a href="#" className="text-success text-decoration-none fw-medium">
            Ver todas as transações <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
