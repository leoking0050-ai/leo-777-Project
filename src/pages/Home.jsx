import React from "react";
import { Gift } from "lucide-react";
import SlideStrip from "@/components/leo777/SlideStrip";
import GoldenThread from "@/components/leo777/GoldenThread";
import PrideNav from "@/components/leo777/PrideNav";
import LionsGate from "@/components/leo777/LionsGate";
import LiveExchange from "@/components/leo777/LiveExchange";
import TheVault from "@/components/leo777/TheVault";
import SovereignFooter from "@/components/leo777/SovereignFooter";

const WHATSAPP_URL = "https://wa.link/leodeposite07";

function BonusStrip() {
  const haptic = () => { if (navigator.vibrate) navigator.vibrate(15); };
  return (
    <div className="relative bg-obsidian-deep border-y border-brass/10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_100%_at_50%_50%,rgba(197,160,89,0.18),transparent)]" />
      <SlideStrip className="relative py-4" speed={0.8}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="flex items-center gap-3 text-sm">
              <Gift size={16} className="text-brass" />
              <span className="text-white/60 uppercase tracking-mega text-xs">Welcome Bonus</span>
              <span className="text-brass font-display text-lg">10%</span>
            </span>
            <span className="text-white/10">/</span>
            <span className="flex items-center gap-3 text-sm">
              <span className="text-white/60 uppercase tracking-mega text-xs">Every Deposit Bonus</span>
              <span className="text-cyan-glow font-display text-lg">3% Extra</span>
            </span>
            <span className="text-white/10">/</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={haptic}
              data-cursor="hover"
              className="text-xs uppercase tracking-mega text-brass hover:text-cyan-glow transition-colors"
            >
              Claim Now →
            </a>
            <span className="text-white/10">/</span>
          </div>
        ))}
      </SlideStrip>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative bg-obsidian min-h-screen">
      <GoldenThread />
      <PrideNav />
      <LionsGate />
      <BonusStrip />
      <LiveExchange />
      <TheVault />
      <SovereignFooter />
    </div>
  );
}