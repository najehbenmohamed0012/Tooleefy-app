import React from 'react';
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Heart, Stars, Zap } from "lucide-react";

export const ValueBanner: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-20">
      <div className="relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 md:p-2 shadow-2xl">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -ml-32 -mb-32" />
        
        <div className="relative bg-slate-950/40 backdrop-blur-3xl rounded-[2rem] border border-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-6 border border-emerald-500/20">
              <Stars className="w-3 h-3" /> Community Powered
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-none">
              Empower the Vision to Keep It <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-black">Free Forever.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl font-medium leading-relaxed">
              We're dedicated to providing professional enterprise tools with zero cost. Your support helps us maintain servers and develop new powerful features for the global business community.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 shrink-0">
            <Link 
              to="/value-our-tools"
              className="group/btn relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-black uppercase tracking-widest text-sm rounded-2xl shadow-[0_8px_0_0_#065f46] hover:shadow-[0_4px_0_0_#065f46] hover:translate-y-[4px] active:translate-y-[8px] active:shadow-none transition-all border border-emerald-400/20 active:scale-[0.98]"
            >
              <Heart className="w-5 h-5 fill-white group-hover/btn:scale-110 transition-transform" />
              <span>Value Our Tool</span>
              <Zap className="w-4 h-4 ml-1 opacity-50" />
            </Link>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">One-click appreciation</p>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute bottom-6 right-6 flex gap-2 overflow-hidden pointer-events-none opacity-20">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-8 bg-emerald-500/50 rounded-full rotate-45" />
          ))}
        </div>
      </div>
    </div>
  );
};
