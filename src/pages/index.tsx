import { Geist } from "next/font/google";
import { Header } from "@/components/Header";

import { Content as MainContent } from "@/components/Content";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export default function Home() {

  return (
    <div className={`${geist.variable} min-h-screen`}>
      <Header />
      <MainContent />

      {/* Bottom Navigation */}
      <nav style={{ padding: '10px', paddingBottom: '40px' }} className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 z-50">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex justify-around">
            <button className="flex flex-col items-center p-2 text-indigo-400">
              <span className="text-xl">🏠</span>
              <span className="text-xs mt-1 text-white/70">Home</span>
            </button>
            <button className="flex flex-col items-center p-2 text-white/50 hover:text-indigo-400">
              <span className="text-xl">📊</span>
              <span className="text-xs mt-1 text-white/50">Analytics</span>
            </button>
            <button className="flex flex-col items-center p-2 text-white/50 hover:text-indigo-400">
              <span className="text-xl">📝</span>
              <span className="text-xs mt-1 text-white/50">Log</span>
            </button>
            <button className="flex flex-col items-center p-2 text-white/50 hover:text-indigo-400">
              <span className="text-xl">👤</span>
              <span className="text-xs mt-1 text-white/50">Profile</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
