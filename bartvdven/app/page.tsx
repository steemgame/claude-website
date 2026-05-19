import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  DoorOpen,
  SunDim,
  Home,
  LayoutGrid,
  Trees,
  Building2,
  Lock,
  Layers,
  Wind,
  Bug,
  PhoneCall,
  ClipboardList,
  Hammer,
  Star,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: DoorOpen,
    title: "Kozijnen, ramen en deuren",
    desc: "Plaatsing, vervanging en reparatie van kozijnen, ramen en deuren in alle soorten hout en materialen.",
  },
  {
    icon: SunDim,
    title: "Dakramen",
    desc: "Installatie van dakramen voor meer lichtinval en ventilatie in uw woning.",
  },
  {
    icon: Home,
    title: "Dakkapellen",
    desc: "Uitbreiding van uw woning met een vakkundig geplaatste dakkapel.",
  },
  {
    icon: LayoutGrid,
    title: "Inbouwkasten en interieur",
    desc: "Maatwerk inbouwkasten en interieurtimmerwerk precies passend voor elke ruimte.",
  },
  {
    icon: Trees,
    title: "Exterieur",
    desc: "Alle timmerwerken aan de buitenkant van uw woning, van vlonder tot veranda.",
  },
  {
    icon: Building2,
    title: "Gevelbetimmering",
    desc: "Professionele gevelbetimmering voor een frisse en duurzame uitstraling.",
  },
  {
    icon: Lock,
    title: "Hang- en sluitwerk",
    desc: "Montage en reparatie van scharnieren, sloten, sluitplaten en deurbeslag.",
  },
  {
    icon: Layers,
    title: "Beglazing",
    desc: "Vervanging en plaatsing van glas in kozijnen, deuren en dakramen.",
  },
  {
    icon: Wind,
    title: "Ventilatieroosters",
    desc: "Plaatsing van ventilatieroosters voor een gezond en fris binnenklimaat.",
  },
  {
    icon: Bug,
    title: "Insectenwering",
    desc: "Montage van horren en vliegengordijnen voor kozijnen, deuren en dakramen.",
  },
];

const projects = [
  {
    title: "Vervanging voordeurkozijn",
    category: "Kozijnen, ramen en deuren",
    desc: "Mahonie kozijn met hardsteen onderdorpel, aluplex deur 54mm dik met tochtkader, 3 glasopeningen en 3-puntsluiting, RVS deurbeslag.",
    image: "https://picsum.photos/seed/door120/600/400",
  },
  {
    title: "Maatwerk kast slaapkamer",
    category: "Inbouwkasten en interieur",
    desc: "MDF inbouwkast met spiegeldeuren, volledig op maat gemaakt voor de afwijkende afmetingen van de ruimte.",
    image: "https://picsum.photos/seed/interior88/600/400",
  },
];

const reviews = [
  {
    quote:
      "Bart heeft onze oude kozijnen vakkundig vervangen. Nette uitvoering, goede prijs en altijd bereikbaar. Zeker een aanrader!",
    author: "Familie Janssen",
    location: "Oss",
  },
  {
    quote:
      "Voor onze nieuwe dakkapel en gevelbetimmering zijn we bij Bart uitgekomen. Prima samenwerking, correcte offerte en het resultaat mag er zijn.",
    author: "P. de Groot",
    location: "Nistelrode",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/woodcraft1920/1920/1080')",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/78" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <p className="text-gold uppercase tracking-[0.35em] text-xs font-semibold mb-6 font-sans">
            Allround Timmerwerken &amp; Montage — Heesch
          </p>
          <h1 className="font-display text-cream text-5xl md:text-7xl font-bold leading-tight mb-6">
            Vakmanschap dat
            <br />
            <span className="text-gold">staat als een huis</span>
          </h1>
          <p className="text-cream/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Van kozijnen tot dakkapellen, van maatwerk kasten tot
            gevelbetimmering — Bart van de Ven levert kwaliteit voor elk
            project, groot of klein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded font-semibold text-base transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Vraag een offerte aan
              <ChevronRight size={18} />
            </Link>
            <a
              href="tel:0615953885"
              className="border border-cream/35 hover:border-gold text-cream hover:text-gold px-8 py-4 rounded font-semibold text-base transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <PhoneCall size={18} />
              06-15953885
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-cream/40">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ── DIENSTEN ── */}
      <section id="diensten" className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-3">
              Wat ik doe
            </p>
            <h2 className="font-display text-charcoal text-3xl md:text-4xl font-bold">
              Mijn diensten
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimateOnScroll
                  key={service.title}
                  delay={i * 55}
                  className="h-full"
                >
                  <div className="bg-white rounded-lg p-6 border border-cream-dark hover:border-gold hover:shadow-md transition-all duration-300 h-full group cursor-default">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <h3 className="font-display font-semibold text-charcoal text-base mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-charcoal/55 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OVER BART ── */}
      <section id="over" className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-in">
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/craftsman42/600/700"
                  alt="Bart van de Ven aan het werk"
                  className="rounded-lg w-full shadow-2xl object-cover"
                  style={{ maxHeight: "520px", objectFit: "cover" }}
                />
                <div className="absolute -bottom-5 -right-4 bg-gold text-white px-6 py-4 rounded shadow-xl">
                  <div className="font-display text-3xl font-bold leading-none">
                    10+
                  </div>
                  <div className="text-xs uppercase tracking-wider mt-1 opacity-90">
                    jaar ervaring
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="text-cream">
              <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-4">
                Over mij
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Persoonlijke betrokkenheid
                <br />
                <span className="text-gold">en liefde voor het vak</span>
              </h2>
              <p className="text-cream/70 leading-relaxed mb-5 text-base">
                Vanuit een persoonlijke betrokkenheid en liefde voor het vak is
                mijn doelstelling om timmerwerken te leveren en
                timmerwerkzaamheden te verrichten in de breedste zin van het
                woord. U kunt bij mij terecht voor vrijwel alle voorkomende
                timmerwerkzaamheden, zowel binnen als buiten.
              </p>
              <p className="text-cream/70 leading-relaxed mb-8 text-base">
                Door mijn jarenlange ervaring met zowel timmer- als glaswerken
                kan ik allround adviseren op dit gebied. Ik ga altijd voor een
                goede service en een klantgerichte oplossing. De klant kan
                rekenen op 100% inzet voor elk project, groot of klein.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border border-white/10 rounded-lg p-4">
                  <div className="font-display text-gold text-2xl font-bold">
                    2015
                  </div>
                  <div className="text-cream/50 text-sm mt-1">Opgericht</div>
                </div>
                <div className="border border-white/10 rounded-lg p-4">
                  <div className="font-display text-gold text-2xl font-bold">
                    ZZP
                  </div>
                  <div className="text-cream/50 text-sm mt-1">
                    Persoonlijke aanpak
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-7 py-3.5 rounded font-semibold transition-colors"
              >
                Neem contact op
                <ChevronRight size={16} />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── WERKWIJZE ── */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-3">
              Hoe werkt het
            </p>
            <h2 className="font-display text-charcoal text-3xl md:text-4xl font-bold">
              Werkwijze
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gold/25" />
            {[
              {
                icon: PhoneCall,
                title: "Contact opnemen",
                desc: "Bel, mail of app ons voor uw vraag of klus. Wij reageren snel en persoonlijk.",
              },
              {
                icon: ClipboardList,
                title: "Vrijblijvende offerte",
                desc: "Bart komt langs voor een gratis inspectie op locatie en stelt een heldere offerte op.",
              },
              {
                icon: Hammer,
                title: "Vakkundige uitvoering",
                desc: "De klus wordt vakkundig, netjes en op het afgesproken tijdstip uitgevoerd.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={item.title} delay={i * 150}>
                  <div className="text-center relative">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-charcoal mb-6 shadow-lg">
                      <Icon size={28} className="text-gold" />
                      <span className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-gold text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-charcoal text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed max-w-xs mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── REFERENTIES ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-3">
              Uitgevoerd werk
            </p>
            <h2 className="font-display text-charcoal text-3xl md:text-4xl font-bold">
              Referentieprojecten
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {projects.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 100}>
                <div className="rounded-lg overflow-hidden border border-cream-dark bg-white group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-gold text-white text-xs px-3 py-1 rounded-full font-medium">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-charcoal text-lg mb-2">
                      {p.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <AnimateOnScroll key={r.author} delay={i * 100}>
                <div className="bg-white border border-cream-dark rounded-lg p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="text-gold"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-charcoal/75 italic leading-relaxed mb-5 text-sm">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <div>
                    <span className="font-semibold text-charcoal text-sm">
                      {r.author}
                    </span>
                    <span className="text-charcoal/45 text-sm ml-2">
                      — {r.location}
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projecten"
              className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-8 py-3.5 rounded font-semibold transition-all duration-300"
            >
              Bekijk alle projecten
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-24 bg-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-white text-3xl md:text-5xl font-bold mb-5">
              Klus groot of klein?
            </h2>
            <p className="text-white/85 text-lg md:text-xl mb-8 max-w-xl mx-auto leading-relaxed">
              Neem vrijblijvend contact op. Bart denkt graag met u mee en stelt
              een heldere, eerlijke offerte op.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gold hover:bg-cream px-8 py-4 rounded font-bold text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                Neem contact op
                <ChevronRight size={18} />
              </Link>
              <a
                href="tel:0615953885"
                className="border-2 border-white/60 text-white hover:border-white hover:bg-white/10 px-8 py-4 rounded font-bold text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} />
                06-15953885
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
