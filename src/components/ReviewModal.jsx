import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';

export default function ReviewModal({ isOpen, onClose, onSubmitReview }) {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [route, setRoute] = useState('');
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    onSubmitReview({
      id: Date.now(),
      name: name.trim(),
      route: route.trim() || 'Pune Travel',
      rating,
      date: 'Just Now',
      source: 'Website Verified',
      comment: comment.trim()
    });

    setName('');
    setRoute('');
    setComment('');
    setRating(5);
    onClose();
  };

  const ratingLabels = {
    1: '1.0 (Poor)',
    2: '2.0 (Fair)',
    3: '3.0 (Good)',
    4: '4.0 (Very Good)',
    5: '5.0 (Excellent)'
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-50 px-2.5 py-0.5 rounded-full">
            Add Your Experience
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">Leave a Review for Atharv Tours</h3>
          <p className="text-xs text-slate-500">Your genuine review helps other families and travelers in Pune & Chakan!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Your Rating</label>
            <div className="flex items-center space-x-1.5 text-xl text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <Star className={`w-6 h-6 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                </button>
              ))}
              <span className="text-xs text-slate-500 font-bold ml-2">{ratingLabels[rating]}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
              <input 
                type="text" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="eg. Santosh Shinde" 
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:outline-none" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Trip / Route</label>
              <input 
                type="text" 
                required 
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                placeholder="eg. Chakan to Shirdi / Goa" 
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:outline-none" 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Your Review / Experience</label>
            <textarea 
              required 
              rows={3} 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us about the car cleanliness, driver behavior, and overall travel experience..." 
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="pt-1">
            <button 
              type="submit" 
              className="w-full py-2.5 sm:py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-600/30 transition text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Review</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
