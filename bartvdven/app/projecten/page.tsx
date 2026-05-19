"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const categories = [
  "Alles",
  "Kozijnen, ramen en deuren",
  "Dakramen",
  "Dakkapellen",
  "Inbouwkasten en interieur",
  "Exterieur",
  "Gevelbetimmering",
  "Hang- en sluitwerk",
  "Beglazing",
  "Ventilatieroosters",
  "Insectenwering",
];

const projects = [
  {
    title: "Vervanging voordeurkozijn",
    category: "Kozijnen, ramen en deuren",
    desc: "Mahonie kozijn met hardsteen onderdorpel, aluplex deur 54mm dik met tochtkader, 3 glasopeningen en 3-puntsluiting, RVS deurbeslag.",
    image: "https://picsum.photos/seed/door120/600/420",
  },
  {
    title: "Maatwerk kast slaapkamer",
    category: "Inbouwkasten en interieur",
    desc: "MDF inbouwkast met spiegeldeuren, volledig op maat gemaakt voor afwijkende afmetingen.",
    image: "https://picsum.photos/seed/interior88/600/420",
  },
  {
    title: "Dakraam badkamer",
    category: "Dakramen",
    desc: "Plaatsing van een Velux dakraam voor extra lichtinval en ventilatie in de badkamer.",
    image: "https://picsum.photos/seed/skylight55/600/420",
  },
  {
    title: "Gevelbetimmering woonhuis",
    category: "Gevelbetimmering",
    desc: "Volledige vervanging van de gevelbetimmering met Douglas houten planken, inclusief primer en afwerklak.",
    image: "https://picsum.photos/seed/facade33/600/420",
  },
  {
    title: "Inbouwkast woonkamer",
    category: "Inbouwkasten en interieur",
    desc: "Wand-tot-wand inbouwkast met gecombineerde opbergruimte, tv-plek en deuren op maat.",
    image: "https://picsum.photos/seed/livingroom77/600/420",
  },
  {
    title: "Vervanging achterdeurkozijn",
    category: "Kozijnen, ramen en deuren",
    desc: "Nieuw houten kozijn met dubbel glas en een isolerende tuindeur met veiligheidsbeslag.",
    image: "https://picsum.photos/seed/backdoor44/600/420",
  },
  {
    title: "Dakkapel slaapkamer",
    category: "Dakkapellen",
    desc: "Plaatsing van een dakkapel aan de achterzijde voor extra ruimte en daglicht.",
    image: "https://picsum.photos/seed/dormer22/600/420",
  },
  {
    title: "Horren terrasdeuren",
    category: "Insectenwering",
    desc: "Montage van aluminium inschuifhorren op maat voor twee grote terrasdeurparen.",
    image: "https://picsum.photos/seed/insect11/600/420",
  },
  {
    title: "Vlonder achtertuin",
    category: "Exterieur",
    desc: "Hardhouten vlonder met geïntegreerde plantenbakken en een opstap naar de tuin.",
    image: "https://picsum.photos/seed/decking99/600/420",
  },
  {
    title: "Hang- en sluitwerk voordeur",
    category: "Hang- en sluitwerk",
    desc: "Vervangen van oud beslag door RVS drukkergarnituur en een 3-punts cilinderslot.",
    image: "https://picsum.photos/seed/lock66/600/420",
  },
];

export default function ProjectenPage() {
  const [active, setActive] = useState("Alles");

  const filtered =
    active === "Alles"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-3">
            Uitgevoerd werk
          </p>
          <h1 className="font-display text-cream text-4xl md:text-5xl font-bold mb-4">
            Projecten
          </h1>
          <p className="text-cream/65 max-w-xl mx-auto text-base leading-relaxed">
            Een selectie van uitgevoerde timmerwerkzaamheden — van kleine
            reparaties tot complete renovaties.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream-dark border-b border-cream-dark sticky top-16 md:top-20 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-charcoal text-gold"
                    : "bg-white text-charcoal/65 hover:text-charcoal border border-cream-dark hover:border-charcoal/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-charcoal/45 text-sm mb-8">
            {filtered.length} project{filtered.length !== 1 ? "en" : ""}{" "}
            gevonden
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 60}>
                <div className="rounded-lg overflow-hidden border border-cream-dark bg-white group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-gold/90 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-charcoal text-lg mb-2">
                      {p.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed flex-1">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-charcoal/40">
              <p className="text-lg">Geen projecten gevonden in deze categorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-cream text-2xl md:text-3xl font-bold mb-4">
            Een vergelijkbare klus?
          </h2>
          <p className="text-cream/60 mb-7 text-sm leading-relaxed">
            Bel of mail vrijblijvend voor een offerte op maat.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-3.5 rounded font-semibold transition-colors"
          >
            Offerte aanvragen
          </a>
        </div>
      </section>
    </>
  );
}
