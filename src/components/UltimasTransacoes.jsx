import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./CardResumo";

export default function UltimasTransacoes() {
  const transacoes = [
    {
      id: 1,
      data: "05/06/2024",
      descricao: "Salário",
      categoria: "Salário",
      tipo: "receita",
      valor: 3000.0,
    },
    {
      id: 2,
      data: "04/06/2024",
      descricao: "Mercado",
      categoria: "Alimentação",
      tipo: "despesa",
      valor: -150.0,
    },
    {
      id: 3,
      data: "03/06/2024",
      descricao: "Uber",
      categoria: "Transporte",
      tipo: "despesa",
      valor: -25.0,
    },
    {
      id: 4,
      data: "02/06/2024",
      descricao: "Conta de Luz",
      categoria: "Contas",
      tipo: "despesa",
      valor: -200.0,
    },
    {
      id: 5,
      data: "01/06/2024",
      descricao: "Freelance",
      categoria: "Trabalho",
      tipo: "receita",
      valor: 500.0,
    },
  ];

  return (
    <Card className="shadow-sm border-0 h-100">
      <CardHeader className="bg-transparent border-0 pt-4 pb-0">
        <CardTitle className="fs-5 fw-bold">Últimas transações</CardTitle>
      </CardHeader>
      <CardContent className="d-flex flex-column h-100 pb-4">
        <div className="flex-grow-1 mt-3">
          <div className="table-responsive">
            <table className="table table-borderless align-middle table-sm">
              <thead>
                <tr className="text-muted border-bottom">
                  <th className="fw-medium pb-2">Data</th>
                  <th className="fw-medium pb-2">Descrição</th>
                  <th className="fw-medium pb-2">Categoria</th>
                  <th className="fw-medium pb-2 text-center">Tipo</th>
                  <th className="fw-medium pb-2 text-end">Valor</th>
                </tr>
              </thead>
              <tbody>
                {transacoes.map((t) => (
                  <tr key={t.id}>
                    <td className="py-3 text-dark small">{t.data}</td>
                    <td className="py-3 text-dark small">{t.descricao}</td>
                    <td className="py-3 text-dark small">{t.categoria}</td>
                    <td className="py-3 text-center">
                      {t.tipo === "receita" ? (
                        <i className="bi bi-arrow-up text-success"></i>
                      ) : (
                        <i className="bi bi-arrow-down text-danger"></i>
                      )}
                    </td>
                    <td
                      className={`py-3 text-end fw-medium small ${t.tipo === "receita" ? "text-success" : "text-danger"}`}
                    >
                      {t.tipo === "receita" ? "+" : "-"} R${" "}
                      {Math.abs(t.valor).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-auto pt-2">
          <a
            href="#"
            className="text-success text-decoration-none fw-medium small"
          >
            Ver todas as transações{" "}
            <i className="bi bi-chevron-right small"></i>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
