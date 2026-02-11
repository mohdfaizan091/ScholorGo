import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export function submitInquiry(data) {
  return api.post("/api/inquiry", data);
}
