import axios from 'axios';
import { BACKEND_URL } from '../constants';

export const api = axios.create({
  baseURL: BACKEND_URL,
  headers: { 'Content-Type': 'application/json' },
});

// TODO: Attach Supabase session token to every request
api.interceptors.request.use((config) => {
  // const session = useAuthStore.getState().session;
  // if (session) config.headers.Authorization = `Bearer ${session.access_token}`;
  return config;
});
