import React from 'react';
import { TransactionForm } from '../components/TransactionForm';
import { TransactionList } from '../components/TransactionList';
import { IncomeExpenseChart } from '../components/Charts';
import { SummaryCards } from '../components/SummaryCards';
import { CurrencyRates } from '../components/CurrencyRates';
export const Dashboard = () => {
    return (
        <div className="animate-fade-in">
            <SummaryCards />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 flex flex-col gap-6">
                    <CurrencyRates />

                    <TransactionForm />

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">Структура витрат</h3>
                        <IncomeExpenseChart />
                    </div>
                </div>

                <div className="lg:col-span-2 h-full">
                    <TransactionList />
                </div>
            </div>
        </div>
    );
};