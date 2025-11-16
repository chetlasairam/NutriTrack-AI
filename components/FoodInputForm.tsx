
import React from 'react';

const FoodInputForm: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto">
             <header className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900">Food Input Form</h1>
            </header>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <form>
                    <div className="mb-6">
                        <label htmlFor="food-name" className="block text-sm font-medium text-gray-700 mb-2">Food Name</label>
                        <input
                            type="text"
                            id="food-name"
                            placeholder="e.g., Brown Rice"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">Weight (grams)</label>
                        <input
                            type="number"
                            id="weight"
                            placeholder="e.g., 150"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="meal-type" className="block text-sm font-medium text-gray-700 mb-2">Meal Type</label>
                        <select
                            id="meal-type"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                        >
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Snack</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        onClick={(e) => e.preventDefault()}
                    >
                        Add Food
                    </button>
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                    The AI model will calculate calories based on food name and weight.
                </p>
            </div>
        </div>
    );
};

export default FoodInputForm;
