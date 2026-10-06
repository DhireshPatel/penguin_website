"use client";

import { useState } from "react";
import Globe from "./Globe";
import { colonies } from "../data/penguins";

const fmt = (n) => n.toLocaleString("en-US");

export default function GlobeSection() {
  const [selected, setSelected] = useState(null);
  const total = colonies.reduce((a, c) => a + c.count, 0);
  const active = colonies.find((c) => c.id === selected);
  const sorted = [...colonies].sort((a, b) => b.count - a.count);

  return (
    <section className="section globe-section" id="globe">
      <div className="wrap">
        <h2>Where penguins live</h2>
        <p className="lead">
          Drag the globe to turn it. Bigger dots mean more penguins. Select a dot or a place in the
          list to see who lives there.
        </p>

        <div className="globe-layout">
          <div className="globe-box">
            <Globe selected={selected} onSelect={setSelected} />
            <p className="globe-hint">Drag to rotate · select a dot for details</p>
          </div>

          <aside className="globe-side">
            <div className="globe-total">
              <strong>≈ {fmt(total)}</strong>
              <span>penguins across the {colonies.length} places shown</span>
            </div>

            {active ? (
              <div className="place-detail">
                <h3>{active.name}</h3>
                <p className="place-country">{active.country}</p>
                <p className="place-count">≈ {fmt(active.count)} penguins</p>
                <p>{active.text}</p>
                <p><b>Species:</b> {active.species.join(", ")}</p>
                <button className="btn btn-ghost small" onClick={() => setSelected(null)}>Clear selection</button>
              </div>
            ) : (
              <p className="place-empty">Nothing selected yet. Pick a place below or on the globe.</p>
            )}

            <ul className="place-list">
              {sorted.map((c) => (
                <li key={c.id}>
                  <button
                    className={"place-row" + (c.id === selected ? " place-row-on" : "")}
                    onClick={() => setSelected(c.id)}
                  >
                    <span>{c.name}</span>
                    <span>{fmt(c.count)}</span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="note">Figures are rounded estimates and vary by survey year.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
