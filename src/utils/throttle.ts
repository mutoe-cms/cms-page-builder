type ThrottleFn<T, A extends any[]> = (this: T, ...args: A) => unknown

export const throttle = <T = any, A extends any[] = any[]>(fn: ThrottleFn<T, A>, wait: number): (this: T, ...args: A) => void => {
  let timer = null
  let firstInvoke = true

  function throttled () {
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
