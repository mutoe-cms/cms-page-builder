export function styleToString(styleObject: Partial<CSSStyleDeclaration> = {}): string {
  return Object.entries(styleObject).map(([ k, v ]) => {
    k = k.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
    return `${k}: ${v}`
  }).join('; ')
}

export function generateId(): string {
  return Math.abs(Math.sin(new Date().getTime())).toString(36).slice(2)
}

export function cloneDeep<T = any>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}
