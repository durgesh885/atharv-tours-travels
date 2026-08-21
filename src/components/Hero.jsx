import React, { useState } from 'react';
import { MapPin, Flag, Calendar, Phone, Snowflake, Star, ShieldCheck, Clock, ArrowDownUp, Check } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const TRIP_TYPES = [
  { id: 'One Way (एकेरी)', label: 'One Way', icon: '➔' },
  { id: 'Round Trip (जाणे-येणे)', label: 'Round Trip', icon: '⇄' },
  { id: 'Airport Taxi (मुंबई/पुणे)', label: 'Airport Taxi', icon: '✈️' },
  { id: 'Local Daily Rental (8H/80K)', label: 'Local Rental', icon: '⏱️' }
];

export default function Hero() {
  const [pickup, setPickup] = useState('Chakan, Pune');
  const [drop, setDrop] = useState('');
  const [tripType, setTripType] = useState('One Way (एकेरी)');
  const [date, setDate] = useState('');

  const handleSwap = () => {
    const temp = pickup;
    setPickup(drop || 'Chakan, Pune');
    setDrop(temp);
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    let message = '';
    if (drop.trim()) {
      message = `🚖 *NEW CAB INQUIRY - ATHARV TOURS & TRAVELS* 🚖%0A` +
        `───────────────────────%0A` +
        `📍 *Pickup (कुठून):* ${encodeURIComponent(pickup)}%0A` +
        `🎯 *Drop (कुठे):* ${encodeURIComponent(drop)}%0A` +
        `🔄 *Trip Type:* ${encodeURIComponent(tripType)}%0A` +
        `📅 *Travel Date:* ${encodeURIComponent(date || 'Immediate / Planned')}%0A` +
        `───────────────────────%0A` +
        `_Hello Navneet Patil ji, please share the best cab fare & car availability._`;
    } else {
      message = `🚖 *CAB INQUIRY - ATHARV TOURS & TRAVELS* 🚖%0A` +
        `───────────────────────%0A` +
        `📍 *Pickup Area:* ${encodeURIComponent(pickup)}%0A` +
        `🔄 *Trip Type:* ${encodeURIComponent(tripType)}%0A` +
        `───────────────────────%0A` +
        `_Hello Navneet Patil ji, I want to book a cab. Please share your rates._`;
    }
    window.open(`https://wa.me/919637886385?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="hero-bg text-white py-12 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Cultural Badge (Single Line) */}
            <div className="inline-flex items-center gap-2 bg-orange-600/30 border border-orange-500/40 text-orange-200 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm whitespace-nowrap">
              <span>🚩 ॥ जय मल्हार ॥</span>
              <span className="text-orange-400">•</span>
              <span>24x7 Cab & Car Rental</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Pune & Chakan to All India <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200">
                Reliable Cab & Car Rental
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-slate-200 text-xs sm:text-base max-w-2xl leading-relaxed">
              Clean AC <strong>Swift Dzire & Ertiga 7-Seater</strong> cabs ready 24x7 for Mumbai Airport drops, Shirdi & Ashtavinayak yatra, Goa holidays, and Chakan MIDC corporate duties. Direct owner booking with <strong>Navneet Patil</strong>.
            </p>

            {/* Quick Mobile Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a 
                href="tel:+919637886385" 
                className="px-4 py-3 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700 shadow-md flex items-center gap-2 active:scale-95 transition whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Call +91 96378 86385</span>
              </a>

              <a 
                href="https://wa.me/919637886385?text=Hello%20Navneet%20ji,%20I%20want%20to%20inquire%20about%20a%20cab." 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-2 active:scale-95 transition whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp Quote</span>
              </a>
            </div>

            {/* 4 Trust Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl pt-2">
              
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-3 border border-slate-700/80 shadow-sm whitespace-nowrap">
                <span className="text-sm sm:text-base font-extrabold text-orange-400 flex items-center gap-1">
                  <Snowflake className="w-3.5 h-3.5 text-orange-300 shrink-0" /> 100%
                </span>
                <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium mt-0.5">Clean AC Cabs</p>
              </div>

              <a href="#reviews" className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-3 border border-slate-700/80 hover:border-amber-400 transition block whitespace-nowrap">
                <span className="text-sm sm:text-base font-extrabold text-amber-400 flex items-center gap-1">
                  4.9 <Star className="w-3.5 h-3.5 fill-amber-400 shrink-0" />
                </span>
                <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium mt-0.5">Google Verified</p>
              </a>

              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-3 border border-slate-700/80 shadow-sm whitespace-nowrap">
                <span className="text-sm sm:text-base font-extrabold text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" /> All India
                </span>
                <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium mt-0.5">Tourist Permit</p>
              </div>

              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-3 border border-slate-700/80 shadow-sm whitespace-nowrap">
                <span className="text-sm sm:text-base font-extrabold text-blue-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-300 shrink-0" /> 24x7
                </span>
                <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium mt-0.5">Doorstep Pickup</p>
              </div>

            </div>
          </div>

          {/* Right Hero Booking Card (Mobile-First Clean & Fast) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-2xl text-slate-800 border border-slate-100 space-y-4">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                    Book Your Cab (गाडी बुक करा)
                  </h3>
                  <p className="text-[11px] text-slate-500 whitespace-nowrap">Doorstep pickup in Pune & Chakan</p>
                </div>
                <span className="text-xs font-extrabold text-orange-600 shrink-0">🚩 ॥ जय मल्हार ॥</span>
              </div>

              {/* Trip Type Select Pills */}
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Select Trip Type
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {TRIP_TYPES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTripType(t.id)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold text-left transition flex items-center justify-between whitespace-nowrap ${
                        tripType === t.id
                          ? 'bg-orange-600 text-white shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      <span className="truncate">{t.label}</span>
                      <span className="text-[10px] opacity-80 ml-1 shrink-0">{t.icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Inputs Container */}
              <form onSubmit={handleWhatsAppBooking} className="space-y-3 pt-1">
                
                {/* Pickup Location */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    <MapPin className="w-3 h-3 inline text-emerald-600 mr-1" /> Pickup Location (कुठून)
                  </label>
                  <input 
                    type="text" 
                    value={pickup} 
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="e.g. Chakan, Pune, Bhosari, Pimpri" 
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none font-medium text-slate-800 transition" 
                  />
                </div>

                {/* Swap Divider */}
                <div className="flex items-center justify-between -my-1.5 px-2">
                  <div className="h-px bg-slate-200 flex-1"></div>
                  <button 
                    type="button" 
                    onClick={handleSwap}
                    className="mx-2 p-1.5 rounded-full bg-slate-100 hover:bg-orange-100 hover:text-orange-600 text-slate-600 transition shadow-sm text-xs"
                    title="Swap Locations"
                  >
                    <ArrowDownUp className="w-3 h-3" />
                  </button>
                  <div className="h-px bg-slate-200 flex-1"></div>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    <Flag className="w-3 h-3 inline text-orange-600 mr-1" /> Destination (कुठे)
                  </label>
                  <input 
                    type="text" 
                    value={drop} 
                    onChange={(e) => setDrop(e.target.value)}
                    placeholder="e.g. Mumbai Airport, Shirdi, Goa" 
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none font-medium text-slate-800 transition" 
                  />
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    <Calendar className="w-3 h-3 inline text-slate-500 mr-1" /> Travel Date (तारीख)
                  </label>
                  <input 
                    type="text" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="e.g. Today / 25 Aug" 
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none font-medium text-slate-800 transition" 
                  />
                </div>

                {/* WhatsApp Button */}
                <button 
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/25 transition flex items-center justify-center space-x-2 text-xs sm:text-sm cursor-pointer pulse-green active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                  <span>Get Instant Fare on WhatsApp</span>
                </button>
              </form>

              {/* Owner Trust Note */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 whitespace-nowrap">
                <span>Owner: <strong className="text-slate-800 font-bold">Navneet Patil</strong></span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Best Rates
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
