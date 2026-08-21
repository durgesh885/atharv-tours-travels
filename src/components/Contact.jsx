import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full">
            Contact & Office (संपर्क आणि पत्ता)
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Visit Our Office or Call Anytime 24x7
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-base">
            २४ तास हक्काची गाडी आणि वक्तशीर सेवा — चाकण, पुणे आणि ऑल इंडिया ट्रॅव्हलसाठी थेट नवनीत पाटील यांच्याशी संपर्क साधा!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Bento Contact Details Grid (Left Column) */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Direct Calling Card */}
            <a href="tel:+917507990227" className="p-5 rounded-3xl bg-slate-50 hover:bg-orange-50/70 border border-slate-200 hover:border-orange-300 transition-all duration-300 flex items-start space-x-4 group shadow-sm block">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center text-lg flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Direct Calling (24x7)</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">Available</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5 group-hover:text-orange-600 transition-colors">
                  +91 75079 90227
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Navneet Patil (प्रोप्रा. नवनीत पाटील)</p>
              </div>
            </a>

            {/* WhatsApp Direct Card */}
            <a href="https://wa.me/919637886385?text=Hello%20Navneet%20ji,%20I%20want%20to%20inquire%20about%20cab%20rates." target="_blank" rel="noreferrer" className="p-5 rounded-3xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200 hover:border-emerald-300 transition-all duration-300 flex items-start space-x-4 group shadow-sm block">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-green-600 text-white flex items-center justify-center text-lg flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">WhatsApp Direct Booking</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">1-Tap Chat</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5 group-hover:text-emerald-600 transition-colors">
                  +91 96378 86385
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Instant quotes & vehicle pictures</p>
              </div>
            </a>

            {/* Office Address Card */}
            <a href="https://maps.app.goo.gl/mdf1mMqxgSdgR5Ds7" target="_blank" rel="noreferrer" className="p-5 rounded-3xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-300 transition-all duration-300 flex items-start space-x-4 group shadow-sm block">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center text-lg flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Office Location (कार्यालय)</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                  Kores Heights, Bangala Vasti, Medankarwadi, Chakan, Tal. Khed, Dist. Pune - 410501
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">कोरेस हाईट्स, बंगला वस्ती, मेदनकरवाडी, चाकण</p>
                <span className="text-[11px] text-blue-600 font-bold flex items-center gap-1 mt-1.5 group-hover:translate-x-0.5 transition-transform">
                  <Navigation className="w-3 h-3" /> View on Google Maps
                </span>
              </div>
            </a>

            {/* Email & Corporate Duty Card */}
            <a href="mailto:navnit9637@gmail.com" className="p-5 rounded-3xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all duration-300 flex items-start space-x-4 group shadow-sm block">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-900 text-white flex items-center justify-center text-lg flex-shrink-0 shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Corporate & Billing Inquiries</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">navnit9637@gmail.com</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">GST invoices, corporate contracts & queries</p>
              </div>
            </a>

          </div>

          {/* Google Maps Embed & Interactive Directions (Right Column) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Interactive Google Maps Frame */}
            <div className="h-80 sm:h-[420px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 relative shadow-md">
              <iframe 
                title="Atharv Tours and Travels Exact Location Map"
                src="https://maps.google.com/maps?q=18.7387842,73.8608724&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
              
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-600" /> Medankarwadi, Chakan Hub
              </div>
            </div>

            {/* Bottom Action & Directions Banner */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-6 rounded-3xl shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center text-xl flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">
                    Atharv Tours & Travels • Chakan Office
                  </h4>
                  <p className="text-slate-400 text-xs mt-0.5">
                    GPS: 18.7387° N, 73.8608° E • Medankarwadi, Chakan, Pune
                  </p>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/mdf1mMqxgSdgR5Ds7" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-orange-600/30 transition flex items-center justify-center space-x-2 flex-shrink-0 active:scale-98"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (दिशा पहा)</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
