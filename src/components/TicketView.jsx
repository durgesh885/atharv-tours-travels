import React, { useRef } from 'react';
import { MapPin, Flag, Calendar, Car, ShieldCheck, Download, Phone, ArrowLeft, Sparkles, Check } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function TicketView({ ticketData, onBackToHome }) {
  const { pickup, drop, tripType, date, car, name, slip } = ticketData;
  const slipId = slip || `ATT-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    const width = 900;
    const height = 500;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dark gradient background
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#020617');
    grad.addColorStop(0.5, '#0f172a');
    grad.addColorStop(1, '#020617');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Accent bar
    ctx.fillStyle = '#ea580c';
    ctx.fillRect(0, 0, width, 8);

    // Border
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 3;
    ctx.strokeRect(8, 8, width - 16, height - 16);

    // Header
    ctx.font = '900 32px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('ATHARV', 40, 58);
    ctx.fillStyle = '#f97316';
    ctx.fillText('TOURS & TRAVELS', 180, 58);

    ctx.font = '500 14px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText("Pune & Chakan's Trusted 24x7 Cab Service", 40, 86);

    // Right Header
    ctx.font = 'bold 20px sans-serif';
    ctx.fillStyle = '#fb923c';
    ctx.textAlign = 'right';
    ctx.fillText('🚩 ॥ जय मल्हार ॥', width - 40, 54);

    ctx.font = 'bold 14px monospace';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`पावती क्र: ${slipId}`, width - 40, 82);
    ctx.textAlign = 'left';

    // Divider
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, 105);
    ctx.lineTo(width - 40, 105);
    ctx.stroke();

    // Route Card
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
    ctx.fillText((pickup || 'Chakan, Pune').substring(0, 24), 60, 190);

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
    ctx.fillText((drop || 'Airport / Outstation').substring(0, 24), width / 2 + 60, 190);

    // 4 Specs
    const boxY = 245;
    const boxW = (width - 80 - 30) / 4;
    const boxH = 85;

    const specs = [
      { label: 'प्रकार (TRIP)', val: tripType ? tripType.split(' ')[0] : 'One Way', color: '#e2e8f0' },
      { label: 'तारीख (DATE)', val: date || 'आज (Today)', color: '#e2e8f0' },
      { label: 'गाडी (CAR)', val: car ? car.split(' ')[0] : 'Swift Dzire', color: '#f97316' },
      { label: 'ग्राहक (NAME)', val: name?.trim() || 'ग्राहक (Guest)', color: '#38bdf8' }
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

    // Footer
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

    // Download PNG
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Atharv-Ticket-${slipId}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }
    }, 'image/png');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 selection:bg-orange-500 selection:text-white">
      {/* Top Banner */}
      <div className="max-w-xl w-full text-center space-y-2 mb-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-orange-400 bg-orange-950/60 border border-orange-500/40 px-3 py-1 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-orange-400" /> अधिकृत डिजिटल पावती (Official Ticket)
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-white">
          अथर्व टुर्स ॲन्ड ट्रॅव्हल्स - बुकिंग पावती
        </h1>
        <p className="text-xs text-slate-400">
          🚩 ॥ जय मल्हार ॥ • प्रोप्रा. नवनीत पाटील (+91 96378 86385)
        </p>
      </div>

      {/* --- FULLSCREEN TICKET CARD --- */}
      <div className="max-w-xl w-full p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-orange-500/40 shadow-2xl relative overflow-hidden my-2">
        
        {/* Ticket Notches */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950"></div>
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950"></div>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-base sm:text-lg font-black text-white tracking-tight">ATHARV <span className="text-orange-500">TRAVELS</span></span>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-orange-600 text-white rounded">24x7</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">Pune & Chakan's Trusted Cabs</p>
          </div>
          <div className="text-right">
            <span className="text-orange-400 font-extrabold text-xs block">🚩 ॥ जय मल्हार ॥</span>
            <span className="text-[10px] text-slate-400 font-mono font-bold">{slipId}</span>
          </div>
        </div>

        {/* Route */}
        <div className="my-4 p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">कुठून (FROM)</span>
                <strong className="text-sm sm:text-base text-white">{pickup || 'Chakan, Pune'}</strong>
              </div>
            </div>

            <span className="text-orange-400 font-extrabold text-sm px-2">➔➔</span>

            <div className="text-right flex items-center space-x-2.5 justify-end">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">कुठे (TO)</span>
                <strong className="text-sm sm:text-base text-orange-300">{drop || 'Airport / Outstation'}</strong>
              </div>
              <Flag className="w-5 h-5 text-orange-400 shrink-0" />
            </div>
          </div>
        </div>

        {/* 4 Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[9px] text-slate-400 font-bold block uppercase">प्रकार (TRIP)</span>
            <p className="font-bold text-slate-200 mt-0.5">{tripType || 'One Way'}</p>
          </div>
          <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[9px] text-slate-400 font-bold block uppercase">तारीख (DATE)</span>
            <p className="font-bold text-slate-200 mt-0.5">{date || 'आज (Today)'}</p>
          </div>
          <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[9px] text-slate-400 font-bold block uppercase">गाडी (CAR)</span>
            <p className="font-bold text-orange-400 mt-0.5">{car || 'Swift Dzire'}</p>
          </div>
          <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[9px] text-slate-400 font-bold block uppercase">ग्राहक (NAME)</span>
            <p className="font-bold text-sky-400 mt-0.5">{name || 'Customer'}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-3 mt-4 text-[10px]">
          <div className="flex items-center space-x-1 text-emerald-400 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>All India Permit • Clean AC Cabs</span>
          </div>
          <div className="text-right">
            <span className="text-white font-bold block">प्रोप्रा. नवनीत पाटील</span>
            <span className="text-orange-400 font-mono font-bold">+91 96378 86385</span>
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="max-w-xl w-full grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3">
        <button
          onClick={handleDownload}
          className="py-3 px-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition"
        >
          <Download className="w-4 h-4" />
          <span>फोटो सेव्ह करा (PNG)</span>
        </button>

        <a
          href="tel:+919637886385"
          className="py-3 px-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition text-center"
        >
          <Phone className="w-4 h-4 text-orange-400" />
          <span>थेट कॉल करा</span>
        </a>

        <button
          onClick={onBackToHome}
          className="col-span-2 sm:col-span-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>मुख्य वेबसाइट</span>
        </button>
      </div>

    </div>
  );
}
