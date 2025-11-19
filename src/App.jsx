import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Settings } from './pages/Settings';

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="*" element={<div className="p-10 text-center">Сторінку не знайдено</div>} />
                    </Route>
                </Routes>
            </Router>
        </GlobalProvider>
    );
}

export default App;