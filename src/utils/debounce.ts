/* eslint-disable prefer-rest-params */
type DebounceFn<T, A extends any[]> = (this: T, ...args: A) => unknown

export const debounce = <T = any, A extends any[] = any[]>(fn: DebounceFn<T, A>, wait: number): (this: T, ...args: A) => void => {
  let timer: number | undefined

  function debounced (this: any) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      Reflect.apply(fn, this, arguments)
    }, wait)
  }

  return debounced
}
