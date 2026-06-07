import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

export default function App() {
  // Mantemos o cálculo para garantir o espaçamento correto
  const sidebarWidth = "260px";

  return (
    <div className="container-fluid p-0">
      <div className="d-flex">
        {/* Sidebar fixa na esquerda */}
        <div
          style={{ width: sidebarWidth, position: "fixed", height: "100vh" }}
        >
          <Sidebar />
        </div>

        {/* Conteúdo principal empurrado para a direita pela largura da sidebar */}
        <main
          className="flex-grow-1 bg-light"
          style={{ marginLeft: sidebarWidth, minHeight: "100vh" }}
        >
          <Header title="Dashboard" subtitle="Resumo da sua vida financeira" />

          <div className="p-4">
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
}
