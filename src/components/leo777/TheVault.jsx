import React, { useEffect, useState } from "react";
import { ShieldCheck, Zap, MessageCircle, Lock } from "lucide-react";
import { Image } from "@/components/ui/image";
import SlideStrip from "@/components/leo777/SlideStrip";

const WHATSAPP_URL = "https://wa.link/leodeposite07";
const GOLD_GEARS = "https://media.base44.com/images/public/6a9a64adc4cbeb4c4a0a6097/a8bc04322_generated_24b5a00f.jpg";

const PAYOUTS = [
  { user: "*4829", amount: "₹50,000", game: "Teen Patti" },
  { user: "*7153", amount: "₹1,20,000", game: "Cricket" },
  { user: "*2094", amount: "₹35,000", game: "Andar Bahar" },
  { user: "*8841", amount: "₹2,50,000", game: "Casino" },
  { user: "*3307", amount: "₹15,000", game: "Dragon Tiger" },
  { user: "*6192", amount: "₹75,000", game: "Roulette" },
  { user: "*4456", amount: "₹3,00,000", game: "Football" },
  { user: "*9981", amount: "₹60,000", game: "Tennis" },
];

const TRUST = [
  {
    icon: Zap,
    title: "10 Minute Withdrawal",
    desc: "Superfast payouts credited directly to your account. No waiting, no excuses.",
  },
  {
    icon: Lock,
    title: "Secure Encryption",
    desc: "Bank-grade security protocols. Your data and transactions are completely protected.",
  },
  {
    icon: MessageCircle,
    title: "Direct WhatsApp Support",
    desc: "Round-the-clock dedicated support. Real humans, instant responses, zero bots.",
  },
];

function PayoutMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-brass/10 py-4 bg-obsidian-deep">
      <SlideStrip speed={0.7} itemClassName="gap-8">
        {PAYOUTS.map((p, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] pulse-cyan" />
            <span className="text-white/40 uppercase tracking-mega text-xs">User {p.user}</span>
            <span className="text-brass font-display">won {p.amount}</span>
            <span className="text-white/30 text-xs">· {p.game}</span>
            <span className="text-white/10 ml-4">/</span>
          </div>
        ))}
      </SlideStrip>
    </div>
  );
}

export default function TheVault() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="the-vault" className="relative bg-obsidian py-16 md:py-24">
      {/* Gears background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src={GOLD_GEARS} alt="" fittingType="fill" className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B]" />
      </div>

      <div className="relative z-10 px-6 md:px-[10vw]">
        <div className="mb-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck size={14} className="text-brass" />
            <span className="text-xs uppercase tracking-mega text-brass">The Vault</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white leading-none mb-6">
            BUILT TO <span className="shimmer-gold">PROTECT</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Every transaction encrypted. Every payout guaranteed. Every moment secured by infrastructure trusted by thousands.
          </p>
        </div>

        {/* 3-column trust grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brass/10">
          {TRUST.map((t, i) => (
            <div
              key={t.title}
              data-cursor="hover"
              className={`group glass-panel !border-0 p-10 md:p-12 transition-all duration-500 hover:bg-carbon ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-8">
                <t.icon
                  size={32}
                  className="text-brass group-hover:text-cyan-glow transition-colors duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-display text-2xl text-white mb-3">{t.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{t.desc}</p>
              <div className="mt-8 h-px w-0 bg-brass group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "15K+", label: "Active Members" },
            { val: "7.5 Cr+", label: "Total Payouts" },
            { val: "99.9%", label: "Uptime" },
            { val: "10 min.", label: "Avg Withdrawal" },
          ].map((s) => (
            <div key={s.label} className="border-l border-brass/20 pl-4 md:pl-6">
              <div className="font-display text-4xl md:text-5xl text-white mb-1">{s.val}</div>
              <div className="text-xs uppercase tracking-mega text-brass/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite payout marquee */}
      <div className="relative z-10 mt-14">
        <PayoutMarquee />
      </div>
    </section>
  );
}