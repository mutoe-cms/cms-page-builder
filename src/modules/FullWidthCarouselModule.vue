<template>
  <Carousel v-slot="{slide}" v-bind="module">
    <div class="mask" />
    <div class="content">
      <h2>{{ slide.title }}</h2>
      <p>{{ slide.body }}</p>
      <Button v-if="slide.button" v-bind="slide.button" />
    </div>
  </Carousel>
</template>

<script setup lang="ts">
import Carousel from '../components/Carousel.vue'
import Button from '../components/Button.vue'

defineProps<{
  module: UI.FullWidthCarouselModule
}>()
</script>

<style scoped lang="scss">
.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  background-color: #000;
  opacity: 0.3;
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
  text-align: center;

  h2 {
    text-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  }

  p {
    text-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  }

  .button {
    margin-top: 12px;
  }
}
</style>
