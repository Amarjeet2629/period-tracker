import { useState } from "react";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function Home() {
  const [cycleDay] = useState(14);
  const [cycleLength] = useState(28);

  const symptoms = [
    { name: 'Cramps', severity: 'mild', icon: '🩸' },
    { name: 'Fatigue', severity: 'moderate', icon: '😴' },
    { name: 'Mood Swings', severity: 'mild', icon: '😔' },
  ];

  const healthMetrics = [
    { name: 'Sleep', value: '7.5h', trend: '+0.5h', color: 'bg-blue-500' },
    { name: 'Water', value: '2.1L', trend: '+0.3L', color: 'bg-cyan-500' },
    { name: 'Exercise', value: '30min', trend: '-10min', color: 'bg-green-500' },
  ];

  const cyclePhases = [
    { name: 'Menstrual', days: '1-5', color: 'bg-red-100 border-red-300' },
    { name: 'Follicular', days: '6-14', color: 'bg-blue-100 border-blue-300' },
    { name: 'Ovulation', days: '15-17', color: 'bg-purple-100 border-purple-300' },
    { name: 'Luteal', days: '18-28', color: 'bg-pink-100 border-pink-300' },
  ];

  return (
    <div className={`${geist.variable} min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900`}>
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🌸</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Period Tracker</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Cycle Day {cycleDay}</p>
              </div>
            </div>
            <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-300">⚙️</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Cycle Progress Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Cycle Progress</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">{cycleDay}/{cycleLength} days</span>
          </div>
          
          {/* Progress Circle */}
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200 dark:text-gray-700"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${(cycleDay / cycleLength) * 339.292} 339.292`}
                  className="text-pink-500 transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{cycleDay}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase Indicator */}
          <div className="grid grid-cols-4 gap-2">
            {cyclePhases.map((phase) => (
              <div
                key={phase.name}
                className={`text-center p-2 rounded-lg border-2 ${
                  cycleDay >= parseInt(phase.days.split('-')[0]) && cycleDay <= parseInt(phase.days.split('-')[1])
                    ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">{phase.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{phase.days}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Today&apos;s Health</h2>
          <div className="space-y-3">
            {healthMetrics.map((metric) => (
              <div key={metric.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 ${metric.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-sm">📊</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{metric.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900 dark:text-white">{metric.value}</div>
                  <div className={`text-xs ${metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Symptoms Tracker */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Symptoms</h2>
          <div className="space-y-3">
            {symptoms.map((symptom) => (
              <div key={symptom.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{symptom.icon}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{symptom.name}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  symptom.severity === 'mild' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
                  symptom.severity === 'moderate' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300' :
                  'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                }`}>
                  {symptom.severity}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-gray-500 dark:text-gray-400 hover:border-pink-300 hover:text-pink-500 transition-colors">
            + Add Symptom
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
              Log Period
            </button>
            <button className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-cyan-700 transition-all">
              Track Symptoms
            </button>
            <button className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all">
              Health Tips
            </button>
            <button className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-700 transition-all">
              Insights
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex justify-around">
            <button className="flex flex-col items-center p-2 text-pink-500">
              <span className="text-xl">🏠</span>
              <span className="text-xs mt-1">Home</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover:text-pink-500">
              <span className="text-xl">📊</span>
              <span className="text-xs mt-1">Analytics</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover:text-pink-500">
              <span className="text-xl">📝</span>
              <span className="text-xs mt-1">Log</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover:text-pink-500">
              <span className="text-xl">👤</span>
              <span className="text-xs mt-1">Profile</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
