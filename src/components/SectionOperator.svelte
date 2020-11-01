<template>
  <div class="section-operator" style={styleToString(borderRect)}>
    <div class="border"></div>

    <div class="section-menu">
      <button class="move">
        <ion-icon name="move-sharp"></ion-icon>
      </button>
      <button class="settings">
        <ion-icon name="settings-sharp"></ion-icon>
      </button>
      <button class="duplicate" on:click={onDuplicate}>
        <ion-icon name="duplicate-sharp"></ion-icon>
      </button>
      <button class="delete" on:click={onDelete}>
        <ion-icon name="trash-sharp"></ion-icon>
      </button>
    </div>

    <button class="add-section">
      <ion-icon name="add-sharp"></ion-icon>
    </button>
  </div>
</template>

<script lang="ts">
import { currentSection } from '../stores/currentSection'
import { cloneDeep, generateId, styleToString } from 'src/utils'
import { pageConfig } from '../stores/pageConfig'

let borderRect: Partial<CSSStyleDeclaration> = {
  left: '0',
  top: '0',
  width: '100%',
  height: '0',
  opacity: '0',
}

let currentSectionValue: UI.Section | null
currentSection.subscribe(section => {
  currentSectionValue = section
  if (!section) return
  const element = document.querySelector(`#section-${section.id}`) as HTMLElement

  borderRect.left = element.offsetLeft + 'px'
  borderRect.top = element.offsetTop + 'px'
  borderRect.width = element.offsetWidth + 'px'
  borderRect.height = element.offsetHeight + 'px'
  borderRect.opacity = element ? '1' : '0'
})

function onDuplicate() {
  pageConfig.update(config => {
    const targetIndex = config.sections.findIndex(it => it.id === currentSectionValue?.id)
    if (targetIndex === -1) return config
    let regularSection = cloneDeep(config.sections[targetIndex])
    regularSection.id = generateId()
    config.sections.splice(targetIndex, 0, regularSection)
    return config
  })
}

function onDelete() {
  pageConfig.update(config => {
    const targetIndex = config.sections.findIndex(it => it.id === currentSectionValue?.id)
    if (targetIndex === -1) return config
    config.sections.splice(targetIndex, 1)
    borderRect = {
      width: '100%',
    }
    return config
  })
}
</script>

<style lang="scss">
.section-operator {
  position: absolute;
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
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    padding: 4px;
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
</style>
