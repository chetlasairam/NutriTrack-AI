
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WeeklyReportData } from '../types';

const weeklyData: WeeklyReportData[] = [
  { day: 'Mon', calories: 1800 },
  { day: 'Tue', calories: 2000 },
  { day: 'Wed', calories: 1750 },
  { day: 'Thu', calories: 2100 },
  { day: 'Fri', calories: 1900 },
  { day: 'Sat', calories: 2250 },
  { day: 'Sun', calories: 2050 },
];

const Reports: React.FC = () => {
    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Weekly Calorie Report</h1>
            </header>
            <div className="bg-white p-6 rounded-lg shadow-md w-full h-96">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={weeklyData}
                        margin={{
                            top: 5,
                            right: 20,
                            left: -10,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" tick={{ fill: '#6B7280' }} />
                        <YAxis label={{ value: 'Total Calories', angle: -90, position: 'insideLeft', fill: '#374151' }} tick={{ fill: '#6B7280' }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '0.5rem',
                            }}
                            labelStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                        />
                        <Bar dataKey="calories" fill="#3B82F6" barSize={40} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Reports;
