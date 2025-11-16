
import React from 'react';
import { View } from '../types';
import { DashboardIcon } from './icons/DashboardIcon';
import { AddFoodIcon } from './icons/AddFoodIcon';
import { LogIcon } from './icons/LogIcon';
import { ReportsIcon } from './icons/ReportsIcon';
import { ProfileIcon } from './icons/ProfileIcon';

interface SidebarProps {
    currentView: View;
    setView: (view: View) => void;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
}

interface NavItemProps {
    view: View;
    label: string;
    icon: React.ReactNode;
    currentView: View;
    onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ view, label, icon, currentView, onClick }) => (
    <li className="mb-2">
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            className={`flex items-center p-3 text-base rounded-lg transition-colors duration-200 ${
                currentView === view
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-200'
            }`}
        >
            {icon}
            <span className="ml-3 font-medium">{label}</span>
        </a>
    </li>
);

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, isSidebarOpen, setIsSidebarOpen }) => {
    
    const handleSetView = (view: View) => {
        setView(view);
        setIsSidebarOpen(false); // Close sidebar on mobile after selection
    };
    
    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={() => setIsSidebarOpen(false)}></div>
            <aside className={`absolute md:relative z-40 flex-shrink-0 w-64 bg-white border-r transform md:transform-none transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="h-20 flex items-center justify-center px-6 border-b">
                        <h1 className="text-2xl font-bold text-blue-600">NutriTrack AI</h1>
                    </div>
                    <nav className="flex-1 px-4 py-6">
                        <ul>
                            <NavItem view="dashboard" label="Dashboard" icon={<DashboardIcon className="w-6 h-6" />} currentView={currentView} onClick={() => handleSetView('dashboard')} />
                            <NavItem view="add_food" label="Add Food" icon={<AddFoodIcon className="w-6 h-6" />} currentView={currentView} onClick={() => handleSetView('add_food')} />
                            <NavItem view="daily_log" label="Daily Log" icon={<LogIcon className="w-6 h-6" />} currentView={currentView} onClick={() => handleSetView('daily_log')} />
                            <NavItem view="reports" label="Reports" icon={<ReportsIcon className="w-6 h-6" />} currentView={currentView} onClick={() => handleSetView('reports')} />
                            <NavItem view="profile" label="Profile" icon={<ProfileIcon className="w-6 h-6" />} currentView={currentView} onClick={() => handleSetView('profile')} />
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
