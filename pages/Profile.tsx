
import React from 'react';

const Profile: React.FC = () => {
  const user = {
    name: 'Anbarasan S',
    role: 'State Command Admin',
    email: 'anbarasan.s@recoverai.tn',
    id: 'RE-TN-90210-AS',
    since: 'January 2024',
    location: 'Chennai, Tamil Nadu',
    department: 'TN Strategic Recovery Operations'
  };

  const personalKPIs = [
    { label: 'State Recovery Rate', value: '28.5%', trend: '+2.1%', color: 'primary' },
    { label: 'TN SLA Adherence', value: '99.8%', trend: 'Stable', color: 'emerald' },
    { label: 'Avg. Decision Time', value: '3.8m', trend: '-15s', color: 'indigo' },
  ];

  const recentActivity = [
    { action: 'Executed Chennai mass settlement', target: 'Saravana Stores Portfolio', time: '2h ago', status: 'Verified' },
    { action: 'Retrained Neural Vector', target: 'TN-v4.5 State Model', time: '5h ago', status: 'Success' },
    { action: 'Authorized Agency Access', target: 'Madurai Agents Ltd', time: 'Yesterday', status: 'Logged' },
  ];

  return (
    <div className="min-h-full bg-[#f8fafc] dark:bg-[#0f172a] p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* Hero Container - Relative wrapper */}
      <div className="relative">
        {/* Banner Layer - overflow-hidden is preserved as requested */}
        <div className="relative h-48 sm:h-64 lg:h-72 w-full bg-slate-200 dark:bg-slate-900 rounded-[32px] sm:rounded-[40px] overflow-hidden border border-slate-300/50 dark:border-white/5 transition-colors shadow-xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" className="stroke-slate-900 dark:stroke-white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Banner Controls - Responsive positioning and scaling */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 flex flex-col sm:flex-row gap-2 sm:gap-3">
             <button className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white transition-all border border-slate-400/20 dark:border-white/10">TN Banner Update</button>
             <button className="px-3 sm:px-5 py-2 sm:py-2.5 bg-primary text-white rounded-xl sm:rounded-2xl text-[8px] sm:text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/30">Edit Dossier</button>
          </div>
        </div>
        
        {/* Identity Group - Responsive Alignment: Stacks on mobile, horizontal on sm+ */}
        <div className="absolute left-6 sm:left-10 bottom-4 sm:bottom-8 flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-8 z-10 w-full pr-10 sm:pr-20">
          <div className="relative group shrink-0">
            <div className="h-20 w-20 sm:h-28 lg:h-32 sm:w-28 lg:w-32 rounded-[24px] sm:rounded-[40px] border-[4px] sm:border-[6px] border-[#f8fafc] dark:border-[#0f172a] bg-cover bg-center shadow-2xl overflow-hidden"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop')" }}>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-white text-2xl sm:text-3xl">photo_camera</span>
              </div>
            </div>
            {/* Status Indicator */}
            <div className="absolute -bottom-1 -right-1 h-6 w-6 sm:h-9 sm:w-9 bg-emerald-500 rounded-full border-[4px] sm:border-[6px] border-[#f8fafc] dark:border-[#0f172a] shadow-lg animate-pulse"></div>
          </div>
          
          {/* User Info - Optimized for small screens */}
          <div className="flex flex-col mb-1 sm:mb-2 bg-white/20 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-2 sm:p-0 rounded-2xl">
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight drop-shadow-sm">{user.name}</h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-primary text-white rounded-md sm:rounded-lg text-[7px] sm:text-[9px] font-black uppercase tracking-widest shadow-sm shrink-0">{user.role}</span>
              <span className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 hidden sm:block"></span>
              <span className="text-[8px] sm:text-[10px] text-slate-600 dark:text-slate-300 font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">{user.department}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content - Responsive Layout */}
      <div className="pt-4 sm:pt-6 grid grid-cols-12 gap-6 sm:gap-8">
        
        {/* Profile Sidebar - Stacks on tablet/mobile */}
        <div className="col-span-12 lg:col-span-4 space-y-6 sm:space-y-8 order-2 lg:order-1">
          
          <div className="bg-white dark:bg-slate-800/40 rounded-[32px] sm:rounded-[40px] border border-white dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6 sm:space-y-8">
            <h3 className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">State Contact Intel</h3>
            <div className="space-y-5 sm:space-y-6">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Corporate TN Email</p>
                <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white break-all">{user.email}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">State System ID</p>
                <p className="text-xs sm:text-sm font-black text-primary tracking-widest">{user.id}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">District Base</p>
                <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">{user.location}</p>
              </div>
              <div className="pt-5 sm:pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Tenure</p>
                <p className="text-xs sm:text-sm font-black text-slate-500">Since {user.since}</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-[32px] sm:rounded-[40px] border border-primary/10 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">security</span>
              <h3 className="text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.2em]">TN-IT Security</h3>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-6">
              Your TN state identity is protected by TNeGA standards and state-grade encryption. Last audit: <span className="text-primary font-black">Today</span>.
            </p>
            <button className="w-full py-3 sm:py-4 bg-white dark:bg-slate-800 text-primary border border-primary/20 rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm">State Security Reset</button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-span-12 lg:col-span-8 space-y-6 sm:space-y-8 order-1 lg:order-2">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {personalKPIs.map((kpi, i) => (
              <div key={i} className="bg-white dark:bg-slate-800/40 rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 border border-white dark:border-slate-800 shadow-sm group hover:shadow-xl transition-all">
                <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">{kpi.label}</p>
                <div className="flex items-end justify-between">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tighter tabular-nums">{kpi.value}</h4>
                  <span className={`text-[8px] sm:text-[10px] font-black px-1.5 sm:px-2 py-0.5 rounded-md sm:rounded-lg ${kpi.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                    {kpi.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800/40 rounded-[32px] sm:rounded-[40px] border border-white dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-[10px] sm:text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">TN District Activity</h3>
              <button className="text-[9px] sm:text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Download State Log</button>
            </div>
            <div className="divide-y divide-slate-50 dark:divide-slate-800/50">
              {recentActivity.map((act, i) => (
                <div key={i} className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-all group">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined text-xl sm:text-2xl">history</span>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">{act.action}</p>
                      <p className="text-[9px] sm:text-[10px] font-black text-primary uppercase tracking-widest mt-1">{act.target}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto pl-14 sm:pl-0">
                    <p className="text-[10px] sm:text-xs font-black text-slate-900 dark:text-white uppercase tracking-tighter">{act.status}</p>
                    <p className="text-[8px] sm:text-[10px] text-slate-400 font-bold mt-1">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Neural Contribution Factor - Optimized Buttons for Mobile */}
          <div className="bg-slate-100 dark:bg-slate-900 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl relative overflow-hidden group border border-slate-200 dark:border-white/5 transition-colors">
            <div className="absolute top-0 right-0 p-6 sm:p-10 opacity-10 dark:opacity-10 group-hover:scale-125 transition-transform duration-1000 hidden sm:block">
              <span className="material-symbols-outlined text-7xl lg:text-9xl text-slate-900 dark:text-white">neurology</span>
            </div>
            <div className="relative z-10 max-w-lg space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">TN Neural Contribution</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Your manual interventions in Chennai retail clusters have improved the state model accuracy by <span className="text-primary font-black">+6.5%</span>. The system has learned from <span className="text-slate-900 dark:text-white font-bold">420</span> of your TN case resolutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                 <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary text-white rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">State Learning Metrics</button>
                 <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white dark:bg-white/5 text-slate-700 dark:text-white rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all">State Engine Docs</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
