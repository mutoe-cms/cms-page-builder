<template>
  {#if section.type === 'full-width'}
    <svelte:component this={fullwidthModuleMap[module.type]} {module} />
  {:else if section.type === 'regular'}
    Regular section
  {/if}
</template>

<script lang="ts">
import FullWidthCarouselModule from '../modules/FullWidthCarouselModule.svelte'
import FullWidthImageModule from '../modules/FullWidthImageModule.svelte'
import FullWidthHeaderModule from '../modules/FullWidthHeaderModule.svelte'

export let section: UI.Section
const module = section['module']

const fullwidthModuleMap: Record<UI.FullWidthModule['type'], unknown> = {
  'full-width-header': FullWidthHeaderModule,
  'full-width-image': FullWidthImageModule,
  'full-width-carousel': FullWidthCarouselModule,
}
</script>

<style lang="scss"></style>
