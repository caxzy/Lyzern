import React from 'react';
import { Hammer, Wallet, Terminal, Lock, } from 'lucide-react';

export default function MaintenancePage() {

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-2xl w-full border border-white/[0.03] bg-[#0A0A0A] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#C084FC]/05 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[#D053FF]/08 rounded-full flex items-center justify-center text-[#D053FF] mb-10 ring-1 ring-[#D053FF]/20 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M12.5 11.134 18.196 21"/><path d="M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413"/><path d="M21 21H3"/></svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tighter leading-tight">
            Huh?
          </h1>
          
          <p className="text-sm md:text-base mb-14 leading-relaxed max-w-md text-slate-500 font-sans">
            We're still working on it.
          </p>
            </div>
          </div>
        </div>
  );
}