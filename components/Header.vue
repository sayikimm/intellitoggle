<template>
  <header class="bg-white border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded flex items-center justify-center text-white font-bold">IT</div>
                  <div class="text-lg font-semibold text-gray-900">IntelliToggle</div>
                </div>

        <nav class="hidden md:flex items-center space-x-6">
          <NuxtLink to="/" class="text-gray-600 hover:text-gray-900 transition">Home</NuxtLink>
          <NuxtLink to="/dashboard" class="text-gray-600 hover:text-gray-900 transition">Dashboard</NuxtLink>
          <NuxtLink to="/login" class="text-gray-600 hover:text-gray-900 transition">Login</NuxtLink>
          <div class="flex items-center border-l pl-4 ml-4">
            <input placeholder="Search" class="hidden md:block px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <div class="ml-4 flex items-center gap-3">
              <div class="text-sm text-gray-700">Hello,</div>
              <div class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-700">JD</div>
            </div>
          </div>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="open = !open" aria-label="Toggle menu" class="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="open" class="md:hidden mt-2 px-2 pb-3 space-y-1">
        <NuxtLink to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Home</NuxtLink>
        <NuxtLink to="/dashboard" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Dashboard</NuxtLink>
        <NuxtLink to="/login" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Login</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
/* small adjustments */
</style>
