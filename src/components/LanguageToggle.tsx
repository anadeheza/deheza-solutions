import { useLanguage } from '../i18n/LanguageContext'
import type { Locale } from '../i18n/translations'

const OPTIONS: { id: Locale; label: string; Flag: typeof ArgentinaFlag }[] = [
  { id: 'es', label: 'Español', Flag: ArgentinaFlag },
  { id: 'en', label: 'English', Flag: UnitedStatesFlag },
]

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div
      className={`inline-flex rounded-full border border-ds-blue/15 bg-white/70 p-0.5 ${className}`}
      role="group"
      aria-label={t.nav.language}
    >
      {OPTIONS.map((option) => {
        const active = locale === option.id
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setLocale(option.id)}
            aria-pressed={active}
            aria-label={option.label}
            title={option.label}
            className={`grid h-8 w-8 cursor-pointer place-items-center rounded-full transition ${
              active ? 'bg-ds-blue/10 ring-1 ring-ds-blue/25' : 'opacity-55 hover:opacity-100'
            }`}
          >
            <option.Flag />
          </button>
        )
      })}
    </div>
  )
}

function ArgentinaFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-3.5 w-[21px] rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="24" height="16" fill="#74ACDF" />
      <rect y="5.35" width="24" height="5.3" fill="#fff" />
      <circle cx="12" cy="8" r="2.05" fill="#F6B40E" />
      <circle cx="12" cy="8" r="0.7" fill="#85340A" />
    </svg>
  )
}

function UnitedStatesFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-3.5 w-[21px] rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="24" height="16" fill="#fff" />
      {Array.from({ length: 7 }, (_, i) =>
        i % 2 === 0 ? <rect key={i} y={i * (16 / 7)} width="24" height={16 / 7} fill="#B31942" /> : null,
      )}
      <rect width="10" height="8.6" fill="#0A3161" />
      {[
        [2, 1.7],
        [5, 1.7],
        [8, 1.7],
        [3.5, 3.5],
        [6.5, 3.5],
        [2, 5.3],
        [5, 5.3],
        [8, 5.3],
        [3.5, 7.1],
        [6.5, 7.1],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="0.55" fill="#fff" />
      ))}
    </svg>
  )
}
