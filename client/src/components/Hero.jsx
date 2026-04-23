import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

import acRepair from '../assets/ac-repair.jpg';
import cooktopRepair from '../assets/cooktop-repair.jpg';
import washingMachineRepair from '../assets/washing-repair.jpg';
import fridgeRepair from '../assets/fridge-repair.jpg';

const slides = [
  {
    src: washingMachineRepair,
    alt: 'Technician repairing washing machine'
  },
  {
    src: cooktopRepair,
    alt: 'Cooktop repair technician working on a stove'
  },
  {
    src: acRepair,
    alt: 'AC unit servicing'
  },
  {
    src: fridgeRepair,
    alt: 'Refrigerator repair'
  }
];

const Hero = () => {
  const [index, setIndex] = useState(1); // start at 1 because of clone at start
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const trackRef = useRef(null);

  // extended slides with clones for seamless loop
  const extended = [slides[slides.length - 1], ...slides, slides[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => prev + 1);
      setTransitionEnabled(true);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // after snapping (transition disabled) re-enable transition on next tick
  useEffect(() => {
    if (!transitionEnabled) {
      const t = setTimeout(() => setTransitionEnabled(true), 30);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [transitionEnabled]);

  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left: Content */}
          <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-blue-200 text-sm font-medium">All Brand Service Available</span>
              </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance mb-6">
              <span className="text-blue-400">Reliable Appliance & Electrical Services</span>
              <span className="text-yellow-400"> at Your Doorstep</span>
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-2xl">
              Fast, safe, and affordable repair solutions for all major home appliances. Our certified technicians ensure your peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                className="bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/20 flex items-center justify-center gap-2 tracking-wide"
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

            {/* Stats */}
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

          {/* Right: Small carousel panel */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-md aspect-4/3 rounded-xl overflow-hidden shadow-2xl relative bg-black">
              <div
                ref={trackRef}
                className="flex h-full"
                style={{
                  width: `${extended.length * 100}%`,
                  transform: `translateX(-${index * (100 / extended.length)}%)`,
                  transition: transitionEnabled ? 'transform 1s ease-in-out' : 'none'
                }}
                onTransitionEnd={() => {
                  if (index === extended.length - 1) {
                    setTransitionEnabled(false);
                    setIndex(1);
                  }
                  if (index === 0) {
                    setTransitionEnabled(false);
                    setIndex(extended.length - 2);
                  }
                }}
              >
                {extended.map((slide, i) => (
                  <div key={i} className="w-full h-full flex items-center justify-center shrink-0" style={{ width: `${100 / extended.length}%` }}>
                    <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* subtle overlay to soften image */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />

              {/* Dot indicators inside panel */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, i) => {
                  const active = ((index - 1) % slides.length + slides.length) % slides.length === i;
                  return (
                    <button
                      key={i}
                      onClick={() => { setIndex(i + 1); setTransitionEnabled(true); }}
                      className={`h-2 rounded-full transition-all duration-300 ${active ? 'bg-accent w-6' : 'bg-white/50 w-2'}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
