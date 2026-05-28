import { Link } from "react-router-dom";
import { Menu, X, LogOut, Settings, User, LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 h-20 w-full glass-nav">
      <div className="w-full max-w-none px-6 md:px-12 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo className="w-10 h-10 group-hover:rotate-[15deg] group-hover:scale-110" />
          <span className="text-2xl font-black tracking-tight text-primary dark:text-white transition-colors duration-500">Tooleefy</span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-sm font-black uppercase tracking-[0.2em]">
            <Link to="/categories" className="text-primary dark:text-white font-extrabold hover:opacity-80 transition-opacity">Tools</Link>
            <Link to="/faq" className="text-primary dark:text-white font-extrabold hover:opacity-80 transition-opacity">FAQ</Link>
          </div>
          
          <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-4" />
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger render={<button className="relative group focus:outline-none" />}>
                    <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-all p-0.5">
                      <img src={user.avatar} alt="Profile" className="w-full h-full object-cover rounded-[0.6rem]" />
                    </div>
                    {/* Connected Mark Animation */}
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900 group-hover:scale-110 transition-transform">
                      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 border-border shadow-2xl mt-2 bg-card">
                  <DropdownMenuLabel className="px-4 py-3">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-black leading-none text-foreground">{user.name}</p>
                      <p className="text-xs font-bold leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-border" />
                  <Link to={user.role === 'admin' ? "/admin" : "/dashboard"}>
                    <DropdownMenuItem className="p-3 rounded-xl gap-3 cursor-pointer group">
                      <LayoutDashboard className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      <span className="font-bold text-sm">{user.role === 'admin' ? "Admin Console" : "My Dashboard"}</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem className="p-3 rounded-xl gap-3 cursor-pointer group">
                    <User className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    <span className="font-bold text-sm">Account Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 rounded-xl gap-3 cursor-pointer group">
                    <Settings className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    <span className="font-bold text-sm">Preferences</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border" />
                  <DropdownMenuItem onClick={handleLogout} className="p-3 rounded-xl gap-3 cursor-pointer group text-red-500 hover:bg-red-50 focus:bg-red-50 focus:text-red-600 transition-colors">
                    <LogOut className="w-4 h-4" />
                    <span className="font-bold text-sm">Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login" className="text-sm font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors">Sign In</Link>
            )}
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          {user && (
            <div className="relative mr-2">
              <div className="w-8 h-8 rounded-xl overflow-hidden border-2 border-primary/20">
                <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900">
                 <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
              </span>
            </div>
          )}
          <button className="p-2 text-dark dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-white/10 p-6 flex flex-col gap-6 shadow-2xl z-40"
        >
          <div className="flex flex-col gap-4 text-sm font-black uppercase tracking-[0.2em]">
            {user && (
              <Link to={user.role === 'admin' ? "/admin" : "/dashboard"} onClick={() => setIsOpen(false)} className="text-primary">
                {user.role === 'admin' ? "Admin Console" : "My Dashboard"}
              </Link>
            )}
            <Link to="/categories" onClick={() => setIsOpen(false)} className="text-primary dark:text-white font-extrabold">Tools</Link>
            <Link to="/faq" onClick={() => setIsOpen(false)} className="text-primary dark:text-white font-extrabold">FAQ</Link>
          </div>
          <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex flex-col gap-3">
            {user ? (
              <button 
                onClick={handleLogout}
                className="w-full h-12 bg-red-50 text-red-600 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            ) : (
              <Link to="/login" className="w-full h-12 bg-primary text-white rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center" onClick={() => setIsOpen(false)}>Sign In</Link>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
