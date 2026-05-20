import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

// Served from public/ to avoid Windows EBUSY locks when Vite HMR re-reads bundled assets.
const heroLlama = "/assets/hero-llama.jpg";
const serviceDigital = "/assets/service-digital.jpg";
const serviceInterior = "/assets/service-interior.jpg";
const serviceBtl = "/assets/service-btl.jpg";
const workBranding = "/assets/work-branding.jpg";
const workHotel = "/assets/work-hotel.jpg";
const workFestival = "/assets/work-festival.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alpaca — Estudio Creativo Mexicano" },
      { name: "description", content: "Boost your brand. Diseño digital, branding, interiorismo y experiencias BTL desde México." },
    ],
  }),
  component: Home,
});

const services = [
  {
    n: "01",
    tag: "DIGITAL & SOCIAL",
    title: "Estrategia\n& Marketing",
    body: "Construimos comunidades digitales vibrantes y contenido que genera impacto real en la cultura contemporánea.",
    img: serviceDigital,
    href: "/servicios" as const,
    hash: "digital",
  },
  {
    n: "02",
    tag: "ESPACIOS",
    title: "Diseño de\nInteriores",
    body: "Transformamos el entorno físico en experiencias sensoriales que reflejan la identidad única de tu marca.",
    img: serviceInterior,
    href: "/servicios" as const,
    hash: "interior",
  },
  {
    n: "03",
    tag: "ACTIVACIONES",
    title: "BTL &\nEventos",
    body: "Creamos momentos memorables a través de producciones de alto nivel y activaciones de marca disruptivas.",
    img: serviceBtl,
    href: "/servicios" as const,
    hash: "btl",
  },
];

const featured = [
  { img: workBranding, tag: "Branding", title: "Identidad Neón Pulse", year: "2024" },
  { img: workHotel, tag: "Interiorismo", title: "Casa Aluna · Tulum", year: "2024" },
  { img: workFestival, tag: "BTL · Producción", title: "Festival Eclipse MX", year: "2023" },
];

const marquee = [
  "Branding", "Social Media", "Interiorismo", "BTL", "Producción",
  "Campañas", "Sitios Web", "Diseño Editorial", "Estrategia", "Eventos",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-12 pt-32 overflow-hidden bg-foreground text-background">
        <img
          src={heroLlama}
          alt=""
          width={1600}
          height={1600}
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />

        <div className="absolute top-1/3 left-0 right-0 flex items-center justify-center opacity-[0.06] select-none pointer-events-none">
          <span className="font-display text-[40vw] leading-none animate-reveal">ALPACA</span>
        </div>

        <div className="relative max-w-6xl animate-fade-up">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary mb-6">
            (ESTUDIO CREATIVO EN LA LAGUNA)
          </p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-[10rem] leading-[0.85] uppercase tracking-tighter text-balance">
            Boost <span className="text-primary">your</span> brand.
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-md text-lg text-pretty opacity-80">
              Somos un estudio multidisciplinario que transforma marcas a través del diseño digital, interiorismo y experiencias BTL.
            </p>
            <Link
              to="/contacto"
              className="self-start bg-primary text-foreground px-8 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-background hover:text-foreground transition-colors inline-flex items-center gap-3"
            >
              Iniciar Proyecto <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border overflow-hidden bg-background">
        <div className="flex animate-marquee whitespace-nowrap py-6 font-display text-4xl md:text-6xl uppercase tracking-tighter">
          {[...marquee, ...marquee].map((w, i) => (
            <span key={i} className="mx-8 flex items-center gap-8">
              {w} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.n}
            to={s.href}
            hash={s.hash}
            className="group relative border-b md:border-b-0 md:border-r border-border last:border-r-0 p-8 md:p-10 hover:bg-foreground hover:text-background transition-colors duration-500 block"
          >
            <span className="font-mono text-xs text-muted-foreground group-hover:text-primary mb-12 block transition-colors">
              ({s.n}) {s.tag}
            </span>
            <h3 className="font-display text-5xl md:text-6xl leading-[0.9] mb-6 whitespace-pre-line">
              {s.title}
            </h3>
            <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity mb-8 max-w-sm">
              {s.body}
            </p>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={s.img}
                alt={s.tag}
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
              Ver servicio <ArrowUpRight className="size-3" />
            </div>
          </Link>
        ))}
      </section>

      {/* FEATURED WORK */}
      <section className="px-6 md:px-10 py-24 md:py-32 bg-foreground text-background">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary mb-4">(Selección 2023—2024)</p>
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9]">
              Proyectos<br />que mueven.
            </h2>
          </div>
          <Link to="/proyectos" className="font-mono text-xs uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-primary transition-colors inline-flex items-center gap-2">
            Ver todos <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((p, i) => (
            <Link
              key={i}
              to="/proyectos"
              className={`group ${i === 1 ? "md:translate-y-16" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-background/5">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 flex justify-between items-end">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">{p.tag}</p>
                  <h3 className="font-display text-2xl tracking-tight">{p.title}</h3>
                </div>
                <span className="font-mono text-[10px] opacity-50">{p.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-6">
            (Manifiesto)
          </p>
          <p className="font-display text-4xl md:text-7xl leading-[1.05] tracking-tight uppercase">
            Cada marca es <span className="text-primary">única</span>. Por eso ofrecemos soluciones 100% personalizadas — desde la chispa creativa hasta la ejecución impecable.
          </p>
        </div>
      </section>
    </>
  );
}
