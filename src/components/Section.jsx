import Reveal from './Reveal';

export default function Section({ id, index, label, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section__head">
          <p className="section__label" data-index={index}>{label}</p>
          <h2 id={`${id}-title`} className="section__title">{title}</h2>
          {intro && <p className="section__intro">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
