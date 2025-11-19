import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenseChart = () => {
    const { transactions } = useContext(GlobalContext);

    const income = transactions
        .filter(t => t.amount > 0)
        .reduce((acc, item) => acc + item.amount, 0);

    const expense = transactions
        .filter(t => t.amount < 0)
        .reduce((acc, item) => acc + Math.abs(item.amount), 0);

    const data = [
        { name: 'Доходи', value: income },
        { name: 'Витрати', value: expense },
    ];

    const COLORS = ['#00C49F', '#FF8042'];

    if (transactions.length === 0) return <p className="text-center text-gray-500">Немає даних для графіка</p>;

    return (
        <div className="h-64 w-full bg-white p-4 rounded shadow-md">
            <h3 className="text-center font-bold">Статистика</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};