<svelte:window on:keydown={onKeyDown} on:mousemove={onMouseMove} on:mouseup={onMouseUp} />

<template>
  <div class="modal"
    role="dialog"
    aria-label="Modal"
    aria-modal="true"
    bind:this={modal}
    style={toStyle(modalStyle)}
  >
    <header on:mousedown={onDraggingStart}>
      <h2>Section Settings</h2>
    </header>

    <div role="tablist" aria-label="Tabs">
      {#each tabs as tab, i (tab.title)}
        <button role="tab"
          id="tab-{i}"
          aria-controls="panel-{i}"
          aria-selected={i === currentTab}
          tabindex="{i === currentTab ? -1 : 0}"
          on:click={() => currentTab = i}
        >{tab.title}</button>
      {/each}
    </div>

    <div class="tabs">
      {#each tabs as tab, i (tab.title)}
        <div role="tabpanel" aria-labelledby="tab-{i}"
          id="panel-{i}"
          tabindex="0"
          hidden={i !== currentTab}>
          <Expansions list={tab.expansions} let:item={item}>
            {item}
          </Expansions>
        </div>
      {/each}
    </div>

    <div class="button-group">
      <button aria-label="Close modal" class="close" title="Close" on:click={close}>
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <button aria-label="Undo" class="undo" title="Undo">
        <ion-icon name="arrow-undo"></ion-icon>
      </button>
      <button aria-label="Redo" class="redo" title="Redo">
        <ion-icon name="arrow-redo"></ion-icon>
      </button>
      <button aria-label="Save" class="save" title="Save">
        <ion-icon name="checkmark-outline"></ion-icon>
      </button>
    </div>

    <button class="resize-handle" on:mousedown={onResizingStart}>
      <ion-icon name="resize-outline"></ion-icon>
    </button>
  </div>
</template>

<script lang="ts">
import { createEventDispatcher, onMount, tick } from 'svelte'
import storage from 'src/storage'
import { toStyle, getScrollbarWidth } from 'src/utils'
import Expansions from './Expansions.svelte'

let currentTab = 0
const tabs: { title: string, expansions: UI.Expansion[] }[] = [
  { title: 'Content', expansions: [ { summary: 'Text' }, { summary: 'Images' }, { summary: 'Link' } ] },
  { title: 'Design', expansions: [ { summary: 'Text' }, { summary: 'Images' }, { summary: 'Link' } ] },
  { title: 'Advanced', expansions: [ { summary: 'Text' }, { summary: 'Images' }, { summary: 'Link' } ] },
]

const dispatch = createEventDispatcher()
const close = () => dispatch('close')

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') return close()
}

let modal: HTMLDivElement
let draggingModal = false
let resizingModal = false
const modalStyle: UI.ModalStyle = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
}

onMount(() => {
  const styleInStore = storage.modalPosition
  const style = styleInStore || getComputedStyle(modal)
  modalStyle.left = parseInt(String(style.left))
  modalStyle.top = parseInt(String(style.top))
  modalStyle.width = parseInt(String(style.width))
  modalStyle.height = parseInt(String(style.height))
  onMouseUp()
})
const onDraggingStart = () => draggingModal = true
const onResizingStart = () => resizingModal = true
const onMouseMove = (event: MouseEvent) => {
  if (draggingModal) {
    modalStyle.left += event.movementX
    modalStyle.top += event.movementY
  } else if (resizingModal) {
    modalStyle.width += event.movementX
    modalStyle.height += event.movementY
  }
}

const onMouseUp = async (event: MouseEvent | { movementX: 0, movementY: 0, target: any } = {} as any) => {
  const scrollbarWidth = getScrollbarWidth()
  const computedStyle = getComputedStyle(modal)
  const width = parseInt(computedStyle.width)
  const height = parseInt(computedStyle.height)

  draggingModal = false
  resizingModal = false

  // When dragged out of the window, target is document
  if (event.target === document || event.target?.closest?.('.modal') === modal) {
    modalStyle.transition = 'all .1s ease-out'
    setTimeout(() => {
      modalStyle.transition = undefined
      storage.modalPosition = modalStyle
    }, 100)
    await tick()
  }

  if (modalStyle.width < 400) modalStyle.width = 400
  else if (modalStyle.width > window.innerWidth - scrollbarWidth) modalStyle.width = window.innerWidth - scrollbarWidth
  if (modalStyle.height < 300) modalStyle.height = 300
  else if (modalStyle.height > window.innerHeight) modalStyle.height = window.innerHeight

  if (modalStyle.left + event.movementX < 0) modalStyle.left = 0
  else if (modalStyle.left + event.movementX + width > window.innerWidth - scrollbarWidth) modalStyle.left = window.innerWidth - width - scrollbarWidth
  if (modalStyle.top + event.movementY < 0) modalStyle.top = 0
  else if (modalStyle.top + event.movementY + height > window.innerHeight) modalStyle.top = window.innerHeight - height
}
</script>

<style lang="scss">
$border-radius: 4px;

.modal {
  position: fixed;
  top: calc(50% - 250px);
  left: calc(50% - 200px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 400px;
  min-width: 400px;
  max-width: 100vw;
  height: 500px;
  min-height: 300px;
  max-height: 100vh;
  background-color: #fff;
  box-shadow: 0 5px 30px rgba(#000, 0.4);
  border-radius: $border-radius;

  &:hover .resize-handle {
    transform: scale(1, 1);
  }
}

header {
  flex: none;
  padding: 24px;
  color: #fff;
  background-color: #6c2eb9;
  cursor: move;
  user-select: none;
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;

  h2 {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 18px;
  }
}

.tabs {
  flex: auto;
  min-height: 0;
  overflow: hidden scroll;
}

[role=tablist] {
  display: flex;
  flex: none;
  background-color: #7e3bd0;

  button {
    padding: 12px 24px;
    color: #fff;
    font-size: 14px;
    background-color: transparent;
    border: none;

    &:hover, &:focus {
      background-color: #7435c1;
    }

    &[aria-selected='true'] {
      background-color: #8e42eb;
    }
  }
}

[role='tabpanel'] {
  height: 100%;
  min-height: 300px;
  outline: none;
}

.button-group {
  display: flex;
  flex: none;
  height: 48px;

  button {
    flex: auto;
    height: 100%;
    color: #fff;
    font-size: 24px;
    border: none;
    --ionicon-stroke-width: 64px;

    &.close {
      background-color: $red;
    }

    &.undo {
      font-size: 22px;
      background-color: $purple;
    }

    &.redo {
      font-size: 22px;
      background-color: $blue;
    }

    &.save {
      background-color: $green;
    }
  }
}

.resize-handle {
  position: absolute;
  right: -15px;
  bottom: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: #fff;
  font-size: 20px;
  background: #4c5866;
  outline: none;
  transform: scale(0, 0);
  cursor: nwse-resize;
  transition: transform .1s ease;
  border: none;
  border-radius: 20px;

  ion-icon {
    transform: rotateZ(90deg);
    --ionicon-stroke-width: 64px;
  }
}
</style>
