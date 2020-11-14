<template>
  <div class="image">
    <img src={module?.src || defaultImage} alt="">
  </div>
</template>

<script lang="ts">
import defaultImage from '../../images/default_image.svg'

export let module: UI.FullWidthImageModule
</script>

<style lang="scss">
.image {
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
