import { useState } from 'react';
import { LuArrowRight, LuMapPin, LuFileText } from 'react-icons/lu';
import { heroFacts, profile } from '../data/content';
import ContactMenu from './ContactMenu';
import { resumeHref, resumeIsLocal } from '../lib/resume';
import './Hero.scss';

export default function Hero() {
  const resume = resumeHref();
  // Falls back to a designed panel until a real portrait is dropped in.
  const [hasPhoto, setHasPhoto] = useState(true);
  const src = `${process.env.PUBLIC_URL}${profile.photo}`;

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__status enter" style={{ '--i': 0 }}>
            <i aria-hidden="true" />
            Available for work
          </p>

          <h1 className="hero__title enter" style={{ '--i': 1 }}>
            <span className="hero__titleTop">Hi! I&apos;m Tushar Verma, building{' '}</span>
            <em>systems behind the product.</em>
          </h1>

          <p className="hero__summary enter" style={{ '--i': 2 }}>
            I build production services, APIs and real-time data pipelines — and the
            React front-ends on top of them. Currently a Software Developer at Medront
            DataLabs, working on a marketing analytics platform.
          </p>

          <p className="hero__where enter" style={{ '--i': 3 }}>
            <LuMapPin aria-hidden="true" /> Agra, India
          </p>

          <div className="hero__cta enter" style={{ '--i': 4 }}>
            <a className="btn btn--primary" href="#work">
              See My Work <LuArrowRight aria-hidden="true" />
            </a>
            <ContactMenu label="Let&apos;s Connect" className="btn" />
            {resume && (
              <a
                className="btn"
                href={resume}
                target="_blank"
                rel="noreferrer"
                {...(resumeIsLocal ? { download: '' } : {})}
              >
                <LuFileText aria-hidden="true" /> Résumé
              </a>
            )}
          </div>
        </div>

        <div className="hero__visual">
          <div className="portrait-wrap enter" style={{ '--i': 5 }}>
          <div className="portrait">
            <span className="portrait__halo" aria-hidden="true" />
            {hasPhoto ? (
              <img
                className="portrait__img"
                src={src}
                alt="Tushar Verma"
                onError={() => setHasPhoto(false)}
              />
            ) : (
              <div className="portrait__fallback" aria-hidden="true">
                <span className="portrait__mono">TV</span>
              </div>
            )}
          </div>
          </div>

          {heroFacts.map((f, i) => (
            <figure key={f.label} className={`fact fact--${i+1}`}>
              <figcaption>
                <span className="fact__value">{f.value}</span>
                <span className="fact__label">{f.label}</span>
              </figcaption>
              <p className="fact__context">{f.context}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
