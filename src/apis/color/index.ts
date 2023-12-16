import Axios_instance from "../../config/axios";
import { IColor } from "../../types";

const url = "/colors";

export const ColorApis = {
    getAll: async () => {
        const response = await Axios_instance.get(url);
        return response?.data || [];
    },
    getById: async (id?: string) => {
        const response = await Axios_instance.get(`${url}/${id}`);
        return response?.data || {};
    },
    createColor: async (color?: IColor) => {
        const response = await Axios_instance.post(url, color);
        return response?.data || {};
    },
    updateColor: async (id?: string, color?: IColor) => {
        const response = await Axios_instance.patch(`${url}/${id}`, color);
        return response?.data || {};
    },
    deleteColor: async (id?: string) => {
        const response = await Axios_instance.delete(`${url}/${id}`);
        return response?.data || {};
    },
};
