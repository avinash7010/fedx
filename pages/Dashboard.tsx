
import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('value');

  const stats = [
    { label: 'TN Portfolio Value', value: '₹35.4Cr', trend: '+4.2%', icon: 'account_balance_wallet', color: 'blue', secondary: 'Chennai Cluster' },
    { label: 'Recovery Velocity', value: '22.1%', trend: '+2.1%', icon: 'speed', color: 'indigo', secondary: 'Above South Avg' },
    { label: 'At-Risk Principal', value: '₹4.2Cr', trend: '-8.5%', icon: 'security_update_warning', color: 'orange', secondary: 'Salem/Madurai Focus' },
    { label: 'State Compliance', value: '99.9%', trend: 'Peak', icon: 'verified', color: 'emerald', secondary: 'TNeGA Standards' },
  ];

  const intelligenceFeed = [
    { 
      id: 'SIG-TN01', 
      title: 'Tiruppur Textile Recovery', 
      desc: 'Senthil Textiles cluster showing 85% liquidity improvement. Potential for ₹1.2Cr settlement.', 
      priority: 'High',
      tag: 'INDUSTRIAL CLUSTER'
    },
    { 
      id: 'SIG-TN02', 
      title: 'Madurai Agency Pulse', 
      desc: 'Pandian Recovery Sols outperformed target by 15% in retail sector cases.', 
      priority: 'Med',
      tag: 'PARTNER OPS'
    },
    { 
      id: 'SIG-TN03', 
      title: 'Hosur Manufacturing Alert', 
      desc: 'TVS ancillary unit has missed 60-day threshold. Recommend immediate mediation.', 
      priority: 'High',
      tag: 'CREDIT RISK'
    }
  ];

  const priorityWatchlist = [
    { name: 'Saravana Stores', amount: '₹15,00,000', status: 'Notice Sent', health: 45, risk: 'High' },
    { name: 'Pothys Garments', amount: '₹8,50,000', status: 'Payment Plan', health: 78, risk: 'Medium' },
    { name: 'Muthu Electronics', amount: '₹12,20,000', status: 'Critical Default', health: 15, risk: 'Critical' },
    { name: 'Kavitha Silks', amount: '₹2,40,000', status: 'Grace Period', health: 92, risk: 'Low' },
  ];

  return (
    <div className="min-h-full bg-[#f8fafc] dark:bg-[#0f172a] p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* Top Command Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">TN Session Active</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Zone: Tamil Nadu</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            State Recovery Command
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
            Monitoring <span className="text-slate-900 dark:text-white font-bold">8,450</span> active vectors across 38 districts.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex items-center justify-between sm:justify-start bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-1 shadow-sm">
            {['D', 'W', 'M', 'Q', 'Y'].map((t) => (
              <button key={t} className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-[10px] sm:text-[11px] font-black transition-all ${t === 'M' ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'text-slate-400 hover:text-slate-600'}`}>
                {t}
              </button>
            ))}
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl active:scale-95">
            <span className="material-symbols-outlined text-[18px]">add_chart</span>
            TN Cluster Analysis
          </button>
        </div>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white dark:bg-slate-800/50 rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 border border-white dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-${stat.color}-500/5 blur-[40px] rounded-full translate-x-5 -translate-y-5 transition-colors`}></div>
            
            <div className="flex justify-between items-start relative z-10 mb-4 sm:mb-6">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-${stat.color}-50 dark:bg-${stat.color}-500/10 rounded-xl sm:rounded-2xl text-${stat.color}-600 dark:text-${stat.color}-400 group-hover:rotate-6 transition-transform`}>
                <span className="material-symbols-outlined text-xl sm:text-2xl icon-fill">{stat.icon}</span>
              </div>
              <div className="text-right">
                <div className={`inline-flex items-center px-2 py-1 rounded-lg text-[9px] sm:text-[10px] font-black ${stat.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : stat.trend === 'Stable' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'}`}>
                  {stat.trend}
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-1">
              <p className="text-slate-400 dark:text-slate-500 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.15em]">{stat.label}</p>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">{stat.value}</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide pt-1">{stat.secondary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6 sm:gap-8">
        
        {/* Main Intelligence Chart */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 bg-white dark:bg-slate-800/40 rounded-[32px] sm:rounded-[40px] border border-white dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 sm:mb-10">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">Zone Yield Performance</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">Chennai vs Coimbatore vs Madurai</p>
            </div>
            <div className="flex bg-slate-100 dark:bg-slate-900/50 p-1 rounded-xl sm:rounded-2xl w-full md:w-auto">
              {['value', 'velocity'].map((t) => (
                <button 
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`flex-1 md:flex-none px-4 sm:px-6 py-2 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === t ? 'bg-white dark:bg-slate-800 text-primary shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[240px] sm:h-[340px] relative overflow-x-auto sm:overflow-visible no-scrollbar">
            <svg className="w-[600px] sm:w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#135bec" stopOpacity="0.15"></stop>
                  <stop offset="100%" stopColor="#135bec" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M0,160 C100,150 200,180 300,100 C400,20 500,80 600,40 C700,10 800,30 V200 H0 Z" fill="url(#chartFill)" />
              <path d="M0,160 C100,150 200,180 300,100 C400,20 500,80 600,40 C700,10 800,30" fill="none" stroke="#135bec" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <div className="flex justify-between mt-8 text-[9px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] border-t border-slate-50 dark:border-slate-800 pt-6 min-w-[600px] sm:min-w-0">
              <span>CHN</span><span>CBE</span><span>MDU</span><span>SAL</span><span>TIR</span><span>HOS</span>
            </div>
          </div>
        </div>

        {/* Live Intelligence Feed */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          <div className="flex-1 bg-white dark:bg-slate-800/40 rounded-[32px] sm:rounded-[40px] border border-white dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col relative overflow-hidden group min-h-[400px]">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-9xl">auto_awesome</span>
            </div>
            
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">TN Neural Pulse</h3>
                <p className="text-[9px] text-primary font-black uppercase tracking-widest mt-1">Live Updates</p>
              </div>
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>

            <div className="space-y-4 flex-1 overflow-y-auto no-scrollbar pr-1">
              {intelligenceFeed.map((sig) => (
                <div key={sig.id} className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800 transition-all cursor-pointer group/sig">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest">{sig.tag}</span>
                    <span className={`text-[8px] sm:text-[9px] font-black px-2 py-0.5 rounded-full ${sig.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>
                      {sig.priority}
                    </span>
                  </div>
                  <h4 className="text-[11px] sm:text-xs font-black text-slate-900 dark:text-white group-hover/sig:text-primary transition-colors mb-1 truncate">{sig.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{sig.desc}</p>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 sm:mt-8 py-3 sm:py-4 bg-primary text-white rounded-xl sm:rounded-2xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-blue-600 transition-all">
              Initiate District Scan
            </button>
          </div>
        </div>

        {/* Priority Watchlist */}
        <div className="col-span-12 bg-white dark:bg-slate-800/40 rounded-[32px] sm:rounded-[40px] border border-white dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-10">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">State Escalation Watchlist</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">Critical high-value accounts in TN</p>
            </div>
            <button className="text-[9px] sm:text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2 hover:underline">
              Full State Ledger <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {priorityWatchlist.map((acc, i) => (
              <div key={i} className="p-5 sm:p-6 bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary font-black shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    {acc.name.charAt(0)}
                  </div>
                  <div className={`px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-black uppercase tracking-widest ${acc.risk === 'Critical' ? 'text-red-600 bg-red-50' : 'text-primary bg-primary/10'}`}>
                    {acc.risk}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">{acc.name}</h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-bold tabular-nums truncate">{acc.amount} • {acc.status}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Account Health</span>
                    <span>{acc.health}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${acc.risk === 'Critical' ? 'bg-red-500' : 'bg-primary'}`} 
                      style={{ width: `${acc.health}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
