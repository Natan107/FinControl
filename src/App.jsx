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
    <div className="d-flex vh-100 bg-light" style={{ overflow: "hidden" }}>
      <Sidebar />

      <main
        className="d-flex flex-column flex-grow-1 h-100"
        style={{
          marginLeft: "260px",
          overflow: "hidden",
        }}
      >
        <div className="px-4 pt-4 pb-2">
          <Header title="Dashboard" subtitle="Resumo da sua vida financeira" />
        </div>

        <div className="ps-1 pe-4 pb-3 flex-grow-1 overflow-auto">
          <Metas />
        </div>
      </main>
    </div>
  );
}
