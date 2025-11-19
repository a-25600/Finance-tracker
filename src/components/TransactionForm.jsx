import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'lucide-react';

export const TransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text || !amount) return;

        const newTransaction = {
            id: uuidv4(),
            text,
            amount: +amount,
            date: new Date().toLocaleDateString('uk-UA')
        };
        addTransaction(newTransaction);
        setText('');
        setAmount('');
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-fit">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Додати операцію</h3>
            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Назва</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block p-3 outline-none transition-all"
                        placeholder="Продукти, Таксі..."
                    />
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Сума</label>
                    <div className="relative">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block p-3 outline-none transition-all"
                            placeholder="-500 або 1000"
                        />
                        <span className="absolute right-3 top-3 text-slate-400 text-sm">₴</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Використовуйте "-" для витрат</p>
                </div>
                <button className="w-full flex items-center justify-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-xl text-sm px-5 py-3 text-center transition-all shadow-lg shadow-indigo-500/30">
                    <PlusCircle size={18} />
                    Додати транзакцію
                </button>
            </form>
        </div>
    );
};