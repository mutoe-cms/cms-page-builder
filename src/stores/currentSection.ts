import { writable } from 'svelte/store'

export const currentSection = writable<UI.Section>(null)

export const currentDragSection = writable<UI.Section>(null)

export const currentDragOverSection = writable<{ section: UI.Section, isTop: boolean }>({
  section: null,
  isTop: true,
})
