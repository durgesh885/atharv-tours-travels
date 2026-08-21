import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200/80 px-3 py-2.5 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2.5">
      <a 
        href="tel:+919637886385" 
        className="flex-1 py-3 bg-slate-900 active:bg-slate-800 text-white text-center font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 transition whitespace-nowrap"
      >
        <Phone className="w-4 h-4 text-orange-400 shrink-0" />
        <span>Call 96378 86385</span>
      </a>
      <a 
        href="https://wa.me/919637886385?text=Hello%20Navneet%20ji%20(Atharv%20Tours),%20I%20want%20to%20inquire%20about%20a%20cab." 
        target="_blank" 
        rel="noreferrer"
        className="flex-1 py-3 bg-emerald-600 active:bg-emerald-700 text-white text-center font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-600/30 pulse-green active:scale-95 transition whitespace-nowrap"
      >
        <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
        <span>WhatsApp Book</span>
      </a>
    </div>
  );
}
