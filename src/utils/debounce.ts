export default function debounce<Args extends any[] = any[]>(fn: (...args: Args) => unknown, wait: number): (...args: Args) => void {
  let timer = null

  function debounced() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }

  return debounced
}
