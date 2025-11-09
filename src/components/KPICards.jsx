import { Building2, BedDouble, Users, AlertCircle } from "lucide-react";

const KPI = ({ icon: Icon, label, value, sub }) => (
  <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
    <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
      <Icon className="h-5 w-5" />
    </div>
    <div className="flex-1">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
      {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
    </div>
  </div>
);

export default function KPICards({ data }) {
  const { branches = 3, occupied = 86, cots = 120, complaints = 4 } = data || {};
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
      <KPI icon={Building2} label="Branches" value={branches} sub="Boys / Girls / Mixed" />
      <KPI icon={BedDouble} label="Cots" value={cots} sub={`${occupied}% occupied`} />
      <KPI icon={Users} label="Students" value={Math.round((occupied/100)*cots)} sub="Active" />
      <KPI icon={AlertCircle} label="Complaints" value={complaints} sub="Pending" />
    </section>
  );
}
