"use client";

import { useState } from "react";
import { species } from "../data/penguins";

const FILTERS = ["All", "Least Concern", "Near Threatened", "Vulnerable", "Endangered"];

function statusClass(s) {
  return "status status-" + s.toLowerCase().replace(/\s+/g, "-");
}

export default function Species() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);
  const list = filter === "All" ? species : species.filter((s) => s.status === filter);

  return (
    <section className="section section-alt" id="species">
      <div className="wrap">
        <h2>Meet the species</h2>
        <p className="lead">Filter by conservation status, then select a card for more detail.</p>

        <div className="filters" role="group" aria-label="Filter by status">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={"chip" + (f === filter ? " chip-on" : "")}
              onClick={() => { setFilter(f); setOpen(null); }}
              aria-pressed={f === filter}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="species-grid">
          {list.map((s) => {
            const isOpen = open === s.id;
            return (
              <article key={s.id} className={"card" + (isOpen ? " card-open" : "")}>
                <button
                  className="card-head"
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                >
                  <span className="card-name">{s.name} penguin</span>
                  <span className="card-sci">{s.sci}</span>
                  <span className={statusClass(s.status)}>{s.status}</span>
                </button>

                <dl className="card-stats">
                  <div><dt>Height</dt><dd>{s.height}</dd></div>
                  <div><dt>Weight</dt><dd>{s.weight}</dd></div>
                  <div><dt>Population</dt><dd>{s.pop}</dd></div>
                </dl>

                {isOpen && (
                  <div className="card-more">
                    <p>{s.note}</p>
                    <ul>
                      <li><b>Habitat:</b> {s.habitat}</li>
                      <li><b>Diet:</b> {s.diet}</li>
                      <li><b>Lifespan:</b> {s.life}</li>
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
