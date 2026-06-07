import { useState } from "react";
import {
    TrendingDown,
    Search,
    Calendar,
    ChevronDown,
    ShoppingCart,
    Home,
    Utensils,
    Gamepad2,
    Trash2,
    } from "lucide-react";

    export function Despesas() {
    const [search, setSearch] = useState("");

    const [expenses, setExpenses] = useState([
        {
        id: 1,
        date: "03/06/2024",
        description: "Transporte (Uber)",
        category: "Transporte",
        payment: "Pix",
        value: 25,
        icon: ShoppingCart,
        },
        {
        id: 2,
        date: "02/06/2024",
        description: "Conta de luz",
        category: "Contas",
        payment: "Débito Automático",
        value: 200,
        icon: Home,
        },
        {
        id: 3,
        date: "01/06/2024",
        description: "Alimentação",
        category: "Alimentação",
        payment: "Cartão de Débito",
        value: 120,
        icon: Utensils,
        },
        {
        id: 4,
        date: "31/05/2024",
        description: "Lazer",
        category: "Lazer",
        payment: "Pix",
        value: 100,
        icon: Gamepad2,
        },
    ]);

    const totalExpenses = expenses.reduce(
        (total, expense) => total + expense.value,
        0
    );

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    const filteredExpenses = expenses.filter((expense) =>
        expense.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 space-y-6">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center">
            <div>
            <h1 className="text-3xl font-bold">Despesas</h1>
            <p className="text-gray-500">
                Acompanhe todas as saídas
            </p>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-medium">
            + Nova Despesa
            </button>
        </div>

        {/* Card Total */}
        <div className="bg-red-50 border border-red-100 rounded-xl p-6">
            <div className="flex items-center gap-4">
            <div className="bg-red-600 p-4 rounded-full">
                <TrendingDown className="text-white" size={28} />
            </div>

            <div>
                <p className="text-gray-600">
                Total de despesas
                </p>

                <h2 className="text-4xl font-bold text-red-600">
                R${" "}
                {totalExpenses.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                })}
                </h2>

                <p className="text-gray-500">
                Este mês
                </p>
            </div>
            </div>
        </div>

        {/* Filtros */}
        <div className="flex gap-4">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg">
            <span>Este mês</span>
            <Calendar size={18} />
            <ChevronDown size={18} />
            </button>

            <div className="relative flex-1">
            <input
                type="text"
                placeholder="Buscar despesa..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-lg px-10 py-2"
            />

            <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
            />
            </div>
        </div>

        {/* Tabela */}
        <div className="bg-white rounded-xl border overflow-hidden">
            <table className="w-full">
            <thead>
                <tr className="border-b bg-gray-50">
                <th className="text-left p-4">Data</th>
                <th className="text-left p-4">Descrição</th>
                <th className="text-left p-4">Categoria</th>
                <th className="text-left p-4">
                    Forma de Pagamento
                </th>
                <th className="text-right p-4">Valor</th>
                <th></th>
                </tr>
            </thead>

            <tbody>
                {filteredExpenses.map((expense) => {
                const Icon = expense.icon;

                return (
                    <tr
                    key={expense.id}
                    className="border-b hover:bg-gray-50"
                    >
                    <td className="p-4">
                        <div className="flex items-center gap-3">
                        <div className="bg-red-500 p-2 rounded-full">
                            <Icon
                            className="text-white"
                            size={18}
                            />
                        </div>

                        {expense.date}
                        </div>
                    </td>

                    <td className="p-4">
                        {expense.description}
                    </td>

                    <td className="p-4">
                        {expense.category}
                    </td>

                    <td className="p-4">
                        {expense.payment}
                    </td>

                    <td className="p-4 text-right text-red-600 font-semibold">
                        - R${" "}
                        {expense.value.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        })}
                    </td>

                    <td className="p-4">
                        <button
                        onClick={() =>
                            deleteExpense(expense.id)
                        }
                        >
                        <Trash2
                            size={18}
                            className="text-red-500"
                        />
                        </button>
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table>

            <div className="p-6 text-center">
            <p className="text-gray-500">
                <strong>Dica:</strong> acompanhe seus
                gastos por categoria e identifique onde
                pode economizar.
            </p>
            </div>
        </div>
        </div>
    );
}