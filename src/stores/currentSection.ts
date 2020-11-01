import { writable } from 'svelte/store'

export const currentSection = writable<UI.Section>(null)
