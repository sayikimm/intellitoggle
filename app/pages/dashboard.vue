<template>
  <main class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto p-6">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-bold">Dashboard</h1>
          <p class="text-sm text-gray-600">Overview of your workspace and recent activity.</p>
        </div>
        <div>
          <button class="px-3 py-2 bg-white border rounded-md text-sm text-gray-700 hover:shadow">Refresh</button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card v-for="card in cards" :key="card.id" :item="card" />
      </div>

      <section class="mt-8">
        <h2 class="text-lg font-semibold mb-4">Recent activity</h2>
        <div class="bg-white rounded-lg p-4 shadow-sm">
          <p class="text-sm text-gray-600">No activity to show in this demo. In a real project this would list events, alerts and logs.</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import Card from '../../components/Card.vue'
import { useMockData } from '../../composables/useMockData'

const { cards } = useMockData()
</script>

<style scoped></style>
