import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Target, FileText, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
	const menu = [
		{ label: 'Dashboard', icon: BarChart3, active: true },
		{ label: 'Receitas', icon: TrendingUp },
		{ label: 'Despesas', icon: TrendingDown },
		{ label: 'Metas Financeiras', icon: Target },
		{ label: 'Relatórios', icon: FileText },
		{ label: 'Configurações', icon: Settings },
	];

	return (
		<aside className="col-md-2 bg-dark text-white p-0 vh-100 position-fixed">
			<div className="d-flex flex-column h-100">
				<div className="p-3 border-bottom border-secondary">
					<h4 className="mb-0">FinControl</h4>
					<small className="text-muted">Gestão Financeira Pessoal</small>
				</div>

				<nav className="flex-grow-1 overflow-auto">
					<ul className="nav flex-column p-2 gap-2">
						{menu.map((item) => {
							const Icon = item.icon;
							return (
								<li key={item.label} className="nav-item">
									<button
										type="button"
										className={`d-flex align-items-center gap-2 w-100 btn ${item.active ? 'bg-success text-white' : 'btn-link text-white-50 text-start'}`}
									>
										<Icon size={18} />
										<span className="small">{item.label}</span>
									</button>
								</li>
							);
						})}
					</ul>
				</nav>

				<div className="p-3 border-top">
					<button className="btn btn-outline-light d-flex align-items-center gap-2 w-100">
						<LogOut size={16} />
						<span>Sair</span>
					</button>
				</div>
			</div>
		</aside>
	);
}

