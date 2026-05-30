import {
  ShieldAlert,
  Clock,
  Ban,
  CalendarRange
} from "lucide-react";

export default function ITCOptimization() {
  const agingInvoices = [
    { vendor: "Global Marketing Inc.", invDate: "2024-01-15", amount: "₹ 1,50,000", itc: "₹ 27,000", daysAged: 172, status: "Critical (<10 days left)" },
    { vendor: "BlueSky Office Furniture", invDate: "2024-02-01", amount: "₹ 85,000", itc: "₹ 15,300", daysAged: 155, status: "Warning" },
    { vendor: "Elite Travel Services", invDate: "2024-02-10", amount: "₹ 42,000", itc: "₹ 7,560", daysAged: 146, status: "Warning" },
  ];

  const blockedCredits = [
    { vendor: "Taj Hotels", category: "Food & Beverages", reason: "Section 17(5)(b)(i)", amount: "₹ 15,000", actionTaken: "Auto-Blocked" },
    { vendor: "Hyundai Motors", category: "Motor Vehicles", reason: "Section 17(5)(a)", amount: "₹ 2,45,000", actionTaken: "Flagged for Review" },
    { vendor: "Staff Welfare Assoc.", category: "Personal Consumption", reason: "Section 17(5)(g)", amount: "₹ 8,500", actionTaken: "Auto-Blocked" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Intelligent ITC Optimization</h1>
        <p className="text-slate-500 mt-1">Ensure compliance via 180-day tracker and automated 17(5) blocking.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 180-Day Tracker Module */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-slate-200 bg-amber-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="text-amber-600" size={24} />
              <div>
                <h2 className="text-lg font-bold text-slate-800">180-Day Reversal Tracker</h2>
                <p className="text-xs text-amber-700">Risk of ITC reversal with interest</p>
              </div>
            </div>
            <span className="bg-amber-200 text-amber-800 text-xs font-bold px-2 py-1 rounded">₹ 49,860 at risk</span>
          </div>

          <div className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Vendor</th>
                  <th className="px-4 py-3 font-medium">Aging</th>
                  <th className="px-4 py-3 font-medium">ITC Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {agingInvoices.map((inv, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-900">{inv.vendor}</p>
                      <p className="text-xs text-slate-500">Inv: {inv.invDate}</p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${inv.daysAged > 170 ? 'text-red-600' : 'text-amber-600'}`}>
                          {inv.daysAged} Days
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-900">{inv.itc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-100 bg-slate-50">
             <button className="w-full py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
              Notify Accounts Payable Team
             </button>
          </div>
        </div>

        {/* Section 17(5) Blocked Credits Module */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-slate-200 bg-red-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Ban className="text-red-600" size={24} />
              <div>
                <h2 className="text-lg font-bold text-slate-800">Section 17(5) Blocked Filter</h2>
                <p className="text-xs text-red-700">Auto-identified ineligible ITC</p>
              </div>
            </div>
            <span className="bg-red-200 text-red-800 text-xs font-bold px-2 py-1 rounded">₹ 2,68,500 blocked</span>
          </div>

          <div className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Vendor / Category</th>
                  <th className="px-4 py-3 font-medium">Reason</th>
                  <th className="px-4 py-3 font-medium">Tax Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {blockedCredits.map((credit, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-900">{credit.vendor}</p>
                      <p className="text-xs text-slate-500">{credit.category}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700">
                        {credit.reason}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-900">{credit.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-100 bg-slate-50">
             <button className="w-full py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
              Configure Blocking Rules
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
