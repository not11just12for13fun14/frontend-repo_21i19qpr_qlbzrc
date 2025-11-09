import HeaderNav from "./components/HeaderNav";
import KPICards from "./components/KPICards";
import QuickActions from "./components/QuickActions";
import ListsPanels from "./components/ListsPanels";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <HeaderNav />
      <main className="max-w-6xl mx-auto px-4 py-5 sm:py-8">
        <div className="flex items-end justify-between gap-3 mb-5 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">Dashboard</h2>
            <p className="text-sm text-gray-500">Multi-branch overview at a glance</p>
          </div>
          <div className="hidden sm:block text-xs text-gray-500">Optimized for mobile</div>
        </div>

        <div className="grid gap-4">
          <KPICards data={{ branches: 5, occupied: 78, cots: 160, complaints: 6 }} />
          <QuickActions />
          <ListsPanels />
        </div>
      </main>

      <footer className="text-center text-xs text-gray-500 py-6">
        © {new Date().getFullYear()} PG Manager. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
