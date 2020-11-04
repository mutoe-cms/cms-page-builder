<svelte:window on:keydown={onKeyDown} />

<template>
  <div aria-modal="true" class="modal" role="dialog">
    <h2>Title</h2>
    <hr>
    <slot />
    <hr>
    <button aria-label="Close modal" on:click={close}>Close modal</button>
  </div>
</template>

<script lang="ts">
import { createEventDispatcher } from 'svelte'

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
  width: calc(100vw - 4em);
  max-width: 32em;
  max-height: calc(100vh - 4em);
  padding: 1em;
  background: white;
  transform: translate(-50%, -50%);
}
</style>
