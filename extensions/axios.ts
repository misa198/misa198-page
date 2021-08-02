import axios from "axios";

const baseApiUrl = `${
  process.env.APP_DOMAIN || process.env.NEXT_PUBLIC_APP_DOMAIN
}/api`;

export const axiosApi = axios.create({
  baseURL: baseApiUrl,
});
