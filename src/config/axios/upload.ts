import axios from "axios";

const token = localStorage.getItem("accessToken");

const Axios_upload = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    headers: {
        'Content-Type': 'multipart/form-data'
    },
});

Axios_upload.interceptors.request.use((config) => {
    config.headers["Authorization"] = token;

    return config;
});

export default Axios_upload;
