import { skills } from '../data/content';
import { getTechIcon } from '../lib/icons';
import Reveal from './Reveal';
import Section from './Section';
import './Skills.scss';

export default function Skills() {
  return (
    <Section id="skills" index="07" label="Skills" title="What I actually work with">
      <div className="skills">
        {skills.map((group, gi) => (
          <Reveal
            key={group.group}
            className="skills__row"
            style={{ '--d': `${gi * 60}ms` }}
          >
            <p className="skills__group">{group.group}</p>
            <ul className="skills__items">
              {group.items.map((item) => {
                const hit = getTechIcon(item);
                return (
                  <li
                    key={item}
                    className="skills__chip"
                    style={hit ? { '--brand': hit.color } : undefined}
                  >
                    {hit && <hit.Icon aria-hidden="true" />}
                    {item}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
