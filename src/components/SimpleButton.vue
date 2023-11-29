<template>
    <button>
      <slot></slot>
    </button>
</template>

<style scoped>
  button {
    background-color: transparent;
    color: var(--color-text);
    border: var(--border);
    border-radius: var(--radius);
    min-height: 48px;
    padding: 1rem;
  }
</style>


