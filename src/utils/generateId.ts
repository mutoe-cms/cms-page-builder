export const generateId = (): string => {
  const timestamp = new Date().getTime()
  const random = ~~(Math.random() * 10000)

  return random.toString(36) + timestamp.toString(36)
}
