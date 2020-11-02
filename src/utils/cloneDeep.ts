export default function cloneDeep<T = any>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}
