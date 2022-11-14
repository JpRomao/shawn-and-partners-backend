import axios from "axios";

const api = axios.create({
  baseURL: process.env.GITHUB_API,
});

export { api };
