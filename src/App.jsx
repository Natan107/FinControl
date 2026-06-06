import React from 'react';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div className="app-container">
      <Dashboard />
    </div>
  );
}import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Bell, User, Wallet, TrendingUp, TrendingDown, BarChart3, LogOut, Target, FileText, Settings } from 'lucide-react';
import { PieChart, Pie, Cell } from 'recharts';

export default function App() {
  const menuItems = [
    { name: 'Dashboard', icon: BarChart3, active: true },
    { name: 'Receitas', icon: TrendingUp, active: false },
    { name: 'Despesas', icon: TrendingDown, active: false },
    { name: 'Metas Financeiras', icon: Target, active: false },
    { name: 'Relatórios', icon: FileText, active: false },
    { name: 'Configurações', icon: Settings, active: false },
  ];

  const expenseData = [
    { name: 'Alimentação', value: 30, color: '#10b981' },
    { name: 'Transporte', value: 25, color: '#3b82f6' },
    { name: 'Contas', value: 20, color: '#f97316' },
    { name: 'Lazer', value: 15, color: '#a855f7' },
    { name: 'Outros', value: 10, color: '#6b7280' },
  ];

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <aside className="sidebar bg-dark-blue text-white d-flex flex-column">
        {/* Logo */}
        <div className="p-4 border-bottom border-secondary">
          <div className="d-flex align-items-center gap-3 mb-2">
            <div className="logo-icon bg-success rounded d-flex align-items-center justify-content-center">
              <BarChart3 size={20} />
            </div>
            <span className="fs-4 fw-bold">FinControl</span>
          </div>
          <p className="text-muted small mb-0">Gestão Financeira Pessoal</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-grow-1 p-3">
          <ul className="nav flex-column gap-2">
            {menuItems.map((item) => (
              <li key={item.name} className="nav-item">
                <button
                  className={`btn w-100 d-flex align-items-center gap-3 px-3 py-2 rounded ${
                    item.active
                      ? 'btn-success text-white'
                      : 'btn-link text-white-50 text-decoration-none'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="small">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="p-3">
          <button className="btn btn-link w-100 d-flex align-items-center gap-3 px-3 py-2 text-white-50 text-decoration-none rounded mb-3">
            <LogOut size={20} />
            <span className="small">Sair</span>
          </button>

          <div className="bg-success rounded p-3">
            <div className="d-flex align-items-start gap-3">
              <Wallet size={24} className="flex-shrink-0 mt-1" />
              <p className="small mb-0">
                Organize suas finanças e conquiste seus objetivos!
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 overflow-auto bg-light">
        {/* Header */}
        <header className="bg-white border-bottom px-4 py-3">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h1 className="h2 fw-bold mb-1">Dashboard</h1>
              <p className="text-muted mb-0">Resumo da sua vida financeira</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-light position-relative rounded-circle p-2">
                <Bell size={24} />
                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </button>
              <div className="d-flex align-items-center gap-2">
                <div className="avatar bg-primary rounded-circle d-flex align-items-center justify-content-center">
                  <User size={20} className="text-white" />
                </div>
                <span className="fw-medium">Olá, Lucas!</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container-fluid p-4">
          {/* Summary Cards */}
          <div className="row g-3 mb-4">
            {/* Balance Card */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="icon-box bg-success bg-opacity-10 rounded p-2">
                      <Wallet size={24} className="text-success" />
                    </div>
                  </div>
                  <h3 className="h2 fw-bold text-success mb-1">R$ 2.500,00</h3>
                  <p className="text-muted small mb-0">Disponível</p>
                </div>
              </div>
            </div>

            {/* Income Card */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="icon-box bg-primary bg-opacity-10 rounded p-2">
                      <TrendingUp size={24} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="h2 fw-bold text-primary mb-1">R$ 4.000,00</h3>
                  <p className="text-muted small mb-0">Total de entradas</p>
                </div>
              </div>
            </div>

            {/* Expenses Card */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="icon-box bg-danger bg-opacity-10 rounded p-2">
                      <TrendingDown size={24} className="text-danger" />
                    </div>
                  </div>
                  <h3 className="h2 fw-bold text-danger mb-1">R$ 1.500,00</h3>
                  <p className="text-muted small mb-0">Total de saídas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="row g-3 mb-4">
            {/* Expenses Chart */}
            <div className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h2 className="h4 fw-bold mb-4">Despesas por categoria</h2>
                  <div className="d-flex align-items-center gap-4">
                    <div>
                      <PieChart width={200} height={200}>
                        <Pie
                          data={expenseData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {expenseData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </div>
                    <div className="flex-grow-1">
                      <ul className="list-unstyled mb-0">
                        {expenseData.map((item) => (
                          <li key={item.name} className="d-flex align-items-center justify-content-between mb-2">
                            <div className="d-flex align-items-center gap-2">
                              <div
                                className="rounded-circle"
                                style={{ width: '12px', height: '12px', backgroundColor: item.color }}
                              ></div>
                              <span className="small">{item.name}</span>
                            </div>
                            <span className="small fw-medium">{item.value}%</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="btn btn-link text-success text-decoration-none p-0 mt-3 small fw-medium">
                    Ver relatório completo →
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h2 className="h4 fw-bold mb-4">Ações rápidas</h2>
                  <div className="d-grid gap-3">
                    <button className="btn btn-outline-secondary text-start d-flex align-items-start gap-3 p-3">
                      <div className="icon-box bg-success bg-opacity-10 rounded p-2 flex-shrink-0">
                        <TrendingUp size={20} className="text-success" />
                      </div>
                      <div>
                        <p className="fw-medium mb-1">Adicionar Receita</p>
                        <p className="text-muted small mb-0">Registrar uma nova entrada</p>
                      </div>
                    </button>

                    <button className="btn btn-outline-secondary text-start d-flex align-items-start gap-3 p-3">
                      <div className="icon-box bg-danger bg-opacity-10 rounded p-2 flex-shrink-0">
                        <TrendingDown size={20} className="text-danger" />
                      </div>
                      <div>
                        <p className="fw-medium mb-1">Adicionar Despesa</p>
                        <p className="text-muted small mb-0">Registrar uma nova saída</p>
                      </div>
                    </button>

                    <button className="btn btn-outline-secondary text-start d-flex align-items-start gap-3 p-3">
                      <div className="icon-box bg-primary bg-opacity-10 rounded p-2 flex-shrink-0">
                        <FileText size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="fw-medium mb-1">Ver Relatórios</p>
                        <p className="text-muted small mb-0">Acompanhe suas finanças</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="row g-3">
            {/* Recent Transactions */}
            <div className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h2 className="h4 fw-bold mb-4">Últimas transações</h2>
                  <div className="d-flex align-items-center justify-content-center py-5 text-muted">
                    <p className="small mb-0">Nenhuma transação recente</p>
                  </div>
                  <button className="btn btn-link text-success text-decoration-none p-0 d-block mx-auto small fw-medium mt-3">
                    Ver todas as transações →
                  </button>
                </div>
              </div>
            </div>

            {/* Financial Goals */}
            <div className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h2 className="h4 fw-bold mb-4">Metas financeiras</h2>
                  <div className="d-flex align-items-center gap-4">
                    <div className="flex-grow-1">
                      <h3 className="h5 fw-bold mb-2">Comprar Notebook</h3>
                      <p className="text-muted small mb-2">Meta: R$ 4.000,00</p>
                      <p className="small fw-medium mb-3">
                        R$ 2.500,00 / R$ 4.000,00
                      </p>
                      <div className="progress" style={{ height: '8px' }}>
                        <div
                          className="progress-bar bg-purple"
                          role="progressbar"
                          style={{ width: '62%' }}
                          aria-valuenow="62"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="position-relative flex-shrink-0" style={{ width: '128px', height: '128px' }}>
                      <svg width="128" height="128" style={{ transform: 'rotate(-90deg)' }}>
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="#a855f7"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.62)}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <span className="fs-3 fw-bold text-purple">62%</span>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-link text-success text-decoration-none p-0 d-block mx-auto small fw-medium mt-4">
                    Ver todas as metas →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
