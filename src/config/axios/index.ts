import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("USER-AUTH") || localStorage.getItem("USER-AUTH");

const axiosConfig = {
    headers: {
        'content-Type': 'application/json',
        "Accept": "/",
        "Cache-Control": "no-cache",
        "Cookie": document.cookie
    },
    credentials: "same-origin"
};

axios.defaults.withCredentials = true;

const Axios_instance = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    ...axiosConfig
});

Axios_instance.interceptors.request.use(config => {
    config.headers["Authorization"] = token;

    return config;
})

export default Axios_instance;
