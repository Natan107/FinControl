import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

export default function App() {
  // width of a Bootstrap col-md-2 is 16.6667% — used to offset the fixed sidebar
  const sidebarWidth = '16.666667%';

  return (
    <div className="container-fluid min-vh-100 p-0">
      <div className="row m-0">
        <Sidebar />

        <main className="col-md-10 offset-md-2 bg-light" style={{ minHeight: '100vh', marginLeft: sidebarWidth }}>
          <Header title="Dashboard" subtitle="Resumo da sua vida financeira" />

          <div className="container-fluid p-4">
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
}
