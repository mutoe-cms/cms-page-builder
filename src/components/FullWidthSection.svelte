<template>
  {#if module.type === 'full-width-header'}
    <FullWidthHeader {module} />
  {/if}
</template>

<script lang="ts">
import FullWidthHeader from './fullWidthSectionModules/FullWidthHeader.svelte'

export let section: UI.FullWidthSection
const module = section.module
</script>

<style lang="scss"></style>
