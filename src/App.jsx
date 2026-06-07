import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { Despesas } from "./pages/Despesas";
import Metas from "./pages/Metas";

export default function App() {
  return (
    // 1. Container Global: Trava a altura (vh-100) e largura (vw-100) da tela, bloqueando o scroll externo (overflow-hidden)
    <div className="d-flex vh-100 bg-light" style={{ overflow: "hidden" }}>
      {/* 2. Sidebar Flutuante: Com position: fixed no CSS, ela fica fixada à esquerda */}
      <Sidebar />

      {/* 3. Conteúdo Principal: Empurrado 260px para a direita e com altura 100% */}
      <main
        className="d-flex flex-column flex-grow-1 h-100"
        style={{
          marginLeft: "260px",
          overflow: "hidden",
        }}
      >
        {/* 4. Cabeçalho (Header): Com padding para manter o alinhamento e respiro */}
        <div className="px-4 pt-4 pb-2">
          <Header title="Dashboard" subtitle="Resumo da sua vida financeira" />
        </div>

        {/* 5. Dashboard: Ocupa o restante do espaço (flex-grow-1) e rola apenas internamente se necessário (overflow-auto) */}
        <div className="ps-1 pe-4 pb-3 flex-grow-1 overflow-auto">
        <Metas />
        </div>
      </main>
    </div>
  );
}
