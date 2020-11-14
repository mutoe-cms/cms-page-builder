declare type JsonType = null | string | number | boolean | JsonType [] | { [key: string]: JsonType }

interface EventTarget {
  innerHTML: string
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}
