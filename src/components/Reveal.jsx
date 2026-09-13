import { useEffect, useRef, useState } from 'react';

// One-shot scroll reveal: adds .is-in the first time the element enters view.
// Observer is disconnected on unmount and after firing, so nothing leaks.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (seen) return;
    const el = ref.current;
    // No observer (older browsers, jsdom): show content rather than hide it.
    if (!el || typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.04 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);

  const cls = ['reveal', seen ? 'is-in' : '', className].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
