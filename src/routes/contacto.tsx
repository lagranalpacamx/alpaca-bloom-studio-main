import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Alpaca Creative Studio" },
      { name: "description", content: "Cuéntanos sobre tu proyecto. Diseño digital, interiorismo y BTL desde Torreón, Monterrey y Durango." },
      { property: "og:title", content: "Contacto — Alpaca" },
    ],
  }),
  component: Contacto,
});

const interests = ["Social Media", "Branding", "Interiorismo", "BTL · Eventos", "Sitio Web", "Otro"];

function Contacto() {
  const [picked, setPicked] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggle = (k: string) =>
    setPicked((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]));

  return (
    <>
      <section className="pt-40 md:pt-48 pb-12 px-6 md:px-10 bg-foreground text-background">
        <p className="font-mono text-[11px] uppercase tracking-widest text-primary mb-6">(Contacto)</p>
        <h1 className="font-display text-6xl md:text-[10rem] uppercase leading-[0.85] tracking-tighter">
          Cuéntanos<br /><span className="text-primary">tu idea.</span>
        </h1>
      </section>

      <section className="px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-32 self-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Email</p>
            <a href="mailto:alpacastudiomkt@gmail.com" className="font-display text-3xl md:text-4xl tracking-tighter break-all hover:text-primary transition-colors">
              alpacastudiomkt@gmail.com
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Teléfono</p>
            <p className="font-display text-3xl tracking-tighter">+52 81 2298 7554</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Estudio</p>
            <p className="text-lg">Torreón · Monterrey · Durango<br />México</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Horario</p>
            <p className="text-lg">Lun—Vie · 9:00 a 19:00</p>
          </div>
        </aside>

        <form
          action="https://formspree.io/f/mpqnqogp"
          method="POST"
            className="lg:col-span-8 space-y-6"
        >

<input  
  type="hidden"
  name="_subject"
  value="Nuevo mensaje desde Alpaca"
/>

<input
  type="hidden"
  name="_next"
  value="https://alpaca.com.mx/contacto"
/>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mb-3">
              (01) Me interesa
            </label>
            <div className="flex flex-wrap gap-2">
              {interests.map((i) => {
                const on = picked.includes(i);
                return (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggle(i)}
                    className={`px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-colors ${
                      on
                        ? "bg-primary text-foreground border-primary"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {i}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Field label="(02) Nombre" name="name" required />
            <Field label="(03) Empresa" name="company" />
            <Field label="(04) Email" name="email" type="email" required />
            <Field label="(05) Teléfono" name="phone" />
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mb-3">
              (06) Cuéntanos sobre tu proyecto
            </label>
            <textarea
  name="message"
  rows={5}
  required
  className="w-full bg-transparent border-b-2 border-border focus:border-foreground outline-none py-3 text-lg resize-none"
/>
          </div>

          <button
            type="submit"
            disabled={sent}
            className="bg-foreground text-background px-8 py-5 font-mono text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-foreground transition-colors inline-flex items-center gap-3 disabled:opacity-60"
          >
            {sent ? "¡Gracias! Te contactamos pronto" : "Enviar mensaje"} <ArrowUpRight className="size-4" />
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mb-3">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b-2 border-border focus:border-foreground outline-none py-3 text-lg"
      />
    </div>
  );
}
