import { useId, useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import { experience } from '../data/content';
import { getTechIcon } from '../lib/icons';
import { useSpotlight } from '../lib/motion';
import Reveal from './Reveal';
import Section from './Section';
import './Experience.scss';

function WorkItem({ item }) {
  const [open, setOpen] = useState(Boolean(item.featured));
  const panelId = useId();

  return (
    <li className={`work${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="work__head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="work__title">{item.title}</span>
        {item.metric && <span className="work__metric">{item.metric}</span>}
        <span className="work__sign" aria-hidden="true"><LuPlus /></span>
      </button>

      {/* 0fr -> 1fr gives a real height transition without measuring the DOM. */}
      <div className="work__wrap" aria-hidden={!open}>
        <div id={panelId} className="work__panel">
          <p className="work__body">{item.body}</p>
          {item.tech && (
            <ul className="work__tech">
              {item.tech.map((t) => {
                const hit = getTechIcon(t);
                return (
                  <li key={t} className="chip" style={hit ? { '--brand': hit.color } : undefined}>
                    {hit && <hit.Icon aria-hidden="true" style={{ color: hit.color }} />}
                    {t}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Experience() {
  const spotlight = useSpotlight();

  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title="Where I have shipped"
      intro="Expand any item for what I actually built and owned."
    >
      <div className="xp">
        {experience.map((job, ji) => (
          <Reveal key={job.company} className="xp__job" style={{ '--d': `${ji * 80}ms` }}>
            <div className="xp__meta">
              <p className="xp__period">{job.period}</p>
              {job.current && (
                <p className="xp__now">
                  <i aria-hidden="true" />
                  Current
                </p>
              )}
            </div>

            <div className="xp__main">
              <h3 className="xp__role">{job.role}</h3>
              <p className="xp__company">
                {job.company}
                <span className="xp__sep" aria-hidden="true"> · </span>
                <span className="xp__loc">{job.location}</span>
              </p>
              <p className="xp__domain">{job.domain}</p>

              <ul className="xp__work" {...spotlight}>
                {job.work.map((item) => (
                  <WorkItem key={item.title} item={item} />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
