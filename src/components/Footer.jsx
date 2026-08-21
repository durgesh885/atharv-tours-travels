import React from 'react';
import { ShieldCheck, Phone, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-slate-800/80 items-start">
          
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-orange-500/30 shrink-0">
                <img src="/assets/images/logo.jpg" alt="Atharv Tours & Travels" className="w-full h-full object-cover" />
              </div>
              <div className="shrink-0">
                <span className="text-base font-black text-white tracking-tight leading-none block whitespace-nowrap">ATHARV <span className="text-orange-500">TRAVELS</span></span>
                <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase whitespace-nowrap">Pune • Chakan • All India Cabs</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed max-w-sm">
              Pune & Chakan's reliable 24x7 Cab & Car Rental Service with All India Tourist Permit. Directly owned Swift Dzire & Ertiga 7-Seater cabs.
            </p>
            <div className="flex items-center space-x-3 pt-1 text-xs whitespace-nowrap">
              <span className="text-orange-400 font-bold">🚩 ॥ जय मल्हार ॥</span>
              <span className="text-slate-700">•</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Commercial Permit
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-xs font-medium whitespace-nowrap">
              <li><a href="#home" className="hover:text-orange-400 transition">🏠 Home</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">🚖 Cab Services</a></li>
              <li><a href="#fleet" className="hover:text-orange-400 transition">🚗 Our Cabs (Dzire & Ertiga)</a></li>
              <li><a href="#reviews" className="hover:text-orange-400 transition">⭐ Google Reviews (4.9★)</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition">📍 Contact & Office</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">24x7 Direct Booking</h4>
            
            <a href="tel:+917507990227" className="flex items-center text-white hover:text-orange-400 transition font-bold text-xs sm:text-sm whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 text-orange-500 mr-2 shrink-0" /> +91 75079 90227 <span className="text-[10px] font-normal text-slate-400 ml-1.5">(Navneet Patil)</span>
            </a>
            
            <a href="https://wa.me/919637886385?text=Hello%20Navneet%20ji,%20I%20want%20to%20book%20a%20cab." target="_blank" rel="noreferrer" className="flex items-center text-emerald-400 hover:text-emerald-300 transition font-bold text-xs sm:text-sm whitespace-nowrap gap-1">
              <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-500 mr-1.5 shrink-0" />
              <span>+91 96378 86385</span>
              <span className="text-[10px] font-normal text-slate-400 ml-1.5">(Instant Quote)</span>
            </a>
            
            <p className="text-[11px] text-slate-400 leading-snug pt-1 flex items-start">
              <MapPin className="w-3.5 h-3.5 text-orange-500 mr-2 mt-0.5 shrink-0" />
              <span>Medankarwadi, Chakan, Tal. Khed, Pune - 410501</span>
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Slogan */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-slate-500 text-[11px] gap-2.5 text-center sm:text-left">
          <p>© 2026 Atharv Tours & Travels (अथर्व टुर्स ॲन्ड ट्रॅव्हल्स). All rights reserved.</p>
          <p className="text-slate-400">Pune • Chakan • All India 24x7 Cab Service</p>
        </div>
      </div>
    </footer>
  );
}
