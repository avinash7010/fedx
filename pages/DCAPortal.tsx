
import React, { useState } from 'react';

const DCAPortal: React.FC = () => {
  const [activeCase, setActiveCase] = useState<any>(null);
  const [logs, setLogs] = useState([
    { type: 'Call', note: 'Voicemail for Anbarasan S (Saravana Stores)', time: '2h ago' },
    { type: 'Email', note: 'Sent payment plan offer to Muthuvel K', time: '5h ago' }
  ]);
  const [note, setNote] = useState('');

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;
    setLogs([{ type: 'Update', note, time: 'Just now' }, ...logs]);
    setNote('');
  };

  const dcaCases = [
    { id: '#TN-001', customer: 'Anbarasan S', val: '₹4,50,000', sla: '02h 15m', status: 'In Process', color: 'blue' },
    { id: '#TN-002', customer: 'Muthuvel K', val: '₹12,00,000', sla: '04h 00m', status: 'Pending', color: 'amber' },
    { id: '#TN-003', customer: 'Meenakshi S', val: '₹8,95,000', sla: '00h 45m', status: 'Critical', color: 'red' },
  ];

  return (
    <div className="min-h-full bg-[#f8fafc] dark:bg-[#0f172a] p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 animate-in fade-in duration-700">
      
      {/* Workbench Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[9px] sm:text-[10px] font-black uppercase tracking-widest border border-primary/20">TN Agency Link</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">Chennai Recovery Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-none">Partner Workbench (TN)</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">Managing active state recovery tasks.</p>
        </div>

        <div className="h-12 sm:h-14 px-4 sm:px-6 bg-white dark:bg-slate-800 border border-white dark:border-slate-800 rounded-2xl flex items-center gap-3 shadow-sm w-full lg:w-auto justify-center">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-widest">State Relay Active</span>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {[
          { label: 'TN Inventory', value: '845', icon: 'inventory_2', color: 'blue' },
          { label: 'SLA Breach (TN)', value: '12', icon: 'alarm_on', color: 'red' },
          { label: 'State Yield', value: '₹1.2Cr', icon: 'token', color: 'emerald' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800/40 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 border border-white dark:border-slate-800 shadow-sm group hover:shadow-xl transition-all">
             <div className="flex justify-between items-center mb-4 sm:mb-6">
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-${stat.color}-500/10 flex items-center justify-center text-${stat.color}-600 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-xl sm:text-2xl icon-fill">{stat.icon}</span>
                </div>
                <span className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest">CRS-TN902</span>
             </div>
             <p className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
             <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tighter tabular-nums">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6 sm:gap-8">
        {/* Task Queue List */}
        <div className={`col-span-12 ${activeCase ? 'xl:col-span-7 xl:block hidden' : 'xl:col-span-8'} bg-white dark:bg-slate-800/40 rounded-[32px] sm:rounded-[40px] border border-white dark:border-slate-800 shadow-sm overflow-hidden`}>
          <div className="p-6 sm:p-8 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center bg-slate-50/30 dark:bg-slate-900/20">
            <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">Prioritized TN Dispatch</h2>
            <button className="h-9 sm:h-10 px-4 sm:px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-sm">Filters</button>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
                  <th className="px-6 sm:px-8 py-4 sm:py-5">ID</th>
                  <th className="px-6 sm:px-8 py-4 sm:py-5">Counterparty (TN)</th>
                  <th className="px-6 sm:px-8 py-4 sm:py-5">Value (INR)</th>
                  <th className="px-6 sm:px-8 py-4 sm:py-5 text-right">Relay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                {dcaCases.map((row, idx) => (
                  <tr key={idx} onClick={() => setActiveCase(row)} className={`transition-all cursor-pointer group ${activeCase?.id === row.id ? 'bg-primary/5' : 'hover:bg-slate-50/50 dark:hover:bg-slate-900/20'}`}>
                    <td className="px-6 sm:px-8 py-6 sm:py-7 text-[10px] sm:text-[11px] font-black text-primary tracking-widest">{row.id}</td>
                    <td className="px-6 sm:px-8 py-6 sm:py-7">
                      <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">{row.customer}</p>
                    </td>
                    <td className="px-6 sm:px-8 py-6 sm:py-7 text-xs font-black text-slate-900 dark:text-white tabular-nums">{row.val}</td>
                    <td className="px-6 sm:px-8 py-6 sm:py-7 text-right">
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-primary group-hover:scale-125 transition-all">arrow_forward</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dispatch Sidebar / Mobile Overlay */}
        <div className={`col-span-12 ${activeCase ? 'xl:col-span-5' : 'xl:col-span-4'} flex flex-col gap-8`}>
          {activeCase ? (
            <div className="bg-white dark:bg-slate-800/40 border border-white dark:border-slate-800 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl animate-in slide-in-from-right-4 duration-500">
              <div className="flex justify-between items-start mb-8 sm:mb-10">
                <div className="space-y-1">
                  <p className="text-[9px] sm:text-[10px] font-black text-primary uppercase tracking-[0.3em]">Vector Profile</p>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">{activeCase.customer}</h3>
                  <p className="text-[9px] sm:text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-2">{activeCase.id}</p>
                </div>
                <button onClick={() => setActiveCase(null)} className="h-10 w-10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">
                  <span className="material-symbols-outlined text-slate-400">close</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 sm:mb-10">
                <div className="bg-slate-50/50 dark:bg-slate-900/50 p-4 sm:p-6 rounded-[20px] sm:rounded-[24px] border border-white/5">
                  <p className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">Principal</p>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tabular-nums">{activeCase.val}</p>
                </div>
                <div className="bg-slate-50/50 dark:bg-slate-900/50 p-4 sm:p-6 rounded-[20px] sm:rounded-[24px] border border-white/5">
                  <p className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">Priority</p>
                  <p className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-widest">{activeCase.status}</p>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <h4 className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">TN Transaction Log</h4>
                  <div className="max-h-48 sm:max-h-60 overflow-y-auto space-y-3 sm:space-y-4 pr-1 scrollbar-hide">
                    {logs.map((l, i) => (
                      <div key={i} className="bg-slate-50/30 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-start gap-3 sm:gap-4">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700 shrink-0">
                           <span className="material-symbols-outlined text-base sm:text-lg text-slate-400">history</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] sm:text-xs font-black text-slate-900 dark:text-white leading-tight truncate">{l.note}</p>
                          <p className="text-[8px] sm:text-[9px] text-slate-400 uppercase font-black tracking-widest mt-1">{l.type} • {l.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleAddLog} className="space-y-4">
                  <textarea 
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="TN Agent Update..." 
                    className="w-full bg-slate-50/50 dark:bg-slate-900/50 border-none rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:ring-4 focus:ring-primary/10 min-h-[100px] sm:min-h-[140px] font-bold outline-none"
                  />
                  <button type="submit" className="w-full py-3 sm:py-4 bg-primary text-white rounded-[16px] sm:rounded-[20px] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 shadow-xl transition-all">Post State Update</button>
                </form>
              </div>
            </div>
          ) : (
            <div className="h-full bg-slate-50/50 dark:bg-slate-900/20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[32px] sm:rounded-[40px] flex flex-col items-center justify-center p-8 sm:p-12 text-center min-h-[300px]">
              <div className="h-16 w-16 sm:h-20 sm:w-20 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-slate-300">target</span>
              </div>
              <p className="text-[9px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] leading-relaxed">Select TN Vector For Direct Intervention</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DCAPortal;
