import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const submitInquiry = (data) => {
  return api.post("/api/inquiry", data);
};
