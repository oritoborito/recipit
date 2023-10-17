<script setup lang="ts">
withDefaults(
    defineProps<{
      label: string
      description: string
      placeholder: string
      value: string
      inputType?: 'text' | 'number'
    }>(),
    {
      inputType: 'text',
    }
)

const inputId = Math.random().toString(36).slice(2)

</script>

<template>
  <div>
    <label :for="inputId">{{ label }}</label>
    <span>{{ description }}</span>
    <input
        :id="inputId"
        :type="inputType"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('update:modelValue', $event)"
    >
  </div>
</template>

<style scoped>
  div {
    display: grid;
    width: fit-content;
  }

  label {
    font-weight: bold;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
  }
  </style>
