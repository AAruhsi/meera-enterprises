import React from 'react';

const Services = () => {
  const services = [
    { name: 'AC Service', icon: 'ac_unit', desc: 'Deep cleaning, gas filling, and complex circuit repairs for all split and window AC units.' },
    { name: 'Washing Machine', icon: 'wash', desc: 'Repairing drum issues, motor failures, and control board glitches in top and front load washers.' },
    { name: 'Fridge Repair', icon: 'kitchen', desc: 'Compressor repair, thermostat calibration, and gas charging for single and double door fridges.' },
    { name: 'Microwave/OTG', icon: 'microwave', desc: 'Magnetron replacement, heating element repair, and glass turntable fixes.' },
    { name: 'RO Purifier', icon: 'water_drop', desc: 'Filter replacement, membrane cleaning, and TDS level adjustment for all water purifiers.' },
    { name: 'Electric Geyser', icon: 'hot_tub', desc: 'Heating element replacement and thermostat troubleshooting for safe hot water.' },
    { name: 'Chimney Service', icon: 'cooking', desc: 'Deep motor cleaning and grease removal for efficient kitchen ventilation.' },
    { name: 'TV Repair', icon: 'tv', desc: 'Panel repairs, sound issues, and connectivity fixes for LED and Smart TVs.' },
  ];

  return (
    <>
      <section className="py-24 bg-surface" id="services">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[36px] leading-[1.2] font-bold text-[#0B1B32] mb-4">Our Expertise</h2>
            <p className="text-on-surface-variant text-[16px] leading-[1.6] max-w-2xl mx-auto">Comprehensive repair services for all your essential household technology. We bring the tools, you bring the problem.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl border border-slate-100 ambient-shadow-l1 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary-fixed/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#F5A623] text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-[24px] leading-[1.3] font-semibold text-[#0B1B32] mb-3">{service.name}</h3>
                <p className="text-on-surface-variant text-[14px] leading-[1.5] mb-6">{service.desc}</p>
                <a className="text-[#0B1B32] font-semibold flex items-center gap-1 group" href="#booking">
                  Book Now 
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electrical Work Banner */}
      <section className="py-16 px-6 md:px-12 bg-surface-container">
        <div className="max-w-7xl mx-auto rounded-3xl bg-[#0B1B32] p-12 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            <span className="material-symbols-outlined text-[200px]">bolt</span>
          </div>
          <div className="relative z-10 md:flex items-center justify-between">
            <div>
              <h2 className="text-[36px] leading-[1.2] font-bold text-white mb-4">Need general electrical work?</h2>
              <p className="text-slate-300 text-[18px] leading-[1.6] mb-8 md:mb-0 max-w-xl">From complete home wiring to simple switch installations, our master electricians ensure your home's safety and efficiency.</p>
            </div>
            <button className="bg-[#F5A623] text-[#0B1B32] px-10 py-5 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform">
              Contact Electrician 
              <span className="material-symbols-outlined">call</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
