import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import WhatsAppButton from "@/components/leo777/WhatsAppButton";
const LION_EYE = "https://media.base44.com/images/public/6a9a64adc4cbeb4c4a0a6097/16c2beb50_generated_e4e38ce2.jpg";

export default function LionsGate() {
  const btnRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Magnetic hover effect on the CTA
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const onMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    };
    const onLeave = () => {
      btn.style.transform = "translate(0, 0)";
    };
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const haptic = () => { if (navigator.vibrate) navigator.vibrate(20); };

  return (
    <section
      id="lions-gate"
      className="relative min-h-screen w-full overflow-hidden bg-obsidian flex flex-col justify-center"
    >
      {/* Lion eye background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={LION_EYE}
          alt=""
          fittingType="fill"
          className="w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]/40" />
      </div>

      {/* Massive 777 background numeral */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <span
          className="font-display font-black text-white/[0.03] leading-none"
          style={{ fontSize: "min(60vw, 800px)" }}
        >
          777
        </span>
      </div>

      {/* Split headline */}
      <div className="relative z-10 px-6 md:px-[10vw]">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-12 bg-brass" />
          <span className="text-xs uppercase tracking-mega text-brass">
            Sovereign Gaming Realm
          </span>
        </div>

        <h1 className="font-display text-white leading-[0.85]">
          <span
            className="block text-[14vw] md:text-[8vw] font-black"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            THE POWER OF
          </span>
          <span
            className="block mt-2 text-[14vw] md:text-[8vw] font-black shimmer-gold"
            style={{ transform: `translateY(${scrollY * -0.08}px)` }}
          >
            THE WIN
          </span>
        </h1>
        <p className="mt-6 max-w-xs text-sm uppercase tracking-mega text-white/40">
          India's most trusted &amp; fastest gaming platform. Where precision meets fortune.
        </p>

        {/* CTA row */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-5">
          <WhatsAppButton
            label="Join The Pride"
            buttonRef={btnRef}
            onClick={haptic}
            className="!px-8 !py-4 !text-sm"
          />
          <div className="flex items-center gap-8 text-white/50 text-sm">
            <div>
              <div className="font-display text-2xl text-white">₹300</div>
              <div className="text-xs uppercase tracking-mega text-brass/70">Min Deposit</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="font-display text-2xl text-white">10<span className="text-brass"> min.</span></div>
              <div className="text-xs uppercase tracking-mega text-brass/70">Withdrawal</div>
            </div>
            <div className="h-8 w-px bg-white/10 hidden md:block" />
            <div className="hidden md:block">
              <div className="font-display text-2xl text-white">24/7</div>
              <div className="text-xs uppercase tracking-mega text-brass/70">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] uppercase tracking-mega">Scroll to enter</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}