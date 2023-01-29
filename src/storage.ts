const store = {
  modalPosition: null as UI.ModalStyle | null,
}

const storage = new Proxy(store, {
  get (store, prop) {
    if (!(prop in store)) throw new Error(`${String(prop)} is not in store`)
    return JSON.parse(localStorage.getItem(String(prop)) ?? 'null')
  },
  set (store, prop, value) {
    if (!(prop in store)) throw new Error(`${String(prop)} is not in store}`)
    localStorage.setItem(String(prop), JSON.stringify(value))
    return true
  },
})

export default storage
