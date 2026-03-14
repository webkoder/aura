<template>
  <main>
    <h1>Login</h1>
    <p v-if="error" role="alert">{{ error }}</p>
    <form @submit.prevent="handleLogin">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';

const router = useRouter();
const authStore = useAuthStore();

const username = ref('');
const password = ref('');
const error = ref('');

async function handleLogin() {
  error.value = '';
  try {
    await authStore.login({ username: username.value, password: password.value });
    router.push('/');
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Login failed';
  }
}
</script>
