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

export function debounce(fn: Function, wait: number) {
  let timer = null

  function debounced() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }

  return debounced
}

export function throttle(fn: Function, wait: number) {
  let timer = null
  let firstInvoke = true

  function throttled() {
    if (firstInvoke) {
      fn.apply(this, arguments)
      firstInvoke = false
      return
    }

    if (timer) return
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null

      fn.apply(this, arguments)
    }, wait)
  }

  return throttled
}
