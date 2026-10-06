import { details } from "../data/penguins";

export default function Details() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <h2>All about penguins</h2>
        <p className="lead">
          Penguins are flightless seabirds of the Southern Hemisphere. They spend most of their
          lives in the ocean and come ashore to breed and moult.
        </p>

        <div className="stat-row">
          <div><strong>18</strong><span>species (by most counts)</span></div>
          <div><strong>≈ 37 M</strong><span>years since the oldest fossils</span></div>
          <div><strong>≈ 35 km/h</strong><span>top swimming speed (gentoo)</span></div>
          <div><strong>500 m+</strong><span>dive depth of emperors</span></div>
        </div>

        <div className="detail-grid">
          {details.map((d) => (
            <article key={d.title} className="detail">
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
