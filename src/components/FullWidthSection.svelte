<template>
  <section id={section.id} on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
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

function onMouseEnter(event: MouseEvent) {
  currentSection.set(event.target as HTMLElement)
}

function onMouseLeave() {
  currentSection.set(null)
}
</script>

<style lang="scss"></style>
