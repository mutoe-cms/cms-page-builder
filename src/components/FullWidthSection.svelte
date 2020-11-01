<template>
  <section id="section-{section.id}" on:mouseenter={onMouseEnter}>
    {#if module.type === 'full-width-header'}
      <FullWidthHeader {module} />
    {/if}
  </section>
</template>

<script lang="ts">
import { currentSection } from '../stores/currentSection'
import FullWidthHeader from './fullWidthSectionModules/FullWidthHeader.svelte'

export let section: UI.FullWidthSection
const module = section.module

function onMouseEnter() {
  currentSection.set(section)
}
</script>

<style lang="scss"></style>
