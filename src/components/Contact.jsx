import { useEffect, useRef, useState } from 'react';
import { SiGithub, SiGeeksforgeeks, SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { LuCopy, LuCheck, LuArrowUpRight, LuMail, LuFileText } from 'react-icons/lu';
import { profile } from '../data/content';
import Reveal from './Reveal';
import Section from './Section';
import { gmailCompose } from './ContactMenu';
import { resumeHref, resumeIsLocal } from '../lib/resume';
import './Contact.scss';

export default function Contact() {
  const resume = resumeHref();
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  // Clear the pending reset if the component goes away first.
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked (insecure context, denied permission): the address is
      // already visible and the mailto link still works, so nothing to recover.
      setCopied(false);
    }
  };

  return (
    <Section
      id="contact"
      index="09"
      label="Contact"
      title="Get in touch"
      intro="Open to conversations about full-stack, backend and Node.js roles. Email is the fastest way to reach me."
    >
      <Reveal className="contact">
        <div className="contact__mail">
          <p className="contact__addr">{profile.email}</p>
          <div className="contact__actions">
            <button type="button" className="contact__copy" onClick={copy}>
              {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <a
              className="contact__act"
              href={gmailCompose(profile.email)}
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail aria-hidden="true" /> Open in Gmail
            </a>
            <a className="contact__act" href={`mailto:${profile.email}`}>
              <LuMail aria-hidden="true" /> Mail app
            </a>
          </div>
        </div>

        <ul className="contact__links">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span className="contact__key"><SiGithub aria-hidden="true" /> GitHub</span>
              <span className="contact__val">{profile.githubHandle}</span>
              <LuArrowUpRight className="contact__go" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact__key"><FaLinkedin aria-hidden="true" /> LinkedIn</span>
              <span className="contact__val">{profile.linkedinHandle}</span>
              <LuArrowUpRight className="contact__go" aria-hidden="true" />
            </a>
          </li>
          {resume && (
            <li>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                {...(resumeIsLocal ? { download: '' } : {})}
              >
                <span className="contact__key"><LuFileText aria-hidden="true" /> Résumé</span>
                <span className="contact__val">{resumeIsLocal ? 'PDF' : 'view online'}</span>
                <LuArrowUpRight className="contact__go" aria-hidden="true" />
              </a>
            </li>
          )}
          <li>
            <a href={profile.gfg} target="_blank" rel="noreferrer">
              <span className="contact__key"><SiGeeksforgeeks aria-hidden="true" /> GeeksforGeeks</span>
              <span className="contact__val">{profile.gfgHandle}</span>
              <LuArrowUpRight className="contact__go" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </Reveal>
    </Section>
  );
}
