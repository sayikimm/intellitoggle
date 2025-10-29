<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style>
/* global layout tweaks can go here */
main { flex: 1 }
</style>
