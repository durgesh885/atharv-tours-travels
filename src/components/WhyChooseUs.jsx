import React from 'react';
import { Receipt, Clock, Sparkles, UserCheck, Globe2, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full">
            विश्वास आणि खात्री (Why Choose Us)
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            The Atharv Tours & Travels Promise
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-base">
            Experience stress-free highway travel with Pune & Chakan's most trusted tour partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-500/50 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl mb-4">
              <Receipt className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">100% Transparent Rates</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">No surge pricing, no hidden commission fees. Clear direct quote directly from owner Navneet Patil.</p>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-500/50 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">Puneri Punctuality</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Driver arrives 15 minutes before your scheduled reporting time for zero airport or meeting delays.</p>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-500/50 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">Chilled AC & Clean Cabs</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Every vehicle is washed, sanitized, and scent-freshened before your trip with high-power cooling AC.</p>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-500/50 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl mb-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">Polite & Verified Drivers</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Courteous, non-smoking Marathi/Hindi speaking drivers with extensive highway and ghat navigation expertise.</p>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-500/50 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mb-4">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">All India Tourist Permit</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Seamless toll-free passage across Maharashtra, Goa, Gujarat, Karnataka, and all major Indian states.</p>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-500/50 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-xl mb-4">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">24x7 Live Helpline Support</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Immediate phone and WhatsApp support anytime during your trip for complete peace of mind.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
