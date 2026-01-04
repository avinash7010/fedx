
import React, { useState, useMemo, useEffect, useRef } from 'react';

const CaseManagement: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [ageingFilter, setAgeingFilter] = useState('All');
  const [riskFilter, setRiskFilter] = useState('All');
  const [agencyFilter, setAgencyFilter] = useState('All');
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const initialCases = useMemo(() => [
    { id: '#CASE-TN822', customer: 'Saravana Stores', amount: '₹15,40,000.00', ageing: '45d', ageingDays: 45, risk: 'High', riskColor: 'red', agency: 'Chennai Recovery Sols', sla: '04:12:00', status: 'Open', contact: 'Anbarasan S', email: 'anbu@saravana.com', history: ['Demand Notice Sent', 'Called - Call disconnected'] },
    { id: '#CASE-TN823', customer: 'Pothys Silks', amount: '₹8,20,000.00', ageing: '12d', ageingDays: 12, risk: 'Low', riskColor: 'green', agency: 'Madurai Agents', sla: '23:59:00', status: 'In Progress', contact: 'Meenakshi Sundaram', email: 'meena@pothys.com', history: ['First Installment Paid'] },
    { id: '#CASE-TN824', customer: 'Senthil Textiles', amount: '₹12,90,000.00', ageing: '30d', ageingDays: 30, risk: 'Medium', riskColor: 'yellow', agency: 'Chennai Recovery Sols', sla: '12:00:00', status: 'Pending', contact: 'Senthil Kumar', email: 'senthil@textile.com', history: ['Verification Pending'] },
    { id: '#CASE-TN825', customer: 'Raja Electronics', amount: '₹4,50,000.00', ageing: '5d', ageingDays: 5, risk: 'Low', riskColor: 'green', agency: 'Salem Debt Coll.', sla: '48:00:00', status: 'Open', contact: 'Rajeshwari R', email: 'raji@rajaelec.com', history: ['Account Created'] },
    { id: '#CASE-TN826', customer: 'Muthu & Co', amount: '₹50,00,000.00', ageing: '90d', ageingDays: 90, risk: 'Critical', riskColor: 'red', agency: 'Trichy Ops', sla: '00:30:00', status: 'Escalated', contact: 'Muthuvel Karunanidhi', email: 'muthu@company.in', history: ['Legal Action Initiated', 'Asset Seizure Warning'] },
    { id: '#CASE-TN827', customer: 'Chennai Mobiles', amount: '₹2,50,000.00', ageing: '60d', ageingDays: 60, risk: 'High', riskColor: 'red', agency: 'Chennai Recovery Sols', sla: '01:30:00', status: 'Open', contact: 'Prabhu Deva', email: 'prabhu@mobiles.tn', history: ['Third Reminder Sent'] },
    { id: '#CASE-TN828', customer: 'Coimbatore Pumps', amount: '₹22,40,000.00', ageing: '15d', ageingDays: 15, risk: 'Low', riskColor: 'green', agency: 'Madurai Agents', sla: '10:00:00', status: 'In Progress', contact: 'Vijayalakshmi S', email: 'vijaya@pumps.cbe', history: ['Follow-up Call Scheduled'] },
  ], []);

  const filteredCases = useMemo(() => {
    return initialCases.filter(c => {
      const matchesSearch = c.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           c.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRisk = riskFilter === 'All' || c.risk === riskFilter;
      const matchesAgency = agencyFilter === 'All' || c.agency === agencyFilter;
      
      let matchesAgeing = true;
      if (ageingFilter === '0-30 Days') matchesAgeing = c.ageingDays <= 30;
      else if (ageingFilter === '31-60 Days') matchesAgeing = c.ageingDays > 30 && c.ageingDays <= 60;
      else if (ageingFilter === '61-90 Days') matchesAgeing = c.ageingDays > 60 && c.ageingDays <= 90;
      else if (ageingFilter === '90+ Days') matchesAgeing = c.ageingDays > 90;

      return matchesSearch && matchesRisk && matchesAgency && matchesAgeing;
    });
  }, [searchQuery, initialCases, riskFilter, agencyFilter, ageingFilter]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(filteredCases.map(c => c.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleResetFilters = () => {
    setAgeingFilter('All');
    setRiskFilter('All');
    setAgencyFilter('All');
    setSearchQuery('');
  };

  const isAllSelected = filteredCases.length > 0 && selectedIds.length === filteredCases.length;

  const selectedCase = useMemo(() => 
    initialCases.find(c => c.id === selectedCaseId), 
    [selectedCaseId, initialCases]
  );

  return (
    <div className="flex flex-col min-h-full bg-[#f8fafc] dark:bg-[#0f172a] animate-in fade-in duration-700">
      <div className="flex flex-col min-w-0 p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8">
        
        {/* Header Module */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[9px] sm:text-[10px] font-black uppercase tracking-widest border border-primary/20">TN Ops</span>
              <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active State Queue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-none">Case Inventory</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">
              Managing <span className="text-slate-900 dark:text-white font-bold">{filteredCases.length}</span> live TN recovery instances.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
             <div className="relative group flex-1 sm:flex-none" ref={searchContainerRef}>
               <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px] sm:text-[20px] group-focus-within:text-primary transition-colors">search</span>
               <input 
                type="text" 
                placeholder="Find vectors in TN..." 
                className="w-full sm:w-64 pl-12 pr-4 py-3 bg-white dark:bg-slate-800/50 border border-white dark:border-slate-800 rounded-2xl text-[11px] sm:text-xs focus:ring-4 focus:ring-primary/10 shadow-sm outline-none transition-all font-bold"
                value={searchQuery}
                onFocus={() => setShowSearchDropdown(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchDropdown(true);
                }}
               />
               {showSearchDropdown && searchQuery.length > 0 && (
                 <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-2xl shadow-2xl z-50 max-h-48 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                   {filteredCases.length > 0 ? filteredCases.map(c => (
                     <div 
                      key={c.id} 
                      onClick={() => {
                        setSelectedCaseId(c.id);
                        setSearchQuery(c.customer);
                        setShowSearchDropdown(false);
                      }}
                      className="p-3 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between group"
                     >
                       <span className="text-[11px] font-black text-slate-700 dark:text-slate-200 group-hover:text-primary">{c.customer}</span>
                       <span className="text-[9px] font-bold text-slate-400">{c.id}</span>
                     </div>
                   )) : (
                     <div className="p-3 text-center text-[10px] font-bold text-slate-400">No TN results found</div>
                   )}
                 </div>
               )}
             </div>
             <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20">
                <span className="material-symbols-outlined text-[18px]">add_task</span>
                New TN Case
              </button>
          </div>
        </div>

        {/* Global Filter Bar - Populated with functional state */}
        <div className="bg-white dark:bg-slate-800/40 rounded-[28px] sm:rounded-[32px] border border-white dark:border-slate-800 p-5 sm:p-6 shadow-sm flex flex-wrap gap-4 shrink-0">
          <div className="flex-1 min-w-[120px] space-y-1.5">
            <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Ageing</label>
            <select 
              value={ageingFilter}
              onChange={(e) => setAgeingFilter(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 text-[10px] sm:text-[11px] font-black uppercase tracking-wider rounded-xl py-2 sm:py-2.5 px-3 focus:ring-primary outline-none transition-all cursor-pointer"
            >
              <option value="All">All Range</option>
              <option value="0-30 Days">0-30 Days</option>
              <option value="31-60 Days">31-60 Days</option>
              <option value="61-90 Days">61-90 Days</option>
              <option value="90+ Days">90+ Days</option>
            </select>
          </div>
          <div className="flex-1 min-w-[120px] space-y-1.5">
            <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Risk</label>
            <select 
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 text-[10px] sm:text-[11px] font-black uppercase tracking-wider rounded-xl py-2 sm:py-2.5 px-3 focus:ring-primary outline-none transition-all cursor-pointer"
            >
              <option value="All">All Levels</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <div className="flex-1 min-w-[120px] space-y-1.5">
            <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">TN Agency</label>
            <select 
              value={agencyFilter}
              onChange={(e) => setAgencyFilter(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 text-[10px] sm:text-[11px] font-black uppercase tracking-wider rounded-xl py-2 sm:py-2.5 px-3 focus:ring-primary outline-none transition-all cursor-pointer"
            >
              <option value="All">All Agencies</option>
              <option value="Chennai Recovery Sols">Chennai Recovery Sols</option>
              <option value="Madurai Agents">Madurai Agents</option>
              <option value="Salem Debt Coll.">Salem Debt Coll.</option>
              <option value="Trichy Ops">Trichy Ops</option>
            </select>
          </div>
          <div className="flex items-end w-full sm:w-auto">
            <button 
              onClick={handleResetFilters}
              className="w-full sm:w-auto h-[38px] sm:h-[42px] px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-lg"
            >
              Clear TN Filters
            </button>
          </div>
        </div>

        {/* Selection Action Bar */}
        {selectedIds.length > 0 && (
          <div className="bg-primary text-white p-3 sm:p-4 rounded-[20px] sm:rounded-[24px] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl shadow-primary/40 animate-in slide-in-from-top-4 shrink-0">
            <div className="flex items-center gap-4 px-2">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest">{selectedIds.length} State Vectors Selected</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all">Relay Batch</button>
              <button onClick={() => setSelectedIds([])} className="p-2 hover:bg-white/10 rounded-full transition-colors"><span className="material-symbols-outlined text-[20px]">close</span></button>
            </div>
          </div>
        )}

        {/* Data Grid Command Module */}
        <div className="bg-white dark:bg-slate-800/40 rounded-[28px] sm:rounded-[40px] border border-white dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full border-collapse min-w-[800px]">
              <thead className="sticky top-0 z-10 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800">
                <tr className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  <th className="px-6 sm:px-8 py-4 sm:py-5 text-left w-16">
                    <input 
                      type="checkbox" 
                      className="rounded h-4 w-4 border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" 
                      checked={isAllSelected}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="px-4 sm:px-6 py-4 sm:py-5 text-left">Vector ID</th>
                  <th className="px-4 sm:px-6 py-4 sm:py-5 text-left">Entity (TN)</th>
                  <th className="px-4 sm:px-6 py-4 sm:py-5 text-right">Principal</th>
                  <th className="px-4 sm:px-6 py-4 sm:py-5 text-left">Ageing</th>
                  <th className="px-4 sm:px-6 py-4 sm:py-5 text-left">Risk</th>
                  <th className="px-6 sm:px-8 py-4 sm:py-5 text-right w-20">Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                {filteredCases.length > 0 ? filteredCases.map((c) => (
                  <tr 
                    key={c.id} 
                    onClick={() => setSelectedCaseId(c.id)}
                    className={`transition-all group cursor-pointer ${
                      selectedIds.includes(c.id) 
                        ? 'bg-primary/5' 
                        : 'hover:bg-slate-50/50 dark:hover:bg-slate-900/20'
                    }`}
                  >
                    <td className="px-6 sm:px-8 py-5 sm:py-6" onClick={(e) => e.stopPropagation()}>
                      <input 
                        type="checkbox" 
                        className="rounded h-4 w-4 border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" 
                        checked={selectedIds.includes(c.id)}
                        onChange={(e) => handleSelectRow(c.id, e as any)}
                      />
                    </td>
                    <td className="px-4 sm:px-6 py-5 sm:py-6 text-[10px] sm:text-[11px] font-black text-primary tracking-widest truncate">{c.id}</td>
                    <td className="px-4 sm:px-6 py-5 sm:py-6">
                      <p className="text-[11px] sm:text-xs font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors truncate">{c.customer}</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 truncate">{c.agency}</p>
                    </td>
                    <td className="px-4 sm:px-6 py-5 sm:py-6 text-[11px] sm:text-[12px] text-right font-black text-slate-900 dark:text-white tabular-nums">{c.amount}</td>
                    <td className="px-4 sm:px-6 py-5 sm:py-6 text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-tighter">{c.ageing}</td>
                    <td className="px-4 sm:px-6 py-5 sm:py-6">
                      <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[9px] font-black uppercase tracking-widest rounded-lg ${c.risk === 'Critical' ? 'bg-red-50 text-red-600' : 'bg-primary/10 text-primary'}`}>
                        {c.risk}
                      </span>
                    </td>
                    <td className="px-6 sm:px-8 py-5 sm:py-6 text-right">
                      <button className="h-8 w-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center mx-auto">
                        <span className="material-symbols-outlined text-[18px]">keyboard_arrow_right</span>
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center">
                      <p className="text-slate-400 font-black uppercase tracking-widest text-xs">No TN vectors match your filters</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Intelligence Dossier Slide-over - Responsive Width */}
      {selectedCase && (
        <>
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[60] transition-opacity duration-500" onClick={() => setSelectedCaseId(null)}></div>
          <div className="fixed inset-y-0 right-0 w-full sm:max-w-xl bg-white dark:bg-slate-900 shadow-2xl z-[70] animate-in slide-in-from-right-full duration-500 flex flex-col border-l border-white/10">
            
            <header className="p-6 sm:p-10 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-[9px] sm:text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-1 sm:mb-2">Vector ID</p>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">{selectedCase.id}</h3>
              </div>
              <button onClick={() => setSelectedCaseId(null)} className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">
                <span className="material-symbols-outlined text-slate-400">close</span>
              </button>
            </header>

            <div className="flex-1 overflow-auto p-6 sm:p-10 space-y-8 sm:space-y-12 scrollbar-hide">
              <section className="space-y-4 sm:space-y-6">
                <h4 className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">TN Counterparty</h4>
                <div className="bg-slate-50 dark:bg-slate-800/40 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 border border-white/5 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Entity Name</p>
                      <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">{selectedCase.customer}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Principal (INR)</p>
                      <p className="text-xs sm:text-sm font-black text-primary tracking-tight">{selectedCase.amount}</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Primary TN Contact</p>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-black text-[10px] sm:text-xs shrink-0">{selectedCase.contact.charAt(0)}</div>
                      <div className="min-w-0">
                        <p className="text-[11px] sm:text-xs font-black text-slate-900 dark:text-white truncate">{selectedCase.contact}</p>
                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 truncate">{selectedCase.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4 sm:space-y-6">
                <h4 className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">TN Case Chronology</h4>
                <div className="space-y-6 pl-4">
                  {selectedCase.history.map((h, i) => (
                    <div key={i} className="flex gap-4 sm:gap-6 relative">
                      {i !== selectedCase.history.length - 1 && <div className="absolute left-1.5 top-6 w-[2px] h-full bg-slate-100 dark:bg-slate-800"></div>}
                      <div className="h-3 w-3 rounded-full bg-primary mt-1.5 ring-8 ring-primary/5 shrink-0 z-10"></div>
                      <div>
                        <p className="text-[11px] sm:text-xs font-black text-slate-900 dark:text-white tracking-tight">{h}</p>
                        <p className="text-[8px] sm:text-[10px] text-slate-400 font-bold uppercase mt-1">OCT {24-i}, 2025</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4 sm:space-y-6 pb-6">
                <h4 className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">State Tactical Action</h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: 'quick_phrases', label: 'TN Signal' },
                    { icon: 'call_quality', label: 'Local Relay' },
                    { icon: 'account_balance', label: 'Dist. Hold' },
                    { icon: 'move_up', label: 'Tier Up' }
                  ].map((btn, i) => (
                    <button key={i} className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/40 hover:bg-primary hover:text-white rounded-[20px] sm:rounded-[24px] border border-white/5 transition-all group">
                      <span className="material-symbols-outlined text-xl sm:text-2xl">{btn.icon}</span>
                      <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest">{btn.label}</span>
                    </button>
                  ))}
                </div>
              </section>
            </div>

            <footer className="p-6 sm:p-10 border-t border-slate-100 dark:border-slate-800">
              <button className="w-full py-4 sm:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[20px] sm:rounded-[24px] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] shadow-2xl transition-transform active:scale-95">
                TN Workspace Launch
              </button>
            </footer>
          </div>
        </>
      )}
    </div>
  );
};

export default CaseManagement;
