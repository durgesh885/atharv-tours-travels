import React, { useState, useRef } from 'react';
import { X, MapPin, Flag, Calendar, Car, ShieldCheck, Check, Sparkles, Image as ImageIcon, Copy } from 'lucide-react';
import html2canvas from 'html2canvas';
import { WhatsAppIcon } from './Icons';

export default function BookingSlipModal({ isOpen, onClose, bookingData }) {
  const [selectedCar, setSelectedCar] = useState('Swift Dzire (4+1 AC Sedan)');
  const [customerName, setCustomerName] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const ticketRef = useRef(null);

  if (!isOpen || !bookingData) return null;

  const { pickup, drop, tripType, date } = bookingData;
  const slipId = `ATT-${Math.floor(100000 + Math.random() * 900000)}`;

  // Handle WhatsApp Image Share & Fallback
  const handleSendTicketImage = async () => {
    setIsSending(true);

    try {
      if (ticketRef.current) {
        const canvas = await html2canvas(ticketRef.current, {
          scale: 2.5,
          useCORS: true,
          backgroundColor: '#020617'
        });

        // Auto-download PNG image file to Gallery/Downloads
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `Atharv-Ticket-${slipId}.png`;
        link.click();

        // 1. On Mobile with Web Share API (Active on HTTPS / Production)
        if (navigator.share && navigator.canShare) {
          const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
          if (blob) {
            const file = new File([blob], `Atharv-Ticket-${slipId}.png`, { type: 'image/png' });
            if (navigator.canShare({ files: [file] })) {
              try {
                await navigator.share({
                  files: [file],
                  title: 'Atharv Tours Booking Ticket Slip'
                });
                setIsSending(false);
                onClose();
                return;
              } catch (shareErr) {
                console.log('Native share canceled/fallback:', shareErr);
                // If user interacted with the share sheet (sent or dismissed), do not open text fallback
                if (shareErr.name === 'AbortError') {
                  setIsSending(false);
                  onClose();
                  return;
                }
              }
            }
          }
        }

        // 2. On Laptops / PCs: Copy Image directly to Clipboard
        if (navigator.clipboard && window.ClipboardItem) {
          try {
            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            if (blob) {
              await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
              ]);
              setCopiedNotification(true);
            }
          } catch (clipErr) {
            console.log('Clipboard copy fallback', clipErr);
          }
        }
      }
    } catch (err) {
      console.log('Image generation error:', err);
    }

    setIsSending(false);

    // Formatted WhatsApp Receipt (Clear, Beautiful & Structured for Navneet Patil)
    const formattedSlip = `🚩 *॥ जय मल्हार ॥*
🎫 *नवीन गाडी बुकिंग पावती (TICKET SLIP)*
━━━━━━━━━━━━━━━━━━━━
📌 *पावती क्र (SLIP NO):* ${slipId}
${customerName.trim() ? `👤 *ग्राहक (CUSTOMER):* ${customerName.trim()}\n` : ''}📍 *कुठून (PICKUP):* ${pickup || 'Chakan, Pune'}
🏁 *कुठे (DESTINATION):* ${drop || 'Airport / Outstation'}
🔄 *प्रकार (TRIP TYPE):* ${tripType}
📅 *तारीख (DATE):* ${date || 'आज (Today)'}
🚗 *गाडी (VEHICLE):* ${selectedCar}
━━━━━━━━━━━━━━━━━━━━
✨ *अथर्व टुर्स ॲन्ड ट्रॅव्हल्स (CHAKAN - PUNE)*
👑 *प्रोप्रा. नवनीत पाटील* (📞 +91 96378 86385)
🛡️ *24x7 Clean AC Cabs • All India Tourist Permit*
━━━━━━━━━━━━━━━━━━━━
_नमस्कार नवनीत भाऊ, वरील बुकिंगसाठी आपले सर्वात कमी भाडे (Best Rate) सांगावे._`;

    // Open WhatsApp Chat with structured receipt
    window.open(`https://wa.me/919637886385?text=${encodeURIComponent(formattedSlip)}`, '_blank');
    
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-150 my-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center pb-2 border-b border-slate-100">
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-orange-500" /> Digital Travel Ticket
          </span>
          <h3 className="text-lg font-black text-slate-900 mt-1">
            बुकिंग पावती (Ticket Slip)
          </h3>
          <p className="text-[11px] text-slate-500">ही रंगीत पावती थेट नवनीत पाटील यांच्या WhatsApp वर पाठवली जाईल</p>
        </div>

        {/* --- ACTUAL COLORFUL TICKET CARD --- */}
        <div 
          ref={ticketRef} 
          className="my-3.5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white shadow-xl border border-slate-800 relative overflow-hidden"
        >
          {/* Ticket Notches */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white"></div>
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white"></div>

          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-sm font-black text-white tracking-tight">ATHARV <span className="text-orange-500">TRAVELS</span></span>
                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 bg-orange-500 text-white rounded">24x7</span>
              </div>
              <p className="text-[9px] text-slate-400 mt-0.5">Pune & Chakan's Trusted Cabs</p>
            </div>
            <div className="text-right">
              <span className="text-orange-400 font-extrabold text-[11px] block">🚩 ॥ जय मल्हार ॥</span>
              <span className="text-[9px] text-slate-500 font-mono">{slipId}</span>
            </div>
          </div>

          {/* Route Section */}
          <div className="my-2.5 py-2 border-b border-dashed border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">कुठून (FROM)</span>
                  <strong className="text-xs sm:text-sm text-white leading-tight">{pickup || 'Chakan, Pune'}</strong>
                </div>
              </div>
              
              <span className="text-orange-400 font-bold text-xs px-2">➔➔</span>

              <div className="text-right flex items-center space-x-2 justify-end">
                <div>
                  <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">कुठे (TO)</span>
                  <strong className="text-xs sm:text-sm text-orange-300 leading-tight">{drop || 'Airport / Outstation'}</strong>
                </div>
                <Flag className="w-4 h-4 text-orange-400 shrink-0" />
              </div>
            </div>

            {/* 3-Column Specs */}
            <div className="grid grid-cols-3 gap-2 pt-1.5 text-[10px] bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">प्रकार (TRIP)</span>
                <p className="font-bold text-slate-200 truncate">{tripType.split(' ')[0]}</p>
              </div>
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">तारीख (DATE)</span>
                <p className="font-bold text-slate-200 truncate">{date || 'आज (Today)'}</p>
              </div>
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">गाडी (CAR)</span>
                <p className="font-bold text-orange-400 truncate">{selectedCar.split(' ')[0]} {selectedCar.split(' ')[1]}</p>
              </div>
            </div>

            {/* Customer Name on Ticket if typed */}
            {customerName.trim() && (
              <div className="flex items-center justify-between text-[10px] bg-orange-950/40 border border-orange-500/30 px-2.5 py-1 rounded-lg text-orange-200">
                <span className="text-[8px] uppercase font-bold text-orange-400">ग्राहक (CUSTOMER):</span>
                <span className="font-bold">{customerName.trim()}</span>
              </div>
            )}
          </div>

          {/* Credentials */}
          <div className="flex items-center justify-between text-[9px] text-slate-400 pt-0.5">
            <div className="flex items-center space-x-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3 h-3" />
              <span>All India Tourist Permit</span>
            </div>
            <div className="text-right">
              <span className="text-white font-bold block">प्रोप्रा. नवनीत पाटील</span>
              <span className="text-orange-400 font-mono">+91 96378 86385</span>
            </div>
          </div>
        </div>
        {/* --- END TICKET --- */}

        {/* Vehicle Selection */}
        <div className="space-y-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              पसंतीची गाडी निवडा (Choose Cab)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedCar('Swift Dzire (4+1 AC Sedan)')}
                className={`p-2.5 rounded-xl text-xs font-bold text-left transition border ${
                  selectedCar.includes('Dzire')
                    ? 'border-orange-600 bg-orange-50 text-orange-950 shadow-sm ring-1 ring-orange-500'
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
                    ? 'border-orange-600 bg-orange-50 text-orange-950 shadow-sm ring-1 ring-orange-500'
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

          {/* Customer Name */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              आपले नाव (Name - Optional)
            </label>
            <input 
              type="text" 
              value={customerName} 
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="e.g. Rahul Shinde" 
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:outline-none" 
            />
          </div>

          {/* Notification if copied */}
          {copiedNotification && (
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>पावती फोटो कॉपी केला आहे! WhatsApp मध्ये फक्त <strong>Ctrl + V (Paste)</strong> करा.</span>
            </div>
          )}

          {/* Send Ticket to WhatsApp */}
          <div className="pt-1">
            <button 
              type="button"
              disabled={isSending}
              onClick={handleSendTicketImage}
              className="w-full py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-2xl shadow-xl shadow-emerald-600/30 transition flex items-center justify-center space-x-2 text-sm cursor-pointer pulse-green active:scale-98"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <span>{isSending ? 'पावती फोटो तयार होत आहे...' : 'WhatsApp वर फोटो पावती पाठवा'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
