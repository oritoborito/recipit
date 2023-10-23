<script setup lang="ts">
type ComponentType = 'input' | 'textarea' | 'select'

const props = withDefaults(
    defineProps<{
      label: string
      description: string
      value: string | number
      renderAsComponentType?: ComponentType
      placeholder?: string
      inputType?: 'text' | 'number'
      pattern?: string
    }>(),
    {
      inputType: 'text',
      renderAsComponentType: 'input'
    }
)

const inputId = Math.random().toString(36).slice(2)

const isRenderedAsType = (type: ComponentType) => {
  return props.renderAsComponentType === type
}
const getValueIfComponentIsOfType = (type: ComponentType, attribute: string | number | undefined) => {
  return isRenderedAsType(type) ? attribute : undefined
}
</script>

<template>
  <div>
    <label :for="inputId">{{ label }}</label>
    <span>{{ description }}</span>
    <component
        :is="renderAsComponentType"
        :id="inputId"
        :pattern="getValueIfComponentIsOfType('input', pattern)"
        :type="getValueIfComponentIsOfType('input', inputType)"
        :rows="getValueIfComponentIsOfType('textarea',10)"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('update:modelValue', $event)"
    >
      <slot />
    </component>
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

  textarea, input, select {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    font-family: sans-serif;
  }


  </style>
