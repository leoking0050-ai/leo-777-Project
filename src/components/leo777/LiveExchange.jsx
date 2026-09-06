import React, { useRef } from "react";
import { Radio, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import WhatsAppButton from "@/components/leo777/WhatsAppButton";

const WHATSAPP_URL = "https://wa.link/leodeposite07";
const IMG = "https://media.base44.com/images/public/6a9a64adc4cbeb4c4a0a6097";

const PLATFORMS = [
  { name: "Cricket", desc: "Live odds · IPL · International", live: true, img: `${IMG}/21df81444_generated_image.png` },
  { name: "Casino", desc: "Live dealer · 200+ tables", live: true, img: `${IMG}/1932c5353_generated_image.png` },
  { name: "Tennis", desc: "Grand Slam · ATP · WTA", live: true, img: `${IMG}/3df9e51f4_generated_image.png` },
  { name: "Football", desc: "EPL · La Liga · UCL", live: true, img: `${IMG}/f2d4bdf36_generated_image.png` },
  { name: "Teen Patti", desc: "Real players · Instant deal", live: true, img: `${IMG}/3d55b4d19_generated_image.png` },
  { name: "Andar Bahar", desc: "Classic · 24/7 rooms", live: true, img: `${IMG}/97ce3353a_generated_image.png` },
  { name: "Dragon Tiger", desc: "Fastest card game", live: true, img: `${IMG}/6099e922c_generated_image.png` },
  { name: "Roulette", desc: "European · American", live: false, img: `${IMG}/a8475d274_generated_image.png` },
];

function PlatformCard({ platform }) {
  const haptic = () => { if (navigator.vibrate) navigator.vibrate(15); };
  return (
    <div
      data-cursor="hover"
      className="group relative z-0 flex-shrink-0 w-[280px] md:w-[320px] glass-panel rounded-2xl p-6 transition-all duration-500 hover:z-20 hover:scale-[1.07] hover:-translate-y-2 hover:!border-brass hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer"
      style={{ backdropFilter: "blur(20px)" }}
    >
      {/* Game image with live indicator */}
      <div className="relative -m-6 mb-6 h-44 overflow-hidden rounded-2xl">
        <Image
          src={platform.img}
          alt={platform.name}
          fittingType="fill"
          className="w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />
        {platform.live && (
          <div className="absolute top-3 right-3 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]" />
            </span>
            <span className="text-[10px] uppercase tracking-mega text-cyan-glow">Live</span>
          </div>
        )}
      </div>

      <h3 className="font-display text-2xl text-white mb-1">{platform.name}</h3>
      <p className="text-xs text-white/40 mb-6">{platform.desc}</p>

      <WhatsAppButton label="Get ID" onClick={haptic} className="mt-2 w-full !py-2.5 !px-5 !text-[10px]" />
    </div>
  );
}

export default function LiveExchange() {
  const scrollRef = useRef(null);

  const scrollBy = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 340, behavior: "smooth" });
    }
  };

  return (
    <section id="live-exchange" className="relative bg-obsidian py-16 md:py-24">
      {/* Section header */}
      <div className="px-6 md:px-[10vw] mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Radio size={14} className="text-cyan-glow" />
          <span className="text-xs uppercase tracking-mega text-cyan-glow">Live Exchange</span>
        </div>
        <div className="flex items-end justify-between">
          <h2 className="font-display text-5xl md:text-7xl text-white leading-none">
            ACTIVE <span className="shimmer-gold">ARENAS</span>
          </h2>
          <div className="hidden md:flex gap-2 pb-2">
            <button
              onClick={() => scrollBy(-1)}
              data-cursor="hover"
              className="w-12 h-12 border border-brass/30 text-brass hover:bg-brass hover:text-obsidian transition-all flex items-center justify-center"
            >
              <ArrowRight size={16} className="rotate-180" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              data-cursor="hover"
              className="w-12 h-12 border border-brass/30 text-brass hover:bg-brass hover:text-obsidian transition-all flex items-center justify-center"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll marquee */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-[10vw] pt-6 pb-8 snap-x"
      >
        {PLATFORMS.map((p) => (
          <div key={p.name} className="snap-start">
            <PlatformCard platform={p} />
          </div>
        ))}
        {/* End card */}
        <div className="flex-shrink-0 w-[280px] md:w-[320px] flex items-center justify-center glass-panel rounded-2xl">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="text-center group"
          >
            <div className="font-display text-3xl text-brass mb-2 group-hover:scale-110 transition-transform">+</div>
            <div className="text-xs uppercase tracking-mega text-white/60">View All</div>
          </a>
        </div>
      </div>
    </section>
  );
}