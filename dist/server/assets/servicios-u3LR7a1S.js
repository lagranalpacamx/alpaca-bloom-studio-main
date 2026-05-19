import { H as jsxRuntimeExports } from "./server-ETGQjcim.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const serviceDigital = "/assets/service-digital.jpg";
const serviceInterior = "/assets/service-interior.jpg";
const serviceBtl = "/assets/service-btl.jpg";
const blocks = [{
  id: "digital",
  n: "01",
  title: "Social Media & Marketing",
  img: serviceDigital,
  body: "Estrategia de contenido, gestión de comunidades, campañas pagadas y social commerce. Hacemos que tu marca exista — y suceda — donde tu audiencia ya está.",
  items: ["Estrategia de marca digital", "Producción de contenido", "Community management", "Campañas Meta / TikTok / Google", "Reporting & analytics"]
}, {
  id: "interior",
  n: "02",
  title: "Diseño de Interiores",
  img: serviceInterior,
  body: "Espacios comerciales, residenciales y experienciales con narrativa propia. Desde el concepto hasta la entrega de obra.",
  items: ["Conceptualización & moodboard", "Renders 3D & planos ejecutivos", "Selección de mobiliario y materiales", "Dirección de obra", "Styling & ambientación"]
}, {
  id: "btl",
  n: "03",
  title: "BTL & Experiencias",
  img: serviceBtl,
  body: "Activaciones, pop-ups, eventos corporativos y experiencias inmersivas. Producción integral, llave en mano.",
  items: ["Conceptualización de experiencia", "Diseño de stand y escenografía", "Producción técnica & logística", "Branded content en sitio", "Medición de impacto"]
}];
const extras = [{
  tag: "04",
  t: "Branding & Identidad"
}, {
  tag: "05",
  t: "Sitios Web & E-commerce"
}, {
  tag: "06",
  t: "Producción Multimedia"
}, {
  tag: "07",
  t: "Publicidad & Campañas"
}];
function Servicios() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-40 md:pt-48 pb-16 px-6 md:px-10 bg-foreground text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-primary mb-6", children: "(Servicios)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl md:text-[10rem] uppercase leading-[0.85] tracking-tighter", children: [
        "Tres disciplinas.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Un solo" }),
        " estudio."
      ] })
    ] }),
    blocks.map((b, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: b.id, className: `grid grid-cols-1 lg:grid-cols-2 ${idx % 2 ? "lg:[&>*:first-child]:order-2" : ""} border-b border-border`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] lg:aspect-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.img, alt: b.title, loading: "lazy", width: 1024, height: 1280, className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-16 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6", children: [
          "(",
          b.n,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter mb-6", children: b.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-10 max-w-md", children: b.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 border-t border-border pt-6", children: b.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-baseline border-b border-border pb-3 font-mono text-xs uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "+" })
        ] }, it)) })
      ] })
    ] }, b.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 md:px-10 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-6", children: "(También)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-px bg-border", children: extras.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8 md:p-12 flex justify-between items-baseline group hover:bg-foreground hover:text-background transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary", children: [
          "(",
          e.tag,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-5xl uppercase tracking-tighter", children: e.t })
      ] }, e.tag)) })
    ] })
  ] });
}
export {
  Servicios as component
};
