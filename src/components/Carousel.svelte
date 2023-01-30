<template>
  <div class="carousel" on:mouseenter={() => pause = true} on:mouseleave={() => pause = false}>
    <div class="slides" style={toStyle({transform: `translateX(-${currentSlide*100}%)`})}>
      {#each slides as slide, i (i)}
        <div class="slide" style={toStyle({backgroundImage: `url(${slide.background})`})}>
          <slot index={i} slide={slide} />
        </div>
      {/each}
    </div>

    {#if indicator}
      <div class="indicator">
        {#each slides as _, i}
          <span class:active={currentSlide === i}
                on:click={() => currentSlide = i}
                on:keypress={() => currentSlide = i}></span>
        {/each}
      </div>
    {/if}

    {#if arrow}
      <div class="left-control" on:click={prevSlide} on:keypress={prevSlide}>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
      <div class="right-control" on:click={nextSlide} on:keypress={nextSlide}>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
    {/if}
  </div>
</template>

<script lang="ts">
import { onMount } from 'svelte'
import { toStyle } from 'src/utils'

export let slides: UI.Slide[] = []
export let arrow: boolean = true
export let indicator: boolean = true
export let duration: number = 5000

let currentSlide = 0
let pause = false

const nextSlide = () => {
  currentSlide += 1
  if (currentSlide >= slides.length) currentSlide = 0
}

const prevSlide = () => {
  currentSlide -= 1
  if (currentSlide < 0) currentSlide = slides.length - 1
}

const autoplay = () => {
  setInterval(() => {
    if (pause) return
    nextSlide()
  }, duration)
}

onMount(() => {
  duration > 0 && autoplay()
})
</script>

<style lang="scss">
.carousel {
  position: relative;
  clear: both;
  overflow: hidden;

  &:hover {
    .left-control {
      left: 0;
      opacity: 1;
    }

    .right-control {
      right: 0;
      opacity: 1;
    }
  }
}

.slides {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  transition: transform .4s ease-in-out;
}

.slide {
  position: relative;
  flex: none;
  width: 100%;
  padding: 48px 0;
  color: #fff;
  background: transparent center / cover no-repeat;
}

.indicator {
  position: absolute;
  right: 0;
  bottom: 8%;
  left: 0;
  display: flex;
  justify-content: center;

  > span {
    position: relative;
    display: block;
    margin: 0 2px;
    padding: 4px;
    cursor: pointer;
    opacity: .2;
    transition: opacity .2s;

    &::after {
      display: block;
      width: 8px;
      height: 8px;
      background-color: #fff;
      content: '';
      border-radius: 100%;
    }

    &.active {
      opacity: .8;
    }
  }
}

.left-control, .right-control {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  min-width: 48px;
  max-width: 128px;
  cursor: pointer;
  opacity: 0;
  transition: all .4s ease-in-out;

  ion-icon {
    color: rgba(#fff, .6);
    font-size: 40px;
  }
}

.left-control {
  left: -48px;

  ion-icon {
    transform: rotateZ(90deg);
  }
}

.right-control {
  right: -48px;

  ion-icon {
    transform: rotateZ(-90deg);
  }
}
</style>
