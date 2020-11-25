import axios from "axios";

const httpClient = axios.create({
  baseURL: "localhost:9090/api",
  responseType: "json",
  headers: { "content-type": "application/json" },
  timeout: 120000,
});

export default httpClient;
