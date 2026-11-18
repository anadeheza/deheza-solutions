import { whatsappUrl, site } from '../config'

export function WhatsAppButton() {
  const href = whatsappUrl()
  const isReady = Boolean(site.whatsapp)

  return (
    <a
      href={href}
      target={isReady ? '_blank' : undefined}
      rel={isReady ? 'noreferrer' : undefined}
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#1ebe5d] sm:bottom-7 sm:right-7"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.44-9.91 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.9-4.45 9.9-9.91C21.94 6.44 17.5 2 12.04 2zm5.79 14.16c-.24.68-1.4 1.26-1.94 1.34-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.61-2.89-1.25-4.77-4.15-4.92-4.34-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.77-.36h.55c.18 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.15.31-.3.48-.15.16-.31.37-.45.5-.15.14-.3.29-.13.56.17.27.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.14.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.4-.24.67-.14.27.1 1.71.81 2.01.95.29.15.49.22.56.34.07.12.07.7-.17 1.38z" />
      </svg>
    </a>
  )
}
