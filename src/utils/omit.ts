export default function omit<T extends Record<K, any>, K extends string> (object: T, paths: K | K[]): Omit<T, K> {
  if (!(paths instanceof Array)) paths = [paths]
  const omitted = { ...object }
  for (const key of paths) {
    omitted[key] = undefined as any
  }
  return omitted
}
