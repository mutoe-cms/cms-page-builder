<svelte:window on:keydown={onKeyDown} />

<template>
  <div class="modal" role="dialog" aria-label="Modal" aria-modal="true">
    <header>
      <h2>Section Settings</h2>
    </header>

    <div class="tabs">
      <div role="tablist" aria-label="Tabs">
        {#each tabs as tab, i (tab.title)}
          <button role="tab"
            id="tab-{i}"
            aria-controls="panel-{i}"
            aria-selected="{i === currentTab}"
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
        </div>
      {/each}
    </div>

    <div class="button-group">
      <button aria-label="Close modal" class="close" on:click={close}>
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <button aria-label="Undo" class="undo">
        <ion-icon name="arrow-undo"></ion-icon>
      </button>
      <button aria-label="Redo" class="redo">
        <ion-icon name="arrow-redo"></ion-icon>
      </button>
      <button aria-label="Save" class="save">
        <ion-icon name="checkmark-outline"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { createEventDispatcher } from 'svelte'

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
  box-shadow: 0 5px 30px rgba(43, 135, 218, .2);
  transform: translate(-50%, -50%);
  border-radius: 3px;
  overflow: hidden;
}

header {
  padding: 24px;
  color: #fff;
  background-color: darken($purple, 20%);

  h2 {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 18px;
  }
}

[role=tablist] {
  display: flex;
  background-color: lighten($purple, 10%);

  button {
    padding: 12px 24px;
    color: #fff;
    font-size: 14px;
    background-color: transparent;
    border: none;

    &:hover, &:focus {
      background-color: darken($purple, 10%);
    }

    &[aria-selected='true'] {
      background-color: $purple;
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
