<template>
  <button
    :disabled="disabled || loading"
    class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-400"
    @click="$emit('click')"
  >
    <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
    <span><slot /></span>
  </button>
</template>

<script setup>
defineProps({
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false }
})
</script>

<style scoped></style>
