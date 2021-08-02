import axios from "axios";

const baseApiUrl = `${
  process.env.NEXT_PUBLIC_APP_DOMAIN || process.env.APP_DOMAIN
}/api`;

export const axiosApi = axios.create({
  baseURL: baseApiUrl,
});
