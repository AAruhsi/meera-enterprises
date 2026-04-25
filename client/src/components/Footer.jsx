import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1B32] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 border-b border-white/10 pb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F5A623] rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0B1B32]">bolt</span>
            </div>
            <h3 className="text-[24px] font-bold">Meera Enterprises</h3>
          </div>
          <p className="text-slate-400 text-[16px] leading-[1.6] max-w-sm">Premium appliance repair and electrical services for modern homes. Quality guaranteed since 2014.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F5A623] hover:text-[#0B1B32] transition-all">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F5A623] hover:text-[#0B1B32] transition-all">
              <span className="material-symbols-outlined text-sm">thumb_up</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-[18px] font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
              <li><a className="hover:text-white transition-colors" href="#booking">Book Technician</a></li>
              <li><a className="hover:text-white transition-colors" href="#feedback">Feedback</a></li>
              <li><a className="hover:text-white transition-colors" href="#brands">Brands</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Warranty Info</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© 2024 Meera Enterprises. All rights reserved.</p>
        <p>Expertly crafted for household excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
