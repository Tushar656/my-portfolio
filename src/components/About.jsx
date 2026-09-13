import { useState } from 'react';
import { SiGithub, SiGeeksforgeeks } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import ContactMenu from './ContactMenu';
import { about, profile, skills } from '../data/content';
import { getTechIcon } from '../lib/icons';
import Reveal from './Reveal';
import Section from './Section';
import './About.scss';

// The stack shown as rings — pulled from the real skills list, not a second copy.
const ringStack = ['TypeScript', 'Node.js', 'React.js', 'PostgreSQL', 'Redis', 'ClickHouse'];

export default function About() {
  const [hasPhoto, setHasPhoto] = useState(true);
  const { paragraphs, education, growing } = about;
  const frontend = skills.find((g) => g.group === 'Frontend');

  return (
    <Section
      id="about"
      index="02"
      label="About"
      title="Full-stack, backend-leaning"
      intro={about.paragraphs[0]}
    >
      <div className="me">
        <Reveal className="me__card card">
          <div className="me__photo">
            {hasPhoto ? (
              <img
                src={`${process.env.PUBLIC_URL}${profile.photo}`}
                alt="Tushar Verma"
                onError={() => setHasPhoto(false)}
              />
            ) : (
              <span className="me__mono" aria-hidden="true">TV</span>
            )}
          </div>

          <p className="me__status"><i aria-hidden="true" />Available for work</p>
          <h3 className="me__name">{profile.name}</h3>
          <p className="me__line">
            Backend-focused full-stack developer working across Node.js services and
            React front-ends.
          </p>

          <div className="me__social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <SiGithub aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </a>
            <a href={profile.gfg} target="_blank" rel="noreferrer" aria-label="GeeksforGeeks">
              <SiGeeksforgeeks aria-hidden="true" />
            </a>
            <a href="#contact" aria-label="Contact options">
              <LuMail aria-hidden="true" />
            </a>
          </div>

          <ContactMenu label="Let&apos;s Connect" className="btn btn--primary me__cta" icon={false} />
        </Reveal>

        <div className="me__right">
          <Reveal className="me__bio card" style={{ '--d': '80ms' }}>
            <h3 className="me__hi">Hi! I&apos;m Tushar,</h3>
            {paragraphs.slice(1).map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="me__stack card" style={{ '--d': '150ms' }}>
            <p className="me__stackLabel">My tech stack</p>
            <ul>
              {ringStack.map((t) => {
                const hit = getTechIcon(t);
                return (
                  <li key={t} title={t}>
                    {hit && <hit.Icon aria-hidden="true" style={{ color: hit.color }} />}
                    <span className="sr">{t}</span>
                  </li>
                );
              })}
            </ul>
            <p className="me__stackNote">
              Plus {frontend.items.length + 8}+ more across frontend, databases and tooling —
              see <a href="#skills">Skills</a>.
            </p>
          </Reveal>

          <Reveal className="me__edu card" style={{ '--d': '220ms' }}>
            <div>
              <p className="me__eduLabel">Education</p>
              <p className="me__school">{education.school}</p>
              <p className="me__degree">{education.degree}</p>
              <p className="me__meta">{education.period} · {education.gpa}</p>
            </div>
            <div>
              <p className="me__eduLabel">Currently growing into</p>
              <p className="me__growing">{growing.join(' · ')}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
