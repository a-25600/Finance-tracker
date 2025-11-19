import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Trash2, Receipt } from 'lucide-react';

export const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full max-h-[500px]">
            <div className="p-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-800">Історія операцій</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {transactions.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400">
                        <Receipt size={48} className="mb-2 opacity-20" />
                        <p>Транзакцій ще немає</p>
                    </div>
                ) : (
                    transactions.map((t) => (
                        <div
                            key={t.id}
                            className="group flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-100 rounded-xl transition-all duration-200"
                        >
                            <div className="flex items-center gap-4">
                                {/* Індикатор кольору */}
                                <div className={`w-2 h-2 rounded-full ${t.amount < 0 ? 'bg-rose-500' : 'bg-emerald-500'}`}></div>

                                <div className="flex flex-col">
                                    <span className="font-semibold text-slate-700">{t.text}</span>
                                    <span className="text-xs text-slate-400">{t.date}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className={`font-bold text-base ${t.amount < 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                                    {t.amount < 0 ? '-' : '+'}{Math.abs(t.amount).toFixed(2)} ₴
                                </span>

                                <button
                                    onClick={() => deleteTransaction(t.id)}
                                    className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                                    title="Видалити"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};