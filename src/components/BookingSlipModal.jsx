import React, { useState } from 'react';
import { X, MapPin, Flag, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

// Native Canvas 2D Ticket Drawer (Instant, 0ms, No external CSS bugs, No white screen crashes!)
function generateTicketBlob(bookingData, selectedCar, customerName, slipId) {
  return new Promise((resolve) => {
    try {
      const width = 900;
      const height = 500;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return resolve(null);

      // Dark background
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#020617');
      grad.addColorStop(0.5, '#0f172a');
      grad.addColorStop(1, '#020617');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Top Orange Accent
      ctx.fillStyle = '#ea580c';
      ctx.fillRect(0, 0, width, 8);

      // Outer Border
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 3;
      ctx.strokeRect(8, 8, width - 16, height - 16);

      // Header: ATHARV TOURS & TRAVELS
      ctx.font = '900 32px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('ATHARV', 40, 58);
      ctx.fillStyle = '#f97316';
      ctx.fillText('TOURS & TRAVELS', 180, 58);

      ctx.font = '500 14px sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText("Pune & Chakan's Trusted 24x7 Cab Service", 40, 86);

      // Right Header: Jay Malhar + Slip No
      ctx.font = 'bold 20px sans-serif';
      ctx.fillStyle = '#fb923c';
      ctx.textAlign = 'right';
      ctx.fillText('🚩 ॥ जय मल्हार ॥', width - 40, 54);

      ctx.font = 'bold 14px monospace';
      ctx.fillStyle = '#64748b';
      ctx.fillText(`पावती क्र: ${slipId}`, width - 40, 82);
      ctx.textAlign = 'left';

      // Divider Line
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(40, 105);
      ctx.lineTo(width - 40, 105);
      ctx.stroke();

      // Route Card Box
      ctx.fillStyle = '#090d16';
      ctx.fillRect(40, 120, width - 80, 105);
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(40, 120, width - 80, 105);

      // Pickup
      ctx.font = 'bold 12px sans-serif';
      ctx.fillStyle = '#34d399';
      ctx.fillText('📍 कुठून (FROM)', 60, 150);

      ctx.font = 'bold 22px sans-serif';
      ctx.fillStyle = '#ffffff';
      const pickupText = (bookingData?.pickup || 'Chakan, Pune').substring(0, 24);
      ctx.fillText(pickupText, 60, 190);

      // Arrow
      ctx.font = 'bold 28px sans-serif';
      ctx.fillStyle = '#f97316';
      ctx.textAlign = 'center';
      ctx.fillText('➔ ➔', width / 2, 180);
      ctx.textAlign = 'left';

      // Drop
      ctx.font = 'bold 12px sans-serif';
      ctx.fillStyle = '#fb923c';
      ctx.fillText('🏁 कुठे (DESTINATION)', width / 2 + 60, 150);

      ctx.font = 'bold 22px sans-serif';
      ctx.fillStyle = '#fed7aa';
      const dropText = (bookingData?.drop || 'Airport / Outstation').substring(0, 24);
      ctx.fillText(dropText, width / 2 + 60, 190);

      // 4 Specs Boxes (Trip, Date, Car, Customer)
      const boxY = 245;
      const boxW = (width - 80 - 30) / 4;
      const boxH = 85;

      const specs = [
        { label: 'प्रकार (TRIP)', val: bookingData?.tripType ? bookingData.tripType.split(' ')[0] : 'One Way', color: '#e2e8f0' },
        { label: 'तारीख (DATE)', val: bookingData?.date || 'आज (Today)', color: '#e2e8f0' },
        { label: 'गाडी (CAR)', val: selectedCar ? selectedCar.split(' ')[0] + ' ' + (selectedCar.split(' ')[1] || '') : 'Swift Dzire', color: '#f97316' },
        { label: 'ग्राहक (NAME)', val: customerName?.trim() || 'ग्राहक (Guest)', color: '#38bdf8' }
      ];

      specs.forEach((item, idx) => {
        const bx = 40 + idx * (boxW + 10);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(bx, boxY, boxW, boxH);
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1;
        ctx.strokeRect(bx, boxY, boxW, boxH);

        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = '#64748b';
        ctx.fillText(item.label, bx + 14, boxY + 26);

        ctx.font = 'bold 15px sans-serif';
        ctx.fillStyle = item.color;
        ctx.fillText(item.val.substring(0, 18), bx + 14, boxY + 58);
      });

      // Bottom Bar / Footer
      ctx.strokeStyle = '#1e293b';
      ctx.beginPath();
      ctx.moveTo(40, 350);
      ctx.lineTo(width - 40, 350);
      ctx.stroke();

      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#10b981';
      ctx.fillText('🛡️ All India Tourist Permit • 24x7 Clean AC Cabs', 40, 395);

      ctx.font = '13px sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('Pune, Chakan MIDC, Bhosari, Talegaon, Pimpri Chinchwad', 40, 422);

      ctx.font = 'bold 15px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'right';
      ctx.fillText('प्रोप्रा. नवनीत पाटील', width - 40, 390);

      ctx.font = 'bold 18px monospace';
      ctx.fillStyle = '#f97316';
      ctx.fillText('📞 +91 96378 86385', width - 40, 420);
      ctx.textAlign = 'left';

      // Export Blob
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/png');
    } catch (e) {
      console.error('Canvas generate error:', e);
      resolve(null);
    }
  });
}

export default function BookingSlipModal({ isOpen, onClose, bookingData }) {
  const [selectedCar, setSelectedCar] = useState('Swift Dzire (4+1 AC Sedan)');
  const [customerName, setCustomerName] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);

  if (!isOpen || !bookingData) return null;

  const { pickup, drop, tripType, date } = bookingData;
  const slipId = `ATT-${Math.floor(100000 + Math.random() * 900000)}`;

  // Handle WhatsApp Direct Redirect with Cloud Image Preview Link
  const handleSendTicketImage = async () => {
    setIsSending(true);
    let uploadedImageUrl = null;

    try {
      // 1. Generate PNG Blob instantly via Native Canvas (1ms)
      const blob = await generateTicketBlob(bookingData, selectedCar, customerName, slipId);

      if (blob) {
        // A. Auto-save/Download PNG Ticket to user's phone/PC
        const localUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = localUrl;
        link.download = `Atharv-Ticket-${slipId}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(localUrl), 1000);

        // B. Upload image to Cloud for WhatsApp Rich Photo Preview
        try {
          const formData = new FormData();
          formData.append('file', blob, `Atharv-Ticket-${slipId}.png`);

          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2500); // 2.5s max

          const uploadRes = await fetch('https://tmpfiles.org/api/v1/upload', {
            method: 'POST',
            body: formData,
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          if (uploadRes.ok) {
            const data = await uploadRes.json();
            if (data?.data?.url) {
              uploadedImageUrl = data.data.url.replace('https://tmpfiles.org/', 'https://tmpfiles.org/dl/');
            }
          }
        } catch (uploadErr) {
          console.log('Cloud upload notice:', uploadErr);
        }

        // C. Clipboard Copy on PC/Laptop
        if (navigator.clipboard && window.ClipboardItem) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ 'image/png': blob })
            ]);
            setCopiedNotification(true);
          } catch (clipErr) {
            console.log('Clipboard copy notice:', clipErr);
          }
        }
      }
    } catch (err) {
      console.error('Image generate error:', err);
    }

    setIsSending(false);

    // Dedicated Fullscreen Live Ticket URL
    const liveTicketUrl = `https://atharv-tours-travels.vercel.app/?ticket=${slipId}&from=${encodeURIComponent(pickup || 'Chakan, Pune')}&to=${encodeURIComponent(drop || 'Mumbai')}&trip=${encodeURIComponent(tripType || 'One Way')}&date=${encodeURIComponent(date || 'Today')}&car=${encodeURIComponent(selectedCar ? selectedCar.split(' ')[0] : 'Dzire')}&name=${encodeURIComponent(customerName.trim())}`;

    // Clean & Short WhatsApp Booking Message for Navneet Patil
    const formattedSlip = `🚩 *॥ जय मल्हार ॥*
🚖 *नवीन गाडी बुकिंग चौकशी (NEW BOOKING INQUIRY)*

नमस्कार नवनीत भाऊ, ग्राहकाने वेबसाइटवरून गाडी बुकिंगची पावती पाठवली आहे.

🎫 *रंगीत डिजिटल पावती पाहण्यासाठी खालील लिंकवर क्लिक करा:*
👉 ${liveTicketUrl}

_कृपया ही पावती पाहून आपले सर्वात कमी भाडे (Best Rate) सांगावे._
✨ *अथर्व टुर्स ॲन्ड ट्रॅव्हल्स (CHAKAN - PUNE)*`;

    // Direct 1-Click Redirect to Navneet Patil WhatsApp (+91 96378 86385)
    window.location.href = `https://wa.me/919637886385?text=${encodeURIComponent(formattedSlip)}`;

    setTimeout(() => {
      onClose();
    }, 1500);
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

        {/* --- VISUAL TICKET CARD IN MODAL --- */}
        <div className="my-3.5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white shadow-xl border border-slate-800 relative overflow-hidden">
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
                <p className="font-bold text-slate-200 truncate">{tripType ? tripType.split(' ')[0] : 'One Way'}</p>
              </div>
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">तारीख (DATE)</span>
                <p className="font-bold text-slate-200 truncate">{date || 'आज (Today)'}</p>
              </div>
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">गाडी (CAR)</span>
                <p className="font-bold text-orange-400 truncate">{selectedCar ? selectedCar.split(' ')[0] : 'Dzire'}</p>
              </div>
            </div>

            {/* Customer Name */}
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
              <span>All India Permit</span>
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
              <span>{isSending ? 'पावती तयार होत आहे...' : 'WhatsApp वर फोटो पावती पाठवा'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
