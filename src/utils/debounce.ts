type DebounceFn<T, A extends any[]> = (this: T, ...args: A) => unknown

export const debounce = <T = any, A extends any[] = any[]>(fn: DebounceFn<T, A>, wait: number): (this: T, ...args: A) => void => {
  let timer = null

  function debounced () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }

  return debounced
}
