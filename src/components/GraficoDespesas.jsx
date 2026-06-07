import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function GraficoDespesas() {
  // Dados atualizados: Agora temos o 'valorNum' que o gráfico usa para calcular o tamanho da fatia
  const categorias = [
    {
      id: 1,
      nome: "Alimentação",
      valorText: "R$ 450,00",
      valorNum: 450,
      cor: "#4caf50",
    }, // Verde
    {
      id: 2,
      nome: "Transporte",
      valorText: "R$ 375,00",
      valorNum: 375,
      cor: "#2196f3",
    }, // Azul
    {
      id: 3,
      nome: "Contas",
      valorText: "R$ 300,00",
      valorNum: 300,
      cor: "#ffb74d",
    }, // Laranja
    {
      id: 4,
      nome: "Lazer",
      valorText: "R$ 225,00",
      valorNum: 225,
      cor: "#9c27b0",
    }, // Roxo
    {
      id: 5,
      nome: "Outros",
      valorText: "R$ 150,00",
      valorNum: 150,
      cor: "#9e9e9e",
    }, // Cinza
  ];

  // Função para desenhar a porcentagem branca no meio de cada fatia
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="d-flex flex-column h-100">
      {/* Título */}
      <h5 className="fw-bold mb-4">Despesas por categoria</h5>

      <div className="row flex-grow-1 align-items-center">
        {/* LADO ESQUERDO: Gráfico Real do Recharts */}
        <div className="col-5" style={{ height: "220px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categorias}
                dataKey="valorNum"
                cx="50%"
                cy="50%"
                innerRadius={50} // Define o tamanho do "furo" no meio (Gráfico de Rosca/Donut)
                outerRadius={90} // Define o tamanho total do gráfico
                paddingAngle={0} // Sem espaço entre as fatias
                labelLine={false} // Tira aquelas linhas feias de legenda
                label={renderCustomizedLabel} // Chama a função que escreve a porcentagem
                stroke="none" // Remove a borda padrão do Reactharts
              >
                {/* Pinta cada fatia com a cor exata definida lá em cima */}
                {categorias.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.cor} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* LADO DIREITO: Legenda */}
        <div className="col-7">
          {categorias.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center mb-3 pe-3"
            >
              <div className="d-flex align-items-center gap-2">
                <span
                  className="rounded-circle"
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: item.cor,
                  }}
                ></span>
                <span
                  className="fw-semibold text-dark"
                  style={{ fontSize: "14px" }}
                >
                  {item.nome}
                </span>
              </div>

              <span
                className="text-muted fw-semibold"
                style={{ fontSize: "14px" }}
              >
                {item.valorText}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RODAPÉ */}
      <div className="text-end mt-2">
        <a
          href="#"
          className="text-success text-decoration-none fw-bold"
          style={{ fontSize: "14px" }}
        >
          Ver relatório completo
        </a>
      </div>
    </div>
  );
}
