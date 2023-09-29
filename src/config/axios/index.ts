import axios from "axios";

const token = localStorage.getItem("accessToken");

const Axios_instance = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    headers: {
        "content-Type": "application/json",
    },
});

Axios_instance.interceptors.request.use((config) => {
    config.headers["Authorization"] = token;

    return config;
});

export default Axios_instance;
