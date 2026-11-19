import { Halftone, NetworkPattern } from '../components/NetworkPattern'
import { useLanguage } from '../i18n/LanguageContext'

export function Measure() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-ds-blue via-[#2f7fe8] to-ds-teal py-20 text-white sm:py-28">
      <NetworkPattern className="absolute inset-x-0 top-0 h-40 w-full text-white" opacity={0.4} />
      <Halftone />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-[-0.04em] sm:text-6xl">
          {t.measure.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-white/90">{t.measure.body}</p>
      </div>
    </section>
  )
}

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="proceso" className="bg-ds-fog py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ds-navy sm:text-4xl">{t.process.title}</h2>
        <p className="mt-3 max-w-2xl text-ds-muted">{t.process.lead}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step) => (
            <article key={step.n} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="font-display text-sm font-semibold text-ds-orange">{step.n}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ds-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ds-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
