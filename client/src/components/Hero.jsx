import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="relative bg-white overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[12px] font-bold tracking-[0.05em] mb-6">PROMPT & PROFESSIONAL</span>
            <h1 className="text-[48px] leading-[1.2] font-bold text-[#0B1B32] mb-6 tracking-[-0.02em]">
              Reliable Appliance & Electrical Services <span className="text-[#F5A623]">at Your Doorstep</span>
            </h1>
            <p className="text-[18px] leading-[1.6] text-on-surface-variant mb-8 max-w-lg">
              Expert repairs for all major household appliances and precision electrical wiring solutions. Licensed technicians ready to serve you 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#booking" 
                className="bg-[#F5A623] text-[#0B1B32] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
              >
                Book a Service 
                <span className="material-symbols-outlined">calendar_month</span>
              </a>
              <a 
                href="#services" 
                className="border-2 border-[#0B1B32] text-[#0B1B32] px-8 py-4 rounded-lg font-semibold hover:bg-[#0B1B32] hover:text-white transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden ambient-shadow-l2 border border-slate-100">
              <img 
                alt="Professional Technician" 
                className="w-full h-[500px] lg:h-[600px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhfW2Ir53A9nsUaB6_kYT135Vo0wtROjZPLLIqJYUW4kLTP33LnLXI26igfbthyHShnMJhLyNrKjdHUhKhR2tja6CH4psyTF1AxDq6bOolhuINRxxVFXt9jclEDeP1zKIM-mzWYIZzztXr8q8F4OkjJXFp8vgaf4uDo4QEKmq9Q8AUa9-ntXww10aW_fPG-nSK41xnz1qwUNVQ6WnSJqc7si5joz4gB4MlqcLHicT8gH5kDT8HJTkWGfsjofDzXsMPbUzvuhBOIg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0B1B32] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-[#F5A623] mb-2">10+</span>
              <span className="text-white/80 text-[12px] font-bold tracking-[0.05em] uppercase">YEARS EXPERIENCE</span>
            </div>
            <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
              <span className="text-4xl font-black text-[#F5A623] mb-2">5k+</span>
              <span className="text-white/80 text-[12px] font-bold tracking-[0.05em] uppercase">HAPPY CLIENTS</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-[#F5A623] mb-2">24/7</span>
              <span className="text-white/80 text-[12px] font-bold tracking-[0.05em] uppercase">SUPPORT AVAILABLE</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
