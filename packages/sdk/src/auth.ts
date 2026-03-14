import type { LoginRequest, LoginResponse } from '@aura/contracts';

const API_BASE_URL = process.env.VITE_API_URL ?? 'http://localhost:3000';

export async function login(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error(`Login failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<LoginResponse>;
}
