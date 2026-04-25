import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    feedback: '',
    service: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const servicesList = [
    'Electrical Repair', 'Appliance Maintenance', 'HVAC Service', 'General Consultation'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const sheetData = {
        type: 'feedback',
        ...formData
      };

      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify(sheetData),
        });
      }
      setSuccess(true);
      setFormData({ name: '', rating: 5, feedback: '', service: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#0B1B32] p-12 rounded-3xl border border-slate-800 shadow-2xl">
            <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-white">Thank You for Your Feedback!</h2>
            <p className="text-slate-400 text-lg mb-8">
              Your insights help us refine our technical expertise.
            </p>
            <button 
              onClick={() => setSuccess(false)}
              className="bg-accent text-[#0B1B32] px-8 py-3 rounded-full font-bold hover:bg-accent-hover transition-all"
            >
              Submit Another Review
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="feedback" className="py-24 bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 text-left">
            <div>
              <span className="inline-block px-3 py-1 bg-[#F5A623]/10 text-[#F5A623] text-[12px] font-bold uppercase tracking-widest rounded mb-4">Share Your Experience</span>
              <h2 className="text-[48px] leading-[1.2] font-bold text-white tracking-[-0.02em]">We Value Your Feedback</h2>
              <p className="text-[18px] leading-[1.6] text-slate-400 max-w-md mt-4">Your insights help us refine our technical expertise and ensure we continue delivering the seamless, reliable service you deserve.</p>
            </div>
            <div className="relative hidden lg:block">
              <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800/50 aspect-video flex items-center justify-center p-8 text-center">
                <div className="space-y-4">
                  <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <span key={i} className="material-symbols-outlined text-[#F5A623] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <h3 className="text-[24px] font-semibold text-white">98% Satisfaction Rate</h3>
                  <p className="text-slate-400">Join thousands of happy homeowners who trust our expertise.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#0B1B32] p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl text-left">
              <div className="space-y-2">
                <label className="block text-slate-300 text-[12px] font-bold uppercase tracking-wider">Full Name</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border-2 border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] transition-colors" 
                  placeholder="John Doe" 
                  type="text"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-slate-300 text-[12px] font-bold uppercase tracking-wider">Service Received</label>
                  <div className="relative">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border-2 border-slate-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#F5A623] transition-colors"
                      required
                    >
                      <option value="">Select Service</option>
                      {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3.5 text-slate-500 pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-slate-300 text-[12px] font-bold uppercase tracking-wider">Rating</label>
                  <div className="flex gap-2 py-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span 
                        key={star}
                        onClick={() => handleRatingChange(star)}
                        className="material-symbols-outlined text-[#F5A623] cursor-pointer"
                        style={{ fontVariationSettings: formData.rating >= star ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-slate-300 text-[12px] font-bold uppercase tracking-wider">Your Feedback</label>
                <textarea 
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border-2 border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] transition-colors" 
                  placeholder="How can we improve?" 
                  rows="4"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#F5A623] hover:bg-[#ffb955] text-[#0B1B32] font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-lg"
              >
                {loading ? <Loader2 className="animate-spin" /> : (
                  <>
                    Submit Feedback
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
