import { LuTrophy, LuMedal, LuAward, LuArrowUpRight } from 'react-icons/lu';
import { SiCodechef } from 'react-icons/si';
import { achievements, dsa, profile } from '../data/content';
import { useSpotlight } from '../lib/motion';
import Reveal from './Reveal';
import Section from './Section';
import './Achievements.scss';

const glyphs = [LuTrophy, LuMedal, LuAward];

function AchCard({ a, index }) {
  const spotlight = useSpotlight();
  const Icon = glyphs[index % glyphs.length];
  return (
    <li className="ach__item card" style={{ '--d': `${index * 70}ms` }} {...spotlight}>
      <span className="itile" aria-hidden="true"><Icon /></span>
      <span className="ach__rank">{a.rank}</span>
      <span className="ach__event">{a.event}</span>
      <span className="ach__org">{a.org}</span>
    </li>
  );
}

export default function Achievements() {
  return (
    <Section
      id="achievements"
      index="06"
      label="Achievements"
      title="Problem solving"
      intro="A competitive-programming background is where I built the habit of breaking hard problems down."
    >
      <Reveal as="ul" className="ach__list">
        {achievements.map((a, i) => (
          <AchCard key={a.rank + a.event} a={a} index={i} />
        ))}
      </Reveal>

      <Reveal className="dsa">
        <div className="dsa__total">
          <SiCodechef className="dsa__mark" aria-hidden="true" />
          <span className="dsa__value">{dsa.total}</span>
          <span className="dsa__label">DSA problems solved</span>
        </div>
        <ul className="dsa__split">
          {dsa.breakdown.map((b) => (
            <li key={b.platform}>
              <span className="dsa__count">{b.count}</span>
              <span className="dsa__platform">{b.platform}</span>
            </li>
          ))}
        </ul>
        <a className="dsa__link" href={profile.gfg} target="_blank" rel="noreferrer">
          GeeksforGeeks profile <LuArrowUpRight aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  );
}
