import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, User, Settings, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';

const BookingForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    brand: '',
    date: '',
    time: '',
    address: ''
  });

  const servicesList = [
    'Fridge Repair', 'Washing Machine Repair', 'Microwave Repair',
    'Electric Geyser Service', 'RO (Water Purifier) Service', 'OTG Repair',
    'Cooktop Repair', 'Chimney Service', 'Water Dispenser Repair',
    'AC (Air Conditioner) Service', 'Dryer Repair', 'Cooler Repair',
    'TV Repair', 'General Electrical Work', 'Other Appliance Service'
  ];

  const brandsList = [
    'Samsung', 'Whirlpool', 'LG', 'IFB', 'Croma', 'Siemens', 'Bosch', 'Haier', 'Other / Not sure'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      console.log('Submitted Payload:', JSON.stringify(formData, null, 2));
      
      // Reset after showing success
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: '', phone: '', service: '', brand: '', date: '', time: '', address: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="book" className="py-24 bg-primary relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-dark rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-gray-100">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">Book a Service Instantly</h2>
            <p className="text-gray-500">Fill out the form below and our technician will reach out to you shortly.</p>
          </div>

          {success ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
              <div className="bg-green-100 p-4 rounded-full mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Booking Confirmed!</h3>
              <p className="text-green-700 max-w-sm mx-auto">
                Thank you, <span className="font-bold">{formData.name}</span>. We've received your request for {formData.service}. Our team will contact you soon.
              </p>
              <button 
                onClick={() => setSuccess(false)}
                className="mt-8 text-green-700 font-semibold hover:text-green-800 underline decoration-2 underline-offset-4"
              >
                Book another service
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Form Group: Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" /> Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-base rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    placeholder="Rahul Sharma"
                  />
                </div>

                {/* Form Group: Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" /> Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-base rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    placeholder="99999 99999"
                  />
                </div>

                {/* Form Group: Service */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Settings className="w-4 h-4 text-primary" /> Select Service *
                  </label>
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-base rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Choose a service...</option>
                    {servicesList.map((srv) => <option key={srv} value={srv}>{srv}</option>)}
                  </select>
                </div>

                {/* Form Group: Brand */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Settings className="w-4 h-4 text-primary" /> Appliance Brand
                  </label>
                  <select
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-base rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select brand (optional)...</option>
                    {brandsList.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                {/* Form Group: Date */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-base rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all cursor-pointer"
                  />
                </div>

                {/* Form Group: Time */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" /> Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-base rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a timeslot...</option>
                    <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                    <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                    <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                    <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
                  </select>
                </div>

              </div>

              {/* Form Group: Address */}
              <div className="space-y-2 pt-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Full Address (Optional)
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                  placeholder="Enter house no, building, street, area..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold text-lg text-primary-dark transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${loading ? 'bg-accent/80 cursor-not-allowed' : 'bg-accent hover:bg-accent-hover shadow-accent/30'}`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> 100% Safe & Secure Booking
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default BookingForm;
