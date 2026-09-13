import { useEffect, useState } from 'react';
import { nav, profile } from '../data/content';
import ContactMenu from './ContactMenu';
import './Nav.scss';

export default function Nav() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  // Highlight whichever section is currently in view.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top) setActive(top.target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.02, 0.25, 0.6] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="nav">
      {/* Width is driven by --sp from useScrollSignals; no listener here. */}
      <span className="nav__progress" aria-hidden="true" />

      <div className="nav__inner container">
        <a href="#top" className="nav__brand">
          <span className="nav__mark">TV</span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'is-active' : undefined}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <ContactMenu label="Email" className="nav__cta" />
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-mobile"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr">{open ? 'Close menu' : 'Open menu'}</span>
            <span className={`nav__burger ${open ? 'is-open' : ''}`} aria-hidden="true">
              <i /><i /><i />
            </span>
          </button>
        </div>
      </div>

      <div id="nav-mobile" className="nav__mobile" hidden={!open}>
        <div className="container">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </header>
  );
}
