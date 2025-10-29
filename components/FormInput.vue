<template>
  <div class="flex flex-col">
    <label v-if="label" :for="id" class="mb-1 text-sm text-gray-700">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      :aria-label="label || placeholder"
    />
  </div>
</template>

<script setup>
const id = `input-${Math.random().toString(36).slice(2, 8)}`
defineProps({
  modelValue: { type: [String, Number], default: '' },
  label: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' }
})
</script>

<style scoped></style>
