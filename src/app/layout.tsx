import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {
  LayoutDashboard,
  RefreshCw,
  ShieldAlert,
  Users,
  Upload,
  Building2
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GST Reconciliation Pro",
  description: "Advanced GST Reconciliation Tool for CAs & Corporate Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex">
            <div className="p-6 pb-2">
              <div className="flex items-center gap-3 font-bold text-white text-xl">
                <Building2 className="text-blue-500" />
                GST Recon Pro
              </div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Multi-GSTIN Edition
              </div>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                <LayoutDashboard size={20} />
                <span>Unified Dashboard</span>
              </Link>

              <Link href="/reconciliation" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                <RefreshCw size={20} />
                <span>Reconciliation Engine</span>
              </Link>

              <Link href="/itc" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                <ShieldAlert size={20} />
                <span>ITC Optimization</span>
              </Link>

              <Link href="/vendors" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                <Users size={20} />
                <span>Vendor Chasing</span>
              </Link>

              <Link href="/import" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors mt-6">
                <Upload size={20} />
                <span>Data Integrations</span>
              </Link>
            </nav>

            <div className="p-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  CA
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium text-white truncate">Super Admin</p>
                  <p className="text-xs text-slate-500 truncate">PAN India View</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Top Header */}
            <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10">
              <div className="md:hidden font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="text-blue-600" size={20}/>
                GST Recon Pro
              </div>
              <div className="hidden md:flex items-center text-sm font-medium text-slate-600">
                Active Context: <span className="ml-2 px-2 py-1 bg-blue-50 text-blue-700 rounded border border-blue-100">All India (15 GSTINs)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-500">FY 2024-25</span>
                <span className="text-sm text-slate-500">Q1</span>
              </div>
            </header>

            {/* Page Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
