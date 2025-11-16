
import React from 'react';

interface SummaryCardProps {
    label: string;
    value: number;
    unit: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ label, value, unit }) => {
    return (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-base font-medium text-gray-500">{label}</p>
            <p className="text-4xl font-bold text-gray-900 mt-2">{value}</p>
            <p className="text-sm text-gray-400 mt-1">{unit}</p>
        </div>
    );
};

export default SummaryCard;
