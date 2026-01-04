
import React, { useState } from 'react';

const Analytics: React.FC = () => {
  const [metric, setMetric] = useState('Revenue');

  const recoveryByRegion = [
    { region: 'Chennai Zone', value: '₹18.4Cr', fill: '85%' },
    { region: 'Coimbatore Cluster', value: '₹12.1Cr', fill: '65%' },
    { region: 'Madurai/South', value: '₹4.9Cr', fill: '35%' },
  ];

  return (
    <div className="min-h-full bg-[#f8fafc] dark:bg-[#0f172a] p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* Analytics Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[9px] sm:text-[10px] font-black uppercase tracking-widest border border-primary/20">TN State Intel</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global TN v4.5</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-none uppercase">TN Portfolio Intel</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">Comparative state-wide benchmarking.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all">
            <span className="material-symbols-outlined text-[18px]">file_download</span>
            TN PDF Export
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl">
            <span className="material-symbols-outlined text-[18px]">query_stats</span>
            Zone Query
          </button>
        </div>
      </div>

      {/* KPI Slab */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: 'TN Recovered', value: '₹35.4Cr', trend: '14.2%', color: 'emerald' },
          { label: 'Active Vectors', value: '8,450', trend: '3.2%', color: 'blue' },
          { label: 'TN Velocity', value: '38d', trend: '-4d', color: 'indigo' },
          { label: 'State Health', value: '82%', trend: '2.1%', color: 'emerald' },
        ].map((kpi, i) => (
          <div key={i} className="group relative bg-white dark:bg-slate-800/50 rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border border-white dark:border-slate-800 shadow-sm transition-all duration-500">
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <div className={`p-2 sm:p-3 bg-slate-50 dark:bg-slate-900 rounded-lg sm:rounded-xl text-slate-500 group-hover:text-primary transition-colors shrink-0`}>
                <span className="material-symbols-outlined text-xl sm:text-2xl icon-fill">finance</span>
              </div>
              <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[8px] sm:text-[9px] font-black bg-${kpi.color}-50 text-${kpi.color}-600 tracking-widest`}>
                {kpi.trend}
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em]">{kpi.label}</p>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tighter tabular-nums">{kpi.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6 sm:gap-8">
        {/* Geo Distribution */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 bg-white dark:bg-slate-800/40 rounded-[32px] sm:rounded-[40px] border border-white dark:border-slate-800 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 sm:mb-12">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none">TN District Density</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">State-wide yield mapping</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
             <div className="space-y-6 sm:space-y-8">
               {recoveryByRegion.map((r, i) => (
                 <div key={i} className="group cursor-pointer">
                   <div className="flex justify-between text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] mb-2.5">
                     <span className="text-slate-400 group-hover:text-primary transition-colors">{r.region}</span>
                     <span className="text-slate-900 dark:text-white tracking-widest">{r.value}</span>
                   </div>
                   <div className="h-1.5 sm:h-2 w-full bg-slate-50 dark:bg-slate-900/50 rounded-full overflow-hidden">
                     <div className="h-full bg-primary rounded-full transition-all duration-[1500ms]" style={{ width: r.fill }}></div>
                   </div>
                 </div>
               ))}
             </div>
             <div className="relative aspect-square flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/30 rounded-full border border-slate-100 dark:border-slate-800/50 max-w-[280px] mx-auto w-full">
                <div className="text-center space-y-1 sm:space-y-2 px-6">
                  <span className="text-[9px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Dominant District</span>
                  <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tighter">CHENNAI</p>
                  <div className="inline-flex items-center px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-600 text-[9px] sm:text-[10px] font-black tracking-widest">+22.4%</div>
                </div>
             </div>
          </div>
        </div>

        {/* SLA Compliance Gauge */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 bg-white dark:bg-slate-800/40 rounded-[32px] sm:rounded-[40px] border border-white dark:border-slate-800 p-6 sm:p-10 shadow-sm flex flex-col relative overflow-hidden group">
          <div className="flex justify-between items-start mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">TN SLA Adherence</h3>
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center py-4">
            <div className="relative size-44 sm:size-56 rounded-full border-[12px] sm:border-[16px] border-emerald-500 border-t-slate-100 dark:border-t-slate-900/50 flex flex-col items-center justify-center transition-transform">
              <span className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">99%</span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1">TN Health</span>
            </div>
            
            <div className="grid grid-cols-2 w-full mt-8 sm:mt-12 gap-4 sm:gap-8 text-center border-t border-slate-50 dark:border-slate-800 pt-8 sm:pt-10">
              <div>
                <p className="text-base sm:text-lg font-black text-emerald-500">8,365</p>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-black uppercase mt-1">TN OK</p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-black text-red-500">85</p>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-black uppercase mt-1">TN FAIL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
