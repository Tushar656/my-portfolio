import { LuBug, LuSearch, LuCpu, LuWrench, LuLightbulb } from 'react-icons/lu';
import { caseStudy, howIWork } from '../data/content';
import Reveal from './Reveal';
import Section from './Section';
import './Engineering.scss';

const stepGlyphs = { bug: LuBug, search: LuSearch, cpu: LuCpu, wrench: LuWrench, bulb: LuLightbulb };

export default function Engineering() {
  return (
    <Section
      id="engineering"
      index="05"
      label="Engineering"
      title="Debugging under load"
      intro="Features are the easy half. This is how I find the problems that only appear at production volume."
    >
      <Reveal as="article" className="case">
        <div className="case__head">
          <p className="case__label"><LuBug aria-hidden="true" /> Production debugging</p>
          <h3 className="case__title">{caseStudy.title}</h3>
          <p className="case__context">{caseStudy.context}</p>
        </div>

        <ol className="case__steps">
          {caseStudy.steps.map((s) => {
            const Icon = stepGlyphs[s.icon];
            return (
              <li key={s.label} className="case__step">
                <span className="case__stepIcon" aria-hidden="true">{Icon && <Icon />}</span>
                <p className="case__stepLabel">{s.label}</p>
                <p className="case__stepBody">{s.body}</p>
              </li>
            );
          })}
        </ol>
      </Reveal>

      <Reveal className="how" style={{ '--d': '120ms' }}>
        <p className="how__label">How I work</p>
        <ul className="how__list">
          {howIWork.map((h) => <li key={h}>{h}</li>)}
        </ul>
      </Reveal>
    </Section>
  );
}
