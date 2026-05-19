import { createFileRoute } from "@tanstack/react-router";

const studio = "/assets/studio.jpg";

export const Route = createFileRoute("/estudio")({
  head: () => ({
    meta: [
      { title: "Estudio — Alpaca Creative Studio" },
      { name: "description", content: "Conoce a Alpaca: un estudio creativo mexicano que combina diseño, estrategia y producción." },
      { property: "og:title", content: "Estudio — Alpaca" },
    ],
  }),
  component: Estudio,
});

const values = [
  { n: "01", t: "Identidad con alma", b: "Cada proyecto nace del cliente, no de una plantilla. Trabajamos cerca, no a distancia." },
  { n: "02", t: "Trato humano", b: "Equipos pequeños, decisiones rápidas, comunicación directa. Sin capas innecesarias." },
  { n: "03", t: "Diseño con intención", b: "Cada decisión visual responde a un objetivo de negocio o cultural. Belleza con propósito." },
  { n: "04", t: "Hecho en México", b: "Raíz local, ambición global. Colaboramos con marcas dentro y fuera del país." },
];

const stats = [
  { k: "+120", v: "Proyectos entregados" },
  { k: "+45", v: "Marcas colaborando" },
  { k: "06", v: "Años de estudio" },
  { k: "03", v: "Disciplinas integradas" },
];

function Estudio() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-12 px-6 md:px-10 bg-foreground text-background">
        <p className="font-mono text-[11px] uppercase tracking-widest text-primary mb-6">(El estudio)</p>
        <h1 className="font-display text-6xl md:text-[10rem] uppercase leading-[0.85] tracking-tighter max-w-6xl">
          Somos Alpaca.<br />
          <span className="text-primary">Creative</span> Studio.
        </h1>
      </section>

      <section className="px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <img src={studio} alt="Equipo Alpaca" loading="lazy" width={1600} height={1000} className="w-full aspect-[4/5] object-cover" />
        </div>
        <div className="lg:col-span-7 space-y-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">(Quiénes somos)</p>
          <p className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-[1.05]">
            Te acompañamos a transformar tus ideas, marcas y productos en experiencias visuales auténticas y memorables.
          </p>
          <p className="text-lg text-muted-foreground max-w-xl">
            Creemos en procesos cercanos, colaborativos, y en el poder del diseño con intención. Juntos creamos branding, contenido, espacios y experiencias que realmente conectan contigo y con tu audiencia.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 border-y border-border">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-12">(Valores)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {values.map((v) => (
            <div key={v.n} className="bg-background p-8 md:p-10">
              <span className="font-mono text-xs text-primary mb-8 block">({v.n})</span>
              <h3 className="font-display text-3xl uppercase tracking-tighter mb-4">{v.t}</h3>
              <p className="text-sm text-muted-foreground">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 bg-primary text-foreground">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="font-display text-6xl md:text-8xl tracking-tighter leading-none">{s.k}</div>
              <p className="font-mono text-[11px] uppercase tracking-widest mt-3 opacity-70">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
