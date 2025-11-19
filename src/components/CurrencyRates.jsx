import React, { useState, useEffect } from 'react';
import { RefreshCw, TrendingUp } from 'lucide-react';

export const CurrencyRates = () => {
    const [rates, setRates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRates = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');

            if (!response.ok) {
                throw new Error('Помилка завантаження');
            }

            const data = await response.json();

            const filteredRates = data.filter(r => r.cc === 'USD' || r.cc === 'EUR');
            setRates(filteredRates);
        } catch (err) {
            setError('Не вдалося оновити курс');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRates();
    }, []);

    return (
        <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg shadow-indigo-500/20 mb-6 relative overflow-hidden">
            <TrendingUp className="absolute -right-4 -bottom-4 text-indigo-500 w-24 h-24 opacity-50" />

            <div className="flex justify-between items-center mb-4 relative z-10">
                <h3 className="font-bold text-lg">Курс НБУ</h3>
                <button
                    onClick={fetchRates}
                    disabled={loading}
                    className={`p-1.5 rounded-full hover:bg-indigo-500 transition-all ${loading ? 'animate-spin' : ''}`}
                    title="Оновити"
                >
                    <RefreshCw size={18} />
                </button>
            </div>

            <div className="space-y-3 relative z-10">
                {loading ? (
                    <div className="flex flex-col gap-2 animate-pulse">
                        <div className="h-6 bg-indigo-400 rounded w-full"></div>
                        <div className="h-6 bg-indigo-400 rounded w-full"></div>
                    </div>
                ) : error ? (
                    <div className="text-sm text-indigo-200 bg-indigo-800/50 p-2 rounded">
                        {error}
                    </div>
                ) : (
                    rates.map((rate) => (
                        <div key={rate.cc} className="flex justify-between items-center border-b border-indigo-500/30 last:border-0 pb-2 last:pb-0">
                            <div className="flex items-center gap-2">
                                <span className="font-bold bg-white text-indigo-600 text-xs px-2 py-0.5 rounded">
                                    {rate.cc}
                                </span>
                                <span className="text-sm opacity-90">{rate.txt}</span>
                            </div>
                            <span className="font-mono font-bold text-lg">
                                {rate.rate.toFixed(2)} ₴
                            </span>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-4 text-[10px] text-indigo-200 opacity-60 relative z-10">
                Дані: bank.gov.ua
            </div>
        </div>
    );
};