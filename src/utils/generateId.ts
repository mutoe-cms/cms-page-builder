export default function generateId(): string {
  return Math.abs(Math.sin(new Date().getTime())).toString(36).slice(2)
}
