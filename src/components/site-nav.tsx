import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/estudio", label: "Estudio" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link to="/" className="font-display text-2xl md:text-3xl tracking-tighter leading-none">
          ALPACA <span className="text-primary">/</span> STUDIO
        </Link>

        <div className="hidden md:flex gap-8 font-mono text-[11px] uppercase tracking-widest">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          aria-label="Abrir menú"
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-6" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] bg-foreground text-background flex flex-col">
          <div className="flex justify-between items-center px-6 py-6">
            <span className="font-display text-2xl tracking-tighter">ALPACA <span className="text-primary">/</span> STUDIO</span>
            <button aria-label="Cerrar" onClick={() => setOpen(false)}>
              <X className="size-6" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-6 gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-6xl uppercase tracking-tighter hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="px-6 py-6 font-mono text-[10px] uppercase tracking-widest opacity-60">
            alpacastudiomkt@gmail.com
          </div>
        </div>
      )}
    </>
  );
}
