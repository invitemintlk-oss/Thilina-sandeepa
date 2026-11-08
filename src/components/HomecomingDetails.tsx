import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, CalendarHeart } from 'lucide-react';

const VENUE_MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Opulent River Face Hotel, Rajagiriya');

export const HomecomingDetails: React.FC = () => {
  return (
    <section id="details" className="w-full py-24 relative overflow-hidden bg-[#fbf7f2]">
      {/* Background Image with Deep Emerald Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Romantic Red and Ivory Floral Frame.png')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf7f2] via-transparent to-[#fbf7f2]"></div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-[#9b1c23]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 flex flex-col items-center">

        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-display text-[#9b1c23] drop-shadow-md" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Celebrations
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#9b1c23]/70"></div>
            <p className="text-[10px] md:text-xs text-stone-700 font-sans tracking-[0.4em] uppercase">
              Join us in celebration
            </p>
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#9b1c23]/70"></div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-center w-full max-w-6xl">
          {/* Poruwa Ceremony Card */}
          <motion.div
            className="relative w-full max-w-lg bg-white/80 backdrop-blur-md rounded-t-[140px] rounded-b-[40px] border border-[#9b1c23]/40 shadow-[0_20px_50px_rgba(127,29,29,0.12)] p-8 md:p-14 flex flex-col items-center text-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Decorative Inner Border */}
            <div className="absolute inset-4 border-[1px] border-[#9b1c23]/20 rounded-t-[125px] rounded-b-[25px] pointer-events-none"></div>

            <h3 className="text-3xl md:text-4xl font-display text-[#9b1c23] mb-8" style={{ fontFamily: "'Great Vibes', cursive" }}>Poruwa Ceremony</h3>

            <CalendarHeart className="w-8 h-8 md:w-10 md:h-10 text-[#9b1c23] mb-4 opacity-90 drop-shadow-md" strokeWidth={1} />

            <div className="space-y-2 mb-10">
              <p className="text-[11px] md:text-xs text-stone-500 tracking-[0.3em] uppercase">Monday</p>
              <p className="text-lg md:text-2xl font-serif text-[#9b1c23] tracking-widest uppercase">
                16th November 2026
              </p>
            </div>

            <div className="w-full max-w-sm mx-auto space-y-6 mb-12 flex-1">
              <div className="flex items-center justify-between text-stone-700 border-b border-[#9b1c23]/20 pb-4">
                <span className="flex items-center gap-2 font-sans text-sm md:text-base tracking-widest uppercase opacity-90">
                  <Clock className="w-4 h-4 text-[#9b1c23]" strokeWidth={1.5} /> Poruwa
                </span>
                <span className="font-serif text-[#9b1c23] text-lg md:text-xl">10:01 AM</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3 mt-auto">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#9b1c23] mb-2 opacity-90" strokeWidth={1} />
              <p className="text-lg md:text-xl font-serif text-stone-700 tracking-wide">Opulent River Face Hotel</p>
              <p className="text-[11px] md:text-sm text-stone-500 tracking-widest uppercase mb-2">Rajagiriya</p>
              <a
                href={VENUE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-2 md:px-8 md:py-2.5 mt-2 bg-transparent border border-[#9b1c23]/50 hover:bg-[#9b1c23]/10 hover:border-[#9b1c23] rounded-full text-[#9b1c23] transition-all duration-300 group"
              >
                <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase">Live Location</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
