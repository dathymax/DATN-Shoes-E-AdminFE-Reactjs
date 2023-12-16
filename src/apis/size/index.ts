import Axios_instance from "../../config/axios";
import { ISize } from "../../types";

const url = "/sizes";

export const SizeApis = {
    getAll: async () => {
        const response = await Axios_instance.get(url);
        return response?.data || [];
    },
    getById: async (id?: string) => {
        const response = await Axios_instance.get(`${url}/${id}`);
        return response?.data || {};
    },
    createSize: async (size?: ISize) => {
        const response = await Axios_instance.post(url, size);
        return response?.data || {};
    },
    updateSize: async (id?: string, size?: ISize) => {
        const response = await Axios_instance.patch(`${url}/${id}`, size);
        return response?.data || {};
    },
    deleteSize: async (id?: string) => {
        const response = await Axios_instance.delete(`${url}/${id}`);
        return response?.data || {};
    },
};
