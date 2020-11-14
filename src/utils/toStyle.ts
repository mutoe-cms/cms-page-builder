export type StyleObject = Partial<Record<keyof CSSStyleDeclaration, any>>

export const toStyle = (styleObject: StyleObject = {}): string => {
  const nonUnitProperties = [
    'line-height',
    'z-index',
    'order',
    'opacity',
  ]

  return Object.entries(styleObject)
    .filter(([ _, v ]) => v || v === 0)
    .map(([ k, v ]) => {
      k = k.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
      if (typeof v === 'number' && v !== 0 && !nonUnitProperties.includes(k)) v = `${v}px`
      return `${k}:${v}`
    })
    .join(';')
}


