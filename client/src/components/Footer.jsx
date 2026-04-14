import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4 lg:col-span-1">
            <h5 className="text-2xl font-bold text-accent mb-4 tracking-wide">Meera Enterprises</h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for all home appliance repairs and electrical services. Fast, affordable, and reliable.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
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
                  <p className="text-lg font-semibold tracking-wider">+91 99999 99999</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Send us an email</p>
                  <p className="text-base font-semibold">contact@meeraenterprises.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Our Location</p>
                  <p className="text-base font-semibold">123 Service Road, Ahmedabad, Gujarat</p>
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
