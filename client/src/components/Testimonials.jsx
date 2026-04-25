import React from 'react';

const Testimonials = () => {
  return (
    <div>
      <h2 className="text-[36px] leading-[1.2] font-bold text-[#0B1B32] mb-12">What Our Happy Customers Say</h2>
      <div className="space-y-8">
        <div className="p-8 bg-surface-container-low rounded-2xl border border-slate-100">
          <div className="flex text-[#F5A623] mb-4">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <p className="text-[16px] leading-[1.6] italic text-slate-700 mb-6">"My AC stopped working in the middle of summer. Meera Enterprises sent a technician within 2 hours. Very professional and fixed the issue quickly!"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200"></div>
            <div>
              <p className="font-semibold text-[#0B1B32]">Rajesh Sharma</p>
              <p className="text-sm text-slate-500">Ahmedabad , Gujarat</p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-surface-container-low rounded-2xl border border-slate-100">
          <div className="flex text-[#F5A623] mb-4">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <p className="text-[16px] leading-[1.6] italic text-slate-700 mb-6">"Excellent service for my washing machine repair. They used genuine spare parts and the technician was very knowledgeable."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200"></div>
            <div>
              <p className="font-semibold text-[#0B1B32]">Anita Desai</p>
              <p className="text-sm text-slate-500">Ahmedabad , Gujarat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
