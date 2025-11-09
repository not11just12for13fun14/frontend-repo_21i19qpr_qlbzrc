import { Settings, User } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">
            PG
          </div>
          <div>
            <h1 className="text-base font-semibold leading-tight">PG Manager</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Mobile-first admin dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 active:bg-gray-100"
            aria-label="Settings"
          >
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Settings</span>
          </button>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white grid place-items-center">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
