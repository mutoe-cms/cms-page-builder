export type StyleObject = Partial<Record<keyof CSSStyleDeclaration, any>>

export const toStyle = (styleObject: StyleObject = {}): string => {
  const nonUnitProperties = new Set([
    'line-height',
    'z-index',
    'order',
    'opacity',
  ])

  return Object.entries(styleObject)
    .filter(([, v]) => v === 0 || v)
    .map(([k, v]) => {
      k = k.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
      if (typeof v === 'number' && v !== 0 && !nonUnitProperties.has(k)) v = `${v}px`
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return `${k}:${v}`
    })
    .join(';')
}
