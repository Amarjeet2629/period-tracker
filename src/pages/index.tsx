import { useState } from "react";
import { Geist } from "next/font/google";
import { Header } from "@/components/Header";
import { CycleProgress } from "@/components/CycleProgress";
import { HealthMetric } from "@/components/HealthMetric";
import { Symptoms } from "@/components/Symptoms";
import { QuickActions } from "@/components/QuickActions";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function Home() {
  const [cycleDay] = useState(14);
  const [cycleLength] = useState(28);

  return (
    <div className={`${geist.variable} min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900`}>
      <Header cycleDay={cycleDay} />
      <main className="max-w-md mx-auto space-y-6">
        <CycleProgress cycleDay={cycleDay} cycleLength={cycleLength} />
        <HealthMetric />
        <Symptoms />
        <QuickActions />
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
