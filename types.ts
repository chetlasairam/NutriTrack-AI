
export type View = 'dashboard' | 'add_food' | 'daily_log' | 'reports' | 'profile';

export interface SummaryData {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
}

export interface FoodEntry {
    id: number;
    name: string;
    weight: number;
    calories: number;
}

export interface WeeklyReportData {
    day: string;
    calories: number;
}
