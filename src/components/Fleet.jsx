import React from 'react';
import { Users, Briefcase, Snowflake, Plane, Check, Bus, ShieldCheck, Zap } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function Fleet() {
  return (
    <section id="fleet" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full whitespace-nowrap">
            Our Owned Fleet (आमच्या गाड्या)
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Directly Owned & Maintained AC Cabs
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-base">
            100% sanitized, commercial permit vehicles with experienced local drivers ready 24/7.
          </p>
        </div>

        {/* 2 Main Cars Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Car 1: Swift Dzire Sedan */}
          <div className="rounded-3xl border border-slate-200/90 overflow-hidden bg-white hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between shadow-sm group">
            <div>
              {/* Image with Floating Badges */}
              <div className="h-60 sm:h-72 bg-slate-100 relative overflow-hidden">
                <img src="/assets/images/swift_dzire.jpg" alt="Maruti Swift Dzire AC Sedan Cab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs px-3.5 py-1 rounded-full font-bold shadow-md whitespace-nowrap">
                  Prime AC Sedan
                </div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs px-3.5 py-1 rounded-full font-bold shadow-md flex items-center gap-1 whitespace-nowrap">
                  <ShieldCheck className="w-3 h-3" /> All India Permit
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-semibold text-orange-300">4 + 1 Seater</span>
                  <h4 className="text-lg font-bold text-white leading-tight">Maruti Suzuki Swift Dzire</h4>
                </div>
              </div>
              
              <div className="p-5 sm:p-7 space-y-5">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Swift Dzire AC Sedan</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Smooth highway ride, chilled AC & spacious boot for city & outstation.</p>
                </div>
                
                {/* 2x2 Specs Bento Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Capacity</span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 flex items-center gap-1.5 whitespace-nowrap">
                      <Users className="w-4 h-4 text-orange-500 shrink-0" /> 4 Pass + 1 Driver
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Luggage Space</span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 flex items-center gap-1.5 whitespace-nowrap">
                      <Briefcase className="w-4 h-4 text-blue-500 shrink-0" /> 2-3 Large Bags
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Air Conditioning</span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 flex items-center gap-1.5 whitespace-nowrap">
                      <Snowflake className="w-4 h-4 text-cyan-500 shrink-0" /> High-Cool AC
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Best Suited For</span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 flex items-center gap-1.5 truncate whitespace-nowrap">
                      <Plane className="w-4 h-4 text-emerald-500 shrink-0" /> Airport & City
                    </p>
                  </div>
                </div>

                {/* Amenities Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-600 font-medium">
                  <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-100 flex items-center gap-1 whitespace-nowrap">
                    <Check className="w-3 h-3 shrink-0" /> 100% Sanitized
                  </span>
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-100 flex items-center gap-1 whitespace-nowrap">
                    <Zap className="w-3 h-3 shrink-0" /> Fastag Enabled
                  </span>
                  <span className="bg-orange-50 text-orange-700 px-2.5 py-1 rounded-lg border border-orange-100 flex items-center gap-1 whitespace-nowrap">
                    <Check className="w-3 h-3 shrink-0" /> Mobile Charger
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1 whitespace-nowrap">
                    <Check className="w-3 h-3 shrink-0" /> Music System
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-5 sm:p-7 pt-0">
              <a 
                href="https://wa.me/919637886385?text=Hello%20Navneet%20ji,%20I%20want%20to%20inquire%20and%20book%20Swift%20Dzire%20Sedan." 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white text-center font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-orange-600/25 transition flex items-center justify-center space-x-2 active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                <span>Book Swift Dzire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Car 2: Maruti Ertiga 7-Seater MUV */}
          <div className="rounded-3xl border-2 border-orange-500/40 overflow-hidden bg-white hover:shadow-2xl hover:border-orange-500 transition-all duration-300 flex flex-col justify-between shadow-sm relative group">
            
            <div>
              {/* Image with Floating Badges */}
              <div className="h-60 sm:h-72 bg-slate-100 relative overflow-hidden">
                <img src="/assets/images/ertiga.jpg" alt="Maruti Ertiga 7 Seater MUV Cab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-3.5 py-1 rounded-full font-bold shadow-md uppercase tracking-wider whitespace-nowrap">
                  Family & Yatra Special
                </div>
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-white text-xs px-3.5 py-1 rounded-full font-bold shadow-md whitespace-nowrap">
                  6 + 1 Seats • Dual AC
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-semibold text-orange-300">7-Seater Family MUV</span>
                  <h4 className="text-lg font-bold text-white leading-tight">Maruti Suzuki Ertiga</h4>
                </div>
              </div>
              
              <div className="p-5 sm:p-7 space-y-5">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Ertiga 7-Seater MUV</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Spacious 3-row comfort, dual AC cooling & ample room for family luggage.</p>
                </div>
                
                {/* 2x2 Specs Bento Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Capacity</span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 flex items-center gap-1.5 whitespace-nowrap">
                      <Users className="w-4 h-4 text-orange-500 shrink-0" /> 6 Pass + 1 Driver
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Luggage Space</span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 flex items-center gap-1.5 whitespace-nowrap">
                      <Briefcase className="w-4 h-4 text-blue-500 shrink-0" /> 4-5 Bags + Roof
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Air Conditioning</span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 flex items-center gap-1.5 whitespace-nowrap">
                      <Snowflake className="w-4 h-4 text-cyan-500 shrink-0" /> Dual Front & Rear AC
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Best Suited For</span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 flex items-center gap-1.5 truncate whitespace-nowrap">
                      <Plane className="w-4 h-4 text-amber-500 shrink-0" /> Shirdi, Yatra & Goa
                    </p>
                  </div>
                </div>

                {/* Amenities Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-600 font-medium">
                  <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-100 flex items-center gap-1 whitespace-nowrap">
                    <Check className="w-3 h-3 shrink-0" /> Pushback Seats
                  </span>
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-100 flex items-center gap-1 whitespace-nowrap">
                    <ShieldCheck className="w-3 h-3 shrink-0" /> All India Permit
                  </span>
                  <span className="bg-orange-50 text-orange-700 px-2.5 py-1 rounded-lg border border-orange-100 flex items-center gap-1 whitespace-nowrap">
                    <Snowflake className="w-3 h-3 shrink-0" /> Dual Chilled AC
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1 whitespace-nowrap">
                    <Check className="w-3 h-3 shrink-0" /> USB Charging
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-5 sm:p-7 pt-0">
              <a 
                href="https://wa.me/919637886385?text=Hello%20Navneet%20ji,%20I%20want%20to%20inquire%20and%20book%20Maruti%20Ertiga%207%20Seater." 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white text-center font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-orange-600/25 transition flex items-center justify-center space-x-2 active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                <span>Book Maruti Ertiga on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Group Travel Note */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center text-xl sm:text-2xl shrink-0">
              <Bus className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 px-2.5 py-0.5 rounded-full border border-orange-500/30 mb-1 whitespace-nowrap">
                On-Demand Group Travel
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">Need Innova Crysta or 13-26 Seater Tempo Traveller?</h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Large family pilgrimage, wedding group transport, or corporate events — arranged seamlessly on advance booking.</p>
            </div>
          </div>

          <a 
            href="https://wa.me/919637886385?text=Hello%20Navneet%20ji%20(Atharv%20Tours),%20I%20need%20cab/Tempo%20Traveller%20for%20travel." 
            target="_blank" 
            rel="noreferrer"
            className="w-full md:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-2xl transition flex items-center justify-center space-x-2 shrink-0 shadow-lg shadow-emerald-600/20 active:scale-98 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
            <span>Check on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
