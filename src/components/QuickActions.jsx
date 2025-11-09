import { Plus, FileDown, FileSpreadsheet, CreditCard } from "lucide-react";

const ActionButton = ({ icon: Icon, label, onClick, variant = "default" }) => {
  const base =
    "flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-medium transition-colors";
  const styles = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline:
      "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100",
  };
  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
};

export default function QuickActions() {
  return (
    <section className="grid grid-cols-2 gap-3">
      <ActionButton icon={Plus} label="Add Branch" onClick={() => alert("Add Branch")}/>
      <ActionButton icon={CreditCard} label="Generate Bill" onClick={() => alert("Generate Bill")} />
      <ActionButton icon={FileDown} label="Download PDF" onClick={() => alert("Download PDF") } variant="outline"/>
      <ActionButton icon={FileSpreadsheet} label="Export Excel" onClick={() => alert("Export Excel") } variant="outline"/>
    </section>
  );
}
