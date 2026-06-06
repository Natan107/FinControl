import React from 'react';

export default function Sidebar() {
    // Troquei os componentes do Lucide pelos nomes das classes do Bootstrap Icons
    const menu = [
        { label: 'Dashboard', icon: 'bi-grid', active: true },
        { label: 'Receitas', icon: 'bi-graph-up-arrow' },
        { label: 'Despesas', icon: 'bi-graph-down-arrow' },
        { label: 'Metas Financeiras', icon: 'bi-bullseye' },
        { label: 'Relatórios', icon: 'bi-file-earmark-text' },
        { label: 'Configurações', icon: 'bi-gear' },
    ];

    return (
        <aside className="col-md-2 bg-dark text-white p-0 vh-100 position-fixed">
            <div className="d-flex flex-column h-100">
                <div className="p-3 border-bottom border-secondary">
                    <h4 className="mb-0 text-success fw-bold">
                        <i className="bi bi-bar-chart-fill me-2"></i>
                        FinControl
                    </h4>
                    <small className="text-muted">Gestão Financeira Pessoal</small>
                </div>

                <nav className="flex-grow-1 overflow-auto mt-3">
                    <ul className="nav flex-column p-2 gap-2">
                        {menu.map((item) => {
                            return (
                                <li key={item.label} className="nav-item">
                                    <button
                                        type="button"
                                        className={`d-flex align-items-center gap-3 w-100 btn border-0 ${item.active ? 'bg-success text-white' : 'text-white-50 text-start'}`}
                                        style={!item.active ? { textAlign: 'left' } : {}}
                                    >
                                        {/* Ícone do Bootstrap sendo renderizado dinamicamente */}
                                        <i className={`bi ${item.icon} fs-5`}></i>
                                        <span className="small fw-medium">{item.label}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Card extra que estava no Figma */}
                <div className="p-3 mx-2 mb-3 bg-success bg-opacity-25 rounded text-center">
                    <i className="bi bi-wallet2 fs-3 text-success mb-2 d-block"></i>
                    <small className="text-white">Organize suas finanças e conquiste seus objetivos!</small>
                </div>

                <div className="p-3 border-top border-secondary">
                    <button className="btn btn-link text-white-50 text-decoration-none d-flex align-items-center gap-2 w-100">
                        <i className="bi bi-box-arrow-right fs-5"></i>
                        <span>Sair</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}