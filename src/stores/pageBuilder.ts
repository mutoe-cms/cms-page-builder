import { writable } from 'svelte/store'

export const currentSection = writable<UI.Section | null>(null)

export const currentDragSection = writable<UI.Section | null>(null)

export const currentDragOverSection = writable<{ section: UI.Section | null, isTop: boolean }>({
  section: null,
  isTop: true,
})

export const sectionModal = writable(false)
