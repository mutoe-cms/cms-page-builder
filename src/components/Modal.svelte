<svelte:window on:keydown={onKeyDown} on:mousemove={onMouseMove} on:mouseup={onMouseUp} />

<template>
  <div class="modal"
    role="dialog"
    aria-label="Modal"
    aria-modal="true"
    bind:this={modal}
    style={styleToString(modalStyle)}
  >
    <header on:mousedown={onMouseDown}>
      <h2>Section Settings</h2>
    </header>

    <div class="tabs">
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

      {#each tabs as tab, i (tab.title)}
        <div role="tabpanel" aria-labelledby="tab-{i}"
          id="panel-{i}"
          tabindex="0"
          hidden={i !== currentTab}>
          {tab.content}
          {JSON.stringify(modalStyle)}
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
  </div>
</template>

<script lang="ts">
import { createEventDispatcher, onMount, tick } from 'svelte'
import { styleToString } from 'src/utils'

let currentTab = 0
const tabs = [
  { title: 'First', content: 'First panel' },
  { title: 'Second', content: 'Second panel' },
  { title: 'Third', content: 'Third panel' },
]

const dispatch = createEventDispatcher()
const close = () => dispatch('close')

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') return close()
}

let modal: HTMLDivElement
let draggingModal = false
const modalStyle: { left?: number, top?: number, transition?: string } = {}

onMount(() => {
  const computedStyle = getComputedStyle(modal)
  modalStyle.left = parseInt(computedStyle.left)
  modalStyle.top = parseInt(computedStyle.top)
})
const onMouseDown = () => draggingModal = true
const onMouseMove = (event: MouseEvent) => {
  if (!draggingModal) return
  modalStyle.left += event.movementX
  modalStyle.top += event.movementY
}
const onMouseUp = async (event: MouseEvent) => {
  draggingModal = false
  const computedStyle = getComputedStyle(modal)
  const halfWidth = parseInt(computedStyle.width) / 2
  const halfHeight = parseInt(computedStyle.height) / 2
  modalStyle.transition = 'all .1s ease-out'
  setTimeout(() => {modalStyle.transition = undefined}, 100)
  await tick()
  if (modalStyle.left + event.movementX - halfWidth < 0) modalStyle.left = halfWidth
  else if (modalStyle.left + event.movementX + halfWidth > window.innerWidth) modalStyle.left = window.innerWidth - halfWidth
  if (modalStyle.top + event.movementY - halfHeight < 0) modalStyle.top = halfHeight
  else if (modalStyle.top + event.movementY + halfHeight > window.innerHeight) modalStyle.top = window.innerHeight - halfHeight
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  max-width: 100vw;
  max-height: 100vh;
  background: white;
  box-shadow: 0 5px 30px rgba(#000, 0.4);
  transform: translate(-50%, -50%);
  border-radius: 4px;
  overflow: hidden;
}

header {
  padding: 24px;
  color: #fff;
  background-color: #6c2eb9;
  cursor: move;
  user-select: none;

  h2 {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 18px;
  }
}

[role=tablist] {
  display: flex;
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
  min-height: 300px;
}

.button-group {
  display: flex;
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
</style>
