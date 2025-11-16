
import React, { useState } from 'react';
import { View } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import FoodInputForm from './components/FoodInputForm';
import DailyLog from './components/DailyLog';
import Reports from './components/Reports';
import Profile from './components/Profile';

const App: React.FC = () => {
    const [view, setView] = useState<View>('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const renderView = () => {
        switch (view) {
            case 'dashboard':
                return <Dashboard />;
            case 'add_food':
                return <FoodInputForm />;
            case 'daily_log':
                return <DailyLog />;
            case 'reports':
                return <Reports />;
            case 'profile':
                return <Profile />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar currentView={view} setView={setView} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="md:hidden flex justify-between items-center bg-white p-4 border-b">
                    <h1 className="text-xl font-bold text-blue-600">NutriTrack AI</h1>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
                    {renderView()}
                </main>
            </div>
        </div>
    );
};

export default App;
