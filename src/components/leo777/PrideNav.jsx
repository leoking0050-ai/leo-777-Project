import React, { useEffect, useState } from "react";
import leoLogo from "@/assets/leo-logo.jpg";
import { Home, Shield, Gamepad2, Trophy } from "lucide-react";
import { Image } from "@/components/ui/image";
import WhatsAppButton, { WhatsAppLogo } from "@/components/leo777/WhatsAppButton";

const WHATSAPP_URL = "https://wa.link/leodeposite07";
const LEO_LOGO = leoLogo;

export default function PrideNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const haptic = () => {
    if (navigator.vibrate) navigator.vibrate(15);
  };

  const items = [
    { icon: Home, label: "Gate", target: "lions-gate" },
    { icon: Gamepad2, label: "Exchange", target: "live-exchange" },
    { icon: Shield, label: "Vault", target: "the-vault" },
    { icon: Trophy, label: "Win", target: "sovereign-footer" },
  ];

  return (
    <>
      {/* Mobile top bar with logo + brand */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-center gap-2.5 py-2.5 transition-all duration-500 ${
          scrolled ? "glass-panel !border-x-0 !border-t-0" : "bg-obsidian/60 backdrop-blur-md"
        }`}
      >
        <Image src={LEO_LOGO} alt="LEO777" fittingType="fit" className="w-8 h-8" />
        <div className="font-display text-lg tracking-mega text-white">
          LEO<span className="text-brass">777</span>
        </div>
      </header>

      {/* Desktop top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-[10vw] py-5 transition-all duration-500 ${
          scrolled ? "glass-panel !border-x-0 !border-t-0" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-3">
          <Image src={LEO_LOGO} alt="LEO777" fittingType="fit" className="w-9 h-9" />
          <div className="font-display text-xl tracking-mega text-white">
            LEO<span className="text-brass">777</span>
          </div>
        </div>
        <nav className="flex items-center gap-8 text-xs uppercase tracking-mega text-white/60">
          {items.map((item) => (
            <button
              key={item.target}
              onClick={() => { scrollTo(item.target); haptic(); }}
              className="hover:text-brass transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <WhatsAppButton label="Get ID" onClick={haptic} className="!px-5 !py-2.5" />
      </header>

      {/* Mobile floating bottom dock */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="glass-panel rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl">
          {items.map((item) => (
            <button
              key={item.target}
              onClick={() => { scrollTo(item.target); haptic(); }}
              className="flex flex-col items-center justify-center w-12 h-12 rounded-full text-white/60 hover:text-brass transition-colors"
              aria-label={item.label}
            >
              <item.icon size={18} />
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={haptic}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white"
            aria-label="WhatsApp"
          >
            <WhatsAppLogo size={18} />
          </a>
        </div>
      </nav>
    </>
  );
}