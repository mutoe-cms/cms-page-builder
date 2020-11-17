import { writable } from 'svelte/store'

export const pageConfig = writable<UI.Page>({
  id: 'empty',
  sections: [],
})
