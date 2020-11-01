<template>
  <div class="page-builder">
    <div class="page-container">
      {#each localPageConfig.sections as section (section.id)}
        {#if section.type === 'full-width'}
          <FullWidthSection section={section} />
        {/if}
      {/each}
    </div>

    <SectionOperator />
  </div>
</template>

<script lang="ts">
import examplePageConfig from '../examplePageConfig'
import { pageConfig } from '../stores/pageConfig'
import SectionOperator from './SectionOperator.svelte'
import FullWidthSection from './FullWidthSection.svelte'

pageConfig.set(examplePageConfig)

let localPageConfig: UI.PageConfig

pageConfig.subscribe(config => {
  localPageConfig = config
})
</script>

<style lang="scss">
.page-builder {
    position: relative;
}
</style>
