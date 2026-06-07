import React from "react";

export default function UltimasTransacoes() {
  // Array com os dados exatos do seu print para gerar a tabela automaticamente
  const transacoes = [
    {
      id: 1,
      data: "05/06/2024",
      descricao: "Salário",
      categoria: "Salário",
      tipo: "receita",
      valor: "R$ 3.000,00",
    },
    {
      id: 2,
      data: "04/06/2024",
      descricao: "Mercado",
      categoria: "Alimentação",
      tipo: "despesa",
      valor: "- R$ 150,00",
    },
    {
      id: 3,
      data: "03/06/2024",
      descricao: "Uber",
      categoria: "Transporte",
      tipo: "despesa",
      valor: "- R$ 25,00",
    },
    {
      id: 4,
      data: "02/06/2024",
      descricao: "Conta de Luz",
      categoria: "Contas",
      tipo: "despesa",
      valor: "- R$ 200,00",
    },
    {
      id: 5,
      data: "01/06/2024",
      descricao: "Freelance",
      categoria: "Trabalho",
      tipo: "receita",
      valor: "R$ 500,00",
    },
  ];

  return (
    <div className="d-flex flex-column h-100">
      <h5 className="fw-bold mb-4">Últimas transações</h5>

      <div className="table-responsive flex-grow-1">
        <table
          className="table align-middle text-nowrap"
          style={{ fontSize: "14px" }}
        >
          <thead>
            <tr>
              <th
                className="text-muted border-0 pb-3"
                style={{ fontWeight: "600" }}
              >
                Data
              </th>
              <th
                className="text-muted border-0 pb-3"
                style={{ fontWeight: "600" }}
              >
                Descrição
              </th>
              <th
                className="text-muted border-0 pb-3"
                style={{ fontWeight: "600" }}
              >
                Categoria
              </th>
              <th
                className="text-muted border-0 pb-3"
                style={{ fontWeight: "600" }}
              >
                Tipo
              </th>
              <th
                className="text-muted border-0 pb-3"
                style={{ fontWeight: "600" }}
              >
                Valor
              </th>
            </tr>
          </thead>

          <tbody>
            {transacoes.map((t) => (
              <tr key={t.id}>
                {/* As classes py-3 dão um espaçamento confortável (padding) em cima e embaixo do texto */}
                <td className="py-3 border-bottom border-light">{t.data}</td>
                <td className="py-3 border-bottom border-light fw-semibold text-dark">
                  {t.descricao}
                </td>
                <td className="py-3 border-bottom border-light">
                  {t.categoria}
                </td>

                <td className="py-3 border-bottom border-light">
                  {t.tipo === "receita" ? (
                    <i className="bi bi-arrow-up text-success fs-5"></i>
                  ) : (
                    <i className="bi bi-arrow-down text-danger fs-5"></i>
                  )}
                </td>

                <td
                  className={`py-3 border-bottom border-light fw-bold ${t.tipo === "receita" ? "text-success" : "text-danger"}`}
                >
                  {t.valor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-end mt-3">
        <a
          href="#"
          className="text-success text-decoration-none fw-bold"
          style={{ fontSize: "14px" }}
        >
          Ver todas as transações{" "}
          <i className="bi bi-chevron-right" style={{ fontSize: "12px" }}></i>
        </a>
      </div>
    </div>
  );
}
