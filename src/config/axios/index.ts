import axios from "axios";

const token = localStorage.getItem("accessToken");

const Axios_instance = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    headers: {
        "content-Type": "application/json",
    },
});

Axios_instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            const { url } = error.response?.config;
            if (error.response.status === 403 && url !== "/auth") {
                window.location.href = "/error/403";
            } else if (error.response.status === 401 && url !== "/auth") {
                window.location.href = "/auth";
                localStorage.clear();
            }
        }

        return Promise.reject(error);
    }
);

Axios_instance.interceptors.request.use((config) => {
    config.headers["Authorization"] = token;

    return config;
});

export default Axios_instance;
