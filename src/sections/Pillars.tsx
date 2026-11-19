import { useState } from 'react'
import { PillarPanel, PillarsGraphic } from '../components/PillarsGraphic'
import { useLanguage } from '../i18n/LanguageContext'

export function Pillars() {
  const { t } = useLanguage()
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden">
          <PillarsGraphic />
          <div className="absolute inset-0 hidden grid-cols-3 sm:grid">
            {t.pillars.map((pillar) => {
              const open = active === pillar.id
              return (
                <button
                  key={pillar.id}
                  type="button"
                  className="group relative cursor-pointer border-0 bg-transparent text-left"
                  onMouseEnter={() => setActive(pillar.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(pillar.id)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(open ? null : pillar.id)}
                  aria-expanded={open}
                >
                  <span className="sr-only">{pillar.title}</span>
                  <div
                    className={`absolute inset-0 flex items-end bg-ds-navy p-6 transition duration-200 ${
                      open ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <div>
                      <p className="font-display text-lg font-semibold text-white">{pillar.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/90">{pillar.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="grid sm:hidden">
            {t.pillars.map((pillar, index) => {
              const open = active === pillar.id
              return (
                <button
                  key={pillar.id}
                  type="button"
                  className={`border-0 bg-white p-0 text-left ${index > 0 ? 'border-t border-ds-blue/10' : ''}`}
                  onClick={() => setActive(open ? null : pillar.id)}
                  aria-expanded={open}
                >
                  <PillarPanel id={pillar.id} />
                  <div className="px-6 pb-6">
                    <p className="font-display text-lg font-semibold text-ds-navy">{pillar.title}</p>
                    {open ? (
                      <p className="mt-2 text-sm leading-relaxed text-ds-muted">{pillar.description}</p>
                    ) : (
                      <p className="mt-2 text-sm text-ds-blue">{t.pillarsUi.seeDescription}</p>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
