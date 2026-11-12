/* Missiological Family Tree — rendering. All text comes from data.js; visual tokens from design-system.md. */
(function () {
  const T = window.TREE;
  const $ = (s, r = document) => r.querySelector(s);
  const svgNS = "http://www.w3.org/2000/svg";

  // ---------- helpers
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const marks = (s) => esc(s).replace(/\[(\d+)\]/g, (_, n) => `<sup><a href="#n${n}" title="Note ${n}">${n}</a></sup>`);
  const colorOf = (key) => `var(--${key})`;
  const byId = {};
  const all = [...T.soil, ...T.roots, T.trunk, ...T.branches, ...T.fruit, ...T.bare];
  all.forEach((n) => (byId[n.id] = n));
  const keyOfNode = (n) => {
    if (n.key) return n.key;
    if (n.type === "fruit") return byId[n.roots[0]].key || "trunk";
    if (n.type === "bare") return "bare";
    return null;
  };
  const letterOf = (n) => (n.type === "branch" ? n.title.split(" · ")[0] : { trunk: "T", root: "R", soil: "S", bare: "·" }[n.type]);
  const toneOf = (f) => colorOf(f.tone || keyOfNode(f));
  const branchLabel = (n) => (n.type === "branch" ? n.title.split(" · ")[0] : n.type === "trunk" ? "the missio Dei" : n.title);

  // ---------- hero and legend
  $("#site-title").textContent = T.meta.title;
  $("#site-subtitle").textContent = T.meta.subtitle;
  $("#site-byline").textContent = T.meta.byline.join(" · ");
  $("#site-thesis").textContent = T.meta.thesis;
  $("#site-how").textContent = T.meta.howToRead;
  $("#legend").innerHTML = `<span class="legend-title">Four roots, nine fruit</span>` + T.meta.legend.map((l) => `<span class="key" style="--c:${colorOf(l.key)}">${esc(l.label)}</span>`).join("");

  // ---------- layout (viewBox 1000 x 1120)
  const L = {
    groundY: 800,
    trunkTop: 470,
    canopy: { "branch-a": [175, 270], "branch-b": [190, 540], "branch-c": [810, 540], "branch-d": [825, 270] },
    limbs: {
      "branch-a": { p0: [486, 560], c: [330, 470], p1: [215, 330], w0: 30, w1: 12 },
      "branch-b": { p0: [476, 670], c: [330, 650], p1: [235, 565], w0: 26, w1: 11 },
      "branch-c": { p0: [524, 670], c: [670, 650], p1: [765, 565], w0: 26, w1: 11 },
      "branch-d": { p0: [514, 560], c: [670, 470], p1: [785, 330], w0: 30, w1: 12 }
    },
    anchors: { trunk: [500, 490], "root-worker": [300, 1010], "root-mission": [700, 1010] },
    twigs: {
      "bare-technology": { d: "M500 478 Q455 400 420 330", end: [420, 330], label: [408, 318], short: "Technology & AI" },
      "bare-urban": { d: "M497 476 Q480 380 466 300", end: [466, 300], label: [458, 282], short: "Urbanization" },
      "bare-consensus": { d: "M503 476 Q520 380 534 300", end: [534, 300], label: [542, 282], short: "No consensus" },
      "bare-displacement": { d: "M500 478 Q545 400 580 330", end: [580, 330], label: [592, 318], short: "War & displacement" }
    },
    fruit: {
      "spirit-led": [95, 200], "pure": [255, 185], "committed": [160, 350],
      "loving": [115, 490], "generous": [260, 605],
      "outcome-based": [745, 605], "innovative": [885, 490],
      "collaborative": [905, 200], "entrusting": [745, 350]
    },
    soil: { "soil-activism": [150, 860], "soil-parachurch": [500, 880], "soil-wealth": [850, 860] },
    roots: {
      "root-worker": { p0: [472, 800], c: [420, 900], p1: [300, 1010], w0: 26, w1: 8, twigs: ["M300 1010 Q250 1030 205 1045", "M300 1010 Q330 1045 345 1085", "M395 915 Q345 935 300 940"] },
      "root-mission": { p0: [528, 800], c: [580, 900], p1: [700, 1010], w0: 26, w1: 8, twigs: ["M700 1010 Q750 1030 795 1045", "M700 1010 Q670 1045 655 1085", "M605 915 Q655 935 700 940"] }
    }
  };

  // ---------- svg builders
  const svg = $("#tree-svg");
  const el = (tag, attrs = {}, parent = svg) => {
    const e = document.createElementNS(svgNS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    parent.appendChild(e);
    return e;
  };
  const group = (cls, id, parent = svg) => {
    const g = el("g", { class: cls, "data-id": id, tabindex: 0, role: "button" }, parent);
    g.addEventListener("click", () => show(id));
    g.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); show(id); } });
    return g;
  };
  const label = (g, x, y, text, cls = "lbl", anchor = "middle") => {
    const t = el("text", { x, y, "text-anchor": anchor, class: cls }, g);
    t.textContent = text;
    return t;
  };
  const label2 = (g, x, y, text, cls = "lbl", anchor = "middle", max = 18) => {
    if (text.length <= max) return label(g, x, y, text, cls, anchor);
    const words = text.split(" "); let a = "", b = "";
    for (const w of words) { if (!b && (a + " " + w).trim().length <= max) a = (a + " " + w).trim(); else b = (b + " " + w).trim(); }
    label(g, x, y - 7, a, cls, anchor); label(g, x, y + 8, b, cls, anchor);
  };
  // tapered limb: quadratic bezier p0 -> c -> p1 with width w0 at the base and w1 at the tip
  const taper = ({ p0, c, p1, w0, w1 }) => {
    const n = 18, left = [], right = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n, u = 1 - t;
      const x = u * u * p0[0] + 2 * u * t * c[0] + t * t * p1[0];
      const y = u * u * p0[1] + 2 * u * t * c[1] + t * t * p1[1];
      const dx = 2 * u * (c[0] - p0[0]) + 2 * t * (p1[0] - c[0]);
      const dy = 2 * u * (c[1] - p0[1]) + 2 * t * (p1[1] - c[1]);
      const len = Math.hypot(dx, dy) || 1, nx = -dy / len, ny = dx / len;
      const w = (w0 + (w1 - w0) * t) / 2;
      left.push([x + nx * w, y + ny * w]); right.push([x - nx * w, y - ny * w]);
    }
    const pts = [...left, ...right.reverse()];
    return "M" + pts.map((p) => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L") + " Z";
  };

  // layers
  const gGround = el("g", { class: "layer-ground" });
  const gRoots = el("g", { class: "layer-roots" });
  const gLimbs = el("g", { class: "layer-limbs" });
  const gCanopy = el("g", { class: "layer-canopy" });
  const gLinks = el("g", { class: "layer-links" });
  const gNodes = el("g", { class: "layer-nodes" });

  // ground: a gentle rise with target-like rings around the trunk base
  el("path", { d: `M-10 ${L.groundY + 10} Q500 ${L.groundY - 22} 1010 ${L.groundY + 10} L1010 1130 L-10 1130 Z`, class: "ground" }, gGround);
  [[150, 16], [260, 26]].forEach(([rx, ry]) => el("ellipse", { cx: 500, cy: L.groundY + 2, rx, ry, class: "ground-ring" }, gGround));
  label(gGround, 24, L.groundY - 34, "what grew", "axis-label", "start");
  label(gGround, 24, L.groundY + 30, "what it grew from", "axis-label", "start");

  // roots
  for (const id in L.roots) {
    const r = L.roots[id];
    r.twigs.forEach((d) => { el("path", { d, class: "twig-edge" }, gRoots); el("path", { d, class: "twig" }, gRoots); });
    el("path", { d: taper(r), class: "bark" }, gRoots);
  }

  // limbs (branches) then trunk on top so the joints are hidden
  for (const b of T.branches) el("path", { d: taper(L.limbs[b.id]), class: "bark", "data-branch": b.id }, gLimbs);
  // bare twigs
  for (const b of T.bare) { const s = L.twigs[b.id]; el("path", { d: s.d, class: "twig-edge" }, gLimbs); el("path", { d: s.d, class: "twig" }, gLimbs); }
  // trunk
  const trunkD = `M452 ${L.groundY + 6} C470 700 478 600 486 ${L.trunkTop} Q500 ${L.trunkTop - 12} 514 ${L.trunkTop} C522 600 530 700 548 ${L.groundY + 6} Z`;
  el("path", { d: trunkD, class: "bark" }, gLimbs);
  ["M492 760 C488 700 490 640 494 560", "M512 740 C514 690 510 640 508 580", "M500 790 C502 760 503 740 501 710"].forEach((d) => el("path", { d, class: "bark-line" }, gLimbs));

  // canopies: two passes so only the silhouette carries the outline
  const leafSet = [[0, 0, 78], [-70, -32, 54], [72, -26, 56], [-42, 56, 50], [46, 60, 48], [2, -76, 48], [-90, 22, 42], [92, 28, 42]];
  const canopyGroups = {};
  for (const b of T.branches) {
    const [cx, cy] = L.canopy[b.id];
    const g = el("g", { class: "canopy", "data-branch": b.id }, gCanopy);
    leafSet.forEach(([dx, dy, r]) => el("circle", { cx: cx + dx, cy: cy + dy, r: r + 2.25, fill: "var(--navy)" }, g));
    leafSet.forEach(([dx, dy, r]) => el("circle", { cx: cx + dx, cy: cy + dy, r, fill: colorOf(b.key) }, g));
    leafSet.slice(0, 5).forEach(([dx, dy, r]) => el("circle", { cx: cx + dx - r * 0.25, cy: cy + dy - r * 0.25, r: r * 0.42, fill: "#fff", "fill-opacity": 0.22 }, g));
    canopyGroups[b.id] = g;
  }

  // links fruit -> second branch
  const anchorOf = (id) => L.canopy[id] || L.anchors[id];
  for (const f of T.fruit) {
    const [fx, fy] = L.fruit[f.id];
    f.roots.slice(1).forEach((rid) => {
      const [ax, ay] = anchorOf(rid);
      el("line", { x1: fx, y1: fy, x2: ax, y2: ay, class: "link", "data-fruit": f.id, "data-branch": rid }, gLinks);
    });
  }

  // node: trunk (click area = trunk shape) with the missio Dei disc
  {
    const g = group("node trunk-node", "trunk", gNodes);
    el("path", { d: trunkD, fill: "transparent" }, g);
    el("circle", { cx: 500, cy: 610, r: 31, fill: "var(--navy-2)", class: "disc ring" }, g);
    label(g, 500, 607, "MISSIO", "disc-text");
    label(g, 500, 621, "DEI", "disc-text");
  }
  // nodes: branches (canopy click + letter disc)
  for (const b of T.branches) {
    const [cx, cy] = L.canopy[b.id];
    const g = group("node branch-node", b.id, gNodes);
    leafSet.forEach(([dx, dy, r]) => el("circle", { cx: cx + dx, cy: cy + dy, r, fill: "transparent" }, g));
    el("circle", { cx, cy, r: 20, fill: "var(--cream)", class: "disc ring" }, g);
    label(g, cx, cy + 5, letterOf(b), "disc-text disc-text-dark");
  }
  // nodes: bare twigs
  for (const b of T.bare) {
    const s = L.twigs[b.id];
    const g = group("node bare-node", b.id, gNodes);
    el("circle", { cx: s.end[0], cy: s.end[1], r: 7, fill: "var(--paper)", stroke: "var(--navy)", "stroke-width": 2.25, class: "ring" }, g);
    label(g, s.label[0], s.label[1], s.short, "tag-text", s.label[0] < 500 ? "end" : "start");
    if (b.foregrounded) label(g, s.label[0], s.label[1] + 13, "underdeveloped", "sub", s.label[0] < 500 ? "end" : "start");
  }
  // nodes: fruit = badges
  const R = 42;
  for (const f of T.fruit) {
    const [x, y] = L.fruit[f.id];
    const [cx, cy] = L.canopy[f.roots[0]];
    const g = group("node fruit-node", f.id, gNodes);
    // stem toward the canopy
    const ang = Math.atan2(cy - y, cx - x);
    el("line", { x1: x + Math.cos(ang) * R, y1: y + Math.sin(ang) * R, x2: x + Math.cos(ang) * (R + 22), y2: y + Math.sin(ang) * (R + 22), stroke: "var(--navy)", "stroke-width": 3, "stroke-linecap": "round" }, g);
    const lift = el("g", { class: "lift" }, g);
    el("circle", { cx: x, cy: y, r: R + 2, class: "fruit-disc ring" }, lift);
    el("image", { href: f.badge, x: x - R, y: y - R, width: R * 2, height: R * 2 }, lift);
    const tw = f.title.length * 7.2 + 20;
    el("rect", { x: x - tw / 2, y: y + R + 6, width: tw, height: 34, rx: 17, class: "chip-rect" }, g);
    label(g, x, y + R + 21, f.title, "lbl").setAttribute("style", `fill:${toneOf(f)}`);
    label(g, x, y + R + 33, f.inherited ? "inherited" : "learned", "sub");
  }
  // nodes: soil chips
  for (const s of T.soil) {
    const [x, y] = L.soil[s.id];
    const g = group("node soil-node", s.id, gNodes);
    const w = 214, h = 42;
    el("rect", { x: x - w / 2, y: y - h / 2, width: w, height: h, rx: 21, class: "chip-rect ring lift" }, g);
    label2(g, x, y + 4.5, s.title, "lbl", "middle", 26);
  }
  // nodes: root chips at the root tips
  for (const r of T.roots) {
    const [x, y] = L.anchors[r.id];
    const g = group("node root-node", r.id, gNodes);
    const w = 206, h = 42;
    el("rect", { x: x - w / 2, y: y + 30, width: w, height: h, rx: 21, class: "chip-rect ring lift" }, g);
    label(g, x, y + 56, r.title, "lbl");
  }

  // ---------- highlighting
  function highlight(id) {
    const n = byId[id];
    svg.querySelectorAll(".node").forEach((g) => g.classList.toggle("active", g.dataset.id === id));
    svg.querySelectorAll(".link").forEach((l) => {
      const on = (n.type === "fruit" && l.dataset.fruit === id) || (n.type === "branch" && l.dataset.branch === id);
      l.classList.toggle("dim", !on && (n.type === "fruit" || n.type === "branch"));
      l.style.strokeWidth = on ? "2.5" : "";
      l.style.opacity = on ? "0.9" : "";
    });
    svg.querySelectorAll(".fruit-node").forEach((g) => {
      const f = byId[g.dataset.id];
      const related = n.type === "branch" || n.type === "trunk" ? f.roots.includes(id) : n.type === "root" ? n.fruit.includes(f.id) : true;
      g.classList.toggle("dim", !related);
    });
  }

  // ---------- panel
  const panel = $("#panel");
  const inner = $("#panel-inner");
  function sectionHTML(sec) { return `<h4>${esc(sec.h)}</h4><p>${marks(sec.p)}</p>`; }
  function chipsHTML(ids, title) {
    if (!ids || !ids.length) return "";
    return `<h4>${esc(title)}</h4><div class="chips">${ids.map((id) => {
      const n = byId[id]; const key = keyOfNode(n);
      return `<button class="chip" data-go="${id}" ${key && key !== "bare" ? `data-key="${key}" style="--c:${colorOf(key)}"` : ""}>${esc(branchLabel(n))}</button>`;
    }).join("")}</div>`;
  }
  function show(id, scroll = true) {
    const n = byId[id];
    if (!n) return;
    const key = keyOfNode(n);
    const k = key && key !== "bare" ? colorOf(key) : "var(--taupe)";
    const kicker = { soil: "Soil", root: "Roots", trunk: "Trunk", branch: "Branch", fruit: "Core Value", bare: "Bare branch" }[n.type];
    const icon = n.badge ? `<img src="${n.badge}" alt="">` : `<div class="disc-icon" style="--k:${n.type === "trunk" ? "var(--navy-2)" : k}">${esc(letterOf(n))}</div>`;
    let html = `<button class="panel-close" type="button" aria-label="Close">×</button>`;
    html += `<div class="panel-head" style="--k:${k}">${icon}<div>`;
    html += `<p class="panel-kicker">${kicker}${n.type === "fruit" ? ` · fruit of ${n.roots.map((r) => branchLabel(byId[r])).join(" and ")}` : ""}</p>`;
    html += `<h3 class="panel-title" style="--k:${n.type === "fruit" ? toneOf(n) : n.type === "branch" ? k : "var(--ink)"}">${esc(n.title)}${n.type === "fruit" ? `<span class="inherited">${n.inherited ? "inherited" : "learned"}</span>` : ""}</h3>`;
    if (n.when) html += `<p class="when">${esc(n.when)}</p>`;
    html += `</div></div><div class="panel-body">`;
    if (n.statement) html += `<p class="statement" style="--k:${k}">${esc(n.statement)}</p><p class="scripture">${esc(n.scripture)}</p>`;
    html += n.body.map(sectionHTML).join("");
    html += chipsHTML(n.roots, "Grew from");
    html += chipsHTML(n.fruit, n.type === "root" ? "Values it underwrites" : "Fruit");
    if (n.notes && n.notes.length) html += `<p class="panel-notes">Notes ${n.notes.map((x) => `<a href="#n${x}">${x}</a>`).join(", ")}</p>`;
    html += `</div>`;
    inner.innerHTML = html;
    inner.querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => show(b.dataset.go)));
    inner.querySelector(".panel-close").addEventListener("click", () => panel.classList.remove("open"));
    panel.classList.add("open");
    panel.scrollTop = 0;
    highlight(id);
    history.replaceState(null, "", "#" + id);
    if (scroll && window.innerWidth > 900) {
      const top = $("#tree").getBoundingClientRect().top + window.scrollY - 56;
      if (Math.abs(window.scrollY - top) > 300) window.scrollTo({ top, behavior: "smooth" });
    }
  }
  window.showNode = show;

  // ---------- value grid
  $("#value-grid").innerHTML = T.fruit.map((f) => {
    return `<button class="value-card" data-go="${f.id}" style="--c:${toneOf(f)}"><img src="${f.badge}" alt=""><div><div class="vt">${esc(f.title)}</div><div class="vs">${esc(f.scripture)}</div><div class="vi">${f.inherited ? "Inherited" : "Learned"} · from ${f.roots.map((r) => branchLabel(byId[r])).join(" and ")}</div></div></button>`;
  }).join("");
  $("#value-grid").querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => show(b.dataset.go)));

  // ---------- bare grid
  $("#bare-grid").innerHTML = T.bare.map((b) => `<article class="bare-card" id="card-${b.id}"><h3>${esc(b.title)}</h3><p class="when">${esc(b.when)}</p>${b.body.map(sectionHTML).join("")}</article>`).join("");

  // ---------- pruning
  const pr = T.pruning;
  $("#pruning-grid").innerHTML = [pr.deconstruct, pr.develop].map((g) => `<article class="prune-card"><h3>${esc(g.title)}</h3><p class="intro">${esc(g.intro)}</p>${g.items.map((i) => `<h4>${esc(i.h)}</h4><p>${marks(i.p)}</p>`).join("")}</article>`).join("");

  // ---------- dates
  $("#dates-table").innerHTML = `<thead><tr><th>Year</th><th>Event</th><th>Note</th></tr></thead><tbody>${T.dates.map((d) => `<tr><td class="y" style="--c:${d.branch === "trunk" ? "var(--trunk)" : colorOf(d.branch)}">${esc(d.year)}</td><td>${esc(d.event)}</td><td class="n"><a href="#n${d.note}">${d.note}</a></td></tr>`).join("")}</tbody>`;

  // ---------- notes and bibliography (notes may contain <i> markup, written by the author)
  $("#notes-list").innerHTML = T.notes.map((n, i) => `<li id="n${i + 1}">${n}<a class="back" href="#tree" title="Back to the tree">↩</a></li>`).join("");
  $("#bib-list").innerHTML = T.bibliography.map((b) => `<li>${b}</li>`).join("");

  // ---------- theme
  const root = document.documentElement;
  try { const saved = localStorage.getItem("ft-theme"); if (saved) root.setAttribute("data-theme", saved); } catch (e) {}
  $("#theme-toggle").addEventListener("click", () => {
    const dark = root.getAttribute("data-theme") === "dark" || (!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("ft-theme", next); } catch (e) {}
  });

  // ---------- deep link
  const hash = location.hash.replace("#", "");
  if (hash && byId[hash]) show(hash, false);
})();
