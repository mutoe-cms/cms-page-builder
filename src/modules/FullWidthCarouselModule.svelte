<template>
  <Carousel {...carousel} let:slide={slide}>
    <div class="mask"></div>
    <div class="content">
      <h2>{slide.title}</h2>
      <p>{slide.body}</p>
      {#if slide.button}
        <Button style="margin-top: 12px" {...slide.button} />
      {/if}
    </div>
  </Carousel>
</template>

<script lang="ts">
import { pick } from 'src/utils'
import Carousel from '../components/Carousel.svelte'
import Button from '../components/Button.svelte'

export let module: UI.FullWidthCarouselModule
$: carousel = pick(module, [ 'slides', 'duration', 'arrow', 'indicator' ])
</script>

<style lang="scss">
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
}
</style>
