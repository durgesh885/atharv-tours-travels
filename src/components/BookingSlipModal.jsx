import React, { useState } from 'react';
import { X, MapPin, Flag, Calendar, Car, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function BookingSlipModal({ isOpen, onClose, bookingData }) {
  const [selectedCar, setSelectedCar] = useState('Swift Dzire (4+1 Sedan)');
  const [customerName, setCustomerName] = useState('');

  if (!isOpen || !bookingData) return null;

  const { pickup, drop, tripType, date } = bookingData;

  const handleSendToWhatsApp = () => {
    const formattedMessage = 
      `🚖 *नवीन गाडी बुकिंग पावती (TICKET)* 🚖%0A` +
      `🚩 *॥ जय मल्हार ॥ - अथर्व टुर्स ॲन्ड ट्रॅव्हल्स*%0A` +
      `═════════════════════%0A` +
      `📍 *कुठून (PICKUP):* ${pickup}%0A` +
      `🎯 *कुठे (DESTINATION):* ${drop || 'Outstation / Local'}%0A` +
      `🔄 *प्रकार (TRIP TYPE):* ${tripType}%0A` +
      `📅 *तारीख (TRAVEL DATE):* ${date || 'Immediate / Today'}%0A` +
      `🚗 *पसंतीची गाडी (CAR):* ${selectedCar}%0A` +
      (customerName.trim() ? `👤 *ग्राहक नाव (NAME):* ${customerName.trim()}%0A` : '') +
      `═════════════════════%0A` +
      `_नमस्कार नवनीत पाटील भाऊ, मी ही बुकिंग पावती पाठवली आहे. कृपया तुमचे सर्वात कमी भाडे (Rate) आणि गाडी उपलब्ध आहे का ते सांगावे._`;

    window.open(`https://wa.me/919637886385?text=${formattedMessage}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full p-5 sm:p-7 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center pb-3 border-b border-slate-100">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Digital Booking Ticket
          </span>
          <h3 className="text-lg font-black text-slate-900 mt-1">
            बुकिंग पावती (Trip Slip Preview)
          </h3>
          <p className="text-[11px] text-slate-500">ही पावती थेट नवनीत पाटील यांच्या WhatsApp वर पाठवली जाईल</p>
        </div>

        {/* Visual Ticket Receipt Card */}
        <div className="my-4 p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-lg border border-slate-800 relative overflow-hidden">
          {/* Subtle watermark badge */}
          <div className="absolute top-3 right-3 text-orange-400 font-extrabold text-[10px] bg-orange-950/80 px-2 py-0.5 rounded-md border border-orange-500/30 whitespace-nowrap">
            🚩 ॥ जय मल्हार ॥
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest text-[10px]">
            ATHARV TOURS & TRAVELS
          </div>

          {/* Route Grid */}
          <div className="mt-3 space-y-2.5 border-t border-b border-slate-800 py-3">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">कुठून (Pickup)</span>
                <p className="text-xs sm:text-sm font-bold text-white leading-tight">{pickup || 'Chakan, Pune'}</p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Flag className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">कुठे (Destination)</span>
                <p className="text-xs sm:text-sm font-bold text-orange-300 leading-tight">{drop || 'Airport / Outstation'}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">प्रकार (Trip)</span>
                <p className="text-xs font-semibold text-slate-200 truncate">{tripType}</p>
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">तारीख (Date)</span>
                <p className="text-xs font-semibold text-slate-200 truncate">{date || 'Immediate / Today'}</p>
              </div>
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> All India Permit Cab
            </span>
            <span>24x7 Doorstep Pickup</span>
          </div>
        </div>

        {/* Vehicle Selection */}
        <div className="space-y-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              पसंतीची गाडी निवडा (Choose Cab)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedCar('Swift Dzire (4+1 AC Sedan)')}
                className={`p-2.5 rounded-xl text-xs font-bold text-left transition border ${
                  selectedCar.includes('Dzire')
                    ? 'border-orange-600 bg-orange-50 text-orange-950 shadow-sm'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>🚗 Swift Dzire</span>
                  {selectedCar.includes('Dzire') && <Check className="w-3.5 h-3.5 text-orange-600" />}
                </div>
                <span className="text-[10px] font-normal text-slate-500 block mt-0.5">4+1 AC Sedan</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCar('Maruti Ertiga (6+1 AC 7-Seater)')}
                className={`p-2.5 rounded-xl text-xs font-bold text-left transition border ${
                  selectedCar.includes('Ertiga')
                    ? 'border-orange-600 bg-orange-50 text-orange-950 shadow-sm'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>🚐 Maruti Ertiga</span>
                  {selectedCar.includes('Ertiga') && <Check className="w-3.5 h-3.5 text-orange-600" />}
                </div>
                <span className="text-[10px] font-normal text-slate-500 block mt-0.5">6+1 AC 7-Seater</span>
              </button>
            </div>
          </div>

          {/* Optional Name Input */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              आपले नाव (Optional)
            </label>
            <input 
              type="text" 
              value={customerName} 
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="e.g. Ramesh Patil" 
              className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:outline-none" 
            />
          </div>

          {/* Send to WhatsApp Big CTA Button */}
          <button 
            type="button"
            onClick={handleSendToWhatsApp}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition flex items-center justify-center space-x-2 text-xs sm:text-sm cursor-pointer pulse-green active:scale-98"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
            <span>WhatsApp वर पावती पाठवा (Send Ticket)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
