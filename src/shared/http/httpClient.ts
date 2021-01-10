import axios from "axios";

const httpClient = axios.create({
	baseURL: "http://35.247.35.37/",
	responseType: "json",
	headers: { "content-type": "application/json" },
	timeout: 120000,
});

export default httpClient;
