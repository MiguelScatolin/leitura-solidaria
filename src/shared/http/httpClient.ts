import axios from "axios";

const httpClient = axios.create({
    baseURL: "https://leitor-yara.rj.r.appspot.com/",
    responseType: "json",
    headers: { "content-type": "application/json" },
    timeout: 120000,
});

export default httpClient;
