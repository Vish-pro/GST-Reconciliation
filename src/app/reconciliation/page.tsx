import {
  CheckCircle2,
  HelpCircle,
  AlertCircle,
  XCircle,
  Settings2,
  Filter
} from "lucide-react";

const categories = [
  { name: "Fully Matched", count: 842, amount: "₹ 2.4 Cr", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50 border-green-200" },
  { name: "Partial Match", count: 56, amount: "₹ 12.5 L", icon: HelpCircle, color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
  { name: "Missing in Portal (GSTR-2B)", count: 84, amount: "₹ 4.2 L", icon: XCircle, color: "text-red-600", bg: "bg-red-50 border-red-200" },
  { name: "Missing in Books", count: 12, amount: "₹ 1.8 L", icon: AlertCircle, color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
];

const partialMatches = [
  {
    vendor: "TechCorp Solutions",
    portalInv: "INV-2024-001",
    booksInv: "INV2024001",
    dateDiff: "0 days",
    amountDiff: "₹ 0.50",
    reason: "Rounding / Prefix Mismatch"
  },
  {
    vendor: "Sharma Logistics",
    portalInv: "SL/542/24",
    booksInv: "SL/542/24",
    dateDiff: "2 days",
    amountDiff: "₹ 0.00",
    reason: "Date Variance (Within Tolerance)"
  },
  {
    vendor: "Apex Office Supplies",
    portalInv: "AOS-992",
    booksInv: "AOS992",
    dateDiff: "0 days",
    amountDiff: "₹ -5.00",
    reason: "Value Variance (Within Tolerance)"
  }
];

export default function ReconciliationEngine() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Advanced Reconciliation Engine</h1>
          <p className="text-slate-500 mt-1">GSTR-2B vs Purchase Register (PR) Intelligent Matching</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
            <Settings2 size={16} /> Tolerance Rules
          </button>
        </div>
      </div>

      {/* Match Buckets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className={`rounded-xl border p-5 ${cat.bg}`}>
            <div className="flex items-center gap-3 mb-3">
              <cat.icon className={cat.color} size={20} />
              <h3 className="font-semibold text-slate-900">{cat.name}</h3>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Invoices</p>
                <p className="text-xl font-bold text-slate-900">{cat.count}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500 uppercase tracking-wider">Tax Value</p>
                <p className="text-lg font-bold text-slate-900">{cat.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Area: Partial Matches Resolution */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Review Partial Matches</h2>
            <p className="text-sm text-slate-500">Intelligent matching identified these as highly likely pairs.</p>
          </div>
          <button className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg text-sm font-medium hover:bg-amber-200 transition-colors">
            Auto-Approve All (Within Tolerance)
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
              <tr>
                <th className="px-6 py-3 font-medium">Vendor</th>
                <th className="px-6 py-3 font-medium">Portal Invoice (2B)</th>
                <th className="px-6 py-3 font-medium">Books Invoice (PR)</th>
                <th className="px-6 py-3 font-medium">Variance Detected</th>
                <th className="px-6 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {partialMatches.map((match, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{match.vendor}</td>
                  <td className="px-6 py-4 text-slate-600 font-mono text-xs">{match.portalInv}</td>
                  <td className="px-6 py-4 text-slate-600 font-mono text-xs">{match.booksInv}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                      {match.reason}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="px-3 py-1.5 bg-green-50 text-green-700 hover:bg-green-100 rounded text-xs font-medium transition-colors">
                        Accept Match
                      </button>
                      <button className="px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 rounded text-xs font-medium transition-colors">
                        Reject
                      </button>
                    </div>
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
