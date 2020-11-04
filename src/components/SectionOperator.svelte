<template>
  <div class="section-operator" style={styleToString(borderRect)}>
    <div class="border"></div>

    <div class="section-menu">
      <button aria-label="Handle" class="move"
        draggable="true"
        on:dragend={onDragEnd}
        on:dragstart={onDratStart}
      >
        <ion-icon name="move-sharp"></ion-icon>
      </button>
      <button aria-label="Settings" class="settings">
        <ion-icon name="settings-sharp"></ion-icon>
      </button>
      <button aria-label="Duplicate" class="duplicate" on:click={onDuplicate}>
        <ion-icon name="duplicate-sharp"></ion-icon>
      </button>
      <button aria-label="Delete" class="delete" on:click={onDelete}>
        <ion-icon name="trash-sharp"></ion-icon>
      </button>
    </div>

    <button aria-label="Add section" class="add-section">
      <ion-icon name="add-sharp"></ion-icon>
    </button>
  </div>

  <div class="drag-over-placeholder"
    style={styleToString({...dragOverRect, height: dragOverPlaceholderHeight + "px"})}></div>
</template>

<script lang="ts">
import { cloneDeep, generateId, styleToString } from 'src/utils'
import { createEventDispatcher } from 'svelte'
import { currentDragOverSection, currentDragSection, currentSection } from '../stores/currentSection'
import { pageConfig } from '../stores/pageConfig'

const dragOverPlaceholderHeight = 48

let borderRect: Partial<CSSStyleDeclaration> = {
  top: '0',
  height: '0',
  opacity: '0',
}
let dragOverRect: Partial<CSSStyleDeclaration> = {
  top: '0',
  opacity: '0',
}

currentSection.subscribe(section => {
  if (!section || $currentDragSection) return borderRect = {}

  dragOverRect = {}
  const element = document.querySelector(`#section-${section.id}`) as HTMLElement
  borderRect = {
    top: element.offsetTop + 'px',
    height: element.offsetHeight + 'px',
    opacity: element ? '1' : '0',
  }
})
currentDragOverSection.subscribe(({ section, isTop }) => {
  if (!section || !$currentDragSection) return dragOverRect = {}

  const element = document.querySelector(`#section-${section.id}`) as HTMLElement
  let offsetTop = element.offsetTop
  if (!isTop) offsetTop += element.offsetHeight - dragOverPlaceholderHeight
  dragOverRect = {
    top: offsetTop + 'px',
    opacity: '1',
  }
})

function onDuplicate() {
  pageConfig.update(config => {
    const targetIndex = config.sections.findIndex(it => it.id === $currentSection?.id)
    if (targetIndex === -1) return config
    let regularSection = cloneDeep(config.sections[targetIndex])
    regularSection.id = generateId()
    config.sections.splice(targetIndex, 0, regularSection)
    return config
  })
}

function onDelete() {
  pageConfig.update(config => {
    const targetIndex = config.sections.findIndex(it => it.id === $currentSection?.id)
    if (targetIndex === -1) return config
    config.sections.splice(targetIndex, 1)
    borderRect = {}
    return config
  })
}

const dispatch = createEventDispatcher()

async function onDratStart(event: DragEvent) {
  let sectionElement = document.querySelector(`#section-${$currentSection?.id}`)
  if (!sectionElement) return
  const elementTop = sectionElement.getBoundingClientRect().top + document.documentElement.scrollTop
  const elementLeft = sectionElement.getBoundingClientRect().left + document.documentElement.scrollLeft
  const offsetTop = event.pageY - elementTop
  const offsetLeft = event.pageX - elementLeft
  event.dataTransfer.setDragImage(sectionElement, offsetLeft, offsetTop)
  setTimeout(() => {
    dispatch('dragstart', $currentSection)
  })
}

function onDragEnd() {
  dispatch('dragend')
}

</script>

<style lang="scss">
.section-operator {
  position: absolute;
  right: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  opacity: 0;
  transition: all .2s ease-out;
  pointer-events: none;

  .border {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    border: 4px solid #2b87da;
  }

  .section-menu {
    display: flex;
    padding: 12px;
    background-color: #2b87da;
    pointer-events: auto;
    border-radius: 3px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 24px;
      background: transparent;
      border: none;

      &.move {
        cursor: move;
      }
    }
  }

  .add-section {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-bottom: -19px;
    margin-left: -20px;
    padding: 0;
    color: #fff;
    font-size: 30px;
    background-color: #2b87da;
    transition: all .2s;
    pointer-events: auto;
    border: none;
    border-radius: 40px;

    &:hover,
    &:focus {
      transform: scale(1.2, 1.2);
    }
  }
}

.drag-over-placeholder {
  position: absolute;
  right: 0;
  left: 0;
  background-color: rgba(#fff, .2);
  transition: all .2s ease;
}
</style>
