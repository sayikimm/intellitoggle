<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md">
      <Card>
        <div class="text-center mb-4">
          <h2 class="text-2xl font-bold">Welcome back</h2>
          <p class="text-sm text-gray-600">Sign in to continue to your dashboard</p>
        </div>

        <form @submit.prevent="submit" class="space-y-4">
          <FormInput label="Email" placeholder="you@company.com" v-model="email" />
          <FormInput label="Password" type="password" placeholder="••••••••" v-model="password" />
          <div class="flex items-center justify-between">
            <label class="flex items-center gap-2 text-sm"><input type="checkbox" class="rounded"/> Remember me</label>
            <NuxtLink to="/" class="text-sm text-blue-600 hover:underline">Forgot password?</NuxtLink>
          </div>
          <div class="mt-2">
            <ButtonPrimary :loading="submitting" :disabled="submitting"> 
              <span v-if="!submitting">Sign in</span>
              <span v-else>Signing in...</span>
            </ButtonPrimary>
          </div>
        </form>
      </Card>
    </div>
  </div>
</template>

<script setup>
import Card from '~/components/Card.vue'
import FormInput from '~/components/FormInput.vue'
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const submitting = ref(false)

function submit() {
  if (!email.value || !password.value) {
    alert('Please fill email and password')
    return
  }
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    alert('Logged in (mock)')
  }, 800)
}
</script>

<style scoped></style>
