import React, { useEffect, useRef } from "react";

/**
 * Auto-scrolling strip the user can grab and slide freely.
 * Pauses while hovered / dragged and resumes afterwards.
 */
export default function SlideStrip({ children, speed = 0.8, className = "", itemClassName = "" }) {
  const ref = useRef(null);
  const dragging = useRef(false);
  const paused = useRef(false);
  const start = useRef({ x: 0, left: 0 });
  const resumeTimer = useRef(null);

  // Continuous auto-scroll with seamless wrap-around (content is duplicated)
  useEffect(() => {
    let raf;
    const tick = () => {
      const el = ref.current;
      if (el && !paused.current && !dragging.current) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  const resumeSoon = (delay) => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => { paused.current = false; }, delay);
  };

  const wrap = (el) => {
    const half = el.scrollWidth / 2;
    if (el.scrollLeft >= half) {
      el.scrollLeft -= half;
      start.current.left -= half;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += half;
      start.current.left += half;
    }
  };

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return; // touch devices scroll natively
    const el = ref.current;
    dragging.current = true;
    paused.current = true;
    el.style.cursor = "grabbing";
    el.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, left: el.scrollLeft };
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const el = ref.current;
    el.scrollLeft = start.current.left - (e.clientX - start.current.x);
    wrap(el);
  };

  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    ref.current.style.cursor = "grab";
    resumeSoon(800);
  };

  return (
    <div
      ref={ref}
      className={`flex overflow-x-auto scrollbar-hide whitespace-nowrap cursor-grab select-none ${className}`}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { onPointerUp(); paused.current = false; }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onTouchStart={() => { paused.current = true; }}
      onTouchEnd={() => resumeSoon(2500)}
    >
      <div className={`flex shrink-0 ${itemClassName}`}>{children}</div>
      <div className={`flex shrink-0 ${itemClassName}`} aria-hidden="true">{children}</div>
    </div>
  );
}