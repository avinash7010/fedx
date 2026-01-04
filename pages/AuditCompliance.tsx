
import React, { useState, useMemo } from 'react';

const AuditCompliance: React.FC = () => {
  const [userFilter, setUserFilter] = useState('All Users');
  const [actionFilter, setActionFilter] = useState('All Actions');
  const [dateQuery, setDateQuery] = useState('');

  const initialLogs = useMemo(() => [
    { time: 'Oct 24, 14:30', action: 'Update TN Case Status', user: 'Anbarasan S', status: 'Success' },
    { time: 'Oct 24, 13:15', action: 'Export Chennai Data', user: 'Meenakshi S', status: 'Success' },
    { time: 'Oct 24, 11:45', action: 'Delete TN Agent', user: 'System-TN', status: 'Failed' },
    { time: 'Oct 23, 09:00', action: 'TN-Auth Login', user: 'Anbarasan S', status: 'Success' },
    { time: 'Oct 23, 10:20', action: 'Update Madurai Vector', user: 'System-TN', status: 'Success' },
    { time: 'Oct 22, 16:45', action: 'Salem Resource Delete', user: 'Vijayalakshmi S', status: 'Success' },
  ], []);

  const filteredLogs = useMemo(() => {
    return initialLogs.filter(log => {
      const matchesUser = userFilter === 'All Users' || log.user === userFilter;
      const matchesAction = actionFilter === 'All Actions' || log.action === actionFilter;
      const matchesDate = !dateQuery || log.time.toLowerCase().includes(dateQuery.toLowerCase());
      
      return matchesUser && matchesAction && matchesDate;
    });
  }, [initialLogs, userFilter, actionFilter, dateQuery]);

  const handleReset = () => {
    setUserFilter('All Users');
    setActionFilter('All Actions');
    setDateQuery('');
  };

  return (
    <div className="min-h-full bg-[#f8fafc] dark:bg-[#0f172a] p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 animate-in fade-in duration-700">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">TN Audit & Compliance</h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">Monitoring state-wide system integrity.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-sm">
          <span className="material-symbols-outlined text-[18px]">download</span> TN Export
        </button>
      </div>

      {/* Filter Grid - Stacked on Mobile, Multi-col on Tablet+ */}
      <div className="bg-white dark:bg-slate-800/40 rounded-[24px] sm:rounded-[32px] border border-white dark:border-slate-800 p-6 sm:p-8 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-end">
        <div className="flex flex-col gap-2">
          <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">TN Quick Search</label>
          <input 
            value={dateQuery}
            onChange={(e) => setDateQuery(e.target.value)}
            className="w-full pl-4 py-2.5 rounded-xl border border-slate-100 dark:border-slate-700 text-xs dark:bg-slate-900 outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-900 dark:text-white" 
            placeholder="e.g. Chennai" 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">TN Performed By</label>
          <select 
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
            className="w-full py-2.5 rounded-xl border border-slate-100 dark:border-slate-700 text-xs dark:bg-slate-900 outline-none focus:ring-2 focus:ring-primary/20 font-black uppercase tracking-wider cursor-pointer text-slate-900 dark:text-white"
          >
            <option value="All Users">All Users</option>
            <option value="System-TN">System-TN</option>
            <option value="Anbarasan S">Anbarasan S</option>
            <option value="Meenakshi S">Meenakshi S</option>
            <option value="Vijayalakshmi S">Vijayalakshmi S</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Action Type</label>
          <select 
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
            className="w-full py-2.5 rounded-xl border border-slate-100 dark:border-slate-700 text-xs dark:bg-slate-900 outline-none focus:ring-2 focus:ring-primary/20 font-black uppercase tracking-wider cursor-pointer text-slate-900 dark:text-white"
          >
            <option value="All Actions">All Actions</option>
            <option value="Export Chennai Data">Export Chennai Data</option>
            <option value="Update TN Case Status">Update TN Case Status</option>
            <option value="TN-Auth Login">TN-Auth Login</option>
            <option value="Update Madurai Vector">Update Madurai Vector</option>
          </select>
        </div>
        <button 
          onClick={handleReset}
          className="h-[42px] bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
        >
          Reset TN Filters
        </button>
      </div>

      {/* Audit Table */}
      <div className="bg-white dark:bg-slate-800/40 rounded-[28px] sm:rounded-[40px] border border-white dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-900/50 text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 sm:px-8 py-4 sm:py-5">State Timestamp</th>
                <th className="px-4 sm:px-6 py-4 sm:py-5">TN Action Vector</th>
                <th className="px-4 sm:px-6 py-4 sm:py-5">TN User</th>
                <th className="px-4 sm:px-6 py-4 sm:py-5">Status</th>
                <th className="px-6 sm:px-8 py-4 sm:py-5 text-right">Dossier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
              {filteredLogs.length > 0 ? filteredLogs.map((log, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-all group">
                  <td className="px-6 sm:px-8 py-5 sm:py-6 text-[10px] sm:text-[11px] font-black text-slate-400 tabular-nums">{log.time}</td>
                  <td className="px-4 sm:px-6 py-5 sm:py-6 text-xs font-black text-slate-900 dark:text-white leading-tight">{log.action}</td>
                  <td className="px-4 sm:px-6 py-5 sm:py-6 text-[11px] font-bold text-slate-500 uppercase tracking-tight">{log.user}</td>
                  <td className="px-4 sm:px-6 py-5 sm:py-6">
                    <span className={`px-2 py-0.5 rounded-lg text-[8px] sm:text-[9px] font-black uppercase tracking-widest border ${log.status === 'Success' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 sm:px-8 py-5 sm:py-6 text-right">
                    <button className="h-8 w-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center ml-auto">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <p className="text-slate-400 font-black uppercase tracking-widest text-xs">No TN logs match filters</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditCompliance;
