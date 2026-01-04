
import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('User Management');
  const [team, setTeam] = useState([
    { name: 'Vijayalakshmi S', email: 'vijaya@recoverai.tn', role: 'State Admin', status: 'Active' },
    { name: 'Meenakshi Sundaram', email: 'meenakshi@recoverai.tn', role: 'Zone Analyst', status: 'Active' },
    { name: 'Anbarasan S', email: 'anbu@recoverai.tn', role: 'DCA Manager', status: 'Active' },
  ]);

  const removeUser = (email: string) => {
    setTeam(team.filter(u => u.email !== email));
  };

  const tabs = ['TN Team', 'Zone Permissions', 'State SLA', 'Local API'];

  return (
    <div className="min-h-full bg-[#f8fafc] dark:bg-[#0f172a] p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 animate-in fade-in duration-500">
      
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">TN Configuration</h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">Managing state infrastructure and state control.</p>
        </div>
        <button className="w-full lg:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl">
           <span className="material-symbols-outlined text-[18px]">save</span>
           Commit TN Config
        </button>
      </div>

      {/* Responsive Tab Bar */}
      <div className="border-b border-slate-200 dark:border-slate-800 -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all relative ${activeTab === tab || (activeTab === 'User Management' && tab === 'TN Team') ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {tab}
              {(activeTab === tab || (activeTab === 'User Management' && tab === 'TN Team')) && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></div>}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-8">
          {activeTab === 'User Management' || activeTab === 'TN Team' ? (
            <div className="bg-white dark:bg-slate-800/40 rounded-[28px] sm:rounded-[32px] border border-white dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-slate-50 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest">State Team Members</h3>
                <button className="w-full sm:w-auto bg-primary text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest py-2.5 px-5 rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-primary/20">Invite TN Operator</button>
              </div>
              <div className="overflow-x-auto scrollbar-hide">
                <table className="w-full text-left min-w-[500px]">
                  <thead className="bg-slate-50/50 dark:bg-slate-900/50 text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-4">State Identity</th>
                      <th className="px-4 py-4">Zone Role</th>
                      <th className="px-4 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {team.map((u, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-primary text-[10px] sm:text-xs shrink-0">
                              {u.name.charAt(0)}
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-[11px] sm:text-xs font-black text-slate-900 dark:text-white truncate">{u.name}</span>
                              <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 truncate">{u.email}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-[8px] sm:text-[9px] font-black px-2 py-0.5 rounded-lg uppercase tracking-widest border border-purple-100 dark:border-purple-800 truncate block text-center">{u.role}</span>
                        </td>
                        <td className="px-4 py-4">
                          <span className="flex items-center gap-2 text-[9px] sm:text-[10px] font-black text-emerald-500 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                            {u.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => removeUser(u.email)}
                            className="text-slate-300 hover:text-red-500 transition-colors"
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="h-48 sm:h-64 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/30 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-slate-300 mb-3">construction</span>
              <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest">In Development (TN Module)</p>
            </div>
          )}
        </div>

        <div className="lg:col-span-4 space-y-6 sm:space-y-8">
          <div className="bg-white dark:bg-slate-800/40 rounded-[28px] sm:rounded-[32px] border border-white dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <h3 className="text-[11px] sm:text-xs font-black mb-6 flex items-center gap-3 uppercase tracking-widest">
              <span className="material-symbols-outlined text-primary text-xl">notifications_active</span>
              State Alerts
            </h3>
            <div className="space-y-5 sm:space-y-6">
              {[
                { title: 'District Assignments', desc: 'Push for Chennai/MDU tasks' },
                { title: 'TN SLA Breaches', desc: 'State-wide threshold alerts' },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] sm:text-xs font-black text-slate-900 dark:text-white mb-0.5 truncate">{item.title}</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight">{item.desc}</p>
                  </div>
                  <div className="w-10 sm:w-12 h-5 sm:h-6 bg-primary/20 dark:bg-slate-700 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-3 sm:w-4 h-3 sm:h-4 bg-primary rounded-full shadow-sm transition-all"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-xl">security</span>
              <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-primary">TN Security</h4>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 font-medium mb-5 leading-relaxed">System compliant with TN-IT and TNeGA standards.</p>
            <button className="w-full py-3 bg-white dark:bg-slate-800 text-primary border border-primary/20 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm">State Audit Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
