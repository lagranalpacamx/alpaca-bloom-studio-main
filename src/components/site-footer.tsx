import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-foreground">
      <div className="px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-4 opacity-70">
              ¿Tienes una marca para mover el mundo?
            </p>
            <h2 className="font-display text-6xl md:text-9xl leading-[0.85] tracking-tighter">
              Hablemos.
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest mt-6 opacity-70">
              Torreón · Monterrey · Durango
            </p>
          </div>
          <a
            href="mailto:alpacastudiomkt@gmail.com"
            className="text-2xl md:text-4xl font-bold underline decoration-4 underline-offset-8 hover:text-background transition-colors break-all"
          >
            alpacastudiomkt@gmail.com
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-[11px] uppercase tracking-widest">
          <div>
            <p className="opacity-50 mb-3">Estudio</p>
            <ul className="space-y-2">
              <li><Link to="/estudio" className="hover:underline">Sobre nosotros</Link></li>
              <li><Link to="/proyectos" className="hover:underline">Proyectos</Link></li>
            </ul>
          </div>
          <div>
            <p className="opacity-50 mb-3">Servicios</p>
            <ul className="space-y-2">
              <li><Link to="/servicios" hash="digital" className="hover:underline">Social & Marketing</Link></li>
              <li><Link to="/servicios" hash="interior" className="hover:underline">Interiorismo</Link></li>
              <li><Link to="/servicios" hash="btl" className="hover:underline">BTL & Eventos</Link></li>
            </ul>
          </div>
          <div>
            <p className="opacity-50 mb-3">Social</p>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/alpaca_creativestudio" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
              <li><a href="https://www.facebook.com/alpacacreativestudio7" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/alpaca-creative-studio7" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <p className="opacity-50 mb-3">Contacto</p>
            <ul className="space-y-2">
              <li><Link to="/contacto" className="hover:underline">Cotizar proyecto</Link></li>
              <li>+52 81 2298 7554</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-widest opacity-60">
          <span>© {new Date().getFullYear()} Alpaca Creative Studio</span>
          <span>Hecho con ⚡ en México</span>
        </div>
      </div>
    </footer>
  );
}
