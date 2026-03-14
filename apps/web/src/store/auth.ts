import { defineStore } from 'pinia';
import { ref } from 'vue';
import { login as loginApi } from '@aura/sdk';
import type { User, LoginRequest } from '@aura/contracts';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(null);
  const isAuthenticated = ref(false);

  async function login(credentials: LoginRequest) {
    const response = await loginApi(credentials);
    token.value = response.access_token;
    isAuthenticated.value = true;
  }

  function logout() {
    user.value = null;
    token.value = null;
    isAuthenticated.value = false;
  }

  return { user, token, isAuthenticated, login, logout };
});
