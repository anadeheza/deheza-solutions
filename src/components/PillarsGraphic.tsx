import { useLanguage } from '../i18n/LanguageContext'
import { NetworkPattern } from './NetworkPattern'

const BLUE = '#2450ea'
const BLUE_TEAL = '#1a94c2'
const TEAL = '#2bb8c9'
const MID = '#5b63d4'
const PURPLE = '#6c2be0'

const NETWORK = [
  'right-[-8%] top-[8%] h-[70%] w-[58%]',
  'right-[-4%] top-[16%] h-[58%] w-[46%]',
  'right-[-10%] top-[2%] h-[64%] w-[56%]',
] as const

function lineColors(count: number) {
  if (count <= 1) return [PURPLE]
  if (count === 2) return [BLUE, PURPLE]
  if (count === 3) return [BLUE, TEAL, PURPLE]
  if (count === 4) return [BLUE, TEAL, MID, PURPLE]
  return [BLUE, BLUE_TEAL, TEAL, MID, PURPLE]
}

function SmileMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="20 30 100 100" className={className} aria-hidden="true">
      <path
        d="M38 76 A32 32 0 0 0 102 76"
        fill="none"
        stroke={PURPLE}
        strokeWidth="16"
        strokeLinecap="butt"
      />
      <circle cx="38" cy="55" r="12" fill={PURPLE} />
      <path
        d="M34 51.2 43.4 55.2 34 59.2"
        fill="none"
        stroke="white"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StackedWord({
  lines,
  className,
}: {
  lines: readonly string[]
  className: string
}) {
  const colors = lineColors(lines.length)
  return (
    <>
      {lines.map((line, index) => (
        <p key={`${line}-${index}`} className={className} style={{ color: colors[index] }}>
          {line}
        </p>
      ))}
    </>
  )
}

export function PillarsGraphic() {
  const { t } = useLanguage()

  return (
    <div className="relative hidden aspect-[1230/514] overflow-hidden bg-white sm:block">
      <div className="grid h-full grid-cols-3">
        {t.pillars.map((panel, index) => (
          <div key={panel.id} className="relative min-h-0">
            <NetworkPattern className={`absolute text-ds-blue ${NETWORK[index]}`} opacity={0.18} />
            {index > 0 ? <div className="absolute inset-y-0 left-0 w-px bg-[#6c2be0]" /> : null}
            <div className="relative flex h-full flex-col justify-start px-[9%] pt-[8%]">
              <StackedWord
                lines={panel.lines}
                className="font-['Montserrat'] text-[clamp(1.85rem,4.7vw,3.85rem)] font-black leading-[0.88] tracking-[-0.045em]"
              />
            </div>
            {index === 2 ? (
              <p className="absolute bottom-[11%] right-[8%] font-['Montserrat'] text-[clamp(0.58rem,0.95vw,0.78rem)] tracking-[-0.03em]">
                <span className="font-normal text-ds-blue">deheza</span>
                <span className="font-bold text-ds-blue">solutions</span>
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <SmileMark className="pointer-events-none absolute bottom-[8%] left-1/3 h-[27%] aspect-square -translate-x-1/2" />
      <SmileMark className="pointer-events-none absolute bottom-[8%] left-2/3 h-[27%] aspect-square -translate-x-1/2" />
    </div>
  )
}

export function PillarPanel({ id }: { id: string }) {
  const { t } = useLanguage()
  const panel = t.pillars.find((item) => item.id === id)
  if (!panel) return null

  return (
    <div className="relative aspect-4/5 overflow-hidden bg-white">
      <NetworkPattern className="absolute -right-6 top-2 h-[78%] w-[68%] text-ds-blue" opacity={0.16} />
      <div className="relative flex h-full flex-col justify-start px-8 pt-10">
        <StackedWord
          lines={panel.lines}
          className="font-['Montserrat'] text-5xl font-black leading-[0.94] tracking-[-0.045em]"
        />
      </div>
    </div>
  )
}
