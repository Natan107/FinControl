import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    // 1. O "Cofre": Trava a tela inteira exatamente no tamanho do monitor (100vw/100vh) e proíbe scroll externo (overflow-hidden)
    <div className="d-flex vw-100 vh-100 overflow-hidden bg-light">
      {/* 2. Sidebar fixa (flexShrink: 0 impede que ela seja esmagada) */}
      <div style={{ width: "260px", flexShrink: 0 }}>
        <Sidebar />
      </div>

      {/* 3. Coluna Principal (Ocupa o espaço exato que sobra) */}
      <main
        className="d-flex flex-column flex-grow-1"
        style={{ width: "calc(100vw - 260px)" }}
      >
        {/* 4. Envelopamos o Header com padding (px-5 pt-4) para desgrudar o texto e o perfil das bordas! */}
        <div className="px-5 pt-4 pb-2">
          <Header title="Dashboard" subtitle="Resumo da sua vida financeira" />
        </div>

        {/* 5. Área do Dashboard: Se o conteúdo for maior que a tela, só essa parte rola (overflow-auto), o Header e Sidebar ficam parados. */}
        <div className="px-5 pb-4 flex-grow-1 overflow-auto">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}
