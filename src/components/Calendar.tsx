import React, { useState } from 'react';

interface CalendarProps {
    selectedDate: Date | null;
    onDateSelect: (date: Date) => void;
    onClose: () => void;
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect, onClose }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [localSelectedDate, setLocalSelectedDate] = useState<Date | null>(selectedDate);

    const handleDateSelect = (date: Date) => {
        setLocalSelectedDate(date);
    };

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }

        // Add all days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    const goToPreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const isToday = (date: Date) => {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    const isSelected = (date: Date) => {
        return localSelectedDate && date.toDateString() === localSelectedDate.toDateString();
    };

    const formatMonthYear = (date: Date) => {
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    const isFutureDate = (date: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize to the start of the day for accurate comparison
        return date > today;
    };

    const days = getDaysInMonth(currentMonth);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div style={{ padding: '8px' }} className="bg-gray-900 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-700">
                {/* Header */}
                <div style={{ padding: '4px' }} className="border-b border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white">Start Date</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Month Navigation */}
                    <div className="flex items-center justify-between">
                        <button
                            onClick={goToPreviousMonth}
                            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h3 className="text-lg font-medium text-white">{formatMonthYear(currentMonth)}</h3>
                        <button
                            onClick={goToNextMonth}
                            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div style={{ marginTop: '4px' }}>
                    {/* Day Headers */}
                    <div className="grid grid-cols-7 gap-1 mb-4">
                        {dayNames.map((day) => (
                            <div key={day} className="text-center text-sm font-medium text-gray-400 py-2">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 gap-1">
                        {days.map((day, index) => (
                            <div key={index} className="aspect-square">
                                {day ? (
                                    <button
                                        onClick={() => handleDateSelect(day)}
                                        disabled={isFutureDate(day)}
                                        className={`w-full h-full rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center
                      ${isFutureDate(day)
                                                ? 'text-gray-600 cursor-not-allowed'
                                                : isSelected(day)
                                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                                    : isToday(day)
                                                        ? 'bg-gray-700 text-white border-2 border-gray-500'
                                                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                            }`}
                                    >
                                        {day.getDate()}
                                    </button>
                                ) : (
                                    <div className="w-full h-full" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div>
                    <div className="flex gap-4">
                        <button
                            style={{ padding: '8px' }}
                            onClick={() => {
                                if (localSelectedDate) {
                                    onDateSelect(localSelectedDate);
                                    onClose();
                                }
                            }}
                            disabled={!localSelectedDate}
                            className="flex-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-40"
                        >
                            Save Date
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}; 