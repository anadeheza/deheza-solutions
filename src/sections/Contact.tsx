import { useState, type FormEvent, type ReactNode } from 'react'
import { site } from '../config'
import { useLanguage } from '../i18n/LanguageContext'

type FormState = {
  name: string
  email: string
  company: string
  message: string
}

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
}

export function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [sent, setSent] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(t.contact.mailSubject(form.name))
    const body = encodeURIComponent(t.contact.mailBody(form))
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ds-orange">{t.contact.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em] text-ds-navy sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ds-muted">{t.contact.lead}</p>
          <div className="mt-8 space-y-3 text-sm text-ds-ink">
            <p>
              <span className="font-semibold text-ds-navy">{t.contact.emailLabel}</span>{' '}
              <a className="text-ds-blue hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="text-ds-muted">{t.contact.note}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl bg-ds-fog p-6 sm:p-8">
          {sent ? (
            <div className="flex min-h-72 flex-col items-start justify-center">
              <p className="font-display text-2xl font-semibold text-ds-navy">{t.contact.sentTitle}</p>
              <p className="mt-3 max-w-md text-ds-muted">{t.contact.sentBody(site.email)}</p>
              <button
                type="button"
                className="mt-6 font-semibold text-ds-blue"
                onClick={() => {
                  setSent(false)
                  setForm(EMPTY_FORM)
                }}
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <div className="grid gap-4">
              <Field label={t.contact.fields.name} htmlFor="name">
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(event) => update('name', event.target.value)}
                  className={inputClass}
                  autoComplete="name"
                />
              </Field>
              <Field label={t.contact.fields.email} htmlFor="email">
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => update('email', event.target.value)}
                  className={inputClass}
                  autoComplete="email"
                />
              </Field>
              <Field label={t.contact.fields.company} htmlFor="company">
                <input
                  id="company"
                  value={form.company}
                  onChange={(event) => update('company', event.target.value)}
                  className={inputClass}
                  autoComplete="organization"
                />
              </Field>
              <Field label={t.contact.fields.message} htmlFor="message">
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(event) => update('message', event.target.value)}
                  className={`${inputClass} resize-y`}
                />
              </Field>
              <button
                type="submit"
                className="mt-2 inline-flex cursor-pointer items-center justify-center rounded-full bg-ds-orange px-6 py-3.5 font-semibold text-white transition hover:brightness-95"
              >
                {t.contact.submit}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-2xl border border-ds-blue/10 bg-white px-4 py-3 text-ds-ink outline-none ring-ds-blue/30 transition focus:ring-2'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-ds-navy">{label}</span>
      {children}
    </label>
  )
}
