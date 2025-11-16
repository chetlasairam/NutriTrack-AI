
import React, { useState, useCallback } from 'react';

const BMICalculator: React.FC = () => {
    const [height, setHeight] = useState('170');
    const [weight, setWeight] = useState('75');
    const [bmi, setBmi] = useState<string>('26.0');
    const [status, setStatus] = useState<string>('Overweight');

    const calculateBmi = useCallback(() => {
        const h = parseFloat(height);
        const w = parseFloat(weight);
        if (h > 0 && w > 0) {
            const heightInMeters = h / 100;
            const bmiValue = w / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(1));
            if (bmiValue < 18.5) setStatus('Underweight');
            else if (bmiValue < 25) setStatus('Normal weight');
            else if (bmiValue < 30) setStatus('Overweight');
            else setStatus('Obesity');
        }
    }, [height, weight]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">BMI Calculator</h2>
            <div className="space-y-4">
                <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                    <input type="number" id="height" value={height} onChange={e => setHeight(e.target.value)} placeholder="e.g., 170" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Current Weight (kg)</label>
                    <input type="number" id="weight" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g., 75" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <button onClick={calculateBmi} className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Calculate BMI
                </button>
                <div className="pt-4 text-center">
                    <p className="text-lg">Your BMI: <span className="font-bold text-blue-600">{bmi}</span></p>
                    <p className="text-lg">Status: <span className="font-bold text-blue-600">{status}</span></p>
                </div>
            </div>
        </div>
    );
};

const WeightGoalPlanner: React.FC = () => {
    return (
         <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Weight Goal & Recommendation</h2>
            <div className="space-y-4">
                <div>
                    <label htmlFor="target-weight" className="block text-sm font-medium text-gray-700 mb-1">Target Weight (kg)</label>
                    <input type="number" id="target-weight" placeholder="e.g., 68" defaultValue="68" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm">
                    <p className="mb-2"><span className="font-semibold">Recommended Daily Calories:</span> 1800 kcal</p>
                    <p><span className="font-semibold">Estimated Time to Goal:</span> 12 weeks</p>
                </div>
            </div>
        </div>
    );
};


const Profile: React.FC = () => {
    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Profile & Goals</h1>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <BMICalculator />
                <WeightGoalPlanner />
            </div>
        </div>
    );
};

export default Profile;
