import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  FileWarning,
  TrendingUp,
  MapPin
} from "lucide-react";

export default function Dashboard() {
  const summaryCards = [
    {
      title: "Total Eligible ITC",
      value: "₹ 4.2 Cr",
      subtitle: "+12% from last month",
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      title: "Pending Mismatches",
      value: "142",
      subtitle: "Valued at ₹ 8.4 L",
      icon: AlertTriangle,
      color: "text-amber-600",
      bg: "bg-amber-100"
    },
    {
      title: "Unfiled Returns (Vendors)",
      value: "28",
      subtitle: "Action required immediately",
      icon: FileWarning,
      color: "text-red-600",
      bg: "bg-red-100"
    },
    {
      title: "Overall Health Score",
      value: "92/100",
      subtitle: "Across 15 GSTINs",
      icon: Activity,
      color: "text-blue-600",
      bg: "bg-blue-100"
    }
  ];

  const branchData = [
    { state: "Maharashtra", gstin: "27AADCB2230M1Z2", health: 96, mismatches: 12, itc: "₹ 1.2 Cr", status: "Healthy" as const },
    { state: "Karnataka", gstin: "29AADCB2230M1Z4", health: 88, mismatches: 45, itc: "₹ 85 L", status: "Warning" as const },
    { state: "Delhi", gstin: "07AADCB2230M1Z8", health: 94, mismatches: 18, itc: "₹ 92 L", status: "Healthy" as const },
    { state: "Tamil Nadu", gstin: "33AADCB2230M1Z6", health: 72, mismatches: 67, itc: "₹ 45 L", status: "Critical" as const },
  ];

  const statusConfig = {
    Healthy: {
      className: "bg-green-50 text-green-700 border border-green-200",
      Icon: CheckCircle2
    },
    Warning: {
      className: "bg-amber-50 text-amber-700 border border-amber-200",
      Icon: AlertTriangle
    },
    Critical: {
      className: "bg-red-50 text-red-700 border border-red-200",
      Icon: FileWarning
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Unified Multi-GSTIN Dashboard</h1>
          <p className="text-slate-500 mt-1">Real-time health overview across all PAN-India branches.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Download Consolidated Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">{card.title}</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{card.value}</h3>
              </div>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${card.bg}`}>
                <card.icon className={card.color} size={20} />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">{card.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Branch Breakdown */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h2 className="text-lg font-bold text-slate-800">State-wise Branch Performance</h2>
          <span className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">View All 15 Branches</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white border-b border-slate-200 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-medium">Branch / State</th>
                <th className="px-6 py-4 font-medium">GSTIN</th>
                <th className="px-6 py-4 font-medium">Health Score</th>
                <th className="px-6 py-4 font-medium">Pending Mismatches</th>
                <th className="px-6 py-4 font-medium">Available ITC</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {branchData.map((branch, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-slate-400" />
                      <span className="font-medium text-slate-900">{branch.state}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-mono text-xs">{branch.gstin}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${branch.health > 90 ? 'bg-green-500' : branch.health > 80 ? 'bg-amber-500' : 'bg-red-500'}`}
                          style={{ width: `${branch.health}%` }}
                        />
                      </div>
                      <span className="font-medium text-slate-700">{branch.health}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">{branch.mismatches} invoices</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{branch.itc}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig[branch.status].className}`}>
                      {(() => {
                        const Icon = statusConfig[branch.status].Icon;
                        return <Icon size={12} />;
                      })()}
                      {branch.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
