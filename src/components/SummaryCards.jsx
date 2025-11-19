import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ArrowUpCircle, ArrowDownCircle, Wallet } from 'lucide-react';

export const SummaryCards = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(t => t.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => acc + item, 0);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => acc + item, 0) * -1;
  const total = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Картка Балансу */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 rounded-2xl text-white shadow-lg shadow-indigo-500/20">
        <div className="flex items-center gap-3 mb-2 opacity-90">
          <Wallet size={20} />
          <span className="text-sm font-medium">Загальний баланс</span>
        </div>
        <h2 className="text-3xl font-bold">{total.toFixed(2)} ₴</h2>
      </div>

      {/* Картка Доходів */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-slate-500 text-sm font-medium mb-1">Доходи</p>
          <p className="text-2xl font-bold text-emerald-600">+{income.toFixed(2)} ₴</p>
        </div>
        <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
          <ArrowUpCircle size={24} />
        </div>
      </div>

      {/* Картка Витрат */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-slate-500 text-sm font-medium mb-1">Витрати</p>
          <p className="text-2xl font-bold text-rose-600">-{expense.toFixed(2)} ₴</p>
        </div>
        <div className="bg-rose-100 p-3 rounded-full text-rose-600">
          <ArrowDownCircle size={24} />
        </div>
      </div>
    </div>
  );
};