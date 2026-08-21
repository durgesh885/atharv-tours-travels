import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import ReviewModal from './components/ReviewModal';

const DEFAULT_REVIEWS = [
  {
    id: 1,
    name: 'Mahesh Gunjal',
    route: 'Chakan to Mumbai Airport (T2)',
    rating: 5,
    date: '2 days ago',
    source: 'Google Maps Review',
    comment: 'Navneet bhau chi gaadi ekdum clean hoti. Time var pickup kela aani Mumbai airport la agdi safe pohchavla. Highly recommended for airport transfers!'
  },
  {
    id: 2,
    name: 'Pooja Deshmukh',
    route: 'Pune to Shirdi & Shani Shingnapur',
    rating: 5,
    date: '1 week ago',
    source: 'Google Maps Review',
    comment: 'Booked Ertiga 7-seater for our family temple trip. Very comfortable ride, chilled AC throughout, and polite driver. Best tour service in Chakan.'
  },
  {
    id: 3,
    name: 'Rohit Kulkarni',
    route: 'Chakan MIDC Corporate Duty',
    rating: 5,
    date: '2 weeks ago',
    source: 'Google Maps Review',
    comment: 'Regular client for plant visits and executive airport drops. 100% punctual and professional billing. Keep up the good work!'
  }
];

export default function App() {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('atharv_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return DEFAULT_REVIEWS;
  });

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('atharv_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white pb-20 sm:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <WhyChooseUs />
        <Reviews 
          reviews={reviews} 
          onOpenModal={() => setIsReviewModalOpen(true)} 
        />
        <Contact />
      </main>
      <Footer />
      <MobileBottomBar />
      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)} 
        onSubmitReview={handleAddReview} 
      />
    </div>
  );
}
