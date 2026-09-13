import { useEffect, useRef, useState } from 'react';
import { SiGmail } from 'react-icons/si';
import { LuCopy, LuCheck, LuMail, LuExternalLink } from 'react-icons/lu';
import { profile } from '../data/content';
import './ContactMenu.scss';

export const gmailCompose = (email) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

// A bare mailto: hands the visitor to whatever mail client the OS registered —
// often none, or one they never signed into. This offers real choices instead.
export default function ContactMenu({ label = "Let's Connect", className = 'btn', icon = true }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrap = useRef(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onDown = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onDown);
    };
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked: the address is shown in full right above, so the
      // visitor can still select it by hand.
      setCopied(false);
    }
  };

  return (
    <div className="cmenu" ref={wrap}>
      <button
        type="button"
        className={className}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
      >
        {icon && <LuMail aria-hidden="true" />} {label}
      </button>

      <div className="cmenu__pop" hidden={!open}>
        <p className="cmenu__addr">{profile.email}</p>
        <button type="button" className="cmenu__item" onClick={copy}>
          {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
          {copied ? 'Copied to clipboard' : 'Copy address'}
        </button>
        <a
          className="cmenu__item"
          href={gmailCompose(profile.email)}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <SiGmail aria-hidden="true" /> Open in Gmail
          <LuExternalLink className="cmenu__go" aria-hidden="true" />
        </a>
        <a className="cmenu__item" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
          <LuMail aria-hidden="true" /> Open in mail app
        </a>
      </div>
    </div>
  );
}
