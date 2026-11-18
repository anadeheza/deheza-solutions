import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-ds-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo variant="white" className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Analizamos tu negocio, ordenamos lo que ya tenés y proponemos soluciones reales.
          </p>
        </div>
        <div className="text-sm text-white/70">
          <a href="#contacto" className="font-semibold text-white hover:text-ds-orange">
            Contáctanos
          </a>
          <p className="mt-2">© {new Date().getFullYear()} Deheza Solutions</p>
        </div>
      </div>
    </footer>
  )
}
