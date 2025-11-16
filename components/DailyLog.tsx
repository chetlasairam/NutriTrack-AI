
import React from 'react';
import { FoodEntry } from '../types';

const foodLogData: FoodEntry[] = [
    { id: 1, name: 'Brown Rice', weight: 150, calories: 167 },
    { id: 2, name: 'Grilled Chicken Breast', weight: 100, calories: 165 },
    { id: 3, name: 'Apple', weight: 120, calories: 62 },
    { id: 4, name: 'Almonds', weight: 30, calories: 174 },
    { id: 5, name: 'Greek Yogurt', weight: 200, calories: 118 },
    { id: 6, name: 'Broccoli', weight: 150, calories: 51 },
];

const DailyLog: React.FC = () => {
    const totalCalories = foodLogData.reduce((sum, entry) => sum + entry.calories, 0);

    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Daily Calorie Log</h1>
            </header>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Food Item</th>
                                <th scope="col" className="px-6 py-3 text-right">Weight (g)</th>
                                <th scope="col" className="px-6 py-3 text-right">Calories (kcal)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foodLogData.map((entry) => (
                                <tr key={entry.id} className="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {entry.name}
                                    </th>
                                    <td className="px-6 py-4 text-right">{entry.weight}</td>
                                    <td className="px-6 py-4 text-right">{entry.calories}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="font-semibold text-gray-900 bg-gray-50">
                                <th scope="row" className="px-6 py-3 text-base">Total</th>
                                <td className="px-6 py-3"></td>
                                <td className="px-6 py-3 text-right text-base">{totalCalories} kcal</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DailyLog;
