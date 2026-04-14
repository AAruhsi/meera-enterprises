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

  // Duplicate array for a seamless infinite scroll loop
  const marqueeBrands = [...brands, ...brands];

  return (
    <section id="brands" className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-dark">We Service All Major Brands</h3>
          <p className="text-gray-500 mt-2">Genuine spare parts and brand-specific expertise</p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex pause-on-hover py-4 opacity-80 group">
        <div className="flex w-max animate-marquee space-x-6 md:space-x-10 pr-6 md:pr-10">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 w-[180px] md:w-[220px] flex-shrink-0"
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
        <div className="flex w-max animate-marquee space-x-6 md:space-x-10 pr-6 md:pr-10" aria-hidden="true">
          {brands.map((brand, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 w-[180px] md:w-[220px] flex-shrink-0"
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
