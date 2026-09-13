import { useCallback, useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fires once when the element first scrolls into view.
export function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setInView(true);
        io.disconnect();
      }
    }, { threshold: 0.25, ...options });
    io.observe(el);
    return () => io.disconnect();
  }, [inView, options]);

  return [ref, inView];
}

// Counts 0 -> target once visible. Jumps straight to the value when the
// visitor has asked for reduced motion.
export function useCountUp(target, { duration = 800 } = {}) {
  const [ref, inView] = useInView();
  const [value, setValue] = useState(0);
  const raf = useRef(0);
  const safety = useRef(null);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic: fast start, gentle settle.
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    // Backstop: if frames never arrive, show the real number anyway.
    safety.current = setTimeout(() => setValue(target), duration + 350);

    return () => {
      cancelAnimationFrame(raf.current);
      clearTimeout(safety.current);
    };
  }, [inView, target, duration]);

  return [ref, value];
}

// Tracks the pointer inside a card and exposes it as CSS custom properties,
// so the highlight is drawn entirely in CSS.
export function useSpotlight() {
  const onMove = useCallback((e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, []);
  return { onMouseMove: onMove };
}

// One scroll listener for the whole page, rAF-throttled. It publishes:
//   --sp  scroll progress 0..1          (nav progress bar)
//   --sy  scrollY in px, as a number    (parallax offsets, CSS does the math)
//   .is-scrolled on <html>              (nav condense)
// Parallax is suppressed under prefers-reduced-motion by pinning --sy to 0.
export function useScrollSignals() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY || window.pageYOffset || 0;
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      root.style.setProperty('--sp', String(Math.min(1, Math.max(0, y / max))));
      root.style.setProperty('--sy', prefersReducedMotion() ? '0' : String(y));
      root.classList.toggle('is-scrolled', y > 80);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
