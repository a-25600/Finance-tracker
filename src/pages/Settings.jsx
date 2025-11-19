import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Settings = () => {
    const { transactions, clearTransactions } = useContext(GlobalContext);

    const handleClear = () => {
        if (window.confirm('Ви впевнені? Це видалить усі дані назавжди.')) {
            clearTransactions();
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Налаштування</h2>

            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-lg font-semibold mb-4">Керування даними</h3>

                <div className="flex items-center justify-between border-b pb-4 mb-4">
                    <div>
                        <p className="font-medium">Очистити історію</p>
                        <p className="text-sm text-gray-500">Видалити всі {transactions.length} записів транзакцій.</p>
                    </div>
                    <button
                        onClick={handleClear}
                        disabled={transactions.length === 0}
                        className="bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Очистити все
                    </button>
                </div>

                <div className="text-sm text-gray-500 mt-4">
                    <p>Версія додатку: 1.0.0</p>
                </div>
            </div>
        </div>
    );
};