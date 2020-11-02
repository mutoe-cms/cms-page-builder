export default function throttle(fn: Function, wait: number) {
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
