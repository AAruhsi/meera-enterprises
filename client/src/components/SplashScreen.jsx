import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onDone }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const doneTimer = setTimeout(() => onDone(), 2100);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Logo */}
      <div className="mb-8">
        <img
          src="/Meera.png"
          alt="Meera Enterprises"
          className="w-36 h-36 object-contain"
          style={{ animation: 'logoPulse 2s ease-in-out infinite' }}
        />
      </div>

      {/* Brand name */}
      <h1
        className="text-4xl font-extrabold text-white tracking-tight"
        style={{ animation: 'splashSlideUp 0.6s ease 0.3s both' }}
      >
        Meera <span className="text-accent">Enterprises</span>
      </h1>
      <p
        className="text-gray-400 text-sm mt-2 tracking-widest uppercase"
        style={{ animation: 'splashSlideUp 0.6s ease 0.5s both' }}
      >
        Home Appliance Experts
      </p>

      {/* Loading bar */}
      <div className="mt-10 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-accent rounded-full" style={{ animation: 'loadBar 1.6s ease forwards' }} />
      </div>

      <style>{`
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.05); opacity: 0.95; }
        }
        @keyframes splashSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loadBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
