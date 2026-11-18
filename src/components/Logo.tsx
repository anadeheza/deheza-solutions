type LogoProps = {
  className?: string
  variant?: 'color' | 'white'
}

export function Logo({ className = 'h-9 w-auto', variant = 'color' }: LogoProps) {
  return (
    <img
      src={variant === 'white' ? '/logo-white.png' : '/logo-color.png'}
      alt="Deheza Solutions"
      className={className}
    />
  )
}
