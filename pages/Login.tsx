
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('anbarasan.s@recoverai.tn');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify({ name: 'Anbarasan S', role: 'State Command Admin' }));
      setIsLoading(false);
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] flex flex-col items-center justify-center p-4 relative overflow-hidden font-display">
      {/* Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] sm:w-[40%] h-[60%] sm:h-[40%] bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] sm:w-[40%] h-[60%] sm:h-[40%] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>
      
      <div className="w-full max-w-[460px] z-10 animate-in fade-in zoom-in-95 duration-500">
        <div className="bg-white dark:bg-slate-900 rounded-[28px] sm:rounded-[32px] shadow-2xl border border-slate-100 dark:border-white/5 overflow-hidden">
          <div className="p-8 sm:p-12 flex flex-col gap-8 sm:gap-10">
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
              <div className="h-14 w-14 sm:h-16 sm:w-16 bg-primary rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/40 rotate-3 shrink-0">
                <span className="material-symbols-outlined text-white text-3xl sm:text-4xl icon-fill">token</span>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 dark:text-white">RecoverAI</h1>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">TN Enterprise Recovery Intel</p>
              </div>
            </div>

            <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleLogin}>
              <div className="flex flex-col gap-2">
                <label className="text-[9px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">TN State Email</label>
                <div className="relative group">
                  <input
                    className="w-full rounded-xl sm:rounded-2xl border-none bg-slate-50 dark:bg-slate-800/50 py-3.5 sm:py-4 pl-5 pr-12 text-xs sm:text-sm text-slate-900 dark:text-white font-bold placeholder-slate-400 focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    placeholder="name@recoverai.tn"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors text-xl">alternate_email</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">State Credentials</label>
                <div className="relative group">
                  <input
                    className="w-full rounded-xl sm:rounded-2xl border-none bg-slate-50 dark:bg-slate-800/50 py-3.5 sm:py-4 pl-5 pr-12 text-xs sm:text-sm text-slate-900 dark:text-white font-bold placeholder-slate-400 focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 hover:text-primary transition-colors text-xl"
                  >
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between px-1">
                <label className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer appearance-none h-4 sm:h-5 w-4 sm:w-5 rounded-md sm:rounded-lg border-2 border-slate-200 dark:border-slate-700 checked:bg-primary checked:border-primary transition-all cursor-pointer" />
                    <span className="absolute material-symbols-outlined text-white text-[12px] sm:text-[16px] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity">check</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Stay Logged In</span>
                </label>
                <a href="#" className="text-[9px] sm:text-[10px] font-black text-primary hover:underline uppercase tracking-widest">Auth Help?</a>
              </div>

              <button 
                disabled={isLoading}
                className="w-full bg-primary hover:bg-blue-700 disabled:bg-slate-300 text-white font-black py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 uppercase tracking-[2px] text-[10px] sm:text-xs mt-2 active:scale-95"
              >
                {isLoading ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>State Auth</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[9px] sm:text-[10px] text-slate-400 font-black uppercase tracking-widest text-center px-4">
          <span className="hover:text-primary cursor-pointer transition-colors">TN Privacy Policy</span>
          <span className="hidden sm:block">•</span>
          <span>© 2025 RECOVERAI TAMIL NADU</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
