import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "@/components/Logo";

const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

export function Auth({ type }: { type: 'login' | 'register' }) {
  const isLogin = type === 'login';
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
    termsAccepted: false
  });

  const handleLogin = (e: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!isLogin && !formData.termsAccepted) {
      toast.error("You must accept the terms and conditions to create an account.");
      return;
    }

    // Simulate login/signup for demonstration
    toast.success(isLogin ? "Welcome back to Tooleefy!" : "Account created successfully!");
    const isAdmin = formData.email.toLowerCase().includes("admin");
    
    localStorage.setItem("user", JSON.stringify({ 
      name: isAdmin ? "System Admin" : (isLogin ? "John Doe" : "New User"), 
      email: formData.email || (isAdmin ? "admin@tooleefy.com" : "user@example.com"),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.email || 'John'}`,
      role: isAdmin ? "admin" : "user"
    }));
    
    // Add a small delay for the animation/toast feel
    setTimeout(() => {
      window.location.assign("/");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-muted flex flex-col justify-center py-12 px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Link to="/" className="flex items-center gap-3 justify-center mb-10 group">
          <Logo className="w-12 h-12 shadow-lg shadow-primary/20 group-hover:rotate-[15deg]" />
          <span className="text-3xl font-black tracking-tight text-primary dark:text-white transition-colors duration-500">Tooleefy</span>
        </Link>
        <h2 className="text-center text-4xl font-black text-foreground tracking-tighter mb-2">
          {isLogin ? "Welcome back." : "Start for free."}
        </h2>
        <p className="text-center text-muted-foreground font-medium mb-12">
          {isLogin ? "Continue optimizing your business flow." : "Join +5,000 users building with privacy."}
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Card className="p-8 md:p-12 border-none shadow-premium rounded-[3rem] bg-card">
          <div className="space-y-6">
            <Button 
                variant="outline" 
                onClick={() => handleLogin(null as any)}
                className="w-full h-14 rounded-2xl border-border font-bold hover:bg-muted gap-2 text-foreground flex items-center justify-center transition-all bg-muted/30"
            >
              <GoogleIcon /> Continue with Google
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest">
                <span className="bg-card px-4 text-muted-foreground">or use email</span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              {!isLogin && (
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Full Name</Label>
                  <Input placeholder="John Doe" className="h-14 rounded-2xl bg-muted border-none font-bold" />
                </div>
              )}
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email Address</Label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="h-14 rounded-2xl bg-muted border-none font-bold" 
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2 relative">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Password</Label>
                <div className="relative">
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="h-14 rounded-2xl bg-muted border-none font-bold pr-12" 
                    value={formData.password}
                    onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {isLogin ? (
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    className="rounded-md border-border" 
                    checked={formData.remember}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, remember: !!checked }))}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-bold text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    Remember me for 30 days
                  </label>
                </div>
              ) : (
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms" 
                    className="mt-1 rounded-md border-border" 
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: !!checked }))}
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-bold text-muted-foreground leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    I acknowledge that I have read and accept the <Link to="/terms" className="text-primary hover:underline">Terms of Use</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </label>
                </div>
              )}
              
              <Button type="submit" className="w-full h-16 bg-primary text-white font-black uppercase tracking-widest rounded-[1.5rem] shadow-premium hover:bg-secondary transition-all">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>
          </div>

          <div className="mt-10 text-center text-sm font-bold">
            <span className="text-slate-400">{isLogin ? "New to Tooleefy?" : "Already have an account?"}</span>{" "}
            <Link to={isLogin ? "/register" : "/login"} className="text-primary hover:underline underline-offset-4">
              {isLogin ? "Register now" : "Log in here"}
            </Link>
          </div>
        </Card>
        
        <Link to="/" className="flex items-center gap-2 justify-center mt-12 text-muted-foreground hover:text-foreground transition-colors font-bold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
