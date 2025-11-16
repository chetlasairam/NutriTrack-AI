
import React from 'react';
import { SummaryData } from '../types';
import SummaryCard from './SummaryCard';

const dummySummaryData: SummaryData = {
    calories: 1820,
    protein: 150,
    fat: 50,
    carbs: 220,
};

const Dashboard: React.FC = () => {
    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 mt-1">Today's nutritional summary.</p>
            </header>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Today's Summary</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SummaryCard label="Calories" value={dummySummaryData.calories} unit="kcal" />
                    <SummaryCard label="Protein" value={dummySummaryData.protein} unit="g" />
                    <SummaryCard label="Fat" value={dummySummaryData.fat} unit="g" />
                    <SummaryCard label="Carbohydrates" value={dummySummaryData.carbs} unit="g" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
