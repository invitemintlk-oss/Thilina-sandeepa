import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const Divider: React.FC = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="w-8 sm:w-20 h-px bg-gradient-to-r from-transparent to-white/70" />
    <Heart className="w-4 h-4 text-white/90" strokeWidth={1.2} />
    <div className="w-8 sm:w-20 h-px bg-gradient-to-l from-transparent to-white/70" />
  </div>
);

const Person: React.FC<{ name: string; role: string; relation: string; father: string; mother: string; delay: number }> = ({
  name, role, relation, father, mother, delay,
}) => (
  <motion.div
    className="flex flex-col items-center text-center space-y-2 sm:space-y-3"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay }}
  >
    <p className="text-[1.9rem] sm:text-6xl text-white drop-shadow-lg leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>
      {name}
    </p>
    <div className="flex items-center gap-3">
      <div className="w-8 sm:w-12 h-px bg-white/60" />
      <span className="font-sans text-[9px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-white/90">{role}</span>
      <div className="w-8 sm:w-12 h-px bg-white/60" />
    </div>
    <p className="font-serif text-white/85 text-[11px] sm:text-base leading-relaxed sm:tracking-wide max-w-[15rem] sm:max-w-sm">
      {relation} {father}
      <br />
      &amp; {mother}
    </p>
  </motion.div>
);

export const HappyCouple: React.FC = () => {
  return (
    <section
      className="w-full py-24 md:py-28 bg-[#4a0a0f] relative overflow-hidden flex items-center justify-center min-h-[100dvh]"
      style={{
        backgroundImage: 'url("/Luxurious Burgundy Floral Wedding Frame.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <motion.div
        className="relative z-10 mx-auto w-[calc(100%-2.5rem)] max-w-[22rem] sm:max-w-2xl rounded-t-[120px] sm:rounded-t-[180px] rounded-b-[32px] border border-white/50 bg-[#3a0509]/65 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.55)] px-6 pt-14 pb-10 sm:px-14 sm:pt-20 sm:pb-16"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
      {/* Decorative inner border */}
      <div className="absolute inset-2.5 sm:inset-4 rounded-t-[110px] sm:rounded-t-[165px] rounded-b-[24px] border border-white/25 pointer-events-none" />
      <div className="relative flex flex-col items-center gap-6 sm:gap-12 [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">
        <motion.div
          className="text-center space-y-3 sm:space-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[2.4rem] sm:text-7xl text-white drop-shadow-lg leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>
            The Happy Couple
          </h2>
          <p className="font-serif italic text-white/90 text-sm sm:text-xl">
            What began as a moment became our forever
          </p>
          <Divider />
        </motion.div>

        <Person
          name="Thilina Niroshan"
          role="The Groom"
          relation="Son of"
          father="Mr. Mahapatunage Sumeda Rahulage Perera"
          mother="Mrs. Edirisinha Arachchilage Kanthi"
          delay={0.2}
        />

        <Divider />

        <Person
          name="Sandeepa Sankalpani"
          role="The Bride"
          relation="Daughter of"
          father="Mr. Raju Lal Hewarathna"
          mother="Miss Dammika Nayani Abeysinghe"
          delay={0.3}
        />
      </div>
      </motion.div>
    </section>
  );
};
