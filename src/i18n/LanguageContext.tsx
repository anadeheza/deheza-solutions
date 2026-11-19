import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { messages, type Locale, type Messages } from './translations'

const STORAGE_KEY = 'deheza-lang'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') return stored
  } catch {
    /* ignore */
  }
  return 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === 'undefined' ? 'es' : readStoredLocale(),
  )

  const t = messages[locale]

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = locale
    document.title = t.meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t.meta.description)
  }, [locale, t])

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
      t,
    }),
    [locale, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
