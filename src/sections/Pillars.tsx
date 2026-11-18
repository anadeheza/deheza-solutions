import { PILLARS } from '../content'

export function Pillars() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="overflow-hidden rounded-2xl border border-ds-blue/10 bg-white"
            >
              <img
                src={pillar.image}
                alt={pillar.title}
                className="aspect-square w-full object-contain p-3 sm:p-4"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
