<template>
  <form>
    <div class="help">
        <p>Can you see me</p>
      <slot name="help"></slot>
    </div>
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
    <slot></slot>
  </form>
</template>