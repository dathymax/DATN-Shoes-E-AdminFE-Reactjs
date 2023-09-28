import axios from "axios";

const Axios_instance = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    headers: {
        'content-Type': 'application/json',
    },
});

Axios_instance.interceptors.request.use(config => {
    return config;
})

export default Axios_instance;
