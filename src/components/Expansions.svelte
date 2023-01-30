<template>
  <div class="expansions">
    {#each list as item, i (item.summary)}
      <div class="details" class:open={i === currentExpand}>
        <h3 class="summary" on:click={() => onToggle(i)} on:keypress={() => onToggle(i)}>
          {item.summary}
          <ion-icon name="chevron-down-outline"></ion-icon>
        </h3>

        {#if i === currentExpand}
          <div class="content" transition:slide={{duration: 200, easing: sineInOut}}>
            <slot {item} />
          </div>
        {/if}
      </div>
    {/each}
  </div>
</template>

<script lang="ts">
import { slide } from 'svelte/transition'
import { sineInOut } from 'svelte/easing'

export let list: UI.Expansion[] = []

let currentExpand = -1

const onToggle = (index: number) => {
  if (currentExpand == index) currentExpand = -1
  else currentExpand = index
}
</script>

<style lang="scss">
.expansions {
  .details {
    border-bottom: 1px solid #f1f5f9;

    .summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      padding: 16px 24px;
      color: #a3b0c2;
      font-size: 20px;
      cursor: pointer;
      transition: all .2s ease-in-out;

      ion-icon {
        transition: transform ease-in-out;
        transition-duration: .2s;
      }
    }

    .content {
      margin-top: 16px;
      padding: 0 24px 16px;
    }

    &.open {
      .summary {
        color: #2b87da;

        ion-icon {
          transform: rotateX(180deg);
        }
      }
    }
  }
}
</style>
