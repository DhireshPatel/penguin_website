import { facts } from "../data/penguins";

export default function Facts() {
  return (
    <section className="section section-alt" id="facts">
      <div className="wrap">
        <h2>Six things worth knowing</h2>
        <div className="facts-grid">
          {facts.map((f) => (
            <article key={f.title} className="fact">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
