import {
  MessageSquare,
  Mail,
  Search,
  Filter
} from "lucide-react";

export default function VendorChasing() {
  const vendors = [
    { id: 1, name: "Reliance Retail Ltd", missing: 12, amount: "₹ 45,000", score: "A", contact: "9876543210", email: "finance@reliance.com", lastContact: "2 days ago" },
    { id: 2, name: "V-Trans Logistics", missing: 34, amount: "₹ 1,20,500", score: "C", contact: "9988776655", email: "accounts@vtrans.in", lastContact: "Never" },
    { id: 3, name: "National Suppliers", missing: 8, amount: "₹ 12,400", score: "B", contact: "9123456780", email: "billing@national.in", lastContact: "1 week ago" },
    { id: 4, name: "OfficeMart Stationers", missing: 4, amount: "₹ 2,100", score: "A", contact: "9000111222", email: "sales@officemart.com", lastContact: "Yesterday" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Automated Vendor Chasing</h1>
          <p className="text-slate-500 mt-1">Select non-compliant vendors to auto-dispatch detailed missing invoice reports.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
            <MessageSquare size={16} /> Send WhatsApp to All
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            <Mail size={16} /> Send Email to All
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search vendors..."
              className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-slate-600 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
            <Filter size={16} /> Filter by Score
          </button>
        </div>

        {/* Vendor Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white border-b border-slate-200 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-medium w-10">
                  <input type="checkbox" className="rounded border-slate-300" />
                </th>
                <th className="px-6 py-4 font-medium">Vendor Details</th>
                <th className="px-6 py-4 font-medium">Missing Invoices</th>
                <th className="px-6 py-4 font-medium">Blocked Tax Value</th>
                <th className="px-6 py-4 font-medium">Compliance Score</th>
                <th className="px-6 py-4 font-medium">Last Chased</th>
                <th className="px-6 py-4 font-medium text-right">Quick Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-900">{vendor.name}</p>
                    <p className="text-xs text-slate-500">{vendor.contact} • {vendor.email}</p>
                  </td>
                  <td className="px-6 py-4 text-red-600 font-bold">{vendor.missing}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{vendor.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold
                      ${vendor.score === 'A' ? 'bg-green-100 text-green-800' :
                        vendor.score === 'B' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'}`}>
                      {vendor.score} Rating
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-xs">{vendor.lastContact}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                       <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors border border-transparent hover:border-green-200" title="Send WhatsApp">
                        <MessageSquare size={16} />
                      </button>
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-200" title="Send Email">
                        <Mail size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination/Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-sm text-slate-500">
          <span>Showing 1 to 4 of 4 vendors</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-white disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-white disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
