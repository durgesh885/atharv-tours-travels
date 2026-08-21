import React from 'react';
import { MapPin, Plane, Mountain, Building2, CheckCircle2, ShieldCheck, Car, Clock, UserCheck } from 'lucide-react';

export default function Services() {
  return (
    <>
      {/* Quick Highlight Bar */}
      <section className="bg-white border-b border-slate-200 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="flex items-center space-x-3.5 p-2">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">All India Permit</h4>
                <p className="text-[10px] sm:text-xs text-slate-500">Goa, Gujarat, Rajasthan & all states</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 p-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl flex-shrink-0">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Swift Dzire & Ertiga</h4>
                <p className="text-[10px] sm:text-xs text-slate-500">AC Sedan (4+1) & 7-Seater MUV (6+1)</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 p-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Puneri Punctuality</h4>
                <p className="text-[10px] sm:text-xs text-slate-500">100% on-time doorstep pickup</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 p-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl flex-shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Direct Owner Booking</h4>
                <p className="text-[10px] sm:text-xs text-slate-500">Navneet Patil • Best direct rates</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full">
              Our Core Cab Services (आमच्या सेवा)
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Reliable Cab Solutions for Every Journey
            </h2>
            <p className="text-slate-600 mt-2 text-xs sm:text-base">
              Mumbai & Pune Airport Taxi, sacred pilgrimage tours, local hourly rentals, and corporate MIDC duties.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Service Card 1: Outstation & Pilgrimage Tours */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl group-hover:bg-orange-600 group-hover:text-white transition shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                    Outstation & Yatra
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Outstation & Pilgrimage Tours</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                  Dedicated outstation cabs for Shirdi, Ashtavinayak 8-Ganpati, Trimbakeshwar, Pandharpur, Goa, and All India family holidays.
                </p>

                <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3.5">
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> All India Tourist Permit</li>
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> Pious, experienced drivers</li>
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> Flexible temple waiting time</li>
                </ul>
              </div>
            </div>

            {/* Service Card 2: Mumbai & Pune Airport Taxi */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:text-white transition shadow-sm">
                    <Plane className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    24x7 Airport Taxi
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Mumbai & Pune Airport Taxi</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                  Punctual doorstep pickup connecting Chakan, Pimpri-Chinchwad, and Pune to Mumbai (T1/T2) & Pune Airports with zero delay.
                </p>

                <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3.5">
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> 100% on-time guaranteed pickup</li>
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> Fastag expressway transit</li>
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> 24x7 late night & early morning runs</li>
                </ul>
              </div>
            </div>

            {/* Service Card 3: Tourism & Sightseeing */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition shadow-sm">
                    <Mountain className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    Sightseeing & City
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Sightseeing & Local Daily Rental</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                  Explore Mahabaleshwar, Lonavala, historic Maharashtra Forts, or book flexible 8 Hrs / 80 Km hourly packages for events & weddings.
                </p>

                <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3.5">
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> 8 Hr / 80 Km local city packages</li>
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> Ghat & hill station experts</li>
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> Wedding & event cab duty</li>
                </ul>
              </div>
            </div>

            {/* Service Card 4: Corporate MIDC Travel */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl group-hover:bg-amber-600 group-hover:text-white transition shadow-sm">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                    Corporate Duty
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Corporate & MIDC Duty</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                  Premium transportation for executive visits, delegate transit, and plant visits across Chakan, Talegaon, and Bhosari MIDC.
                </p>

                <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3.5">
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> Monthly corporate billing</li>
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> Uniformed verified chauffeurs</li>
                  <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" /> Clean premium AC sedans</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
