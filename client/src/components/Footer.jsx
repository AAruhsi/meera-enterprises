import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div className="space-y-4 lg:col-span-1">
            <h5 className="text-2xl font-bold text-accent mb-4 tracking-wide">Meera Enterprises</h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for all home appliance repairs and electrical services. Fast, affordable, and reliable.
            </p>
          </div>

          <div>
            <h6 className="text-lg font-bold mb-4 font-sans tracking-wide">Quick Links</h6>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">All Services</a></li>
              <li><a href="#brands" className="text-gray-400 hover:text-accent transition-colors">Supported Brands</a></li>
              <li><a href="#book" className="text-gray-400 hover:text-accent transition-colors">Book a Technician</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">About Us</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h6 className="text-lg font-bold mb-4 font-sans tracking-wide">Contact Details</h6>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call us for immediate support</p>
                  <p className="text-lg font-semibold tracking-wider">+91 88491 06363</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Our Location</p>
                  <p className="text-base font-semibold">SHOP NO: 29, 30, KALASH SQURE, Mansarovar Rd, near ZUDIO, Tragad, NEW, Chandkheda, Ahmedabad, Gujarat 382470</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Meera Enterprises. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
