import React from 'react';
import { Star, CheckCircle2, Edit3, ExternalLink, ThumbsUp } from 'lucide-react';

export default function Reviews({ reviews, onOpenModal }) {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2.5">
              Google Verified Customer Reviews (ग्राहकांचे अनुभव)
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">What Our Happy Customers Say</h2>
            <p className="text-slate-500 text-xs sm:text-base mt-1.5">Verified reviews from daily travelers, families & company clients across Pune & All India trips.</p>
          </div>

          {/* Google Score Summary & CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Google Score Card */}
            <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-3">
              <span className="text-2xl">🌐</span>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-extrabold text-slate-900 text-base sm:text-lg">4.9</span>
                  <div className="text-amber-400 flex">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 font-medium">148+ Google Reviews</p>
              </div>
            </div>

            {/* Leave Review Button */}
            <button 
              onClick={onOpenModal} 
              className="px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-orange-600/20 transition flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Edit3 className="w-4 h-4" />
              <span>Write a Review</span>
            </button>

            {/* Direct Google Map Review Link */}
            <a 
              href="https://maps.app.goo.gl/mdf1mMqxgSdgR5Ds7" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition flex items-center gap-1.5 active:scale-95"
            >
              <ExternalLink className="w-4 h-4 text-blue-600" />
              <span>Review on Google Maps</span>
            </a>
          </div>
        </div>

        {/* Dynamic Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((r) => {
            const initials = r.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'U';
            return (
              <div key={r.id} className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white font-bold flex items-center justify-center text-xs sm:text-sm shadow">
                        {initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                          {r.name}
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium">{r.route}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-amber-400 flex justify-end">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < r.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400">{r.date}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">"{r.comment}"</p>
                </div>
                
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                  <span className="flex items-center text-blue-600 font-medium">
                    🌐 {r.source || 'Verified Review'}
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" /> Recommended
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
