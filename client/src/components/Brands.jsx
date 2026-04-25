import React from 'react';

import blueStarLogo from '../assets/Blue_Star_Infotech-Logo.wine.png';
import haierLogo from '../assets/Haier-Logo.wine.png';
import lgLogo from '../assets/LG_Corporation-Logo.wine.png';
import panasonicLogo from '../assets/Panasonic_(brand)-Logo.wine.png';
import philipsLogo from '../assets/Philips-Logo.wine.png';
import boschLogo from '../assets/Robert_Bosch_GmbH-Logo.wine.png';
import samsungLogo from '../assets/Samsung-Logo.wine.png';
import siemensLogo from '../assets/Siemens-Logo.wine.png';
import sonyLogo from '../assets/Sony-Logo.wine.png';

const Brands = () => {
  const brands = [
    { name: 'Samsung', logo: samsungLogo },
    { name: 'LG', logo: lgLogo },
    { name: 'Panasonic', logo: panasonicLogo },
    { name: 'Bosch', logo: boschLogo },
    { name: 'Haier', logo: haierLogo },
    { name: 'Blue Star', logo: blueStarLogo },
    { name: 'Siemens', logo: siemensLogo },
    { name: 'Sony', logo: sonyLogo },
    { name: 'Philips', logo: philipsLogo },
  ];

  // Double the brands to create a seamless loop
  const marqueeBrands = [...brands, ...brands];

  return (
    <section id="brands" className="py-20 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-4">Authorized Service Providers For</p>
        <h3 className="text-[24px] font-bold text-[#0B1B32]">All Major Brands Supported</h3>
      </div>

      <div className="relative w-full overflow-hidden flex pause-on-hover py-4 group">
        <div className="animate-marquee-reverse flex gap-12 md:gap-16 items-center">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center transition-all duration-300 w-[150px] md:w-[180px] flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-20 md:h-24 w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
