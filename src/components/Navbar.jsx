import React, { useState } from 'react';
import { Phone, Menu, X, ShieldCheck, Star } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar (Desktop Only) */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center whitespace-nowrap">
          <div className="flex items-center space-x-6">
            <span className="text-orange-400 font-extrabold flex items-center tracking-wide shrink-0">
              <span className="mr-1.5">🚩</span> ॥ जय मल्हार ॥
            </span>
            <a href="tel:+919637886385" className="flex items-center text-slate-200 hover:text-orange-400 transition font-medium shrink-0">
              <Phone className="w-3.5 h-3.5 text-orange-500 mr-1.5 shrink-0" /> 24x7 Helpline: <strong className="ml-1 text-white font-bold">+91 96378 86385 (Navneet Patil)</strong>
            </a>
            <span className="text-slate-400 flex items-center shrink-0">
              <span className="text-orange-500 mr-1.5">📍</span> Medankarwadi, Chakan, Pune - 410501
            </span>
          </div>
          <div className="flex items-center space-x-5 text-xs shrink-0">
            <span className="inline-flex items-center text-emerald-400 font-semibold shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 shrink-0" /> All India Tourist Permit
            </span>
            <span className="text-slate-700">|</span>
            <a href="#reviews" className="flex items-center text-amber-400 hover:text-amber-300 font-medium shrink-0">
              <Star className="w-3.5 h-3.5 mr-1 fill-amber-400 shrink-0" /> 4.9★ Google Verified Reviews
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Brand Logo & Title (Strict Single-Line Lockup) */}
            <a href="#home" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden shadow-md shadow-orange-500/20 border-2 border-orange-500/40 group-hover:border-orange-500 transition-colors shrink-0 bg-slate-900">
                <img src="/assets/images/logo.jpg" alt="Atharv Tours & Travels" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="shrink-0">
                <div className="flex items-center space-x-1.5 whitespace-nowrap leading-none">
                  <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                    ATHARV <span className="text-orange-600">TRAVELS</span>
                  </span>
                  <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded-md">
                    24x7
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wide mt-1 whitespace-nowrap leading-none">
                  Pune • Chakan Cabs
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 font-semibold text-slate-700 text-sm whitespace-nowrap shrink-0">
              <a href="#home" className="px-3.5 py-2 rounded-xl hover:text-orange-600 hover:bg-orange-50 transition">Home</a>
              <a href="#services" className="px-3.5 py-2 rounded-xl hover:text-orange-600 hover:bg-orange-50 transition">Cab Services</a>
              <a href="#fleet" className="px-3.5 py-2 rounded-xl hover:text-orange-600 hover:bg-orange-50 transition">Our Cabs</a>
              <a href="#reviews" className="px-3.5 py-2 rounded-xl hover:text-orange-600 hover:bg-orange-50 transition">Reviews</a>
              <a href="#contact" className="px-3.5 py-2 rounded-xl hover:text-orange-600 hover:bg-orange-50 transition">Contact & Office</a>
            </nav>

            {/* Right Action Buttons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-2.5 shrink-0 whitespace-nowrap">
              <a href="tel:+919637886385" className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 font-bold hover:bg-slate-50 hover:border-slate-300 transition flex items-center text-xs shadow-sm">
                <Phone className="w-3.5 h-3.5 text-orange-600 mr-1.5 shrink-0" /> +91 96378 86385
              </a>
              <a href="https://wa.me/919637886385?text=Hello%20Navneet%20ji,%20I%20want%20to%20inquire%20about%20a%20cab." target="_blank" rel="noreferrer" className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md shadow-emerald-600/20 transition flex items-center text-xs gap-1.5">
                <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp Book</span>
              </a>
            </div>

            {/* Mobile Header Quick Actions */}
            <div className="flex items-center space-x-1.5 lg:hidden shrink-0">
              <a 
                href="https://wa.me/919637886385?text=Hello%20Navneet%20ji,%20I%20want%20to%20inquire%20about%20a%20cab." 
                target="_blank" 
                rel="noreferrer" 
                className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 text-xs flex items-center gap-1.5 active:scale-95 transition whitespace-nowrap"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600 shrink-0" />
                <span className="text-xs font-bold leading-none">WhatsApp</span>
              </a>

              <button 
                onClick={() => setMobileOpen(!mobileOpen)} 
                className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center text-base focus:outline-none active:scale-95 transition shrink-0" 
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-2.5 font-semibold text-slate-800 shadow-2xl animate-in slide-in-from-top duration-200">
            <a href="#home" className="block py-2 text-sm border-b border-slate-100 hover:text-orange-600" onClick={() => setMobileOpen(false)}>🏠 Home</a>
            <a href="#services" className="block py-2 text-sm border-b border-slate-100 hover:text-orange-600" onClick={() => setMobileOpen(false)}>🚖 Cab Services</a>
            <a href="#fleet" className="block py-2 text-sm border-b border-slate-100 hover:text-orange-600" onClick={() => setMobileOpen(false)}>🚗 Our Cabs (Swift Dzire & Ertiga)</a>
            <a href="#reviews" className="block py-2 text-sm border-b border-slate-100 hover:text-orange-600" onClick={() => setMobileOpen(false)}>⭐ Google Reviews (4.9★)</a>
            <a href="#contact" className="block py-2 text-sm hover:text-orange-600" onClick={() => setMobileOpen(false)}>📍 Contact & Office (Chakan)</a>
            
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a href="tel:+919637886385" className="text-center py-2.5 bg-slate-900 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow">
                <Phone className="w-3.5 h-3.5 text-orange-400" /> Call Now
              </a>
              <a href="https://wa.me/919637886385?text=Hello%20Navneet%20ji,%20I%20want%20to%20inquire%20about%20a%20cab." target="_blank" rel="noreferrer" className="text-center py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow">
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
