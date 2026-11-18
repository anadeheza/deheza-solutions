import { NetworkPattern } from '../components/NetworkPattern'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white pt-24">
      <NetworkPattern className="absolute -right-10 top-16 h-[70%] w-[55%] text-ds-blue/15" />
      <div
        className="pointer-events-none absolute -left-16 top-36 hidden h-40 w-40 rounded-full border-[22px] border-ds-orange/90 md:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-24 right-[44%] hidden h-28 w-28 rounded-full border-[18px] border-ds-blue lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-0 lg:pt-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-ds-teal">
            Consultoría para empresas
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ds-navy sm:text-5xl lg:text-[3.6rem]">
            ¿Tu empresa podría funcionar mejor?
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ds-muted">
            Te ayudamos a detectar qué está funcionando, qué no y{' '}
            <span className="mt-1 inline-block rounded-sm bg-ds-orange px-1.5 py-0.5 font-semibold text-white">
              cómo mejorarlo
            </span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 rounded-full bg-ds-blue px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-ds-blue/25 transition hover:bg-ds-blue-dark"
            >
              Hablemos
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ds-orange text-white">
                <Chevron />
              </span>
            </a>
            <a
              href="#proceso"
              className="text-sm font-semibold text-ds-blue underline-offset-4 hover:underline"
            >
              Ver cómo trabajamos
            </a>
          </div>
        </div>

        <div className="relative lg:h-[34rem]">
          <div className="overflow-hidden rounded-t-[2rem] bg-ds-fog lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-0 lg:rounded-t-[2.5rem]">
            <img
              src="/brand/hero-team.jpg"
              alt="Equipo de trabajo revisando información de un negocio"
              className="h-72 w-full object-cover object-[center_72%] lg:h-full lg:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ds-navy/25 via-transparent to-white/20" />
            <div className="absolute bottom-6 left-5 right-5 rounded-2xl bg-ds-blue px-5 py-4 text-white shadow-xl sm:left-8 sm:right-8">
              <p className="font-display text-lg font-semibold leading-snug sm:text-xl">
                Nos involucramos en el funcionamiento real de tu empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
