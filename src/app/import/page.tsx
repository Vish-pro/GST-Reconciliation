import {
  UploadCloud,
  FileSpreadsheet,
  Database,
  Link as LinkIcon,
  CheckCircle2
} from "lucide-react";

export default function DataImport() {
  const integrations = [
    { name: "TallyPrime", status: "Connected", icon: Database, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Zoho Books", status: "Connect", icon: LinkIcon, color: "text-slate-600", bg: "bg-slate-50" },
    { name: "SAP ERP", status: "Connect", icon: LinkIcon, color: "text-slate-600", bg: "bg-slate-50" },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Seamless Integrations & Import</h1>
        <p className="text-slate-500 mt-1">Connect ERPs directly or use our smart drag-and-drop mapping tool.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Direct ERP Connectors */}
        <div className="col-span-1 space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">Direct ERP Sync</h2>

          <div className="space-y-3">
            {integrations.map((erp, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded flex items-center justify-center ${erp.bg}`}>
                    <erp.icon className={erp.color} size={20} />
                  </div>
                  <span className="font-medium text-slate-900">{erp.name}</span>
                </div>
                {erp.status === 'Connected' ? (
                  <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                    <CheckCircle2 size={12} /> Syncing
                  </span>
                ) : (
                  <button className="text-xs font-medium text-blue-600 hover:underline">
                    Connect
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-900 text-white rounded-xl mt-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Database size={64} />
            </div>
            <h3 className="font-bold mb-2">GSTN API Sync</h3>
            <p className="text-sm text-slate-300 mb-4">Bulk fetch 2B & 3B directly via secure GSP APIs without portal login.</p>
            <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm font-medium transition-colors">
              Fetch Latest Portal Data
            </button>
          </div>
        </div>

        {/* Drag and Drop Upload Area */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Smart Excel / CSV Import</h2>

          <div className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-colors bg-slate-50 cursor-pointer min-h-[400px]">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <UploadCloud className="text-blue-600" size={40} />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-2">Drag & drop your unstructured dump here</h3>
            <p className="text-slate-500 max-w-md mb-8">
              No need to format your Excel files! Our AI auto-maps your Purchase Register columns (Invoice #, Date, GSTIN, Tax Value) instantly.
            </p>

            <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
              <FileSpreadsheet size={20} />
              Browse Files to Upload
            </button>
            <p className="text-xs text-slate-400 mt-4">Supports .xlsx, .csv, .xls up to 50MB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
