/** Datos de contacto y redes. Completar con los valores reales del contratista. */
export const site = {
  email: 'edeheza70@gmail.com',
  /** Número internacional, solo dígitos. Ejemplo: 5491112345678 */
  whatsapp: '5493416411461',
  linkedin: 'https://www.linkedin.com/in/eduardo-deheza-72a83313/',
  instagram: '',
} as const

export function whatsappUrl(text = 'Hola, quiero consultar por Deheza Solutions') {
  if (!site.whatsapp) return '#contacto'
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}
