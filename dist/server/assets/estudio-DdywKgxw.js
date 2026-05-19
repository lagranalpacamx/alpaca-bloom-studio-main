import { H as jsxRuntimeExports } from "./server-ETGQjcim.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const studio = "/assets/studio.jpg";
const values = [{
  n: "01",
  t: "Identidad con alma",
  b: "Cada proyecto nace del cliente, no de una plantilla. Trabajamos cerca, no a distancia."
}, {
  n: "02",
  t: "Trato humano",
  b: "Equipos pequeños, decisiones rápidas, comunicación directa. Sin capas innecesarias."
}, {
  n: "03",
  t: "Diseño con intención",
  b: "Cada decisión visual responde a un objetivo de negocio o cultural. Belleza con propósito."
}, {
  n: "04",
  t: "Hecho en México",
  b: "Raíz local, ambición global. Colaboramos con marcas dentro y fuera del país."
}];
const stats = [{
  k: "+120",
  v: "Proyectos entregados"
}, {
  k: "+45",
  v: "Marcas colaborando"
}, {
  k: "06",
  v: "Años de estudio"
}, {
  k: "03",
  v: "Disciplinas integradas"
}];
function Estudio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-40 md:pt-48 pb-12 px-6 md:px-10 bg-foreground text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-primary mb-6", children: "(El estudio)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl md:text-[10rem] uppercase leading-[0.85] tracking-tighter max-w-6xl", children: [
        "Somos Alpaca.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Creative" }),
        " Studio."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 lg:sticky lg:top-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: studio, alt: "Equipo Alpaca", loading: "lazy", width: 1600, height: 1e3, className: "w-full aspect-[4/5] object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "(Quiénes somos)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl md:text-5xl uppercase tracking-tighter leading-[1.05]", children: "Te acompañamos a transformar tus ideas, marcas y productos en experiencias visuales auténticas y memorables." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl", children: "Creemos en procesos cercanos, colaborativos, y en el poder del diseño con intención. Juntos creamos branding, contenido, espacios y experiencias que realmente conectan contigo y con tu audiencia." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 md:px-10 py-20 border-y border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-12", children: "(Valores)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-primary mb-8 block", children: [
          "(",
          v.n,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl uppercase tracking-tighter mb-4", children: v.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: v.b })
      ] }, v.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-10 py-20 bg-primary text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl md:text-8xl tracking-tighter leading-none", children: s.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest mt-3 opacity-70", children: s.v })
    ] }, s.v)) }) })
  ] });
}
export {
  Estudio as component
};
