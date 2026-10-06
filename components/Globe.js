"use client";

import { useEffect, useRef } from "react";
import { geoOrthographic, geoPath, geoGraticule10, geoDistance } from "d3-geo";
import { feature } from "topojson-client";
import landTopo from "world-atlas/land-110m.json";
import { colonies } from "../data/penguins";

const land = feature(landTopo, landTopo.objects.land);
const graticule = geoGraticule10();
const MAX = Math.max(...colonies.map((c) => c.count));
const radiusFor = (count) => 5 + Math.sqrt(count / MAX) * 17;

export default function Globe({ selected, onSelect }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const rot = useRef([-20, -30]); // [lambda, phi]
  const target = useRef(null);
  const drag = useRef(null);
  const hits = useRef([]);
  const size = useRef({ w: 600, h: 600, dpr: 1 });
  const selectedRef = useRef(selected);
  const onSelectRef = useRef(onSelect);

  selectedRef.current = selected;
  onSelectRef.current = onSelect;

  // Turn the globe toward a newly selected place
  useEffect(() => {
    const c = colonies.find((x) => x.id === selected);
    if (c) target.current = [-c.lon, -Math.max(-60, Math.min(60, c.lat * 0.6))];
  }, [selected]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;

    const resize = () => {
      const w = Math.max(260, Math.floor(wrap.clientWidth));
      const dpr = window.devicePixelRatio || 1;
      size.current = { w, h: w, dpr };
      canvas.width = w * dpr;
      canvas.height = w * dpr;
      canvas.style.height = w + "px";
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const draw = () => {
      const { w, h, dpr } = size.current;
      const [lam, phi] = rot.current;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const r = w / 2 - 8;
      const proj = geoOrthographic()
        .scale(r)
        .translate([w / 2, h / 2])
        .rotate([lam, phi])
        .clipAngle(90);
      const path = geoPath(proj, ctx);

      // ocean
      const g = ctx.createRadialGradient(w * 0.38, h * 0.32, r * 0.1, w / 2, h / 2, r);
      g.addColorStop(0, "#1f6f94");
      g.addColorStop(1, "#0a2e4a");
      ctx.beginPath();
      path({ type: "Sphere" });
      ctx.fillStyle = g;
      ctx.fill();

      // grid
      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = "rgba(200,235,250,0.14)";
      ctx.lineWidth = 0.6;
      ctx.stroke();

      // land
      ctx.beginPath();
      path(land);
      ctx.fillStyle = "#e8f3f7";
      ctx.fill();
      ctx.strokeStyle = "rgba(10,46,74,0.35)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // rim
      ctx.beginPath();
      path({ type: "Sphere" });
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // markers
      const center = [-lam, -phi];
      const list = [];
      colonies.forEach((c) => {
        if (geoDistance([c.lon, c.lat], center) >= Math.PI / 2 - 0.02) return;
        const p = proj([c.lon, c.lat]);
        if (!p) return;
        const rad = radiusFor(c.count);
        const isSel = c.id === selectedRef.current;
        list.push({ id: c.id, x: p[0], y: p[1], r: rad });

        ctx.beginPath();
        ctx.arc(p[0], p[1], rad, 0, Math.PI * 2);
        ctx.fillStyle = isSel ? "rgba(255,196,64,0.95)" : "rgba(255,138,61,0.82)";
        ctx.fill();
        ctx.lineWidth = isSel ? 3 : 1.5;
        ctx.strokeStyle = isSel ? "#fff" : "rgba(255,255,255,0.8)";
        ctx.stroke();

        if (isSel) {
          ctx.beginPath();
          ctx.arc(p[0], p[1], rad + 7, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(255,255,255,0.6)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });
      hits.current = list;
    };

    const tick = () => {
      if (target.current && !drag.current) {
        const [tl, tp] = target.current;
        let dl = tl - rot.current[0];
        dl = ((dl + 540) % 360) - 180;
        const dp = tp - rot.current[1];
        rot.current = [rot.current[0] + dl * 0.1, rot.current[1] + dp * 0.1];
        if (Math.abs(dl) < 0.1 && Math.abs(dp) < 0.1) target.current = null;
      } else if (!drag.current && !reduceMotion && selectedRef.current == null) {
        rot.current = [rot.current[0] + 0.12, rot.current[1]];
      }
      draw();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const pos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  };

  const onPointerDown = (e) => {
    canvasRef.current.setPointerCapture(e.pointerId);
    const [x, y] = pos(e);
    target.current = null;
    drag.current = { x, y, startX: x, startY: y, lam: rot.current[0], phi: rot.current[1] };
  };

  const onPointerMove = (e) => {
    const [x, y] = pos(e);
    if (drag.current) {
      const k = 0.35;
      const lam = drag.current.lam + (x - drag.current.x) * k;
      const phi = Math.max(-85, Math.min(85, drag.current.phi - (y - drag.current.y) * k));
      rot.current = [lam, phi];
    } else {
      const hit = hits.current.find((m) => Math.hypot(m.x - x, m.y - y) <= m.r + 2);
      canvasRef.current.style.cursor = hit ? "pointer" : "grab";
    }
  };

  const onPointerUp = (e) => {
    const [x, y] = pos(e);
    const d = drag.current;
    drag.current = null;
    if (d && Math.hypot(x - d.startX, y - d.startY) < 5) {
      const hit = hits.current.find((m) => Math.hypot(m.x - x, m.y - y) <= m.r + 4);
      onSelectRef.current(hit ? hit.id : null);
    }
  };

  return (
    <div ref={wrapRef} className="globe-wrap">
      <canvas
        ref={canvasRef}
        className="globe-canvas"
        role="img"
        aria-label="Interactive globe showing penguin colonies. Use the list beside it for the same information."
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (drag.current = null)}
      />
    </div>
  );
}
