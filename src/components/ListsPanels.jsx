import { ChevronRight, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";

const Panel = ({ title, children, action }) => (
  <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
      <h3 className="text-sm font-semibold">{title}</h3>
      {action}
    </div>
    <div className="p-4">{children}</div>
  </div>
);

const ComplaintItem = ({ name, issue, status }) => (
  <div className="flex items-center justify-between py-2.5">
    <div>
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xs text-gray-500">{issue}</div>
    </div>
    <div className="flex items-center gap-2 text-xs">
      {status === "Resolved" ? (
        <span className="inline-flex items-center gap-1 text-green-600">
          <CheckCircle2 className="h-4 w-4" /> Resolved
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-amber-600">
          <Clock className="h-4 w-4" /> Pending
        </span>
      )}
      <ChevronRight className="h-4 w-4 text-gray-400" />
    </div>
  </div>
);

const BranchItem = ({ name, address, phone }) => (
  <div className="py-2.5">
    <div className="text-sm font-medium">{name}</div>
    <div className="text-xs text-gray-500 flex items-center gap-2">
      <MapPin className="h-3.5 w-3.5" /> {address}
    </div>
    <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
      <Phone className="h-3.5 w-3.5" /> {phone}
    </div>
  </div>
);

export default function ListsPanels() {
  const complaints = [
    { name: "Aarav S.", issue: "Water leakage in bathroom", status: "Pending" },
    { name: "Meera P.", issue: "Fan not working in Room 204", status: "Resolved" },
    { name: "Rahul K.", issue: "WiFi slow on 2nd floor", status: "Pending" },
  ];

  const branches = [
    { name: "City Center (Boys)", address: "MG Road, Pune", phone: "+91 98765 43210" },
    { name: "Green Park (Girls)", address: "Sector 15, Gurgaon", phone: "+91 91234 56780" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Panel title="Recent Complaints" action={<button className="text-xs text-indigo-600">View all</button>}>
        <div className="divide-y divide-gray-100">
          {complaints.map((c, idx) => (
            <ComplaintItem key={idx} {...c} />
          ))}
        </div>
      </Panel>

      <Panel title="Branches" action={<button className="text-xs text-indigo-600">Manage</button>}>
        <div className="divide-y divide-gray-100">
          {branches.map((b, idx) => (
            <BranchItem key={idx} {...b} />
          ))}
        </div>
      </Panel>
    </div>
  );
}
