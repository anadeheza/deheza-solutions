import { useLanguage } from '../i18n/LanguageContext'

export function Solutions() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ds-teal">{t.solutions.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em] text-ds-navy sm:text-5xl">
            {t.solutions.title}
          </h2>
          <p className="mt-4 text-lg text-ds-muted">{t.solutions.lead}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.solutions.items.map((service, index) => (
            <article
              key={service.title}
              className={`rounded-3xl border border-ds-blue/10 p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ds-blue/10 ${
                index === 0 ? 'bg-ds-blue text-white sm:col-span-2 lg:col-span-1' : 'bg-ds-fog'
              }`}
            >
              <span className={`font-display text-sm font-semibold ${index === 0 ? 'text-ds-orange' : 'text-ds-blue'}`}>
                0{index + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em]">{service.title}</h3>
              <p className={`mt-3 leading-relaxed ${index === 0 ? 'text-white/85' : 'text-ds-muted'}`}>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
