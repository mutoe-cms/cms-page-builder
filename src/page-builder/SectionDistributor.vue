<template>
  <component
    :is="fullWidthModuleMap[module.type]"
    v-if="section.type === 'full-width' && module"
    :module="module"
  />
  <template v-else-if="section.type === 'regular'">
    Regular section
  </template>
</template>

<script setup lang="ts">
import FullWidthCarouselModule from '../modules/FullWidthCarouselModule.vue'
import FullWidthImageModule from '../modules/FullWidthImageModule.vue'
import FullWidthHeaderModule from '../modules/FullWidthHeaderModule.vue'

const props = defineProps<{
  section: UI.Section
}>()

const module = $ref<UI.FullWidthModule | null>('module' in props.section ? props.section.module : null)

const fullWidthModuleMap: Record<UI.FullWidthModule['type'], unknown> = {
  'full-width-header': FullWidthHeaderModule,
  'full-width-image': FullWidthImageModule,
  'full-width-carousel': FullWidthCarouselModule,
}
</script>
