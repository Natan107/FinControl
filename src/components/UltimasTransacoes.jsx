import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./CardResumo";

export default function UltimasTransacoes() {
  // Simulando uma lista de dados que viria do banco de dados no futuro
  const transacoes = [
    {
      id: 1,
      descricao: "Salário mensal",
      data: "05 de Junho",
      valor: 4000.0,
      tipo: "receita",
      icone: "bi-cash-stack",
      cor: "success",
    },
    {
      id: 2,
      descricao: "Mercado",
      data: "03 de Junho",
      valor: -450.0,
      tipo: "despesa",
      icone: "bi-cart",
      cor: "danger",
    },
    {
      id: 3,
      descricao: "Conta de Luz",
      data: "01 de Junho",
      valor: -120.0,
      tipo: "despesa",
      icone: "bi-lightning",
      cor: "warning",
    },
  ];

  return (
    <Card className="shadow-sm border-0 h-100">
      <CardHeader className="bg-transparent border-0 pt-4 pb-0">
        <CardTitle className="fs-5 fw-bold">Últimas transações</CardTitle>
      </CardHeader>
      <CardContent className="d-flex flex-column justify-content-between h-100 pb-4">
        {/* Lista de transações (Substituindo o texto vazio) */}
        <div className="mt-4 mb-4 flex-grow-1">
          <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
            {transacoes.map((t) => (
              <li
                key={t.id}
                className="d-flex justify-content-between align-items-center border-bottom pb-3"
              >
                {/* Ícone e Descrição */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className={`bg-${t.cor} bg-opacity-10 text-${t.cor} rounded p-2 d-flex align-items-center justify-content-center`}
                    style={{ width: "45px", height: "45px" }}
                  >
                    <i className={`bi ${t.icone} fs-5`}></i>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{t.descricao}</h6>
                    <small className="text-muted">{t.data}</small>
                  </div>
                </div>

                {/* Valor Formatado */}
                <span
                  className={`fw-bold text-${t.tipo === "receita" ? "success" : "dark"}`}
                >
                  {t.tipo === "receita" ? "+" : "-"} R${" "}
                  {Math.abs(t.valor).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </li>
            ))}
          </ul>
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
