import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Settings, Wallet } from 'lucide-react';

export const Layout = () => {
    const activeStyle = "flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-semibold transition-all";
    const inactiveStyle = "flex items-center gap-2 px-4 py-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all";

    return (
        <div className="min-h-screen bg-slate-50 pb-10">
            <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

                    {/* Лого */}
                    <div className="flex items-center gap-2.5">
                        <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
                            <Wallet size={20} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold text-slate-800 tracking-tight">Finance<span className="text-indigo-600">Tracker</span></span>
                    </div>

                    {/* Навігація */}
                    <nav className="flex items-center gap-1 md:gap-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
                            <LayoutDashboard size={18} />
                            <span className="hidden md:block">Дашборд</span>
                        </NavLink>
                        <NavLink to="/settings" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
                            <Settings size={18} />
                            <span className="hidden md:block">Налаштування</span>
                        </NavLink>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 md:px-6 py-8">
                <Outlet />
            </main>
        </div>
    );
};