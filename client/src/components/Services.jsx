import React from 'react';
import {
  Snowflake,
  Wind,
  Tv,
  Flame,
  Droplet,
  Coffee,
  WashingMachine,
  Zap,
  Fan,
  Power
} from 'lucide-react';

const Services = () => {
  const services = [
    { name: 'AC Service & Repair', icon: Snowflake, desc: 'Cooling issues, gas leak, deep cleaning' },
    { name: 'Washing Machine', icon: Zap, desc: 'Top/Front load repair & maintenance' },
    { name: 'Fridge Repair', icon: Wind, desc: 'Cooling fixing, gas charging' },
    { name: 'Microwave/OTG', icon: Power, desc: 'Heating problems, display error' },
    { name: 'RO Water Purifier', icon: Droplet, desc: 'Filter change, leakage fix' },
    { name: 'Electric Geyser', icon: Flame, desc: 'Heating element change, installation' },
    { name: 'Chimney Service', icon: Fan, desc: 'Deep clean, motor replacement' },
    { name: 'TV Repair', icon: Tv, desc: 'Panel issues, sound/display fix' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Comprehensive Repair Services</h3>
          <p className="text-gray-600 text-lg">
            From emergency electrical fixes to routine appliance maintenance, our skilled technicians handle it all with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 border border-gray-200 md:border-gray-100 md:hover:bg-primary md:hover:border-transparent md:hover:text-white rounded-2xl p-6 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 active:scale-95 active:bg-primary active:text-white"
              >
                <div className="bg-white w-14 h-14 rounded-xl shadow-sm flex items-center justify-center text-slate-900 mb-5 group-hover:text-accent transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-white transition-colors duration-300">{service.name}</h4>
                <p className="text-slate-700 group-hover:text-white transition-colors duration-300">{service.desc}</p>
              </div>
            );
          })}

          <div className="md:col-span-3 lg:col-span-4 mt-4 bg-primary text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="z-10 mb-6 md:mb-0 text-center md:text-left">
              <h4 className="text-2xl md:text-3xl font-bold mb-2">Need general electrical work?</h4>
              <p className="text-blue-100 text-lg max-w-xl">Wiring, switchboard repair, light installation, and emergency electrical fixes.</p>
            </div>
            <a href="#book" className="z-10 bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent-hover transition-colors shadow-lg">
              Contact Electrician
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
