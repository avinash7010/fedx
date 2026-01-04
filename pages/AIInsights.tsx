
import React, { useState } from 'react';

const AIInsights: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: string, text: string}[]>([
    { role: 'ai', text: 'TN Cognitive Engine 4.5 online. I have analyzed 8,450 state vectors. High-propensity collection triggers identified for Tiruppur/Coimbatore textile clusters.' }
  ]);

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setMessages([...messages, { role: 'user', text: query }]);
    setQuery('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: "TN Signal confirmed. Saravana Stores liquidity metrics indicate 92% settlement probability based on Chennai retail trends." }]);
    }, 1000);
  };

  return (
    <div className="min-h-full bg-[#f8fafc] dark:bg-[#0f172a] p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* Header Module */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[9px] sm:text-[10px] font-black uppercase tracking-widest border border-primary/20">TN Neural Net</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">v4.5 TN-Enterprise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-none">Neural Insights (TN)</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">Augmented state decision mapping.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
            <span className="material-symbols-outlined text-[18px]">neurology</span>
            TN Logs
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20">
            <span className="material-symbols-outlined text-[18px]">refresh</span>
            Retrain Engine
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 sm:gap-8">
        {/* Main Analytics Column */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 space-y-6 sm:space-y-8 order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-slate-800/40 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 border border-white dark:border-slate-800 shadow-sm relative overflow-hidden group min-h-[280px] flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                <span className="material-symbols-outlined text-9xl">monitoring</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 sm:mb-8">State Propensity Matrix</p>
              <div className="flex items-end gap-2 sm:gap-3 h-32 sm:h-40">
                 {[40, 60, 90, 70, 30, 85, 95].map((v, i) => (
                   <div key={i} className="flex-1 bg-slate-50 dark:bg-slate-900/50 rounded-xl sm:rounded-2xl relative overflow-hidden group/bar">
                     <div className="absolute bottom-0 w-full bg-primary/40 group-hover/bar:bg-primary transition-all duration-700" style={{ height: `${v}%` }}></div>
                   </div>
                 ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/40 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 border border-white dark:border-slate-800 shadow-sm flex flex-col justify-between min-h-[280px]">
              <div>
                <p className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">District Signal</p>
                <h3 className="text-4xl sm:text-5xl font-black text-emerald-500 tracking-tighter">Bullish</h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-3 leading-relaxed">Tiruppur willingness up <span className="text-emerald-500 font-black">+18.4%</span>.</p>
              </div>
              <div className="flex -space-x-3 mt-6">
                {[1,2,3].map(i => <div key={i} className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl border-[3px] border-white dark:border-slate-800 bg-slate-100 flex items-center justify-center text-[9px] font-black">TN</div>)}
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl border-[3px] border-white dark:border-slate-800 bg-primary text-white flex items-center justify-center text-[9px] font-black">+38</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800/40 rounded-[32px] sm:rounded-[40px] border border-white dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="text-[10px] sm:text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">TN Action Queue</h3>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="divide-y divide-slate-50 dark:divide-slate-800/50">
              {[
                { id: 'ACT-TN90', name: 'Muthu & Co', prob: 95, action: 'Settle' },
                { id: 'ACT-TN91', name: 'Chennai Mobiles', prob: 82, action: 'Route' },
              ].map((item, i) => (
                <div key={i} className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-all group cursor-pointer">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-base sm:text-lg">
                      {item.prob}%
                    </div>
                    <div>
                      <p className="text-[13px] sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">{item.name}</p>
                      <p className="text-[9px] sm:text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1 truncate max-w-[150px]">{item.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full sm:w-auto pl-16 sm:pl-0 gap-4">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100 dark:bg-slate-800 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:bg-primary group-hover:text-white transition-all">{item.action}</span>
                    <span className="material-symbols-outlined text-slate-300 text-lg">arrow_forward_ios</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Neural Terminal Sidebar - Optimized with Light and Dark Theme Support */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 bg-white dark:bg-slate-900 rounded-[32px] sm:rounded-[40px] shadow-2xl flex flex-col h-[500px] sm:h-[600px] lg:h-[740px] border border-slate-200 dark:border-white/5 overflow-hidden order-1 lg:order-2">
          <header className="p-6 sm:p-8 border-b border-slate-200 dark:border-white/5 flex items-center gap-4 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white icon-fill text-xl sm:text-2xl">psychology</span>
            </div>
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">TN Interface</p>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium truncate">Node: TN-902</p>
            </div>
          </header>
          
          <div className="flex-1 overflow-auto p-6 sm:p-8 space-y-6 sm:space-y-8 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 sm:p-6 rounded-[24px] sm:rounded-[28px] text-[12px] sm:text-[13px] leading-relaxed ${m.role === 'user' ? 'bg-primary text-white font-bold rounded-tr-none' : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleAsk} className="p-4 sm:p-6 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/5">
            <div className="relative">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask TN Neural Engine..." 
                className="w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-none rounded-2xl py-3.5 sm:py-4 pl-5 sm:pl-6 pr-14 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:ring-4 focus:ring-primary/20 outline-none"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 bg-primary rounded-full flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
