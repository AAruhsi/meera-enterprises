import React, { useState } from 'react';
import { MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

const BookingForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    brand: '',
    date: '',
    time: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone required';
    if (!formData.service) newErrors.service = 'Service required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const servicesList = [
    'AC Repair', 'Washing Machine', 'Fridge Repair', 'General Electrical', 'Microwave/OTG', 'RO Purifier', 'Electric Geyser', 'Chimney Service', 'TV Repair'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const sheetData = {
        type: 'booking',
        ...formData
      };

      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify(sheetData),
        });
      }

      const OWNER_WHATSAPP = import.meta.env.VITE_OWNER_WHATSAPP;
      const message = `*New Service Booking*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n${formData.brand ? `*Brand:* ${formData.brand}\n` : ''}${formData.date ? `*Date:* ${formData.date}\n` : ''}${formData.address ? `*Address:* ${formData.address}` : ''}`;
      const url = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
      setWhatsappUrl(url);
      setSuccess(true);
      window.open(url, '_blank');
      
      setFormData({ name: '', phone: '', service: '', brand: '', date: '', time: '', address: '' });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl ambient-shadow-l2 border border-slate-100 text-center">
        <div className="bg-green-100 p-4 rounded-full mb-6 inline-block">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B1B32] mb-2">Booking Confirmed!</h3>
        <p className="text-slate-600 mb-6">Thank you! We've received your request. Our team will contact you soon.</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold flex items-center justify-center gap-2 mb-4 hover:bg-[#128C7E] transition-all">
          <MessageSquare size={20} /> Continue to WhatsApp
        </a>
        <button onClick={() => setSuccess(false)} className="text-[#0B1B32] font-semibold underline">Book another service</button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl ambient-shadow-l2 border border-slate-100" id="booking">
      <h2 className="text-[24px] leading-[1.3] font-semibold text-[#0B1B32] mb-2">Book a Service Instantly</h2>
      <p className="text-on-surface-variant mb-10">Fill the form and our team will contact you within 15 minutes.</p>
      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#0B1B32] mb-2">Full Name</label>
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:border-[#0B1B32] focus:ring-0 transition-all outline-none`} 
              placeholder="John Doe" 
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0B1B32] mb-2">Phone Number</label>
            <input 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-slate-200'} focus:border-[#0B1B32] focus:ring-0 transition-all outline-none`} 
              placeholder="+91 00000 00000" 
              type="tel"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#0B1B32] mb-2">Service Type</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-slate-200'} focus:border-[#0B1B32] focus:ring-0 transition-all outline-none`}
            >
              <option value="">Select Service</option>
              {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0B1B32] mb-2">Brand</label>
            <input 
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0B1B32] focus:ring-0 transition-all outline-none" 
              placeholder="e.g., Samsung" 
              type="text"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#0B1B32] mb-2">Preferred Date</label>
            <input 
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0B1B32] focus:ring-0 transition-all outline-none" 
              type="date"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0B1B32] mb-2">Preferred Time</label>
            <input 
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0B1B32] focus:ring-0 transition-all outline-none" 
              type="time"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0B1B32] mb-2">Service Address</label>
          <textarea 
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0B1B32] focus:ring-0 transition-all outline-none" 
            placeholder="Flat No, Building, Area, Landmark" 
            rows="3"
          ></textarea>
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#F5A623] text-[#0B1B32] py-4 rounded-xl font-bold hover:bg-[#e0981e] transition-colors shadow-lg flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin" /> : 'Request Callback'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
