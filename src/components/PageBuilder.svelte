<template>
  <div class="page-builder">
    <div class="page-container">
      {#each pageConfig.sections as section}
        {#if section.type === 'full-width'}
          <FullWidthSection section={section} />
        {/if}
      {/each}
    </div>

    <SectionOperator />
  </div>
</template>

<script lang="ts">
import SectionOperator from './SectionOperator.svelte'
import FullWidthSection from './FullWidthSection.svelte'
import pageConfig from '../examplePageConfig'
</script>

<style lang="scss">
.page-builder {
    position: relative;
}
</style>
