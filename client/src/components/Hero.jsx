import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-primary overflow-x-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-dark opacity-50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-white text-sm font-medium">All Brand Service Available</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance mb-6">
              Reliable Appliance & Electrical Services at Your Doorstep
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              Fast, safe, and affordable repair solutions for all major home appliances. Our certified technicians ensure your peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#book" 
                className="bg-accent text-primary-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/20 flex items-center justify-center gap-2 tracking-wide"
              >
                Book a Service
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 rounded-xl font-semibold text-lg text-white hover:bg-white/10 transition-colors border border-white/30 flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>
            
            {/* Quick stats/trust markers */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-sm text-gray-400 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">5k+</p>
                <p className="text-sm text-gray-400 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-gray-400 mt-1">Support Available</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg mx-auto md:max-w-none relative mt-12 md:mt-0 pb-10">
            <div className="aspect-square bg-gradient-to-tr from-accent/20 to-primary-dark/30 rounded-3xl p-2 md:p-4 rotate-3 shadow-2xl relative">
              <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm -rotate-6 transition-transform hover:-rotate-2 duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                alt="Professional technician repairing home appliance" 
                className="rounded-2xl w-full h-full object-cover shadow-inner relative z-10 hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Floating floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Certified</p>
                    <p className="text-sm font-bold text-primary-dark">Service Experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
