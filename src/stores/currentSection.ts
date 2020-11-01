import { writable } from 'svelte/store'

export const currentSection = writable<HTMLElement | null>(null)
