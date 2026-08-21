import React, { useState, useRef } from 'react';
import { X, MapPin, Flag, Calendar, Car, ShieldCheck, Check, Sparkles, Download, FileText } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { WhatsAppIcon } from './Icons';

export default function BookingSlipModal({ isOpen, onClose, bookingData }) {
  const [selectedCar, setSelectedCar] = useState('Swift Dzire (4+1 AC Sedan)');
  const [customerName, setCustomerName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const ticketRef = useRef(null);

  if (!isOpen || !bookingData) return null;

  const { pickup, drop, tripType, date } = bookingData;
  const slipId = `ATT-${Math.floor(100000 + Math.random() * 900000)}`;

  // Generate Image from the Ticket DOM Element
  const generateSlipImage = async () => {
    if (!ticketRef.current) return null;
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 3, // Ultra-sharp 3x export
        useCORS: true,
        backgroundColor: '#020617'
      });
      setIsGenerating(false);
      return canvas;
    } catch (err) {
      console.error('Error creating image slip:', err);
      setIsGenerating(false);
      return null;
    }
  };

  // 1. Download image to mobile gallery
  const handleDownloadImage = async () => {
    const canvas = await generateSlipImage();
    if (!canvas) return;

    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `Atharv-Booking-Slip-${slipId}.png`;
    link.click();
  };

  // 2. Download as PDF Ticket
  const handleDownloadPDF = async () => {
    const canvas = await generateSlipImage();
    if (!canvas) return;

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [105, 148] // A6 pocket ticket size
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Atharv-Travel-Ticket-${slipId}.pdf`);
  };

  // 3. Share Image directly to WhatsApp (Web Share API) or Auto-Download + WhatsApp Chat
  const handleSendToWhatsApp = async () => {
    const formattedMessage = 
      `🚖 *नवीन गाडी बुकिंग पावती (TICKET SLIP)* 🚖%0A` +
      `🚩 *॥ जय मल्हार ॥ - अथर्व टुर्स ॲन्ड ट्रॅव्हल्स*%0A` +
      `═════════════════════%0A` +
      `🎫 *पावती क्र (SLIP NO):* ${slipId}%0A` +
      `📍 *कुठून (PICKUP):* ${pickup || 'Chakan, Pune'}%0A` +
      `🎯 *कुठे (DESTINATION):* ${drop || 'Airport / Outstation'}%0A` +
      `🔄 *प्रकार (TRIP TYPE):* ${tripType}%0A` +
      `📅 *तारीख (TRAVEL DATE):* ${date || 'Immediate / Today'}%0A` +
      `🚗 *पसंतीची गाडी (CAR):* ${selectedCar}%0A` +
      (customerName.trim() ? `👤 *ग्राहक नाव (NAME):* ${customerName.trim()}%0A` : '') +
      `═════════════════════%0A` +
      `_नमस्कार नवनीत पाटील भाऊ (+91 96378 86385), मी वरील बुकिंग पावती पाठवली आहे. कृपया तुमचे सर्वात कमी भाडे (Rate) सांगावे._`;

    const canvas = await generateSlipImage();

    // On Mobile: Try Native File Sharing directly to WhatsApp
    if (canvas && navigator.share && navigator.canShare) {
      try {
        canvas.toBlob(async (blob) => {
          if (blob) {
            const file = new File([blob], `Atharv-Booking-Slip-${slipId}.png`, { type: 'image/png' });
            if (navigator.canShare({ files: [file] })) {
              try {
                await navigator.share({
                  files: [file],
                  title: 'Atharv Tours Booking Slip',
                  text: `Atharv Tours & Travels Booking Slip (${slipId}) - ${pickup} to ${drop}`
                });
                onClose();
                return;
              } catch (shareError) {
                // User cancelled or fallback
              }
            }
          }
          // If share fails, auto-download image & open WhatsApp
          handleDownloadImage();
          window.open(`https://wa.me/919637886385?text=${formattedMessage}`, '_blank');
          onClose();
        });
        return;
      } catch (e) {
        console.log('Fallback to download + WhatsApp', e);
      }
    }

    // Default: Auto-download ticket image & open WhatsApp directly
    if (canvas) {
      handleDownloadImage();
    }
    window.open(`https://wa.me/919637886385?text=${formattedMessage}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full p-4 sm:p-6 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200 my-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-center pb-2 border-b border-slate-100">
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Official Digital Ticket Slip
          </span>
          <h3 className="text-lg font-black text-slate-900 mt-1">
            बुकिंग पावती (Digital Travel Ticket)
          </h3>
          <p className="text-[11px] text-slate-500">खालील पावती थेट इमेज/PDF द्वारे WhatsApp वर पाठवा</p>
        </div>

        {/* --- ACTUAL PAPER TICKET CARD (CONVERTED TO IMAGE / PDF) --- */}
        <div 
          ref={ticketRef} 
          className="my-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white shadow-xl border border-slate-800 relative overflow-hidden"
        >
          {/* Decorative side notches for authentic ticket look */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white"></div>
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white"></div>

          {/* Top Ticket Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <div className="flex items-center space-x-2">
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
          <div className="my-3 py-2 border-b border-dashed border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">कुठून (FROM)</span>
                  <strong className="text-xs sm:text-sm text-white">{pickup || 'Chakan, Pune'}</strong>
                </div>
              </div>
              
              <span className="text-orange-400 font-bold text-xs">➔➔</span>

              <div className="text-right flex items-center space-x-2 justify-end">
                <div>
                  <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">कुठे (TO)</span>
                  <strong className="text-xs sm:text-sm text-orange-300">{drop || 'Airport / Outstation'}</strong>
                </div>
                <Flag className="w-4 h-4 text-orange-400 shrink-0" />
              </div>
            </div>

            {/* 3-Column Info Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">प्रकार (TRIP)</span>
                <p className="font-bold text-slate-200 truncate">{tripType}</p>
              </div>
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">तारीख (DATE)</span>
                <p className="font-bold text-slate-200 truncate">{date || 'Today'}</p>
              </div>
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block">गाडी (CAR)</span>
                <p className="font-bold text-orange-400 truncate">{selectedCar.split(' ')[0]} {selectedCar.split(' ')[1]}</p>
              </div>
            </div>
          </div>

          {/* Bottom Slip Credentials & Proprietor */}
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
        {/* --- END OF TICKET --- */}

        {/* Vehicle Selection */}
        <div className="space-y-2.5">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              पसंतीची गाडी निवडा (Choose Cab)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedCar('Swift Dzire (4+1 AC Sedan)')}
                className={`p-2 rounded-xl text-xs font-bold text-left transition border ${
                  selectedCar.includes('Dzire')
                    ? 'border-orange-600 bg-orange-50 text-orange-950 shadow-sm'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>🚗 Swift Dzire</span>
                  {selectedCar.includes('Dzire') && <Check className="w-3.5 h-3.5 text-orange-600" />}
                </div>
                <span className="text-[10px] font-normal text-slate-500 block">4+1 AC Sedan</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCar('Maruti Ertiga (6+1 AC 7-Seater)')}
                className={`p-2 rounded-xl text-xs font-bold text-left transition border ${
                  selectedCar.includes('Ertiga')
                    ? 'border-orange-600 bg-orange-50 text-orange-950 shadow-sm'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>🚐 Maruti Ertiga</span>
                  {selectedCar.includes('Ertiga') && <Check className="w-3.5 h-3.5 text-orange-600" />}
                </div>
                <span className="text-[10px] font-normal text-slate-500 block">6+1 AC 7-Seater</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-1.5 space-y-2">
            
            {/* WhatsApp Big Action (Shares image on mobile + opens chat) */}
            <button 
              type="button"
              disabled={isGenerating}
              onClick={handleSendToWhatsApp}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition flex items-center justify-center space-x-2 text-xs sm:text-sm cursor-pointer pulse-green active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span>{isGenerating ? 'पावती तयार होत आहे...' : 'WhatsApp वर पावती व फोटो पाठवा'}</span>
            </button>

            {/* Dual Download (Image / PDF) */}
            <div className="grid grid-cols-2 gap-2">
              <button 
                type="button"
                disabled={isGenerating}
                onClick={handleDownloadImage}
                className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition flex items-center justify-center space-x-1.5 text-xs cursor-pointer active:scale-98"
              >
                <Download className="w-3.5 h-3.5 text-slate-600" />
                <span>फोटो डाउनलोड (PNG)</span>
              </button>

              <button 
                type="button"
                disabled={isGenerating}
                onClick={handleDownloadPDF}
                className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition flex items-center justify-center space-x-1.5 text-xs cursor-pointer active:scale-98"
              >
                <FileText className="w-3.5 h-3.5 text-orange-600" />
                <span>PDF पावती (Ticket)</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
