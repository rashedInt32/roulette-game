import axios from "axios";

import { config } from "../config";

/**
 * Axios instance
 * @desc Anything change ar add related to api
 * can be handled via this http instance
 */
const http = axios.create({
  baseURL: config.baseUrl,
  timeout: 1000,
  headers: { "Content-Type": "application/json" }
});

export { http };
