import { LuArrowUpRight, LuCheck } from 'react-icons/lu';
import { profile, projects } from '../data/content';
import { getTechIcon } from '../lib/icons';
import { useSpotlight } from '../lib/motion';
import Reveal from './Reveal';
import Section from './Section';
import './Projects.scss';

// A drawn browser frame, not a screenshot. Swap in a real image by adding
// `shot: '/assets/projects/<file>'` to the project in content.js.
function Mock({ p }) {
  if (p.shot) {
    return (
      <div className="mock">
        <div className="mock__bar" aria-hidden="true"><i /><i /><i /></div>
        <img className="mock__shot" src={`${process.env.PUBLIC_URL}${p.shot}`} alt={`${p.name} interface`} />
      </div>
    );
  }
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock__bar"><i /><i /><i /><span>{p.slug}</span></div>
      <div className="mock__body">
        <p className="mock__kicker">{p.type}</p>
        <p className="mock__head">{p.name}</p>
        <p className="mock__sub">{p.mockLine}</p>
        <div className="mock__rows">
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p, index }) {
  const spotlight = useSpotlight();

  return (
    <Reveal as="article" className="proj__card card" style={{ '--d': `${index * 90}ms` }} {...spotlight}>
      <Mock p={p} />

      <div className="proj__meta">
        <span className="proj__tag">{p.type}</span>
        <h3 className="proj__name">{p.name}</h3>
        <p className="proj__period">{p.period}</p>

        <dl className="proj__pair">
          <dt>Problem</dt>
          <dd>{p.problem}</dd>
          <dt>What I built</dt>
          <dd>{p.built}</dd>
        </dl>

        <ul className="proj__features">
          {p.features.map((f) => (
            <li key={f}><LuCheck aria-hidden="true" />{f}</li>
          ))}
        </ul>

        <div className="proj__foot">
          <ul className="proj__tech">
            {p.tech.map((t) => {
              const hit = getTechIcon(t);
              return (
                <li key={t} className="chip">
                  {hit && <hit.Icon aria-hidden="true" style={{ color: hit.color }} />}
                  {t}
                </li>
              );
            })}
          </ul>
          <div className="proj__links">
            {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Source <LuArrowUpRight aria-hidden="true" /></a>}
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo <LuArrowUpRight aria-hidden="true" /></a>}
            {!p.repo && !p.demo && (
              <a href={profile.github} target="_blank" rel="noreferrer">
                Find it on GitHub <LuArrowUpRight aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section
      id="work"
      index="04"
      label="Selected Work"
      title="Things I built on my own"
      intro="Side projects where I owned every decision — frontend, backend and data model."
    >
      <div className="proj">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} p={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
