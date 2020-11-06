export const generateId = (): string => Math.abs(Math.sin(new Date().getTime())).toString(36).slice(2)
