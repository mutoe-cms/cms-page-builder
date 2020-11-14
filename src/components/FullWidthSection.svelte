<template>
  {#if module.type === 'full-width-header'}
    <FullWidthHeader {module} />
  {:else if module.type === 'full-width-image'}
    <FullWidthImage {module} />
  {/if}
</template>

<script lang="ts">
import FullWidthImage from './fullWidthSectionModules/FullWidthImage.svelte'
import FullWidthHeader from './fullWidthSectionModules/FullWidthHeader.svelte'

export let section: UI.FullWidthSection
const module = section.module
</script>

<style lang="scss"></style>
