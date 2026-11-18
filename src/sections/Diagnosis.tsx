import { PROBLEMS } from '../content'
import { Halftone, NetworkGlobe, NetworkPattern } from '../components/NetworkPattern'

export function Diagnosis() {
  return (
    <section id="diagnostico" className="relative overflow-hidden bg-linear-to-br from-ds-blue via-[#3b4ef0] to-ds-purple py-20 text-white sm:py-28">
      <NetworkPattern className="absolute inset-x-0 top-0 h-48 w-full text-white" opacity={0.35} />
      <Halftone />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <NetworkGlobe />
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            Analizamos tu negocio
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
            Nos involucramos en el funcionamiento real de tu empresa para detectar:
          </h2>
        </div>

        <ul className="space-y-4 text-lg sm:text-xl">
          {PROBLEMS.map((problem) => (
            <li key={problem} className="flex items-start gap-3">
              <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-ds-orange text-ds-orange">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                  <path d="M3 8.2l3.2 3.2L13 4.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{problem}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="relative mx-auto mt-14 max-w-6xl px-5 text-2xl font-display font-semibold sm:px-8 sm:text-3xl">
        Proponemos soluciones reales a tus problemas.
      </p>
    </section>
  )
}
