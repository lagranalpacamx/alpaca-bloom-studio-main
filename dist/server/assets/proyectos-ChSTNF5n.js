import { H as jsxRuntimeExports } from "./server-ETGQjcim.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const workBranding = "/assets/work-branding.jpg";
const workHotel = "/assets/work-hotel.jpg";
const workFestival = "/assets/work-festival.jpg";
const serviceDigital = "/assets/service-digital.jpg";
const serviceInterior = "/assets/service-interior.jpg";
const serviceBtl = "/assets/service-btl.jpg";
const projects = [{
  img: workBranding,
  tag: "Branding · Identidad",
  title: "Neón Pulse",
  year: "2024",
  client: "Música electrónica"
}, {
  img: workHotel,
  tag: "Interiorismo",
  title: "Casa Aluna",
  year: "2024",
  client: "Hotel boutique · Tulum"
}, {
  img: workFestival,
  tag: "BTL · Producción",
  title: "Festival Eclipse MX",
  year: "2023",
  client: "Cultura urbana"
}, {
  img: serviceInterior,
  tag: "Interiorismo · Retail",
  title: "Galería Mineral",
  year: "2024",
  client: "Joyería contemporánea"
}, {
  img: serviceDigital,
  tag: "Social · Campaña",
  title: "Verano Loop",
  year: "2024",
  client: "Marca de moda"
}, {
  img: serviceBtl,
  tag: "Activación",
  title: "Pop-up Halo",
  year: "2023",
  client: "Tech consumer"
}];
function Proyectos() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-40 md:pt-48 pb-12 px-6 md:px-10 bg-foreground text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-primary mb-6", children: "(Archivo · 2023—2024)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-6xl md:text-[10rem] uppercase leading-[0.85] tracking-tighter", children: "Proyectos." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-10 py-16 pb-24 md:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `group ${i % 2 === 1 && i < projects.length - 1 ? "md:translate-y-24" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", width: 1280, height: 1600, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-between items-end gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9]", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: p.client })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs opacity-50 shrink-0", children: p.year })
      ] })
    ] }, i)) }) })
  ] });
}
export {
  Proyectos as component
};
