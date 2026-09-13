import { capabilities } from '../data/content';
import { getTechIcon } from '../lib/icons';
import { useSpotlight } from '../lib/motion';
import Reveal from './Reveal';
import Section from './Section';
import './Capabilities.scss';

// Each illustration is inline SVG on a blueprint-style panel — no image assets.
function Art({ kind }) {
  const common = { className: 'art__svg', viewBox: '0 0 200 120', 'aria-hidden': true };
  if (kind === 'backend') {
    return (
      <svg {...common}>
        <rect x="58" y="14" width="84" height="24" rx="5" />
        <rect x="58" y="48" width="84" height="24" rx="5" />
        <rect x="58" y="82" width="84" height="24" rx="5" />
        <circle cx="70" cy="26" r="3.5" className="art__dot" />
        <circle cx="70" cy="60" r="3.5" className="art__dot" />
        <circle cx="70" cy="94" r="3.5" className="art__dot" />
        <path d="M82 26h48M82 60h48M82 94h36" className="art__line" />
      </svg>
    );
  }
  if (kind === 'pipeline') {
    return (
      <svg {...common}>
        <rect x="12" y="44" width="40" height="32" rx="5" />
        <rect x="80" y="44" width="40" height="32" rx="5" />
        <rect x="148" y="44" width="40" height="32" rx="5" />
        <path d="M52 60h28M120 60h28" className="art__line" />
        <circle cx="66" cy="60" r="3" className="art__flow" />
        <circle cx="134" cy="60" r="3" className="art__flow art__flow--2" />
        <path d="M32 44V26M100 44V26M168 44V26" className="art__line" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="24" y="16" width="152" height="88" rx="7" />
      <path d="M24 34h152" className="art__line" />
      <circle cx="36" cy="25" r="2.6" className="art__dot" />
      <circle cx="45" cy="25" r="2.6" className="art__dot" />
      <circle cx="54" cy="25" r="2.6" className="art__dot" />
      <rect x="36" y="46" width="54" height="46" rx="4" className="art__fill" />
      <path d="M100 52h64M100 64h48M100 76h64M100 88h34" className="art__line" />
    </svg>
  );
}

function CapCard({ item, index }) {
  const spotlight = useSpotlight();
  return (
    <article className="cap card" style={{ '--d': `${index * 80}ms` }} {...spotlight}>
      <div className="art">
        <Art kind={item.key} />
      </div>
      <h3 className="cap__title">{item.title}</h3>
      <p className="cap__body">{item.body}</p>
      <ul className="cap__tech">
        {item.tech.map((t) => {
          const hit = getTechIcon(t);
          return (
            <li key={t} className="chip">
              {hit && <hit.Icon aria-hidden="true" style={{ color: hit.color }} />}
              {t}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default function Capabilities() {
  return (
    <Section
      id="services"
      index="01"
      label="What I do"
      title="Three things I get hired for"
      intro="Most of my work sits in one of these, and often crosses all three in the same feature."
    >
      <Reveal className="caps">
        {capabilities.map((c, i) => (
          <CapCard key={c.key} item={c} index={i} />
        ))}
      </Reveal>
    </Section>
  );
}
