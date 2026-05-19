import { P as reactExports, H as jsxRuntimeExports } from "./server-ETGQjcim.js";
import { A as ArrowUpRight } from "./arrow-up-right-DIWSpq4X.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DHcc-h-Y.js";
const interests = ["Social Media", "Branding", "Interiorismo", "BTL · Eventos", "Sitio Web", "Otro"];
function Contacto() {
  const [picked, setPicked] = reactExports.useState([]);
  const [sent, setSent] = reactExports.useState(false);
  const toggle = (k) => setPicked((p) => p.includes(k) ? p.filter((x) => x !== k) : [...p, k]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-40 md:pt-48 pb-12 px-6 md:px-10 bg-foreground text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-primary mb-6", children: "(Contacto)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl md:text-[10rem] uppercase leading-[0.85] tracking-tighter", children: [
        "Cuéntanos",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "tu idea." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-4 space-y-10 lg:sticky lg:top-32 self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:alpacastudiomkt@gmail.com", className: "font-display text-3xl md:text-4xl tracking-tighter break-all hover:text-primary transition-colors", children: "alpacastudiomkt@gmail.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3", children: "Teléfono" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl tracking-tighter", children: "+52 81 2298 7554" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3", children: "Estudio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
            "Torreón · Monterrey · Durango",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "México"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3", children: "Horario" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", children: "Lun—Vie · 9:00 a 19:00" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "lg:col-span-8 space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mb-3", children: "(01) Me interesa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: interests.map((i) => {
            const on = picked.includes(i);
            return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => toggle(i), className: `px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-colors ${on ? "bg-primary text-foreground border-primary" : "border-border hover:border-foreground"}`, children: i }, i);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "(02) Nombre", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "(03) Empresa", name: "company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "(04) Email", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "(05) Teléfono", name: "phone" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mb-3", children: "(06) Cuéntanos sobre tu proyecto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, required: true, className: "w-full bg-transparent border-b-2 border-border focus:border-foreground outline-none py-3 text-lg resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: sent, className: "bg-foreground text-background px-8 py-5 font-mono text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-foreground transition-colors inline-flex items-center gap-3 disabled:opacity-60", children: [
          sent ? "¡Gracias! Te contactamos pronto" : "Enviar mensaje",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
        ] })
      ] })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: name, className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mb-3", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, className: "w-full bg-transparent border-b-2 border-border focus:border-foreground outline-none py-3 text-lg" })
  ] });
}
export {
  Contacto as component
};
