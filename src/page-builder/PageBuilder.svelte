<template>
  <div class="page-builder" spellcheck={false}>
    <div class="section-container" on:dragover={throttle(onDragOver, 100)}>
      {#each $pageConfig.sections as section (section.id)}
        <section
          id="section-{section.id}"
          animate:flip={{duration: d => Math.sqrt(d) * 10, delay: 100}}
          on:mouseenter={() => onSelectSection(section)}
        >
          {#if section.type === 'full-width'}
            <SectionDistributor {section} />
          {/if}
        </section>
      {/each}
    </div>

    <SectionOperator on:dragend={onDragEnd} on:dragstart={onDragStart} />
  </div>
</template>

<script lang="ts">
import { onMount } from 'svelte'
import { flip } from 'svelte/animate'
import examplePageConfig from 'src/examplePageConfig'
import { currentDragOverSection, currentDragSection, currentSection, sectionModal } from 'src/stores/pageBuilder'
import { pageConfig } from 'src/stores/pageConfig'
import { throttle } from 'src/utils'
import SectionOperator from './SectionOperator.svelte'
import SectionDistributor from './SectionDistributor.svelte'

pageConfig.set(examplePageConfig)

onMount(() => {
  document.addEventListener('dragover', e => void e.preventDefault())
})

function onSelectSection (section: UI.Section) {
  if ($sectionModal) return
  currentSection.set(section)
}

function onDragStart (event: CustomEvent<UI.Section>) {
  const index = $pageConfig.sections.findIndex((it => it === event.detail))
  currentDragSection.set($pageConfig.sections[index])
  currentSection.set(null)
  pageConfig.update(config => {
    config.sections.splice(index, 1)
    return config
  })
}

function onDragEnd (event: CustomEvent) {
  event.preventDefault()

  let insertIndex = $pageConfig.sections.findIndex(it => it.id === $currentDragOverSection.section.id)
  if (!$currentDragOverSection.isTop) insertIndex += 1
  pageConfig.update(config => {
    config.sections.splice(insertIndex, 0, $currentDragSection)
    return config
  })
  currentDragSection.set(null)
}

function onDragOver (event: DragEvent) {
  const sectionElement = (event.target as HTMLElement)?.closest('section')
  if (!sectionElement) return
  event.stopPropagation()
  const topThreshold = sectionElement.offsetTop + sectionElement.offsetHeight / 2
  const isTop = event.clientY < topThreshold
  const sectionId = sectionElement?.id.replace(/^section-/, '')
  const section = $pageConfig.sections.find(it => it.id === sectionId) ?? null
  currentDragOverSection.set({ section, isTop })
}
</script>

<style lang="scss">
.page-builder {
  position: relative;
}
</style>
