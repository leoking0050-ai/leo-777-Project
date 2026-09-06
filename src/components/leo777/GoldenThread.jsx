import React, { useEffect, useState } from "react";

export default function GoldenThread() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent">
      <div
        className="h-full transition-all duration-75 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, transparent, #C5A059 20%, #F5D88A 50%, #C5A059 80%, transparent)",
          boxShadow: "0 0 8px rgba(197, 160, 89, 0.6)",
        }}
      />
    </div>
  );
}