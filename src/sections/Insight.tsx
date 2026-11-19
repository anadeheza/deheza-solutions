import { NetworkPattern } from '../components/NetworkPattern'
import { useLanguage } from '../i18n/LanguageContext'

export function Insight() {
  const { t } = useLanguage()

  return (
    <section id="enfoque" className="relative overflow-hidden bg-ds-fog py-20 sm:py-28">
      <NetworkPattern className="absolute inset-0 h-full w-full text-ds-blue/20" opacity={0.55} />
      <div
        className="pointer-events-none absolute -left-10 bottom-10 h-36 w-36 rounded-full border-[20px] border-ds-teal"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-8 top-8 h-32 w-32 rounded-full border-[18px] border-ds-orange"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-ds-blue">
          {t.insight.eyebrow}
        </p>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.03em] text-ds-navy sm:text-5xl">
          {t.insight.titleBefore} <span className="text-ds-teal">{t.insight.titleHighlight}</span>
        </h2>
        <p className="mt-6 font-display text-2xl font-semibold leading-snug text-ds-blue sm:text-4xl">
          {t.insight.bodyBefore} <span className="text-ds-orange">{t.insight.bodyHighlight}</span>.
        </p>
      </div>
    </section>
  )
}
