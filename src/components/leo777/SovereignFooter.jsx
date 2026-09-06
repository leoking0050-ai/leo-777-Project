import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import WhatsAppButton from "@/components/leo777/WhatsAppButton";

const GOLD_LIQUID = "https://media.base44.com/images/public/6a9a64adc4cbeb4c4a0a6097/980e53b15_generated_23c25e4d.jpg";

export default function SovereignFooter() {
  const haptic = () => { if (navigator.vibrate) navigator.vibrate(20); };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="sovereign-footer" className="relative bg-obsidian overflow-hidden">
      {/* Gold liquid texture */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src={GOLD_LIQUID} alt="" fittingType="fill" className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/80 to-[#0A0A0B]" />
      </div>

      {/* Massive WhatsApp CTA */}
      <div className="relative z-10 px-6 md:px-[10vw] py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-brass" />
              <span className="text-xs uppercase tracking-mega text-brass">Begin Now</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9] mb-6">
              CLAIM YOUR<br />
              <span className="shimmer-gold">SOVEREIGN ID</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Instant activation. Minimum deposit ₹300. Withdrawal in 10 minutes. Your entry into the pride awaits.
            </p>
          </div>

          {/* CTA + demo account links */}
          <div className="flex flex-col gap-3">
            <WhatsAppButton label="Get ID on WhatsApp" onClick={haptic} />
            <div className="flex flex-col gap-2">
              <a
                href="https://betbhai9.tax"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="animate-pop-in inline-flex items-center justify-center gap-2 rounded-full bg-brass px-6 py-2.5 text-[10px] uppercase tracking-mega text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,160,89,0.35)]"
              >
                Demo Account 1
              </a>
              <a
                href="https://www.allpanelexch.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="animate-pop-in-delayed inline-flex items-center justify-center gap-2 rounded-full bg-brass px-6 py-2.5 text-[10px] uppercase tracking-mega text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,160,89,0.35)]"
              >
                Demo Account 2
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Brand + meta */}
      <div className="relative z-10 border-t border-brass/10 px-6 md:px-[10vw] py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="font-display text-3xl tracking-mega text-white mb-2">
              LEO<span className="text-brass">777</span>
            </div>
            <p className="text-white/30 text-xs uppercase tracking-mega max-w-md">
              The Sovereign Realm · India's Most Trusted Gaming Platform
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-mega text-white/40">
            <span>18+ Only</span>
            <span>Play Responsibly</span>
            <span>© 2026 LEO777</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-white/5">
          <p className="text-white/20 text-xs leading-relaxed max-w-3xl">
            This platform is intended for entertainment purposes only. Participation is restricted to individuals
            aged 18 and above. Please play responsibly and be aware of applicable local regulations.
            LEO777 advocates responsible gaming and provides self-exclusion options.
          </p>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          data-cursor="hover"
          className="mt-8 flex items-center gap-2 text-xs uppercase tracking-mega text-brass hover:text-cyan-glow transition-colors"
        >
          <span>Return to the Gate</span>
          <ArrowUpRight size={12} className="rotate-[-45deg]" />
        </button>
      </div>
    </footer>
  );
}