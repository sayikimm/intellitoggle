<template>
  <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4">
    <template v-if="item">
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-sm font-medium text-gray-700">{{ item.title }}</h3>
          <p class="mt-2 text-2xl font-semibold text-gray-900">{{ item.value }}</p>
        </div>
        <div class="text-right">
          <span :class="deltaClass" class="text-sm font-medium">{{ item.delta }}</span>
        </div>
      </div>
      <p class="mt-3 text-sm text-gray-500">{{ item.description }}</p>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  item: { type: Object, default: null }
})

const deltaClass = computed(() => {
  if (!props.item || !props.item.deltaType) return 'text-gray-500'
  return props.item.deltaType === 'up' ? 'text-green-600' : 'text-red-600'
})
</script>

<style scoped></style>
