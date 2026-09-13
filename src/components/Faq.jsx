import { useId, useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import { faqs } from '../data/content';
import Reveal from './Reveal';
import Section from './Section';
import './Faq.scss';

function Item({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={`faq__item${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="faq__q"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{item.q}</span>
        <span className="faq__sign" aria-hidden="true"><LuPlus /></span>
      </button>
      <div className="faq__wrap" aria-hidden={!open}>
        <div id={panelId} className="faq__a">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <Section
      id="faqs"
      index="08"
      label="FAQs"
      title="Frequently asked questions"
      intro="The things people usually want to know before a first call."
    >
      <Reveal className="faq">
        {faqs.map((f, i) => (
          <Item key={f.q} item={f} defaultOpen={i === 0} />
        ))}
      </Reveal>
    </Section>
  );
}
