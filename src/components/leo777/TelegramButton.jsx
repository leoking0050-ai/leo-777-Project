import React from "react";

export const TELEGRAM_URL = "https://t.me/LEOBOOK777";

export function TelegramLogo({ size = 16, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm5.894 8.219l-2.03 9.581c-.153.7-.574.87-1.161.54l-3.2-2.357-1.543 1.486c-.171.171-.315.315-.644.315l.23-3.259 5.929-5.357c.258-.23-.056-.358-.399-.127l-7.324 4.616-3.158-1.278c-.686-.271-.7-.686.144-1.016l12.337-4.757c.571-.226 1.071.137.886 1.016l.063-.02z" />
        </svg>
    );
}

export default function TelegramButton({
    label = "Join on Telegram",
    href = TELEGRAM_URL,
    className = "",
    onClick,
    buttonRef,
}) {
    return (
        <a
            ref={buttonRef}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            data-cursor="hover"
            style={{ willChange: "transform" }}
            className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0088CC] px-6 py-3 font-display text-xs font-bold uppercase tracking-mega text-white transition-all duration-300 hover:bg-[#0FA3EE] hover:shadow-[0_0_30px_rgba(0,136,204,0.45)] ${className}`}
        >
            <TelegramLogo size={15} className="shrink-0" />
            <span>{label}</span>
        </a>
    );
}
