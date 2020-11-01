<template>
  <div class="page-builder">
    <div class="section-container"
      on:dragenter={onDragEnter}
      on:dragleave={onDragLeave}
      on:dragover={throttle(onDragOver, 100)}
      on:drop={onDrop}>
      {#each $pageConfig.sections as section (section.id)}
        {#if section.type === 'full-width'}
          <FullWidthSection section={section} />
        {/if}
      {/each}
    </div>

    <SectionOperator on:dragend={onDragEnd} on:dragstart={onDragStart} />
  </div>
</template>

<script lang="ts">
import { onMount } from 'svelte'
import examplePageConfig from '../examplePageConfig'
import { currentDragOverSection, currentDragSection, currentSection } from '../stores/currentSection'
import { pageConfig } from '../stores/pageConfig'
import SectionOperator from './SectionOperator.svelte'
import FullWidthSection from './FullWidthSection.svelte'
import { throttle } from '../utils'

pageConfig.set(examplePageConfig)

onMount(() => {
  document.addEventListener('dragover', e => void e.preventDefault())
})

function onDragStart(event: CustomEvent<UI.Section>) {
  const index = $pageConfig.sections.findIndex(it => it === event.detail)
  currentDragSection.set($pageConfig.sections[index])
  currentSection.set(null)
  pageConfig.update(config => {
    config.sections.splice(index, 1)
    return config
  })
}

function onDragEnd(event: CustomEvent) {
  event.preventDefault()

  let insertIndex = $pageConfig.sections.findIndex(it => it.id === $currentDragOverSection.section.id)
  if (!$currentDragOverSection.isTop) insertIndex += 1
  pageConfig.update(config => {
    config.sections.splice(insertIndex, 0, $currentDragSection)
    return config
  })
  currentDragSection.set(null)
}

function onDragEnter(event: DragEvent) {
  console.log(event)
}

function onDragOver(event: DragEvent) {
  const sectionElement = (event.target as HTMLElement)?.closest('section')
  const topThreshold = sectionElement.offsetTop + sectionElement.offsetHeight / 2
  const isTop = event.clientY < topThreshold
  const sectionId = sectionElement?.id.replace(/^section-/, '')
  const section = $pageConfig.sections.find(it => it.id === sectionId) ?? null
  currentDragOverSection.set({ section, isTop })
}

function onDragLeave(event: DragEvent) {
  console.log(event)
}

function onDrop(event: DragEvent) {
  console.log(event)
}
</script>

<style lang="scss">
.page-builder {
  position: relative;
}
</style>
