import { H as jsxRuntimeExports } from "./server-ETGQjcim.js";
import { L as Link } from "./router-DHcc-h-Y.js";
import { A as ArrowUpRight } from "./arrow-up-right-DIWSpq4X.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const heroLlama = "/assets/hero-llama.jpg";
const serviceDigital = "/assets/service-digital.jpg";
const serviceInterior = "/assets/service-interior.jpg";
const serviceBtl = "/assets/service-btl.jpg";
const workBranding = "/assets/work-branding.jpg";
const workHotel = "/assets/work-hotel.jpg";
const workFestival = "/assets/work-festival.jpg";
const services = [{
  n: "01",
  tag: "DIGITAL & SOCIAL",
  title: "Estrategia\n& Marketing",
  body: "Construimos comunidades digitales vibrantes y contenido que genera impacto real en la cultura contemporánea.",
  img: serviceDigital,
  href: "/servicios",
  hash: "digital"
}, {
  n: "02",
  tag: "ESPACIOS",
  title: "Diseño de\nInteriores",
  body: "Transformamos el entorno físico en experiencias sensoriales que reflejan la identidad única de tu marca.",
  img: serviceInterior,
  href: "/servicios",
  hash: "interior"
}, {
  n: "03",
  tag: "ACTIVACIONES",
  title: "BTL &\nEventos",
  body: "Creamos momentos memorables a través de producciones de alto nivel y activaciones de marca disruptivas.",
  img: serviceBtl,
  href: "/servicios",
  hash: "btl"
}];
const featured = [{
  img: workBranding,
  tag: "Branding",
  title: "Identidad Neón Pulse",
  year: "2024"
}, {
  img: workHotel,
  tag: "Interiorismo",
  title: "Casa Aluna · Tulum",
  year: "2024"
}, {
  img: workFestival,
  tag: "BTL · Producción",
  title: "Festival Eclipse MX",
  year: "2023"
}];
const marquee = ["Branding", "Social Media", "Interiorismo", "BTL", "Producción", "Campañas", "Sitios Web", "Diseño Editorial", "Estrategia", "Eventos"];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-12 pt-32 overflow-hidden bg-foreground text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroLlama, alt: "", width: 1600, height: 1600, className: "absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-0 right-0 flex items-center justify-center opacity-[0.06] select-none pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[40vw] leading-none animate-reveal", children: "ALPACA" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-6xl animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-primary mb-6", children: "(ESTUDIO CREATIVO EN LA LAGUNA)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl sm:text-7xl md:text-[10rem] leading-[0.85] uppercase tracking-tighter text-balance", children: [
          "Boost ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "your" }),
          " brand."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-lg text-pretty opacity-80", children: "Somos un estudio multidisciplinario que transforma marcas a través del diseño digital, interiorismo y experiencias BTL." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contacto", className: "self-start bg-primary text-foreground px-8 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-background hover:text-foreground transition-colors inline-flex items-center gap-3", children: [
            "Iniciar Proyecto ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border overflow-hidden bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap py-6 font-display text-4xl md:text-6xl uppercase tracking-tighter", children: [...marquee, ...marquee].map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mx-8 flex items-center gap-8", children: [
      w,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✦" })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid grid-cols-1 md:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.href, hash: s.hash, className: "group relative border-b md:border-b-0 md:border-r border-border last:border-r-0 p-8 md:p-10 hover:bg-foreground hover:text-background transition-colors duration-500 block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground group-hover:text-primary mb-12 block transition-colors", children: [
        "(",
        s.n,
        ") ",
        s.tag
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-5xl md:text-6xl leading-[0.9] mb-6 whitespace-pre-line", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-70 group-hover:opacity-100 transition-opacity mb-8 max-w-sm", children: s.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.tag, loading: "lazy", width: 1024, height: 1280, className: "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest", children: [
        "Ver servicio ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3" })
      ] })
    ] }, s.n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 md:px-10 py-24 md:py-32 bg-foreground text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-primary mb-4", children: "(Selección 2023—2024)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9]", children: [
            "Proyectos",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "que mueven."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/proyectos", className: "font-mono text-xs uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-primary transition-colors inline-flex items-center gap-2", children: [
          "Ver todos ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", children: featured.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/proyectos", className: `group ${i === 1 ? "md:translate-y-16" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-background/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", width: 1280, height: 1600, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-between items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-1", children: p.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl tracking-tight", children: p.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] opacity-50", children: p.year })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 md:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-6", children: "(Manifiesto)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-4xl md:text-7xl leading-[1.05] tracking-tight uppercase", children: [
        "Cada marca es ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "única" }),
        ". Por eso ofrecemos soluciones 100% personalizadas — desde la chispa creativa hasta la ejecución impecable."
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
