<template>
    <button>
      <slot></slot>
    </button>
</template>

<style scoped>
  button {
    background-color: transparent;
    color: var(--color-text);
    border: 2px solid var(--color-text);
    border-radius: 2pt;
    min-height: 48px;
    padding: 1rem;
  }
</style>


