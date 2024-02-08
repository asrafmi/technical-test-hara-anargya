import { request } from '../services/request';

export function backendRequest() {
  return request({
    baseURL: import.meta.env.VITE_BACKEND_URL,
  });
}
