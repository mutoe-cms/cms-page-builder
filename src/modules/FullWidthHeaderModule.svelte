<template>
  <div class="full-width-header" style={toStyle(module.style)}>
    <div class="full-width-container">
      {#if module.title}
        <h2 {contenteditable} on:blur={e => updateContent('title', e.target.innerHTML)}>{@html module.title}</h2>
      {/if}

      {#if module.subTitle}
        <h3 {contenteditable} on:blur={e => updateContent('subTitle', e.target.innerHTML)}>{@html module.subTitle}</h3>
      {/if}

      {#if module.body}
        <div class="body"
          {contenteditable}
          on:blur={e => updateContent('body', e.target.innerHTML)}>{@html module.body}</div>
      {/if}

      {#if module.button1}
        <Button {...module.button1} {contenteditable} />
      {/if}
      {#if module.button2}
        <Button {...module.button2} {contenteditable} />
      {/if}
    </div>
  </div>
</template>

<script lang="ts">
import { toStyle } from 'src/utils'
import { currentSection } from 'src/stores/pageBuilder'
import Button from '../components/Button.svelte'

export let module: UI.FullWidthHeaderModule
$: contenteditable = $currentSection?.['module'] === module

const updateContent = (prop: keyof Pick<UI.FullWidthHeaderModule, 'title' | 'subTitle' | 'body'>, html: string) => {
  module[prop] = html.replace(/(?:^(\s|<br>)+|(\s|<br>)+$)/g, '')
  currentSection.update(it => it)
}
</script>

<style lang="scss">
.full-width-header {
  color: #fff;
  padding: 64px;

  h2 {
    margin-bottom: 16px;
  }

  .body {
    margin-bottom: 24px;
  }
}
</style>
