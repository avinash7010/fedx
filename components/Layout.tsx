
import React, { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Mock search results with Tamil Nadu data
  const allResults = [
    { type: 'Case', title: 'Saravana Stores (#CASE-TN01)', path: '/cases' },
    { type: 'Account', title: 'Coimbatore Textiles Portfolio', path: '/analytics' },
    { type: 'Partner', title: 'Chennai Recovery Agents', path: '/dca-portal' },
    { type: 'Insight', title: 'Madurai Market Liquidity', path: '/ai-insights' },
  ];

  const filteredResults = searchQuery.length > 1 
    ? allResults.filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { name: 'Case Inventory', icon: 'cases', path: '/cases' },
    { name: 'Neural Insights', icon: 'psychology', path: '/ai-insights' },
    { name: 'Partner Hub', icon: 'public', path: '/dca-portal' },
    { name: 'Intelligence', icon: 'bar_chart', path: '/analytics' },
    { name: 'Audit / Governance', icon: 'verified_user', path: '/audit-compliance' },
  ];

  const notifications = [
    { id: 1, text: 'Critical Risk: Salem Steel Ltd', time: '5m ago', type: 'error' },
    { id: 2, text: 'Neural analysis of Tiruppur cluster complete', time: '1h ago', type: 'info' },
    { id: 3, text: 'Payment received: Pothys Chennai', time: '3h ago', type: 'success' },
  ];

  const SidebarContent = () => (
    <>
      <div className="flex h-24 items-center px-10 border-b border-slate-50 dark:border-white/5">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-primary rounded-[18px] flex items-center justify-center text-white shadow-2xl shadow-primary/40 rotate-3 shrink-0">
            <span className="material-symbols-outlined icon-fill text-3xl">token</span>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">RecoverAI</h1>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mt-1 block">Neural Ops</span>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-10 px-6 flex flex-col gap-2.5">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-[22px] transition-all group ${
                isActive
                  ? 'bg-primary text-white font-bold shadow-2xl shadow-primary/25 translate-x-1'
                  : 'text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
              }`
            }
          >
            <span className={`material-symbols-outlined text-2xl ${location.pathname === item.path ? 'icon-fill' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-8 border-t border-slate-50 dark:border-white/5 space-y-6">
        <NavLink
          to="/settings"
          onClick={() => setIsMobileMenuOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 rounded-[22px] transition-all group ${
              isActive
                ? 'bg-primary text-white font-bold shadow-2xl shadow-primary/25'
                : 'text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'
            }`
          }
        >
          <span className={`material-symbols-outlined text-2xl ${location.pathname === '/settings' ? 'icon-fill' : ''}`}>
            settings
          </span>
          <span className="text-[11px] font-black uppercase tracking-[0.2em]">Settings</span>
        </NavLink>
        
        <div className="bg-slate-50/50 dark:bg-white/5 p-5 rounded-[24px] border border-slate-100 dark:border-white/5 hidden md:block">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Load</span>
            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Optimized</span>
          </div>
          <div className="h-1.5 w-full bg-slate-200/50 dark:bg-slate-800 rounded-full overflow-hidden">
             <div className="h-full bg-primary w-[62%] rounded-full shadow-[0_0_8px_rgba(19,91,236,0.5)]"></div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f8fafc] dark:bg-[#0f172a] font-display">
      
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-80 flex-shrink-0 flex-col bg-white dark:bg-[#0f172a] border-r border-slate-100 dark:border-white/5 z-30 transition-all">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <aside className="absolute left-0 top-0 bottom-0 w-80 bg-white dark:bg-[#0f172a] border-r border-white/5 flex flex-col animate-in slide-in-from-left duration-300">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Primary Control Surface */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Navigation Control Bar */}
        <header className="h-20 sm:h-24 flex items-center justify-between px-6 sm:px-10 bg-white dark:bg-[#0f172a] border-b border-slate-50 dark:border-white/5 flex-shrink-0 z-20">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden h-10 w-10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
            <div className="hidden sm:flex items-center max-w-xl w-full relative" ref={searchRef}>
              <div className="relative w-full group">
                <input
                  className="w-full px-6 py-3 sm:py-4 bg-slate-100 dark:bg-slate-800/50 border-none rounded-2xl text-[13px] text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold"
                  placeholder="Search TN Portfolios..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                />
                {showSearchResults && filteredResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-2xl shadow-2xl z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-3 border-b border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">TN Search Results</p>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {filteredResults.map((res, i) => (
                        <div 
                          key={i} 
                          onClick={() => {
                            navigate(res.path);
                            setShowSearchResults(false);
                            setSearchQuery('');
                          }}
                          className="p-4 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between group transition-colors"
                        >
                          <div>
                            <p className="text-xs font-black text-slate-900 dark:text-white group-hover:text-primary">{res.title}</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">{res.type}</p>
                          </div>
                          <span className="material-symbols-outlined text-slate-300 group-hover:text-primary text-xl">north_east</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-8">
            <button
              onClick={toggleDarkMode}
              className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-2xl transition-all"
            >
              <span className="material-symbols-outlined text-2xl">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            
            <div className="relative">
              <button 
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowUserMenu(false);
                }}
                className={`h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-2xl transition-all relative ${showNotifications ? 'bg-primary text-white shadow-xl shadow-primary/20' : ''}`}
              >
                <span className="material-symbols-outlined text-2xl">notifications</span>
                {!showNotifications && <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-[2px] border-white dark:border-[#0f172a]"></span>}
              </button>
              
              {showNotifications && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)}></div>
                  <div className="absolute right-0 mt-6 w-[320px] sm:w-[420px] bg-white dark:bg-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-[24px] sm:rounded-[32px] border border-slate-100 dark:border-white/10 z-50 animate-in fade-in slide-in-from-top-6 overflow-hidden">
                    <div className="p-6 sm:p-8 border-b border-slate-50 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/5">
                      <h3 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em]">TN Intelligence Relay</h3>
                    </div>
                    <div className="max-h-[300px] sm:max-h-[480px] overflow-auto scrollbar-hide">
                      {notifications.map(n => (
                        <div key={n.id} className="p-5 sm:p-7 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border-b border-slate-50 dark:border-white/5 last:border-none flex gap-4 sm:gap-6 group cursor-pointer">
                          <div className={`h-8 w-8 sm:h-10 sm:w-10 rounded-xl flex items-center justify-center flex-shrink-0 ${n.type === 'error' ? 'bg-red-500/10 text-red-500' : 'bg-primary/10 text-primary'}`}>
                             <span className="material-symbols-outlined text-lg sm:text-xl group-hover:scale-125 transition-transform">{n.type === 'error' ? 'report_gmailerrorred' : 'bolt'}</span>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[12px] sm:text-[13px] font-bold text-slate-800 dark:text-slate-200 leading-tight">{n.text}</p>
                            <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.15em]">{n.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <div className="h-8 w-px bg-slate-100 dark:bg-white/10 hidden md:block"></div>
            
            <div className="relative">
              <div 
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 sm:gap-5 pl-1 sm:pl-3 cursor-pointer group"
              >
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-sm font-black text-slate-900 dark:text-white tracking-tighter group-hover:text-primary transition-colors">Anbarasan S</span>
                  <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1 rounded-lg uppercase tracking-widest mt-1.5">Admin</span>
                </div>
                <div
                  className="h-10 w-10 sm:h-14 sm:w-14 rounded-xl sm:rounded-[22px] bg-cover bg-center ring-4 sm:ring-[6px] ring-transparent group-hover:ring-primary/10 transition-all shadow-lg sm:shadow-xl shrink-0"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop')" }}
                ></div>
              </div>

              {showUserMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)}></div>
                  <div className="absolute right-0 mt-6 w-56 sm:w-64 bg-white dark:bg-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-[24px] sm:rounded-[28px] border border-slate-100 dark:border-white/10 z-50 animate-in fade-in slide-in-from-top-6 p-3">
                    <div className="p-4 sm:p-5 border-b border-slate-50 dark:border-white/5 space-y-1">
                      <p className="text-sm font-black text-slate-900 dark:text-white">Anbarasan S</p>
                      <p className="text-[10px] text-slate-400 font-bold tracking-tight">anbarasan.s@recoverai.tn</p>
                    </div>
                    <div className="py-2 sm:py-3">
                      <button 
                        onClick={() => {navigate('/profile'); setShowUserMenu(false);}}
                        className="w-full flex items-center gap-4 px-4 py-3 text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 rounded-2xl transition-all"
                      >
                        <span className="material-symbols-outlined text-xl">account_circle</span>
                        Dossier
                      </button>
                    </div>
                    <div className="pt-2 sm:pt-3 border-t border-slate-50 dark:border-white/5">
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 px-4 py-3.5 sm:py-4 text-[11px] font-black text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-2xl transition-all uppercase tracking-[0.2em]"
                      >
                        <span className="material-symbols-outlined text-xl">logout</span>
                        Sign Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Dynamic Canvas Container */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
